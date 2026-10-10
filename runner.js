// CodeCheck Python runner. Runs code in a disposable worker so timed-out code can be stopped.
importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js");

let pyodideReady = false;
let pyodide;

async function initialize() {
  if (pyodideReady) return;
  pyodide = await loadPyodide();
  pyodide.setStdout({ batched: (text) => postMessage({ type: "stdout", text }) });
  pyodide.setStderr({ batched: (text) => postMessage({ type: "stderr", text }) });
  pyodideReady = true;
  postMessage({ type: "ready" });
}

self.onmessage = async (event) => {
  const data = event.data || {};
  if (data.type === "init") {
    try {
      await initialize();
    } catch (error) {
      postMessage({ type: "fatal", text: String(error) });
    }
    return;
  }

  if (data.type === "run") {
    try {
      await initialize();
      postMessage({ type: "run-start" });
      await pyodide.runPythonAsync(data.code || "");
      postMessage({ type: "run-done" });
    } catch (error) {
      postMessage({ type: "run-error", text: String(error) });
    }
  }
};