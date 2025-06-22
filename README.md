# Network-Checker
A simple web app that checks and displays your internet connection status (Online/Offline) along with the network type (like 4G or WiFi). It updates in real time when your network status changes using the Network Information API and browser events.

# 🌐 Network Checker

**Network Checker** is a simple and lightweight web application that detects your internet connection status in real-time and displays the current network type (like 4G, 5G, or WiFi) using the **Navigator API** and **Network Information API**.

---

## 🚀 Features

- ✅ Detects **online/offline** status in real time
- 📡 Displays current **network type** (4g, 5g, etc.)
- 🔄 Updates automatically when the network changes
- 🧠 Uses browser-native JavaScript APIs (`navigator.onLine`, `navigator.connection`)
- 💡 Works without any external libraries

---

## 📷 Demo

![Network Checker Demo Screenshot](screenshot.png)

> 📌 Tip: You can simulate network changes using browser dev tools (Chrome → DevTools → Network tab → Offline mode).

---

## 🛠️ How It Works

- Uses `navigator.onLine` to check if the user is currently connected.
- Uses `navigator.connection.effectiveType` to detect the type of network.
- Listens to `online` and `offline` events to update the UI in real time.
- When offline, network type is shown as `"Unknown"` to avoid incorrect values.

---



