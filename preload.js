const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    // future features go here
});
