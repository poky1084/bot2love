imagedir = document.getElementById("imagedata").dataset.active;

firstTheme = `:root {
    --shadow-color: 3, 190, 252; /* Change these RGB values */
    --shadow-opacity: 0.3;
    --border-opacity: 0.5;
}

.window-container {
    width: 80%;
    max-width: 800px;
    height: 500px;
    background-color: rgba(59, 58, 57, 0.98);
    border-radius: 20px;
    overflow: hidden;
    position: fixed;
    margin: 20px auto;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', monospace;
    justify-content: center;
    align-items: center;
	box-shadow: 0 0 30px rgba(var(--shadow-color), var(--shadow-opacity));
    border: 1px solid rgba(var(--shadow-color), var(--border-opacity))
}

.minimized-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(59, 58, 57, 0.91);
    z-index: 10000;
    font-family: 'Courier New', monospace;
    display: none;
    align-items: center;
    padding: 0 20px;
	box-shadow: 0 4px 25px rgba(255, 255, 255, 0.4); /* White shadow */
    border-bottom: 2px solid rgba(255, 255, 255, 0.6); /* White border */
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    font-weight: bold;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.header-center {
    display: flex;
    align-items: center;
    gap: 35px;
    font-weight: bold;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.url-bar {
    background: rgba(59, 58, 57, 0.91);
    border: 1px solid rgba(196, 193, 192, 0.4);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    min-width: 180px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(196, 193, 192, 0.2);
}

.url-bar::before {
    content: "🌐 ";
    margin-right: 6px;
    font-size: 10px;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #c4c1c0;
    animation: blink 1s infinite;
    box-shadow: 0 0 8px #c4c1c0;
}

.header-data {
    font-weight: bold;
    text-shadow: var(--text-shadow);
}

.window-header {
    background-color: rgba(59, 58, 57, 0.91);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(196, 193, 192, 0.3);
    cursor: move;
    user-select: none;
}

.window-title {
    font-size: 18px;
    font-weight: bold;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.window-tabs {
    font-family: 'Courier New', monospace;
    display: flex;
    background-color: rgba(59, 58, 57, 0.91);
    border-bottom: 1px solid rgba(196, 193, 192, 0.2);
    padding: 0 6px;
    cursor: move;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.tabs-container {
    display: flex;
    flex: 1;
    cursor: move;
}

.window-controls {
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding: 0 10px;
    cursor: default;
}

.control-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
}

.close { background-color: #ff5f56; }
.minimize { background-color: #ffbd2e; }
.maximize { background-color: #27c93f; }

.tab {
    padding: 5px 16px;
    color: rgba(196, 193, 192, 0.7);
    text-shadow: var(--text-shadow);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    user-select: none;
}

.tab:hover {
    background-color: rgba(196, 193, 192, 0.1);
    color: #c4c1c0;
}

.tab.active {
    color: #c4c1c0;
    border-bottom: 2px solid #c4c1c0;
    background-color: rgba(196, 193, 192, 0.05);
}

.tab-content {
    display: none;
    height: calc(100% - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

#logContent {
    flex: 1;
    overflow-y: auto;
}

.tab-content::-webkit-scrollbar {
    display: none;
}

.tab-content.active {
    display: flex;
    flex-direction: column;
}

.matrix-container {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100% - 90px);
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
}

.matrix-column {
    position: absolute;
    top: 0;
    width: 20px;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    animation: fall linear infinite;
    user-select: none;
}

@keyframes fall {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100%); }
}

.status-bar {
    position: absolute;
    bottom: 3px;
    width: 100%;
    background-color: rgba(59, 58, 57, 0.91);
    padding: 5px 15px;
    font-size: 14px;
    border-top: 1px solid rgba(196, 193, 192, 0.3);
    display: flex;
    justify-content: space-between;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    cursor: move;
    user-select: none;
    height: 20px;
}

.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50%     { opacity: 0.5; }
}

.terminal-content {
    padding: 13px 15px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    flex: 1;
    overflow-y: auto;
    cursor: pointer;
    user-select: text;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    cursor: text;
    user-select: text;
}

.chart-container {
    background: rgba(91, 90, 89, 0.2);
    border: 1px solid rgba(196, 193, 192, 0.2);
    border-radius: 10px;
    height: 150px;
    margin: 10px 20px;
    cursor: default;
    user-select: none;
    position: relative;
}

#chartContainer {
    width: 100%;
    height: 100%;
    cursor: default;
    user-select: none;
}

.command-line, .output, .prompt, .command {
    user-select: text;
    cursor: text;
}

.command-line {
    margin-bottom: 10px;
}

.output {
    margin-bottom: 5px;
    line-height: 1.4;
}

.prompt {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-weight: bold;
}

.command {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

::selection {
    background: rgba(196, 193, 192, 0.3);
    color: #c4c1c0;
}

::-moz-selection {
    background: rgba(196, 193, 192, 0.3);
    color: #c4c1c0;
}

body.header-visible {
    padding-top: 50px;
    transition: padding-top 0.3s ease;
}

.code-content {
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    background: rgba(59, 58, 57, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(196, 193, 192, 0.2);
    height: 100%;
    overflow-y: auto;
    margin: 10px;
}

.log-content {
    font-family: 'Courier New', monospace;
    background: rgba(59, 58, 57, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(196, 193, 192, 0.2);
    flex: 1;
    overflow-y: auto;
    margin: 10px;
    margin-bottom: 0;
}

.log-entry {
    margin-bottom: 1px;
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(196, 193, 192, 0.1);
}

.log-time {
    color: rgba(196, 193, 192, 0.6);
    text-shadow: var(--text-shadow);
    font-size: 12px;
    margin-right: 10px;
}

.log-message {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.console-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.console-input-container {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background: transparent;
    border-top: 1px solid rgba(196, 193, 192, 0.2);
    margin-top: auto;
    width: 100%;
    box-sizing: border-box;
}

.console-prompt {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 10px;
}

.console-input {
    background: transparent;
    border: none;
    outline: none;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    flex: 1;
    caret-color: #c4c1c0;
    width: 100%;
}

.prompt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.prompt-text {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    margin-right: 8px;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
}

.instructions {
    margin-top: 15px;
    font-size: 12px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

#consoleInput {
    width: 100%;
    padding: 12px 15px;
    font-size: 14px;
    background: rgba(196, 193, 192, 0.1);
    border: 1px solid rgba(196, 193, 192, 0.3);
    border-radius: 4px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

#consoleInput:focus {
    border-color: #c4c1c0;
    background: rgba(196, 193, 192, 0.15);
    box-shadow: 0 0 10px rgba(196, 193, 192, 0.3);
}

.cursor {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 20px;
    background-color: #c4c1c0;
    opacity: 0;
    transition: opacity 0.2s;
}

.blinking {
    animation: blink 1s infinite;
}

.tab-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.code-js {
    position: relative;
    height: 100%;
    width: 100%;
}

.CodeMirror {
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 8px;
    font-size: 14px;
    height: 97% !important;
    width: 100% !important;
}

.CodeMirror-scroll {
    min-height: 97% !important;
}

.CodeMirror-gutters {
    background: rgba(255, 255, 255, 0.1) !important;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.CodeMirror-linenumber {
    color: rgba(255, 255, 255, 0.5) !important;
}

.CodeMirror-cursor {
    border-left: 1px solid #ffffff !important;
}

.cm-keyword { color: #ff9d9d !important; }
.cm-atom { color: #ff9d9d !important; }
.cm-number { color: #ffcc66 !important; }
.cm-def { color: #9cdcfe !important; }
.cm-variable { color: #9cdcfe !important; }
.cm-variable-2 { color: #9cdcfe !important; }
.cm-property { color: #9cdcfe !important; }
.cm-operator { color: #ff9d9d !important; }
.cm-comment { color: #6a9955 !important; }
.cm-string { color: #ce9178 !important; }
.cm-string-2 { color: #ce9178 !important; }
.cm-meta { color: #9cdcfe !important; }
.cm-builtin { color: #ff9d9d !important; }
.cm-tag { color: #569cd6 !important; }
.cm-attribute { color: #9cdcfe !important; }
.cm-header { color: #ff9d9d !important; }
.cm-hr { color: #ff9d9d !important; }
.cm-link { color: #569cd6 !important; }

.command-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.top-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    justify-content: flex-end;
    font-family: 'Courier New', monospace;
}

.number-container {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding: 0 20px;
    font-family: 'Courier New', monospace;
}

.number {
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px;
    padding: 0;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
    transition: transform 0.3s ease;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.win {
    color: #06d614;
}

.loss {
    color: #c4c1c0;
}

.separator {
    color: rgba(196, 193, 192, 0.3);
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.new-number {
    animation: slideInFromRight 0.3s ease forwards;
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slider-wrap {
    padding: 10px;
    background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
}

#chanceSlider {
    width: 100%;
    margin: 0;
}

input[type=range] {
    width: 90%;
    height: 11px;
    border-radius: 6px;
    appearance: none;
    background: background: linear-gradient(90deg, #c4c1c0 0%, #c4c1c0 50%, #5c5b5a 50%, #5c5b5a 100%);
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

.target {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.target .value {
    font-weight: 700;
    font-size: 20px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.result-bubble {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    transition: left .35s cubic-bezier(.2,.9,.2,1),background .2s;
	background: #c4c1c0; /* Changed from #0ea5e9 */
    color: #fff;
}

.result-bubble.win {
    background: #c4c1c0;
}

.result-bubble.lose {
    background: #3b3a39;
}

.roller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid rgba(196, 193, 192, 0.14);
}

.jumping {
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.digits {
    display: flex;
    gap: 6px;
}

.digit {
    width: 72px;
    height: 96px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.meta {
    display: flex;
    gap: 10px;
    align-items: center;
}

.payout {
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    border-radius: 8px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.status-buttons {
    display: flex;
    gap: 1px;
    align-items: center;
    top: -6px;
}

.status-btn {
    background: none;
    border: none;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 2px 8px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    color: #fff;
    background: rgba(196, 193, 192, 0.1);
    border-radius: 3px;
}

.status-btn:active {
    transform: translateY(1px);
}

.status-bar > .status-buttons {
    transform: translateY(-6px);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 8px 10px;
    background: rgba(59, 58, 57, 0.91);
    border: 1px solid rgba(196, 193, 192, 0.2);
    border-width: 0 0 1px 1px;
    min-height: 40px;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

.stat-row:nth-child(odd) {
    border-left-width: 1px;
}

.stat-row:nth-last-child(-n+2) {
    border-bottom-width: 1px;
}

.stat-label {
    color: rgba(196, 193, 192, 0.8);
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-size: 17px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
}

.stat-value {
    font-weight: bold;
    font-size: 17px;
    text-shadow: var(--text-shadow);
    text-align: right;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    min-width: 150px;
    color: #c4c1c0;
}

.stat-value.positive {
    color: #05e836;
    text-shadow: 0 0 5px rgba(196, 193, 192, 0.7);
}

.stat-value.negative {
    color: #ff3333;
    text-shadow: 0 0 5px rgba(255, 51, 51, 0.7);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-row {
        border-width: 0 1px 1px 1px;
    }
    
    .stat-row:first-child {
        border-top-width: 1px;
    }
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
}

.transparent-bg-element {
}

.transparent-bg-element::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('chrome-extension://${imagedir}/img/background.png');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
}

* {
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.skip-btn {
    margin-left: 15px;
    font-size: 40px;
    background: rgba(196, 193, 192, 0.1);
    border: 1px solid rgba(196, 193, 192, 0.3);
    border-radius: 6px;
    color: #c4c1c0;
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.2s ease;
}

.skip-btn:hover:not(:disabled) {
    background: rgba(196, 193, 192, 0.2);
    transform: scale(1.1);
}

.skip-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}
`

const matrixWrapper = document.createElement("div");
matrixWrapper.innerHTML = `
<style>
${firstTheme}
</style>

<!-- Main Terminal Window -->
<div class="window-container" id="terminalWindow">
    <div class="window-tabs" id="windowTabs">
        <div class="tabs-container">
            <div class="tab active" data-tab="console">Status</div>
            <div class="tab" data-tab="log" id="logTabClick">Console</div>
            <div class="tab" data-tab="code">Code</div>
            <div class="tab" data-tab="stat">Stats</div>
        </div>
        <div class="window-controls">
            <div class="control-btn close" id="closeBtn"></div>
            <div class="control-btn minimize" id="minimizeBtn"></div>
            <div class="control-btn maximize" id="maximizeBtn"></div>
        </div>
    </div>

    <div class="matrix-container" id="matrixContainer"></div>

    <!-- Tab Contents -->
    <div class="tab-content active" id="consoleTab">
        <div class="console-content">
            <div class="command-history" id="commandHistory">
                <div class="top-bar">
                    <div class="number-container" id="numberContainer">
                        <!-- Numbers will be generated by JavaScript -->
                    </div>
                </div>
                <div class="roller">
                    <div class="jumping" id="jumpingArea">
                        <div class="digits" id="digitsContainer">
                            <div class="digit">0</div>
                            <div class="digit">0</div>
                            <div class="digit">.</div>
                            <div class="digit">0</div>
                            <div class="digit">0</div>
                        </div>
                    </div>
                    <div style="height:12px"></div>
                    <div class="meta">
                        <div class="payout">Chance: <strong id="chanceMeta">50.00%</strong></div>
                        <div class="payout">Payout: <strong id="payoutMeta">2.00x</strong></div>
                        <div class="payout">Result: <strong id="resultMeta">-</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="slider-wrap" id="sliderWrap">
                <div class="target"></div>
                <input type="range" id="chanceSlider" min="0" max="100" value="50.00" step="0.01">
                <div id="resultBubble" class="result-bubble">50.00</div>
            </div>
        </div>
    </div>

    <div class="tab-content" id="codeTab">
        <div class="code-js">
            <textarea id="jscode"></textarea>
        </div>
    </div>
    
    <div class="tab-content" id="logTab">
        <div class="console-content">
            <div class="log-content" id="logContent">
                <!-- Log entries will appear here -->
            </div>
            <div class="console-input-container">
                <div class="console-prompt">user@bot:~$</div>
                <div class="input-container">
                    <input type="text" id="consoleInput" placeholder="Type commands here...">
                    <div class="cursor" id="cursor"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="tab-content" id="statTab">
        <div class="console-content">
            <div class="chart-container">
                <div id="chartContainer"></div>
            </div>
            <div class="stat-history" id="statHistory">
                <div class="stats-grid">
                    <div class="stat-row"><span class="stat-label">Time:</span><span class="stat-value" id="statTime">0:0:0:0</span></div>
                    <div class="stat-row"><span class="stat-label">Balance:</span><span class="stat-value" id="statBalance">0</span></div>
                    <div class="stat-row"><span class="stat-label">Wagered:</span><span class="stat-value" id="statWagered">(0.00x) 0.00000000</span></div>
                    <div class="stat-row"><span class="stat-label">Profit:</span><span class="stat-value" id="statProfit">(0.00%) 0.00000000</span></div>
                    <div class="stat-row"><span class="stat-label">HighBet:</span><span class="stat-value" id="statHighBet">0.00000000</span></div>
                    <div class="stat-row"><span class="stat-label">HighLose:</span><span class="stat-value" id="statHighLose">0.00000000</span></div>
                    <div class="stat-row"><span class="stat-label">HighProfit:</span><span class="stat-value" id="statHighProfit">0.00000000</span></div>
                    <div class="stat-row"><span class="stat-label">High/Low-Streak:</span><span class="stat-value" id="statStreak">0 / 0</span></div>
                    <div class="stat-row"><span class="stat-label">Bets:</span><span class="stat-value" id="statBets">0</span></div>
                    <div class="stat-row"><span class="stat-label">Wins:</span><span class="stat-value" id="statWins">0</span></div>
                    <div class="stat-row"><span class="stat-label">Losses:</span><span class="stat-value" id="statLosses">0</span></div>
                    <div class="stat-row"><span class="stat-label">CurrentStreak:</span><span class="stat-value" id="statCurrentStreak">0</span></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="status-bar" id="statusBar">
        <div class="status-buttons">
            <button class="status-btn" id="startBtn">/start</button>
            <button class="status-btn" id="stopBtn">/stop</button>
            <button class="status-btn" id="resetSeedBtn">/resetseed</button>
            <button class="status-btn" id="resetStatsBtn">/resetstats</button>
			<button class="status-btn" id="themeBtn">/theme</button>
        </div>
        <div class="status-indicator">
            <div class="status-dot"></div>
        </div>
    </div>
</div>

<!-- Minimized Header Bar -->
<div class="minimized-header" id="minimizedHeader">
    <div class="header-content">
        <div class="header-left">
            <div class="status-indicator">
                <div class="status-dot"></div>
                <span class="header-data">BOT ACTIVE</span>
            </div>
        </div>
        <div class="header-center">
            <div class="header-data">BETS: <span id="header-bet-count">0</span></div>
            <div class="header-data">STATUS: <span id="header-profit-status" style="color:#c4c1c0">NEUTRAL</span></div>
        </div>
        <div class="header-right">
            <div class="control-btn maximize" id="headerRestoreBtn" style="width: 12px; height: 12px;"></div>
        </div>
    </div>
</div>
`;

// Insert at very top of document
document.body.prepend(matrixWrapper);

// ... rest of your JavaScript code remains the same (all the JS logic below) ...

var tokenapi = getCookie("session");
var currency = "trx";
var target_multi = 1.01;
var basebet = 0;
var amount = basebet;
var running = false;
var nextbet = 0;
var win = false;
let bet = null;
let action = "stand";
let nextactions = "BLACKJACK_STAND"
let stopcolor = "#c4c1c0"
let startcolor = "gray"
var bethigh = false;
var chance = 49.5
var game = "dice";

var losestreak = 0;
var winstreak  = 0;
var highest_streak = [0];
var lowest_streak = [0];
var current_balance = 0;
var balance = 0;
var betcount = 0;
var bets = 0
var wins = 0;
var losses = 0;
var wagered = 0;
var profit_total = 0;
var highest_profit = [0];
var lowest_profit = [0];
var highest_bet = [0];
var currentstreak = 0;
var profit = 0;
var previousbet = 0;
var currentprofit = 0;
var current_profit = 0;
let betamount = {player: 0,banker: 0,tie: 0};

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0, 'name': null}

var dps = []
var chart = ''
var color = "red"

var started_bal = 0;
let dark = false;
//var condition = "below";

serverSeed = "";
clientSeed = "";
nonce = 0;
simrunning = false;
balance_sim = 0;
target_sim = 0;
condition_sim = "above";
bet_sim = 0

var chartcolor = "#000"
//let opensocket = []

let target1 = 2
let target2 = 24
let target3 = 34
let target4 = 68
let condition = "rollBetweenTwo"

var sendDate = (new Date()).getTime();
var errorgame = false
//var sleep = 0
var htmlEditor = ''
var htmlEditor2 = ''
var fastmode = false;
var startMS = performance.now()
let mines = 1
let fields = [1,2,3]
let risk = "low"
let difficulty = "easy"
let tiles = [2]
let numbers = [0,1,2,3,4,5,6,7,8]
let rows = 8
let segments = 10
let chips = [{"value":"colorBlack", "amount":0.0001}]
let banker = 0
let player = 0
let tie = 0
let eggs = [0]
let pumps = 1
let lines = 1
let guesses = 1
let rolls = 1
let target = 1.01
let samuraiskip = false
let spinType = "complete"
let guessed = "skip"
let hiloguess = null
let cards = []
let startcard = {}
let pattern = []
let patternlist = []
let HILO_BET_EQUAL = 2
let HILO_SKIP = 7
let HILO_BET_HIGH = 5
let HILO_BET_LOW = 4
let HILO_CASHOUT = 3
let currentBet = null
let cashout_done = false
let ms = 0
let sleeptime = 0
let timeoutClear = null
var timeouts = [];
var measures = [];
var socketstart = [];
let steps = 1

var stoponwin = false;
var stopped = true;
var bet_found = false;
var run_clicked = false;
var bet_placed = false;
var starting_done = false;
var cashedoutauto = false;
var bet_has_been_made = false;
var dobet_run = false;
var crash_bet_placed = false;
var slide_bet_placed = false;
var crash_game_ran = false;
var slide_game_ran = false;
var make_slide_bet = false;
dobet = function(){}
var gamelist = {}
var makecount = 0
var id = {}
var betidentifier = "identity01"
var betlist = []
var finished_round = false
var mirror = "stake1067.com"



const BLACKJACK_STAND = "stand";
const BLACKJACK_HIT = "hit";
const BLACKJACK_DOUBLE = "double";
const BLACKJACK_SPLIT = "split";
const BLACKJACK_INSURANCE = "insurance";
const BLACKJACK_NOINSURANCE = "noInsurance";
// ... rest of your JavaScript code remains the same ...

const terminalWindow = document.getElementById('terminalWindow');
const windowHeader = document.getElementById('windowTabs');
const statusBar = document.getElementById('statusBar');
const matrixContainer = document.getElementById('matrixContainer');
const closeBtn = document.getElementById('closeBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const maximizeBtn = document.getElementById('maximizeBtn');
const minimizedHeader = document.getElementById('minimizedHeader');
const headerRestoreBtn = document.getElementById('headerRestoreBtn');
const headerBetCount = document.getElementById('header-bet-count');
const headerProfitStatus = document.getElementById('header-profit-status');

// Console elements
const consoleInput = document.getElementById('consoleInput');
//const inputCursor = document.getElementById('inputCursor');
//const commandHistory = document.getElementById('commandDone');
const logContent = document.getElementById('logContent');

// Tab elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const timeStart =  document.getElementById('startTime');

// Command history and functions
const commandHistoryList = [];
let historyIndex = -1;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}


addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css', () => {})
const cursor = document.getElementById('cursor');

var htmlEditor2 = ''

// Initialize variables with default values
let isDragging = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;

// Function to refresh CodeMirror editor
function refreshCodeMirror() {
    if (htmlEditor2) {
        setTimeout(() => {
            htmlEditor2.refresh();
            // Force a re-measurement of the editor
            htmlEditor2.setSize(null, htmlEditor2.getWrapperElement().clientHeight);
        }, 10);
    }
}
initializeCodeMirror()
// Initialize CodeMirror after DOM is ready
function initializeCodeMirror() {
    htmlEditor2 = CodeMirror.fromTextArea(document.getElementById("jscode"), {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'darcula',
        lineWrapping: true,
        scrollbarStyle: 'null'
    });

    htmlEditor2.on("change", function (e) {
        localStorage.setItem("jscode", e.getValue());
    });

if(localStorage.getItem("jscode") != null){
	htmlEditor2.setValue(localStorage.getItem("jscode"));
} else {
	htmlEditor2.setValue(`
game = "dice" // available games: "limbo", "hilo", "keno", "mines", "baccarat"
chance=49.5
bethigh=true
nextbet=0.00000000
basebet=nextbet
currency = "usdc"

betamount = {player: 0.003,banker: 0.001,tie: 0}; // baccarat betsize
startcard = {"rank":"A","suit":"H"} // hilo card
index= 0
pattern = [5,5,5]

dobet = function() {
  if (win) {
    nextbet=basebet
  } else {
    nextbet=previousbet*1
  }
  index = 0
}

function round(){
  currentCardRank = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
  payoutMultiplier = currentBet.state.rounds.at(-1)?.payoutMultiplier || 0;
  skippedCards = currentBet.state.rounds.filter(round => round.guess === 'skip').length;	
	
    if(index < pattern.length){
	 guessing = pattern[index]
    } else {
         return HILO_CASHOUT;
    }
    index++ 
	
    if (currentCardRank === "A" && guessing === 4) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "J" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "Q" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "K" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (parseInt(currentCardRank) <= 10 && parseInt(currentCardRank) >= 7 && guessing === 4) {
        return HILO_BET_HIGH;
    } 
 
    if (parseInt(currentCardRank) < 7 && guessing === 4) {
        return HILO_BET_LOW;
    } 
   	 if (currentCardRank === "A" && guessing === 5) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "J" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "Q" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "K" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (parseInt(currentCardRank) <= 10 && parseInt(currentCardRank) >= 7 && guessing === 5) {
        return HILO_BET_LOW;
    } 

    if (parseInt(currentCardRank) < 7 && guessing === 5) {
        return HILO_BET_HIGH;
    } 
	
    if(guessing === 2){
        return HILO_BET_EQUAL
    }

    return HILO_SKIP;
}

`);
	localStorage.setItem("jscode", htmlEditor2.getValue());
}

    // Add scroll event listener to refresh editor on scroll
    const codeTab = document.getElementById('codeTab');
    codeTab.addEventListener('scroll', refreshCodeMirror);
    
    // Also refresh on window resize
    window.addEventListener('resize', refreshCodeMirror);
}

// Call initialization after a short delay to ensure DOM is ready


// Add blinking class when input is focused
consoleInput.addEventListener('focus', () => {
	cursor.classList.add('blinking');
	cursor.classList.add('focused');
});

// Remove blinking class when input loses focus
consoleInput.addEventListener('blur', () => {
	cursor.classList.remove('blinking');
	cursor.classList.remove('focused');
	
});

document.getElementById('logTabClick').addEventListener('click', () => 
    setTimeout(() => document.getElementById('consoleInput')?.focus(), 10)
);

// Update cursor position as user types
consoleInput.addEventListener('input', updateCursorPosition);
consoleInput.addEventListener('click', updateCursorPosition);
consoleInput.addEventListener('keyup', updateCursorPosition);

function updateCursorPosition() {
	// Create a temporary span to measure text width
	const tempSpan = document.createElement('span');
	tempSpan.style.visibility = 'hidden';
	tempSpan.style.position = 'absolute';
	tempSpan.style.whiteSpace = 'pre';
	tempSpan.style.font = window.getComputedStyle(consoleInput).font;
	tempSpan.textContent = consoleInput.value.substring(0, consoleInput.selectionStart);
	
	document.body.appendChild(tempSpan);
	const textWidth = tempSpan.getBoundingClientRect().width;
	document.body.removeChild(tempSpan);
	
	// Position cursor at the end of the text
	cursor.style.left = (15 + textWidth) + 'px';
}

// Initialize cursor position
updateCursorPosition();

// Available JavaScript functions that can be executed
const availableFunctions = {
    'help': () => {
        return `Available commands:
- help: Show this help message
- clear: Clear the console
- status: Show system status
- time: Show current time
- log [message]: Add a message to the log
- reset: Reset the chart
- bet [amount]: Simulate a bet`;
    },
    'clear': () => {
        logContent.innerHTML = '';
        return '';
    },
    'status': () => {
        return `System Status:
Bets processed: ${betcount}
Current profit: ${profit_total}
Chart points: ${dps.length}`;
    },
    'time': () => {
        return `Current time: ${new Date().toLocaleTimeString()}`;
    },
    'reset': () => {
        resetChart();
        return 'Chart has been reset';
    },
    'start': () => {
		let message = "Bot start"
		!running ? message = "Bot start" : message = "already running"
		!running ? start() : message = "already running"
          
        return '';
    },
	'stop': () => {
        stop();
        return '';
    },
    'bet': (amount = '1') => {
        const betAmount = parseFloat(amount) || 1;
        betcount += 1;
        profit_total = generateRandomProfit(config.profitRange.min, config.profitRange.max) / 1000000;
		updateChart();
        return `Bet placed: $${betAmount}. New total: ${profit_total}`;
    },
	 'game': (gamer = 'dice') => {
        const currentgame = gamer || 'dice';
		changegame(currentgame)
		return ''
    }
};

function changegame(gamer) {
    // Get references to the elements
    const sliderWrap = document.getElementById('sliderWrap');
    const rollerElement = document.querySelector('.roller');
    const hiloSection = document.querySelector('.hilo-section');
    const kenoSection = document.querySelector('.keno-section');
    const jumpingArea = document.getElementById('jumpingArea');
    const chanceMeta = document.getElementById('chanceMeta');
    const payoutMeta = document.getElementById('payoutMeta');
    const resultMeta = document.getElementById('resultMeta');
    const metaDiv = document.querySelector('.meta');
	const minesSection = document.querySelector('.mines-section');
	const topbar = document.querySelector('.top-bar');
	const baccaratSection = document.querySelector('.baccarat-section');
    const blackjackSection = document.querySelector('.blackjack-section');
	
    if (gamer === "dice") {
        // Show dice elements
		if (topbar) topbar.style.display = 'flex';
        if (rollerElement) rollerElement.style.display = 'flex';
        if (sliderWrap) sliderWrap.style.display = 'flex';
        // Hide HILO and Keno sections
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        game = 'dice';
    } else if (gamer === "limbo") {
		if (topbar) topbar.style.display = 'flex';
        if (rollerElement) rollerElement.style.display = 'flex';
        if (sliderWrap) sliderWrap.style.display = 'none';
        // Hide HILO and Keno sections
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        game = 'limbo';
    } else if (gamer === "hilo") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show HILO section
        if (hiloSection) hiloSection.style.display = 'block';
        
        game = 'hilo';
    } else if (gamer === "keno") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show Keno section
        if (kenoSection) kenoSection.style.display = 'block';
        
        game = 'keno';
    } else if (gamer === "mines") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show Keno section
        if (minesSection) minesSection.style.display = 'block';
        
        game = 'mines';
    } else if (gamer === "baccarat") {
        if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (minesSection) minesSection.style.display = 'none';
        // Show Baccarat section
        if (baccaratSection) baccaratSection.style.display = 'block';
		document.querySelector('.baccarat-bet-info').style.display = 'none';
		document.querySelector('.result-display').style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
		
        game = 'baccarat';
    } else if (gamer === "blackjack"){
		
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (minesSection) minesSection.style.display = 'none';
        // Show Baccarat section
        if (baccaratSection) baccaratSection.style.display = 'none';
		
		 if (blackjackSection) blackjackSection.style.display = 'block';
		 document.querySelector('.bet-info-item1').style.display = 'none';
		 document.querySelector('.bet-info-item2').style.display = 'none';
		 document.querySelector('.bet-info-label3').style.display = 'none';
		 document.querySelector('.blackjack-bet-info').style.display = 'none';
		 
		
		}
		
	}
	
	



// Log function - adds messages to the Log tab
/*function log(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
        <span class="log-time">[${timestamp}]</span>
        <span class="log-message">${message}</span>
    `;
    logContent.appendChild(logEntry);
    logContent.scrollTop = logContent.scrollHeight;
}*/

function log(...args) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement("div");
    logEntry.className = "log-entry";

    let html = `<span class="log-time">[${timestamp}]</span> `;

    // If first argument contains %c, we treat it like console.log
    if (typeof args[0] === "string" && args[0].includes("%c")) {

        let text = args[0];
        let styles = args.slice(1);

        // Split by %c markers
        let segments = text.split("%c");

        html += segments
            .map((segment, i) => {
                if (i === 0) return `<span>${segment}</span>`;
                const style = styles[i - 1] || "";
                return `<span style="${style}">${segment}</span>`;
            })
            .join("");

    } else {
        // Normal mode: print all arguments separated by spaces
        const msg = args
            .map(a => typeof a === "object"
                ? String(a)
                : String(a)
            )
            .join(" ");

        html += `<span class="log-message">${msg}</span>`;
    }

    logEntry.innerHTML = html;
    logContent.appendChild(logEntry);
    logContent.scrollTop = logContent.scrollHeight;
}



// Enhanced log function that also works from console commands
function handleLogCommand(args) {
    if (args.length === 0) {
        return 'Usage: log [message] - Add a message to the log';
    }
    const message = args.join(' ');
    //log(message);
    return `Message logged: "${message}"`;
}

// Add log to available functions
//availableFunctions['log'] = handleLogCommand;

// Execute command function
function executeCommand(input) {
    if (!input.trim()) return '';
    
    // Add to command history
    commandHistoryList.unshift(input);
    historyIndex = -1;
    
    // Parse command and arguments
    const parts = input.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    // Display the command in history
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `<span class="prompt">user@bot:~$ </span><span class="command">${input}</span>`;
    //commandHistory.appendChild(commandLine);
    
    // Execute the command
    let output = '';
    if (availableFunctions[command]) {
        try {
            output = availableFunctions[command](...args);
        } catch (error) {
            output = `Error executing command: ${error.message}`;
        }
    } else {
        // Try to evaluate as JavaScript
        try {
            const result = eval(input);
            output = String(result);
        } catch (error) {
            output = `Command not found: ${command}. Type 'help' for available commands.`;
        }
    }
    
    // Display output
    if (output) {
        const outputLine = document.createElement('div');
        outputLine.className = 'output';
        outputLine.textContent = output;
        //commandHistory.appendChild(outputLine);
    }
    
    // Auto-log commands
    //log(`Command executed: ${input}`);
	//output !== "undefined" && output !== "" ? log(`${output}`) : output;
    
    // Scroll to bottom
   //commandHistory.scrollTop = commandHistory.scrollHeight;
    
    return output;
}

// Console input event handlers
consoleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = consoleInput.value.trim();
        if (command) {
            executeCommand(command);
            consoleInput.value = '';
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistoryList.length - 1) {
            historyIndex++;
            consoleInput.value = commandHistoryList[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            consoleInput.value = commandHistoryList[historyIndex];
        } else if (historyIndex === 0) {
            historyIndex = -1;
            consoleInput.value = '';
        }
    }
});


// Auto-focus input when console tab is clicked
document.querySelector('[data-tab="console"]').addEventListener('click', () => {
    setTimeout(() => consoleInput.focus(), 100);
});

// Tab switching functionality
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(`${tabId}Tab`).classList.add('active');
        
        // Refresh CodeMirror when switching to code tab
        if (tabId === 'code') {
            refreshCodeMirror();
        }

        // Focus input when switching to console tab
        if (tabId === 'console') {
            setTimeout(() => consoleInput.focus(), 100);
        }
    });
});

// Chart functionality
var betcount = 0;
var profit_total = 0;
var dps = [];
var chart = '';
var color = "red";
var chwidth = terminalWindow.offsetWidth-45;

// Dragging functionality - INSTANT MOVEMENT (for both header and status bar)
windowHeader.addEventListener("mousedown", dragStart);
statusBar.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

function dragStart(e) {
    // Allow dragging from window tabs area (but not from control buttons)
    const isControlButton = e.target.classList.contains('control-btn') || 
                           e.target.parentElement.classList.contains('window-controls');
    
    // Allow dragging from tabs container, individual tabs, or the window-tabs area itself
    const isDraggableArea = e.target.classList.contains('window-tabs') || 
                           e.target.classList.contains('tabs-container') ||
                           e.target.classList.contains('tab') ||
                           e.target === windowHeader || e.target === statusBar;
    
    if (isDraggableArea && !isControlButton) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        isDragging = true;
        terminalWindow.style.cursor = 'grabbing';
        terminalWindow.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.8)';
        // Remove any transitions during drag
        terminalWindow.style.transition = 'none';
        
        // Prevent text selection during drag
        e.preventDefault();
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        // Calculate new position directly
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        // Update offsets immediately
        xOffset = currentX;
        yOffset = currentY;

        // Apply position instantly without any transition
        setTranslate(currentX, currentY, terminalWindow);
    }
}

function setTranslate(xPos, yPos, el) {
    // Use direct left/top positioning for instant response
    el.style.left = xPos + 'px';
    el.style.top = yPos + 'px';
    el.style.transform = 'none'; // Remove transform for direct positioning
}

function dragEnd(e) {
    if (isDragging) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        terminalWindow.style.cursor = 'default';
        terminalWindow.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.4)'; 
    }
}

function centerWindow() {
      const windowRect = terminalWindow.getBoundingClientRect();
    
    // Calculate center position
    const centerX = (window.innerWidth - windowRect.width) / 2;
    const centerY = (window.innerHeight - windowRect.height) / 2;
    
    // Set position directly
    terminalWindow.style.left = centerX + 'px';
    terminalWindow.style.top = centerY + 'px';
    terminalWindow.style.transform = 'none';
    
    // Update drag offsets
    xOffset = centerX;
    yOffset = centerY;
}

// Matrix effect with 30% transparency
function initializeMatrixEffect() {
    matrixContainer.innerHTML = '';
    const containerWidth = matrixContainer.offsetWidth;
    const containerHeight = matrixContainer.offsetHeight;
    const columnWidth = 20;
    const numColumns = Math.floor(containerWidth / columnWidth);
    
    // Create Matrix columns
    for (let i = 0; i < numColumns; i++) {
        createMatrixColumn(i * columnWidth);
    }
}

function createMatrixColumn(leftPosition) {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.left = `${leftPosition}px`;
    
    // Random animation speed and delay
    const duration = 3 + Math.random() * 5;
    const delay = Math.random() * 10;
    column.style.animationDuration = `${duration}s`;
    column.style.animationDelay = `${delay}s`;
    
    // Generate random characters for this column
    let content = '';
    const numChars = Math.floor(matrixContainer.offsetHeight / 20) + 10;
    
    for (let i = 0; i < numChars; i++) {
        // Use a mix of numbers and characters
        const charType = Math.random();
        if (charType < 0.7) {
            // Numbers
            content += Math.floor(Math.random() * 10);
        } else {
            // Letters
            content += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        content += '<br>';
    }
    
    column.innerHTML = content;
    matrixContainer.appendChild(column);
}

// Function to push down website content
function pushDownContent(pushDown) {
    if (pushDown) {
        document.body.classList.add('header-visible');
    } else {
        document.body.classList.remove('header-visible');
    }
}

// Minimize functionality - Show header bar at top
minimizeBtn.addEventListener('click', function() {
    // Hide main terminal window
    terminalWindow.style.display = 'none';
    
    // Show minimized header bar
    minimizedHeader.style.display = 'flex';
    
    // Push down website content
    pushDownContent(true);
});

closeBtn.addEventListener('click', function() {
    // Hide main terminal window
    terminalWindow.style.display = 'none';
    
    // Show minimized header bar
    minimizedHeader.style.display = 'flex';
    
    // Push down website content
    pushDownContent(true);
});

// Restore functionality - Show main window and hide header
headerRestoreBtn.addEventListener('click', function() {
    // Hide minimized header bar
    minimizedHeader.style.display = 'none';
    
    // Show main terminal window
    terminalWindow.style.display = 'block';
    
    // Remove padding from website content
    pushDownContent(false);
    
    // Refresh CodeMirror after restoring
    refreshCodeMirror();
});

maximizeBtn.addEventListener('click', function() {
    // Remove transitions for instant resize
    terminalWindow.style.transition = 'none';
    
    if (terminalWindow.style.width === '95%') {
        terminalWindow.style.width = '80%';
        terminalWindow.style.height = '500px';
        terminalWindow.style.maxWidth = '800px';
    } else {
        terminalWindow.style.width = '95%';
        terminalWindow.style.height = '95%';
        terminalWindow.style.maxWidth = 'none';
    }
    // Reinitialize Matrix effect after resize
    centerWindow();
    
    setTimeout(initializeMatrixEffect, 50);
    
    chwidth = terminalWindow.offsetWidth-45
   chart.options.width = chwidth;
    // Update chart after resize
    setTimeout(() => {
        if (chart && typeof chart.render === 'function') {
            chart.render();
        }
    }, 100);
    
    // Refresh CodeMirror after maximize
    refreshCodeMirror();
});

// Handle window resize
window.addEventListener('resize', function() {
    initializeMatrixEffect();
    if (chart && typeof chart.render === 'function') {
        setTimeout(() => chart.render(), 100);
    }
    
    // Update body padding if header is visible
    if (minimizedHeader.style.display === 'flex') {
        pushDownContent(true);
    }
    
    // Refresh CodeMirror on window resize
    refreshCodeMirror();
});

function drawChart() {
    dps = [{ x: betcount, y: profit_total }];
    chart = new CanvasJS.Chart('chartContainer', {
        backgroundColor: "transparent", // Fully transparent
        theme: 'dark2',
        animationEnabled: false,
        interactivityEnabled: false,
        width: chwidth,
        height: 150,
        title: {
            text: ""
        },
        axisX: {
            labelFontColor: '#0f0',
            lineColor: 'transparent',
            tickColor: 'transparent',
            gridThickness: 0,
            labelFontSize: 1,
            margin: 0,
            labelFormatter: function(e) {
                if (e.value % 10 === 0 || e.value === 1) {
                    return e.value;
                }
                return "";
            }
        },
        axisY: {
            labelFontColor: '#0f0',
            lineColor: 'transparent',
            tickColor: 'transparent',
            gridThickness: 0,
            labelFontSize: 10,
            margin: 0,
            includeZero: true,
            labelFormatter: function(e) {
                if (e.value === 0) {
                    return "0";
                }
                return "";
            },
            stripLines: [{
                value: 0,
                thickness: 2,
                color: '#ffffff',
                opacity: 0.7
            }]
        },
        data: [{
            type: 'line',
            markerSize: 0,
            lineThickness: 2,
            dataPoints: dps
        }]
    });
    chart.render();
}

function updateChart() {
    dps.push({
        x: betcount,
        y: profit_total,
        color: color
    });
    if (dps[dps.length - 2]) dps[dps.length - 2].lineColor = color;
    if (dps.length > 50) dps.shift();
    chart.render();
    
    // Update both console and header displays
    //document.getElementById('bet-count-small').textContent = betcount;
    //document.getElementById('profit-status-small').textContent = 
        //profit_total > 0 ? 'PROFIT' : profit_total < 0 ? 'LOSS' : 'NEUTRAL';
    //document.getElementById('profit-status-small').style.color = 
        //profit_total > 0 ? '#0f0' : profit_total < 0 ? '#ff5f56' : '#ffbd2e';
    
    // Update header bar
    headerBetCount.textContent = betcount;
    headerProfitStatus.textContent = profit_total > 0 ? 'PROFIT' : profit_total < 0 ? 'LOSS' : 'NEUTRAL';
    headerProfitStatus.style.color = profit_total > 0 ? '#0f0' : profit_total < 0 ? '#ff5f56' : '#ffbd2e';
}

function resetChart() {
    betcount = 0;
    profit_total = 0;
    return drawChart();
}

const textInput = document.getElementById('consoleInput');
      

// Initialize chart
//drawChart();
//resetChart();

// Simulate data updates
const config = {
    profitRange: { min: -5, max: 5 }
};

function generateRandomProfit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
setInterval(function () {
    betcount += 1;
    profit_total = generateRandomProfit(config.profitRange.min, config.profitRange.max) / 1000000;
    
    if (profit_total > 0) color = 'green';
    if (profit_total < 0) color = 'red';
    
    updateChart();
}, 200);
*/
centerWindow();

// Initialize Matrix effect with 30% transparency
initializeMatrixEffect();

// Initialize chart
drawChart();
resetChart();

log("Loaded successfully");
// Focus the input on load
setTimeout(() => consoleInput.focus(), 1000);

const numberContainer = document.getElementById('numberContainer');
        let autoAddInterval = null;
        let previousNumberElement = null;
        
        function generateRandomNumber() {
            // Generate a random number between 0.01 and 99.99
            return (Math.random() * 99.98 + 0.01).toFixed(2);
        }
        
        function addNewNumber(numberValue, win1) {
            // If there's a previous number, move it left
            if (previousNumberElement) {
                moveNumberLeft(previousNumberElement);
            }
            
            // Create number element
            const number = document.createElement('span');
            number.className = 'number new-number';
            number.textContent = numberValue.toFixed(2);
            
            // Randomly assign win or loss status
            const win = win1
            number.classList.add(win ? 'win' : 'loss');
            
            // Add separator if there are existing numbers
            if (numberContainer.children.length > 0) {
                const separator = document.createElement('span');
                separator.className = 'separator';
                separator.textContent = '|';
                numberContainer.appendChild(separator);
            }
            
            // Add the new number
            numberContainer.appendChild(number);
            
            // Update previous number reference
            previousNumberElement = number;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                number.classList.remove('new-number');
            }, 300);
            
            // Remove old numbers if container gets too wide
            if (numberContainer.scrollWidth > window.innerWidth * 2) {
                removeOldNumbers();
            }
        }
        
        function moveNumberLeft(numberElement) {
            // Move the previous number slightly to the left
            numberElement.style.transform = 'translateX(-10px)';
            
            // Also move its separator if it has one
            const index = Array.from(numberContainer.children).indexOf(numberElement);
            if (index > 0) {
                const separator = numberContainer.children[index - 1];
                if (separator.classList.contains('separator')) {
                    separator.style.transform = 'translateX(-10px)';
                }
            }
        }
        
        function removeOldNumbers() {
            // Remove elements from the left until container is reasonable size
            while (numberContainer.scrollWidth > window.innerWidth * 1.5 && numberContainer.children.length > 4) {
                numberContainer.removeChild(numberContainer.children[0]);
                numberContainer.removeChild(numberContainer.children[0]);
            }
        }
        
        function startAutoAdd() {
            if (!autoAddInterval) {
                autoAddInterval = setInterval(() => {
                    addNewNumber(generateRandomNumber());
                }, 1000);
            }
        }
        
        function stopAutoAdd() {
            if (autoAddInterval) {
                clearInterval(autoAddInterval);
                autoAddInterval = null;
            }
        }
        
        function clearNumbers() {
            numberContainer.innerHTML = '';
            previousNumberElement = null;
        }
        
        // Add initial numbers
        //startAutoAdd();
		
		const chanceSlider = document.getElementById('chanceSlider');
		 const resultBubble = document.getElementById('resultBubble');
		 const sliderWrap = document.getElementById('sliderWrap');
		   const digitsContainer = document.getElementById('digitsContainer');
		   
    const jumpingArea = document.getElementById('jumpingArea');
    const chanceMeta = document.getElementById('chanceMeta');
    const payoutMeta = document.getElementById('payoutMeta');
    const resultMeta = document.getElementById('resultMeta');
		   
		 let side = 'below';
		 let isSliderInteracted = false;
		  let lastResult = null;
		 
		 function updateUI(){
      const t = parseFloat(lastBet.target);
     
      //const chance = computeChance(t);
      
      
      // Update slider appearance based on interaction and side
      updateSliderAppearance();
      
      // position bubble over the slider according to current slider value
      //animateBubble(t);
    }
	
	
	
	function updateSliderAppearance() {
    const slider = document.getElementById('chanceSlider');
    const value = parseFloat(slider.value);
    
    if (!isSliderInteracted) {
        // Default state - show full area based on selected side
        if (side === 'below') {
            // Roll Low: #c4c1c0 from left to slider position
            slider.style.background = `linear-gradient(90deg,#c4c1c0 0%,#c4c1c0 ${value}%,#5c5b5a ${value}%,#5c5b5a 100%)`;
        } else {
            // Roll High: #c4c1c0 from slider position to right
            slider.style.background = `linear-gradient(90deg,#5c5b5a 0%,#5c5b5a ${value}%,#c4c1c0 ${value}%,#c4c1c0 100%)`;
        }
    } else {
        // After interaction - show proper win/lose areas based on selected side
        if (side === 'below') {
            // Roll Low: #c4c1c0 on the left side (lower numbers)
            slider.style.background = `linear-gradient(90deg,#c4c1c0 0%,#c4c1c0 ${value}%,#5c5b5a ${value}%,#5c5b5a 100%)`;
        } else {
            // Roll High: #c4c1c0 on the right side (higher numbers)
            slider.style.background = `linear-gradient(90deg,#5c5b5a 0%,#5c5b5a ${value}%,#c4c1c0 ${value}%,#c4c1c0 100%)`;
        }
    }
}
	
	chanceSlider.addEventListener('input', () => {
      isSliderInteracted = true;
      updateUI();
    });
    
    // Track slider interaction
    chanceSlider.addEventListener('mousedown', () => {
      isSliderInteracted = true;
    });
    
    chanceSlider.addEventListener('touchstart', () => {
      isSliderInteracted = true;
    });

    updateUI();
	
 

function setSliderValue(newValue) {
    const slider = document.getElementById('chanceSlider');
    
    // Convert to number and round to 2 decimals
    const numericValue = parseFloat(newValue);
    const roundedValue = Math.round((numericValue + Number.EPSILON) * 100) / 100;
    
    // Ensure within min/max bounds
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const clampedValue = Math.min(Math.max(roundedValue, min), max);
    
    // Set the slider value (it will handle rounding based on step)
    slider.value = clampedValue.toFixed(2);
    
    
    // Trigger events
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    slider.dispatchEvent(new Event('change', { bubbles: true }));
}
	

function animateBubble(val, isWin = null){
      const bubble = document.getElementById('resultBubble');
      const slider = document.getElementById('chanceSlider');

      const sliderWidth = slider.offsetWidth;
      const newPct = val / 100;
      const newPos = newPct * sliderWidth;

      // Read previous left using computed style so we keep last position
      const computed = window.getComputedStyle(bubble).left;
      const prevLeft = computed ? parseFloat(computed) : newPos;

      // Show decimal value in bubble
      bubble.textContent = val.toFixed(2);

      // Set bubble color based on win/lose state
      if (isWin === true) {
        bubble.classList.remove('lose');
        bubble.classList.add('win');
      } else if (isWin === false) {
        bubble.classList.remove('win');
        bubble.classList.add('lose');
      } else {
        // Reset to default color when no result
        bubble.classList.remove('win', 'lose');
      }

      // Animate horizontal move and keep final position
      bubble.animate([
        { left: prevLeft + 'px' },
        { left: newPos + 'px' }
      ],{
        duration: 200,
        easing: 'ease-out'
      });

      bubble.style.left = newPos + 'px';
    }
	
	function rollOnce(target111, result1, win1){
	
		const resultPercent = result1
      // Compute win condition using slider value (0..100)
      const targetPercent = target111
 

      lastResult = result1

      // Animate digits and bubble
	  addNewNumber(lastResult, win1);
      animateJump(lastResult);
     animateBubble(resultPercent, win1)

	side = bethigh ? 'above' : 'below';
    setSliderValue(targetPercent)
    updateSliderAppearance();
     
    }


 function animateJump(finalNumber){
    // finalNumber is between 0.01 and 99.99
    const formatted = finalNumber.toFixed(2);
    const digits = formatted.split('');
    const boxes = digitsContainer.children;

    for(let i=0; i<boxes.length; i++){
        const box = boxes[i];
        if(digits[i] === '.') {
            box.textContent = '.';
        } else {
            box.textContent = digits[i];
        }
        // Remove any transform applied during animation
        box.style.transition = '';
        box.style.transform = '';
    }
}

function initBubble(){
      const slider = document.getElementById('chanceSlider');
      const bubble = document.getElementById('resultBubble');
      const pct = parseFloat(slider.value)/100;
      const rect = slider.getBoundingClientRect();
      const wrapRect = sliderWrap.getBoundingClientRect();
      const pos = Math.round(pct * rect.width) + (rect.left - wrapRect.left);
      bubble.style.left = pos + 'px';
    }
	
	initBubble();


    // Helper: crypto-strong random number between 0 (inclusive) and 1 (exclusive)


    function computePayout(chance) {
      // simplified house edge 1%
      const houseEdge = 0.01;
      const payout = (100 / (chance || 1)) * (1 - houseEdge);
      return payout;
    }



function getRandomHiLoStartCard() {
  const suits = ['H', 'D', 'C', 'S'];
  const ranks = [
    { name: 'A', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'J', value: 11 },
    { name: 'Q', value: 12 },
    { name: 'K', value: 13 }
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  return {
    card: `${randomRank.name} of ${randomSuit}`,
    rank: randomRank.name,
    suit: randomSuit,
    value: randomRank.value
  };
}

// Example usage:
const startCard = getRandomHiLoStartCard();
console.log(`Your starting card is: ${startCard.card}`);
console.log(`Value: ${startCard.value}`);
console.log(`Now guess if the next card will be Higher or Lower!`);

// To get just the card string:
//console.log(getRandomHiLoStartCard().card);

function randomString(length) {
	var chars = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function resetseed(client = randomString(10)) {
    const body = {
        operationName: "RotateSeedPair",
        variables: { seed: client },
        query: `mutation RotateSeedPair($seed: String!) {
            rotateSeedPair(seed: $seed) {
                clientSeed {
                    user {
                        id
                        activeClientSeed { id seed __typename }
                        activeServerSeed { id nonce seedHash nextSeedHash __typename }
                        __typename
                    }
                    __typename
                }
                __typename
            }
        }`
    };
    
    makeRequest(body, outseed);
}

function outseed(json) {
    if (json?.errors) {
        log(json.errors[0].errorType);
		log(json.errors[0].message);
    } else {
        log("Seed has been reset.");
    }
}

function activeBet(){
	var body = {}
	
	fetch('https://' + mirror + '/_api/casino/active-bet/hilo', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbet(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
									
		}, "2000");
	});
}

function outbet(json){
	 if (json.user.activeCasinoBet != null) {
			feedCard(
				{rank: json.user.activeCasinoBet.state.startCard.rank, suit: json.user.activeCasinoBet.state.startCard.suit},
				1,
				json.user.activeCasinoBet.state.rounds.at(1)?.guess,
				json.user.activeCasinoBet.state.rounds.at(1)?.payoutMultiplier > 0.98 ? "win" : "lose",
				json.user.activeCasinoBet.state.rounds.at(1)?.payoutMultiplier
			);
			for (var i = 0; i < json.user.activeCasinoBet.state.rounds.length; i++)
			{
				feedCard(
					{rank: json.user.activeCasinoBet.state.rounds[i].card.rank, suit: json.user.activeCasinoBet.state.rounds[i].card.suit},
					i+2,
					json.user.activeCasinoBet.state.rounds[i].guess,
					json.user.activeCasinoBet.state.rounds[i].payoutMultiplier > 0.98 ? "win" : "lose",
					json.user.activeCasinoBet.state.rounds[i].payoutMultiplier
				);
			}
			
			currentBet = json.user.activeCasinoBet;
	}	
}

function activeBetMines(){
	var body = {}
	
	fetch('https://' + mirror + '/_api/casino/active-bet/mines', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbetmine(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
									
		}, "2000");
	});
}

function outbetmine(json){
	 if (json.user.activeCasinoBet != null) {
			updateMinesUIFromResponse(json);  
	}	
}


async function makeRequest(body, callback) {
    try {
        const res = await fetch(`https://${mirror}/_api/graphql`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': tokenapi 
            },
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const json = await res.json();
        callback(json);
    } catch (err) {
        console.error('Request failed:', err);
        if (running) setTimeout(() => {}, 2000);
    }
}

function userBalances(newbal){

var body = {
		operationName:"UserBalances",
		variables:{},
		query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbals(json, newbal))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outbals(json, newbal){

	balance = 0
	current_balance = 0
	var balan1 = document.getElementById("statBalance");
	balan1.innerHTML = balance.toFixed(8);
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		if (json.data.user.balances[i].available.currency == currency)
		{
			current_balance = json.data.user.balances[i].available.amount;
			balance = current_balance;
			var balan = document.getElementById("statBalance");
			balan.innerHTML = balance.toFixed(8);

		}
	}
	if(newbal){
		started_bal = balance;
	}
	//document.getElementById("botMenuCoin").options[indexMatchingText(localStorage.getItem("currenc"))].selected = 'selected';
}
function betRequest({ url, body, retryParams = [], retryDelay = 1000 }) {
    fetch(`https://${mirror}/${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': tokenapi
        }
    })
    .then(res => res.json())
    .then(json => data(json))
    .catch(() => {
        if (running) {
            setTimeout(() => {
                if (running) {
                    betRequest({ url, body, retryParams, retryDelay });
                }
            }, retryDelay);
        }
    });
}

function blackjackBet(betsize) {
    betRequest({
        url: '_api/casino/blackjack/bet',
        body: { identifier: randomString(21), currency, amount: betsize },
        retryParams: [betsize]
    });
}

function blackjackNext(nextaction) {
    betRequest({
        url: '_api/casino/blackjack/next',
        body: { action: nextaction, identifier: randomString(21) },
        retryParams: [nextaction]
    });
}

function minesStart(betsize, mines) {
    betRequest({
        url: '_api/casino/mines/bet',
        body: { amount: betsize, currency, minesCount: mines },
        retryParams: [betsize, fields, mines]
    });
}

function minesNext(fields) {
    betRequest({
        url: '_api/casino/mines/next',
        body: { fields },
        retryParams: [fields]
    });
}

function minesCashout() {
    betRequest({
        url: '_api/casino/mines/cashout',
        body: {identifier: randomString(21)},
        retryParams: []
    });
}

function baccaratbet(tie, player, banker) {
    betRequest({
        url: '_api/casino/baccarat/bet',
        body: { currency, identifier: randomString(21), tie, player, banker },
        retryParams: [tie, player, banker]
    });
}

function minesbet(betsize, fields, mines) {
    betRequest({
        url: '_api/casino/mines/bet',
        body: { amount: betsize, currency, identifier: randomString(21), minesCount: mines, fields },
        retryParams: [betsize, fields, mines]
    });
}

function kenobet(betsize, selected, risk) {
    betRequest({
        url: '_api/casino/keno/bet',
        body: { amount: betsize, currency, identifier: randomString(21), risk, numbers: selected },
        retryParams: [betsize, selected, risk]
    });
}

function LimboBet(amount, target_multi) {
    betRequest({
        url: '_api/casino/limbo/bet',
        body: { multiplierTarget: target_multi, identifier: randomString(21), amount, currency },
        retryDelay: 2000,
        retryParams: [amount, target_multi]
    });
}

function DiceBet(amount, chance, bethigh) {
    let target, cond;

    if (bethigh) {
        target = 100 - chance;
        cond = "above";
    } else {
        target = chance;
        cond = "below";
    }

    const url = '_api/casino/dice/roll';
    const body =  {
        target, condition: cond, identifier: randomString(21), amount, currency
    };

    betRequest({
        url,
        body,
        retryDelay: 2000,
        retryParams: [amount, chance, bethigh]
    });
}


function hiloBet(betsize, startcard) {
	resetCards();
    betRequest({
        url: '_api/casino/hilo/bet',
        body: { identifier: randomString(21), currency, amount: betsize, startCard: startcard },
        retryParams: [betsize, startcard]
    });
}

function hiloNext(guessed) {
    betRequest({
        url: '_api/casino/hilo/next',
        body: { guess: guessed },
        retryParams: [guessed]
    });
}

function hiloCash() {
    betRequest({
        url: '_api/casino/hilo/cashout',
        body: { identifier: randomString(21) }
    });
}

function handleLossRoundCard(betData) {
    // For loss rounds, we need to get the last round that was actually played
    const rounds = betData.state?.rounds || [];
    const lastRound = rounds.length > 0 ? rounds[rounds.length - 1] : null;
    
    if (lastRound) {
        // This is a normal loss
        feedCard(
            lastRound.card,
            rounds.length + 1,
            lastRound.guess,
            'lose', // Always lose for loss rounds
            lastRound.payoutMultiplier
        );
    } else {
        // No rounds played - immediate loss on first card
        // Use the start card
        feedCard(
            betData.state?.startCard || startcard,
            1,
            null,
            'lose',
            0
        );
    }
    
    // Update game status to show loss
    const gameStatus = document.getElementById('gameStatus');
    gameStatus.textContent = 'LOSE';
    gameStatus.style.color = '#ff4757';
}

startcard = {rank:"A", suit: "C"}

function data(json){

		if(json.errors != null){
			if(!json.errors[0].errorType.includes("parallelCasinoBet")){
			log(json.errors[0].errorType + ". " +json.errors[0].message )
			errorgame = true
			}
			if(json.errors[0].errorType.includes("existingGame")){
				if(game==="hilo"){
					activeBet();
				}
				if(game==="mines"){
					activeBetMines()
				}
				
				
				hiloguess = round()
				nextactions = round()
				if(nextactions === "BLACKJACK_STAND"){
					action = "stand"
				} 
				if(nextactions === "BLACKJACK_SPLIT"){
					action = "split"
				} 
				if(nextactions === "BLACKJACK_HIT"){
					action = "hit"
				} 
				if(nextactions === "BLACKJACK_DOUBLE"){
					action = "double"
				} 	
				if(nextactions === "BLACKJACK_NOINSURANCE"){
					action = "noInsurance"
				} 
				if(nextactions === "BLACKJACK_INSURANCE"){
					action = "insurance"
				} 					
			}
			cashout_done = false
			if(json.errors[0].errorType.includes("notFound")){
				cashout_done = true		
			}
			if(json.errors[0].errorType.includes("insignificantBet") && game === "hilo"){
				cashout_done = true
			}
			if(json.errors[0].errorType.includes("insignificantBet") && game === "blackjack"){
				cashout_done = true
			} 
			//return;
		} else {
		errorgame = false
		//var table = document.getElementById("botHistory");
		var row = document.createElement("tr");
		
		var tdbets = document.createElement("td");
		var tdamount = document.createElement("td");
		var tdhigh = document.createElement("td");
		var tdTargetChance = document.createElement("td");
		var tdRollChance= document.createElement("td");
		var tdProfit = document.createElement("td");
		var tdPayout = document.createElement("td");
		var tdTargetNumber = document.createElement("td");
		var tdRollNumber = document.createElement("td");
		var tdNonce = document.createElement("td");
		var tdBetID = document.createElement("td");
		
		var tdcheck = document.createElement("input");
		tdcheck.type = "checkbox";
		tdcheck.name = "checked";
		tdcheck.checked = bethigh;
		tdcheck.id = "checked";
		tdhigh.appendChild(tdcheck);
		
		if(!json.hasOwnProperty("data")){
			if(!json.hasOwnProperty("hiloNext") && !json.hasOwnProperty("hiloCashout"))
			{
				//updatePerformanceMetrics()
			}
		} else {
			//updatePerformanceMetrics()
		}
		
		    const chanceMeta = document.getElementById('chanceMeta');
			const payoutMeta = document.getElementById('payoutMeta');
			const resultMeta = document.getElementById('resultMeta');
		
		const gameType = Object.keys(json)[0] === "data" ? Object.keys(json.data)[0] : Object.keys(json)[0]
		bet = Object.keys(json)[0] === "data" ? json.data[gameType] : json[gameType]
		
	
		if(json.data){
		if (gameType === "flipBet") {
            lastBet.Roll = bet.state.currentRound;
            lastBet.target = guesses.length;
            lastBet.targetNumber = guesses.length;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
		}
		}
		
		if (json && !json.data) {
		if (gameType === "blackjackBet"){
			
			//running = false
			updateBlackjackUI(json);
            if (bet.active) {
                // Active game continues
                cashout_done = false;
                currentBet = bet;
                
            } else {
                // Game ended
                cashout_done = true;
                lastBet.Roll = bet.payoutMultiplier;
                lastBet.target = 0;
             
                lastBet.targetNumber = "";
                
                // UI Updates
                tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
                tdTargetNumber.innerHTML = null;
                tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
                tdRollChance.innerHTML = null;
            }
			
        }    
        if (gameType === "blackjackNext"){
			stopBlinking();
			//running = false
			updateBlackjackUI(json);
            if (bet.active) {
				
                // Active game continues
                cashout_done = false;
                currentBet = bet;
				
                
            } else {
                // Game ended
                cashout_done = true;
                lastBet.Roll = bet.payoutMultiplier;
                lastBet.target = 0;
             
                lastBet.targetNumber = "";
                
                // UI Updates
                tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
                tdTargetNumber.innerHTML = null;
                tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
                tdRollChance.innerHTML = null;
            }
			
			
            
        }  
		 if (gameType === "baccaratBet"){
			  clearBaccaratBet() ;
              displayBaccaratResult(json);
            
            // Process bet results similar to other games
            lastBet = {
                name: bet.user.name,
                amount: bet.amount,
                payoutMultiplier: bet.payoutMultiplier,
                payout: bet.payout,
                Roll: bet.state.winner, // Baccarat doesn't have a roll
                win: bet.payoutMultiplier >= 1
            };
            
            
		} 
			
		if (gameType === "minesBet" && bet.active){
			running = false
			
			completeGameReset();
            updateMinesUIFromResponse(json);
		}	
		if (gameType === "minesNext"){
			
			running = false
            updateMinesUIFromResponse(json);
		}
		if (gameType === "minesCashout"){
			
			running = false
            updateMinesUIFromResponse(json);
		}		
		if (gameType === "minesBet"){
			completeGameReset();
            lastBet.Roll = bet.state.mines;
            const rounds = bet.state.rounds;
            const minefield = bet.state.mines;
            const str_field = rounds.map(round => round.field);
            
            const hitmines = str_field.filter(n => minefield.includes(n));
            
            lastBet.target = str_field.length;
            lastBet.targetNumber = `${minefield.length}|${str_field.length}`;
            
            //feedMinesResult(str_field,bet.state.mines, mines, bet.payoutMultiplier)
			updateMinesUIFromResponse(json);  
		}
		  if (gameType === "kenoBet"){
            lastBet.Roll = bet.state.drawnNumbers;
            const kenofield = bet.state.selectedNumbers;
            const hitkeno = kenofield.filter(n => bet.state.drawnNumbers.includes(n));
            lastBet.target = kenofield.length;
            lastBet.targetNumber = `${bet.state.risk}|${kenofield.length}`;
            lastBet.hitCount = hitkeno.length;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.hitCount + "x";
			
			feedableKenoResult(
				bet.state.selectedNumbers,  // Should be 0-39
				bet.state.drawnNumbers,     // Should be 0-39
				bet.state.risk,
				bet.payoutMultiplier
			);
			
			kenoGameActive = false;
			document.getElementById('kenoPlayBtn').disabled = false;
			document.getElementById('kenoClearBtn').disabled = false;
			document.getElementById('kenoAutoBtn').disabled = false;
            //break;
        }   
		if (gameType === "limboBet"){
            lastBet.Roll = bet.state.result;
            lastBet.chance = 99 / bet.state.multiplierTarget;
            lastBet.target = bet.state.multiplierTarget;
            lastBet.targetNumber = bet.state.multiplierTarget;
            
            // UI Updates
            tdTargetChance.innerHTML = lastBet.chance.toFixed(4);
            tdRollChance.innerHTML = (99 / bet.state.result).toFixed(4);
            tdTargetNumber.innerHTML = ">" + bet.state.multiplierTarget.toFixed(4);
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
            //break;
			
			chanceMeta.textContent = (99 / bet.state.multiplierTarget).toFixed(2) + '%';
			payoutMeta.textContent = bet.state.multiplierTarget.toFixed(2) + 'x';
		}
		if (gameType === "diceRoll"){
            lastBet.Roll = bet.state.result;
            lastBet.chance = bet.state.condition === "below" 
                ? bet.state.target 
                : 100 - bet.state.target;
            lastBet.target = bet.state.target;
            lastBet.targetNumber = 99 / lastBet.chance;
            
            // UI Updates
            tdTargetChance.innerHTML = lastBet.chance.toFixed(4);
            tdRollChance.innerHTML = bet.state.condition === "below" 
                ? bet.state.result.toFixed(4) 
                : (100 - bet.state.result).toFixed(4);
            tdTargetNumber.innerHTML = (bet.state.condition === "below" ? "<" : ">") + lastBet.targetNumber.toFixed(4);
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
			
			chanceMeta.textContent = chance.toFixed(2) + '%';
			payoutMeta.textContent = computePayout(chance).toFixed(2) + 'x';
            //break;
		}
		if (gameType === "hiloBet"){
            // Just set current bet for hiloBet (active game)
            currentBet = bet;
			//console.log(currentBet, hiloguess)
			
			const lastCard11 = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
                    
			if ([2, 4, 5, 7].includes(hiloguess)) {
				const guesses = {
					2: 'equal',
					7: 'skip',
					5: {
						A: 'higher',
						K: 'equal',
						Q: 'higherEqual',
						J: 'higherEqual',
						default: 'higherEqual'
					},
					4: {
						A: 'equal',
						K: 'lower',
						Q: 'lowerEqual',
						J: 'lowerEqual',
						default: 'lowerEqual'
					}
				};
				
				let guessed;
				if (hiloguess === 5 || hiloguess === 4) {
					guessed = guesses[hiloguess][lastCard11] || guesses[hiloguess].default;
				} else {
					guessed = guesses[hiloguess];
				}
			}
			
			 if (bet.payoutMultiplier < 1) {
				// Immediate loss on first card
				handleLossRoundCard(bet);
			} else {
				// Normal start
				//const lastCard11 = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
				
				// (Rest of your existing code for handling guesses)
				feedCard(startcard, 1, guessed, 1, 1)
			}
			
			
			
        }    
        if (gameType === "hiloNext"){
			if (bet.active) {
				// Active game continues
				cashout_done = false;
				currentBet = bet;
				
				const lastRound = currentBet.state.rounds.at(-1);
				if (lastRound) {
					const resultlast = lastRound.payoutMultiplier >= 0.98 ? 'win' : 'lose';
					feedCard(
						lastRound.card,
						currentBet.state.rounds.length + 1,
						lastRound.guess,
						resultlast,
						lastRound.payoutMultiplier
					);
				}
				
			} else {
				// Game ended (loss)
				cashout_done = true;
				lastBet.Roll = bet.payoutMultiplier;
				lastBet.target = 0;
				
				// Process cards
				const cards = [];
				cards.push(startcard.rank);
				bet.state.rounds.forEach((index) => {
					cards.push(index.card.rank);
				});
				lastBet.targetNumber = "";
				
				// UI Updates
				tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
				tdTargetNumber.innerHTML = "";
				tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
				tdRollChance.innerHTML = cards.join(",");
				
				// Handle card display for loss
				handleLossRoundCard(bet);
				sleep(300)
			}
		}
        // In the hiloCashout section:
		if (gameType === "hiloCashout"){
			cashout_done = true;
			lastBet.Roll = bet.payoutMultiplier;
			lastBet.target = 0;
			
			// Process cards
			const cards = [];
			cards.push(startcard.rank);
			bet.state.rounds.forEach((index) => {
				cards.push(index.card.rank);
			});
			lastBet.targetNumber = "";
			
			// UI Updates
			tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
			tdTargetNumber.innerHTML = "";
			tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
			tdRollChance.innerHTML = cards.join(",");
			
			// Handle card display for loss
			if (bet.payoutMultiplier < 0.98) {
				// This is a loss
				handleLossRoundCard(bet);
			} else {
				// This is a win (cashout with profit)
				const lastRound = bet.state.rounds.at(-1);
				if (lastRound) {
					feedCard(
						lastRound.card,
						bet.state.rounds.length + 1,
						lastRound.guess,
						'win',
						lastRound.payoutMultiplier
					);
				}
			}
			resetCards();
		}
		}
		
		
		if(game != "hilo" && game != "blackjack"){
			cashout_done = true
		}
		if(cashout_done){
			lastBet = {
				name: bet.user.name,
				amount: bet.amount,
				payoutMultiplier: bet.payoutMultiplier,
				payout: bet.payout,
				Roll: lastBet.Roll,
				win: bet.payoutMultiplier >= 1
			};
			
			
			if (lastBet.win) {
				win = true;
				winstreak++;
				wins++;
				losestreak = 0;
				color = '#ffffff'
			} else {
				win = false;
				losses++;
				losestreak++;
				winstreak = 0;
				color = '#111211'
			}
			
			
			
			current_profit = parseFloat(bet.payout) - parseFloat(bet.amount);
			profit_total += current_profit;
			wagered += parseFloat(bet.amount);
			
			
			current_balance += current_profit;
			balance = current_balance;
			
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			
					
			tdbets.innerHTML = bets;
			tdamount.innerHTML = bet.amount.toFixed(8);
			tdProfit.innerHTML = current_profit.toFixed(8);
			tdNonce.innerHTML = bet.game;
			tdBetID.innerHTML = bet.id;
			tdPayout.innerHTML = bet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			//table.prepend(row);
			
			//if (table.rows.length > 20))
			//{
				//table.deleteRow(table.rows.length - 1);
			//}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

		
			
			updateChart();
			

		}
		
		updateStats({
				balance: balance.toFixed(8),  // Will be green (positive)
				wagered: wagered.toFixed(8),
				wageredMultiplier: (wagered / started_bal).toFixed(2),
				profit: profit_total.toFixed(8),  // Will be red (negative)
				profitPercent: (profit_total / started_bal * 100).toFixed(2),
				highBet: Math.max.apply(null, highest_bet).toFixed(8),
				highLose: Math.min.apply(null, lowest_profit).toFixed(8),
				highProfit: Math.max.apply(null, highest_profit).toFixed(8),  // Will be green (positive)
				highStreak: Math.max.apply(null, highest_streak),
				lowStreak: Math.min.apply(null, lowest_streak),
				bets: bets,
				wins: wins,
				losses: losses,
				currentStreak: currentstreak  // Will be red (negative streak of losses)
			});
		if (gameType === "diceRoll" || gameType === "limboBet"){
			rollOnce(bet.state.target, lastBet.Roll, lastBet.win)
			resultMeta.textContent = win ? 'win' : 'lose';
			
		}
		
			
		var value = "js"
		if(value == "lua"){
			//sendLua();
		} else if(value == "js"){
			if(game === "hilo" || game === "blackjack"){
			if(cashout_done) {
				dobet();
			} else {
				if (game === "hilo"){
					hiloguess = round()
				} else {
					nextactions = round()
					if(nextactions === "BLACKJACK_STAND"){
						action = "stand"
					} 
					if(nextactions === "BLACKJACK_SPLIT"){
						action = "split"
					} 
					if(nextactions === "BLACKJACK_HIT"){
						action = "hit"
					} 
					if(nextactions === "BLACKJACK_DOUBLE"){
						action = "double"
					} 	
					if(nextactions === "BLACKJACK_NOINSURANCE"){
						action = "noInsurance"
					} 
					if(nextactions === "BLACKJACK_INSURANCE"){
						action = "insurance"
					} 
				}
			}
			} else {
				dobet();
			}
			
			
		}
		if(win && stoponwin){
			stop()
		}
		
		if (!running) {
                // Get random card
				stop()
		}
		if (!running) return;
		if(hiloguess == 3 && running == false && cashout_done == false && game === "hilo" && win == false){
			//cashout_done = true
			hiloCash()
		}
		}
		if (running && !samuraiskip) {
		sleepfor(sleeptime).then(() => {
        sleeptime = 0;
        if (!running) return;

        const gameHandlers = {
            hilo: () => {
                if (cashout_done) {
                    cashout_done = false;
                    hiloBet(nextbet, startcard);
                } else {
                    const lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
                    
                    if ([2, 4, 5, 7].includes(hiloguess)) {
                        const guesses = {
                            2: 'equal',
                            7: 'skip',
                            5: {
                                A: 'higher',
                                K: 'equal',
                                Q: 'higherEqual',
                                J: 'higherEqual',
                                default: 'higherEqual'
                            },
                            4: {
                                A: 'equal',
                                K: 'lower',
                                Q: 'lowerEqual',
                                J: 'lowerEqual',
                                default: 'lowerEqual'
                            }
                        };
                        
                        let guessed;
                        if (hiloguess === 5 || hiloguess === 4) {
                            guessed = guesses[hiloguess][lastCard] || guesses[hiloguess].default;
                        } else {
                            guessed = guesses[hiloguess];
                        }
                        
                        hiloNext(guessed);
                    } else if (hiloguess === 3) {
                        hiloCash();
                    }
                }
            },
			blackjack: () => {
                if (cashout_done) {
                    cashout_done = false;
                    blackjackBet(nextbet);
                } else {
					blackjackNext(action);
                }
            },
			bars: () => barsBet(nextbet, difficulty, tiles),
            tomeoflife: () => tomeBet(nextbet, lines),
            scarabspin: () => scarabBet(nextbet, lines),
            bluesamurai: () => samuraiBet(nextbet),
            diamonds: () => diamondBet(nextbet),
            cases: () => caseBet(nextbet, difficulty),
            videopoker: () => videopokerBet(nextbet),
            rps: () => rockpaperBet(nextbet, guesses),
            flip: () => flipBet(nextbet, guesses),
            snakes: () => snakesBet(nextbet, difficulty, rolls),
            pump: () => pumpBet(nextbet, pumps, difficulty),
            baccarat: () => baccaratbet(tie, player, banker),
            dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
            roulette: () => roulettebet(chips),
            wheel: () => wheelbet(nextbet, segments, risk),
            plinko: () => plinkobet(nextbet, rows, risk),
            mines: () => minesbet(nextbet, fields, mines),
            keno: () => kenobet(nextbet, numbers, risk),
            dice: () => DiceBet(nextbet, chance, bethigh),
            limbo: () => LimboBet(nextbet, target),
            darts: () => dartsBet(nextbet, difficulty),
			packs: () => packsBet(nextbet), 
			chicken: () => chickenBet(nextbet, difficulty, steps),
			tarot: () => tarotBet(nextbet, difficulty),
			primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
        };
		changegame(game)
        if (gameHandlers[game]) {
            gameHandlers[game]();
        }
    });
	}		
}

function stop(){
	stoponwin = false;
	running = false;
	run_clicked = false;
	simrunning = false;
	cashout_done = false;
	fastmode = false;
	log("Bot stop")
	document.getElementById('startBtn').disabled = false
	document.getElementById('startBtn').style.color = stopcolor
	
	for (var i=0; i<timeouts.length; i++) {
	  clearTimeout(timeouts[i]);
	}
	timeouts = [];
	//dobet = function(){}
}

function start(){
		running = true; 
		cashout_done = false;
		run_clicked = true;
		log("Bot start")
		dobet = function(){}
		countTime();
		document.getElementById('startBtn').disabled = true
		document.getElementById('startBtn').style.color = startcolor
		
		setTimeout(htmlEditor2.getValue() + `
		
		localStorage.setItem("jscode", htmlEditor2.getValue());
;
			userBalances(true);
			//started_bal = balance;

			if (game === undefined) game = "dice";
			changegame(game)
			runBet = (fn, args = []) => {
				if (fastmode) {
					setTimeout(() => fn(...args), 5);
					setTimeout(() => fn(...args), 50);
				} else {
					fn(...args);
				}
			};

			gameFunctions = {
				bars: 		 () => runBet(barsBet, [nextbet, difficulty, tiles]),
				hilo:        () => runBet(hiloBet, [nextbet, startcard]),
				bluesamurai: () => runBet(samuraiBet, [nextbet]),
				darts:       () => runBet(dartsBet, [nextbet, difficulty]),
				tomeoflife:  () => runBet(tomeBet, [nextbet, lines]),
				scarabspin:  () => runBet(scarabBet, [nextbet, lines]),
				diamonds:    () => runBet(diamondBet, [nextbet]),
				cases:       () => runBet(caseBet, [nextbet, difficulty]),
				videopoker:  () => runBet(videopokerBet, [nextbet]),
				rps:         () => runBet(rockpaperBet, [nextbet, guesses]),
				flip:        () => runBet(flipBet, [nextbet, guesses]),
				snakes:      () => runBet(snakesBet, [nextbet, difficulty, rolls]),
				pump:        () => runBet(pumpBet, [nextbet, pumps, difficulty]),
				baccarat:    () => runBet(baccaratbet, [tie, player, banker]),
				dragontower: () => runBet(dragontowerBet, [nextbet, difficulty, eggs]),
				roulette:    () => runBet(roulettebet, [chips]),
				wheel:       () => runBet(wheelbet, [nextbet, segments, risk]),
				plinko:      () => runBet(plinkobet, [nextbet, rows, risk]),
				mines:       () => runBet(minesbet, [nextbet, fields, mines]),
				keno:        () => runBet(kenobet, [nextbet, numbers, risk]),
				dice:        () => runBet(DiceBet, [nextbet, chance, bethigh]),
				limbo:       () => runBet(LimboBet, [nextbet, target]),
				packs:       () => runBet(packsBet, [nextbet]),
				blackjack:	 () => runBet(blackjackBet, [nextbet]),
				chicken: 	 () => runBet(chickenBet, [nextbet, difficulty, steps]),
				tarot: 	 	 () => runBet(tarotBet, [nextbet, difficulty]),
				primedice:   () => runBet(PrimeBet, [nextbet, target1, target2, target3, target4, condition])
			};

			if (game in gameFunctions) gameFunctions[game]();
			drawChart();
			`, 0);	
	
}

function resetstats(){
	losestreak = 0;
	winstreak  = 0;
	highest_streak = [0];
	lowest_streak = [0];

	betcount = 0;
	bets = 0
	wins = 0;
	losses = 0;
	wagered = 0;
	profit_total = 0;
	highest_profit = [0];
	lowest_profit = [0];
	highest_bet = [0];
	currentstreak = 0;
	profit = 0;
	currentprofit = 0;
	current_profit = 0;
	started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	
	updateStats({
				balance: balance.toFixed(8),  // Will be green (positive)
				wagered: wagered.toFixed(8),
				wageredMultiplier: (wagered / started_bal).toFixed(2),
				profit: profit_total.toFixed(8),  // Will be red (negative)
				profitPercent: (profit_total / started_bal * 100).toFixed(2),
				highBet: Math.max.apply(null, highest_bet).toFixed(8),
				highLose: Math.min.apply(null, lowest_profit).toFixed(8),
				highProfit: Math.max.apply(null, highest_profit).toFixed(8),  // Will be green (positive)
				highStreak: Math.max.apply(null, highest_streak),
				lowStreak: Math.min.apply(null, lowest_streak),
				bets: bets,
				wins: wins,
				losses: losses,
				currentStreak: currentstreak  // Will be red (negative streak of losses)
			});
	
	resetChart();
	log("Stats has been reset")
	

}

function sleep(ms){
	sleeptime = ms || 0
}

function sleepfor (time) {
	for (var i=0; i<timeouts.length; i++) {
	  clearTimeout(timeouts[i]);
	}
	timeouts = [];
  return new Promise((resolve) => timeouts.push(setTimeout(resolve, time)));
}

function updateStats(data) {
    // Update each stat with color coding
    //updateStatWithColor('statTime', data.time || '0:0:0:0');
    updateStatWithColor('statBalance', data.balance || '0', false);
    updateStatWithColor('statWagered', `(${data.wageredMultiplier || '0.00'}x) ${data.wagered || '0.00000000'}`);
    
    // For profit, we need to parse the value from the string
    const profitValue = parseFloat(data.profit || '0');
    const profitPercent = parseFloat(data.profitPercent || '0');
    updateStatWithColor('statProfit', `(${profitPercent.toFixed(2)}%) ${data.profit || '0.00000000'}`, true);
    
    updateStatWithColor('statHighBet', data.highBet || '0.00000000');
    updateStatWithColor('statHighLose', data.highLose || '0.00000000');
    updateStatWithColor('statHighProfit', data.highProfit || '0.00000000', false);
    updateStatWithColor('statStreak', `${data.highStreak || '0'} / ${data.lowStreak || '0'}`);
    updateStatWithColor('statBets', data.bets || '0');
    updateStatWithColor('statWins', data.wins || '0');
    updateStatWithColor('statLosses', data.losses || '0');
    
    // Current streak can be negative (loss streak) or positive (win streak)
    const currentStreak = parseInt(data.currentStreak || '0');
    updateStatWithColor('statCurrentStreak', currentStreak.toString(), true);
}

// Helper function to update a stat with color coding
function updateStatWithColor(elementId, value, checkNumeric = false) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Update the text content
    element.textContent = value;
    
    // Remove any existing color classes
    element.classList.remove('positive', 'negative');
    
    // Apply color based on value
    if (checkNumeric) {
        // Try to extract numeric value from string
        const numericMatch = value.match(/-?\d+\.?\d*/);
        if (numericMatch) {
            const numericValue = parseFloat(numericMatch[0]);
            if (numericValue > 0) {
                element.classList.add('positive');
            } else if (numericValue < 0) {
                element.classList.add('negative');
            }
        }
    }
}



// Add button event listeners after DOM is inserted

    document.getElementById('startBtn')?.addEventListener('click', () => {
		//activeBet();
        start();
        // Add your start logic here
    });
    
    document.getElementById('stopBtn')?.addEventListener('click', () => {
		stop();
    });
    
    document.getElementById('resetSeedBtn')?.addEventListener('click', () => {
        resetseed()
        // Add your reset seed logic here
    });
    
    document.getElementById('resetStatsBtn')?.addEventListener('click', () => {
        resetstats()
        // Add your reset stats logic here
    });
    
	
	document.getElementById('themeBtn')?.addEventListener('click', () => {
        darkorLight();
        // Add your start logic here
    });
	
	  const element222 = document.getElementById('terminalWindow');
  if (element222) {
    element222.classList.add('transparent-bg-element');
  }
  
let t; function countTime() {
    clearInterval(t); let s = Date.now();
    t = setInterval(() => running && !errorgame && 
        (e = Date.now() - s, document.getElementById('statTime').textContent = 
        [e/864e5|0, e/36e5%24|0, e/6e4%60|0, e/1e3%60|0].join(':')), 1000);
}

(function repeat() {
  userBalances();
  setTimeout(repeat, 5000);
})();
 userBalances();
setTimeout(htmlEditor2.getValue() + `; 
userBalances(true);
changegame(game);
if(game === 'hilo'){ activeBet();}
if(game==="mines"){
	activeBetMines();
};
 updateCurrentCardDisplay(startcard, 0, false);
`, 150);

// Add HILO updateCurrentCardDisplay(startcard, 0, false) Card Container to the console tab
const consoleContent = document.querySelector('#consoleTab .console-content');

// Create HILO game section - insert after the top-bar
const topBar = document.querySelector('.top-bar');
const hiloSection = document.createElement('div');
hiloSection.className = 'hilo-section';
hiloSection.innerHTML = `
    
    <div class="current-card-info">
        <div class="current-card-display" id="currentCardDisplay">
            <div class="card-placeholder">Draw a card to start</div>
        </div>
        <div class="card-stats" id="cardStats">
            <div>Cards: <span id="cardCount">0</span></div>
            <div>Wins: <span id="winCount">0</span></div>
            <div>Losses: <span id="lossCount">0</span></div>
            <div>Multiplier: <span id="currentMultiplier">1.00x</span></div>
            <div>Status: <span id="gameStatus" style="color:#ffbd2e">READY</span></div>
        </div>
    </div>
    <div class="cards-container" id="cardsContainer">
        <div class="cards-sequence" id="cardsSequence">
            <!-- Cards will be added here dynamically -->
        </div>
    </div>
`;

// Insert after the top bar
topBar.parentNode.insertBefore(hiloSection, topBar.nextSibling);

// Add CSS for HILO game with overlay guess elements
const hiloStyles = document.createElement('style');
hiloStyles.textContent = `
    .hilo-section {
        background: transparent;
        border: 1px solid rgba(196, 193, 192, 0.2);
        border-radius: 10px;
        padding: 1px;
        position: relative;
    }

    .hilo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .hilo-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 16px;
        font-family: 'Courier New', monospace;
    }

    .hilo-controls {
        display: flex;
        gap: 5px;
    }

    .current-card-info {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        padding: 2px;
        background: rgba(91, 90, 89, 0.2);
        border-radius: 8px;
        border: 1px solid rgba(196, 193, 192, 0.1);
    }

    .current-card-display {
        flex: 1;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border: 1px solid rgba(196, 193, 192, 0.1);
    }

    .card-stats {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        min-width: 150px;
    }

    .card-stats div {
        color: rgba(196, 193, 192, 0.8);
        font-size: 13px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    .card-stats span {
        color: #c4c1c0;
        font-weight: bold;
    }

    .card-placeholder {
        color: rgba(196, 193, 192, 0.4);
        font-style: italic;
        font-size: 14px;
    }

    .cards-container {
        margin-top: 10px;
    }

    .cards-sequence {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-height: 250px;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 15px 5px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        min-height: 140px;
        position: relative;
        gap: 0;
    }

    .card-wrapper {
        position: relative;
        margin: 0 25px;
        flex-shrink: 0;
    }

    .card {
        width: 80px;
        height: 110px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        position: relative;
        transition: all 0.2s ease;
        border: 3px solid transparent;
        cursor: pointer;
        user-select: none;
        z-index: 2;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }

    .card.red {
        background: linear-gradient(135deg, #2f3542, #1e272e);
        color: #ffffff;
    }

    .card.black {
        background: linear-gradient(135deg, #2f3542, #1e272e);
        color: #ffffff;
    }
	
	.card.white {
        background: #ffffff;
        color: #000000;
    }

    /* Winning card has green border */
    .card.win {
        border-color: #2ed573 !important;
        box-shadow: 0 0 15px rgba(46, 213, 115, 0.5);
        animation: winPulse 2s infinite;
    }

    /* Losing card has red border */
    .card.lose {
        border-color: #ff4757 !important;
        box-shadow: 0 0 15px rgba(255, 71, 87, 0.5);
        opacity: 0.9;
    }

    /* Starting card (no guess yet) */
    .card.start {
        border-color: #ffbd2e !important;
        border-style: double;
        border-width: 4px;
    }

    /* Game over - disabled state */
    .card.game-over {
        border-color: #ff4757 !important;
        border-style: dashed;
        opacity: 0.7;
        cursor: not-allowed;
    }

    @keyframes winPulse {
        0% { box-shadow: 0 0 5px rgba(46, 213, 115, 0.5); }
        50% { box-shadow: 0 0 20px rgba(46, 213, 115, 0.8); }
        100% { box-shadow: 0 0 5px rgba(46, 213, 115, 0.5); }
    }

    .card-value {
        font-size: 28px;
        margin-bottom: 5px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .card-suit {
        font-size: 18px;
        opacity: 0.9;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        margin-bottom: 5px;
    }

    .card-multiplier {
        position: absolute;
        bottom: 5px;
        font-size: 11px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.6);
        padding: 2px 6px;
        border-radius: 10px;
        color: #ffd700;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        min-width: 35px;
        text-align: center;
        z-index: 3;
    }

    .card-new {
        animation: cardSlideIn 0.3s ease forwards;
    }

    @keyframes cardSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .card-index {
        position: absolute;
        top: 5px;
        left: 5px;
        font-size: 10px;
        opacity: 0.7;
        color: inherit;
        background: rgba(0, 0, 0, 0.3);
        padding: 1px 4px;
        border-radius: 3px;
        z-index: 3;
    }

    /* Guess indicator overlay BETWEEN cards */
    .guess-overlay {
        position: absolute;
        top: 50%;
        left: 1px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(59, 58, 57, 0.95);
        border-radius: 50%;
        border: 2px solid;
        z-index: 4;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .guess-overlay.higher {
        border-color: #ff3838;
        background: rgba(59, 58, 57, 0.95);
        color: #ff3838;
    }

    .guess-overlay.lower {
        border-color: #3742fa;
        background: rgba(59, 58, 57, 0.95);
        color: #3742fa;
    }

    .guess-overlay.equal {
        border-color: #ffbd2e;
        background: rgba(59, 58, 57, 0.95);
        color: #ffbd2e;
    }

    .guess-overlay.skip {
        border-color: #ffa500;
        background: rgba(59, 58, 57, 0.95);
        color: #9b59b6;
    }

    .guess-overlay.win {
        border-color: #2ed573 !important;
        background: rgba(59, 58, 57, 0.95);
        color: #2ed573 !important;
        animation: guessWinPulse 1.5s infinite;
    }
	

    .guess-overlay.lose {
        border-color: #ff4757 !important;
        background: rgba(59, 58, 57, 0.95);
        color: #ff4757 !important;
        opacity: 0.8;
    }

    .guess-symbol {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 2px;
    }

    .guess-text {
        font-size: 9px;
        font-weight: bold;
        opacity: 0.9;
        letter-spacing: 0.5px;
    }

    @keyframes guessWinPulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    /* HILO Game Controls */
    .hilo-game-controls {
        display: flex;
        gap: 10px;
        margin-top: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .hilo-action-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        flex: 1;
        min-width: 120px;
    }

    .hilo-action-btn:hover {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-2px);
    }

    .hilo-action-btn.higher {
        border-color: #ff3838;
        color: #ff3838;
    }

    .hilo-action-btn.lower {
        border-color: #3742fa;
        color: #3742fa;
    }

    .hilo-action-btn.equal {
        border-color: #ffbd2e;
        color: #ffbd2e;
    }

    .hilo-action-btn.skip {
        border-color: #9b59b6;
        color: #9b59b6;
    }

    .hilo-action-btn.cashout {
        border-color: #2ed573;
        color: #2ed573;
        min-width: 140px;
    }

    .hilo-action-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    /* Stats for current card display */
    .current-card {
        width: 70px;
        height: 95px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        position: relative;
        border: 3px solid;
    }

    .current-card-multiplier {
        position: absolute;
        bottom: 5px;
        font-size: 10px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.7);
        padding: 2px 6px;
        border-radius: 10px;
        color: #ffd700;
    }

    /* Game over overlay */
    .game-over-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        border-radius: 8px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .game-over-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .game-over-text {
        color: #ff4757;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 0 10px rgba(255, 71, 87, 0.5);
        font-family: 'Courier New', monospace;
    }

    /* Skip animation */
    @keyframes skipPulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    .guess-overlay.skip {
        animation: skipPulse 2s infinite;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .cards-sequence {
            padding: 15px 3px;
        }
        
        .card-wrapper {
            margin: 0 20px;
        }
        
        .card {
            width: 70px;
            height: 95px;
        }
        
        .guess-overlay {
            width: 40px;
            height: 40px;
            left: 1px;
        }
        
        .guess-symbol {
            font-size: 36px;
        }
        
        .guess-text {
            font-size: 8px;
        }
        
        .hilo-game-controls {
            gap: 8px;
        }
        
        .hilo-action-btn {
            min-width: 100px;
            font-size: 12px;
            padding: 6px 12px;
        }
        
        .current-card-info {
            flex-direction: column;
            gap: 15px;
        }
        
        .card-stats {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .card-wrapper {
            margin: 0 15px;
        }
        
        .card {
            width: 60px;
            height: 85px;
        }
        
        .guess-overlay {
            width: 35px;
            height: 35px;
            left: 1px;
        }
        
        .guess-symbol {
            font-size: 36px;
        }
        
        .guess-text {
            font-size: 7px;
        }
        
        .card-value {
            font-size: 24px;
        }
        
        .card-suit {
            font-size: 16px;
        }
        
        .hilo-action-btn {
            min-width: 80px;
            font-size: 11px;
            padding: 5px 10px;
        }
        
        .hilo-game-controls {
            gap: 5px;
        }
    }
	
	.guess-overlay {
    position: absolute;
    top: 50%;
    left: -12px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(59, 58, 57, 0.95);
    border-radius: 50%;
    border: 2px solid;
    z-index: 4;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.guess-symbol {
    font-size: 24px;
    font-weight: bold;
    line-height: 0.9; /* Adjust this value */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

/* Center the guess-text as well */
.guess-text {
    position: absolute;
    bottom: -25px;
    font-size: 9px;
    font-weight: bold;
    opacity: 0.9;
    letter-spacing: 0.5px;
    text-align: center;
    width: 100%;
    white-space: nowrap;
}

/* Symbol-specific adjustments */
.guess-overlay.higher .guess-symbol,
.guess-overlay.higherEqual .guess-symbol {
    margin-top: 15px; /* Up arrow needs no adjustment or positive adjustment */
}

.guess-overlay.lower .guess-symbol,
.guess-overlay.lowerEqual .guess-symbol {
    margin-top: -14px; /* Down arrow needs more negative margin */
}

.cards-container .guess-overlay.skip {
    border-color: #ffa500 !important;
    color: #ffa500 !important;
}

/* Or even more specific */
#cardsSequence .card-wrapper .guess-overlay.skip {
    border-color: #ffa500 !important;
    color: #ffa500 !important;
}

.cards-container {
    margin-top: 10px;
    width: 100%;
}

.cards-sequence {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-height: 250px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 5px 5px 5px 1px; /* Important: left padding */
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-height: 140px;
    position: relative;
    gap: 0;
    width: 100%;
    flex-wrap: nowrap;
    box-sizing: border-box;
}

.card-wrapper {
    position: relative;
    margin: 0 24px 0 0; /* Only right margin */
    flex-shrink: 0;
}

/* Add left margin to first card only */
.cards-sequence .card-wrapper:first-child {
    margin-left: 25px;
}
`;

document.head.appendChild(hiloStyles);

// HILO Game Variables
let currentCard = null;
let cardHistory = [];
let cardIndex = 0;
let winCount = 0;
let lossCount = 0;
let currentMultiplier = 1.00;
let lastGuess = null;
let lastGuessResult = null;
let sequenceItems = [];
let gameActive = false;
let gameOver = false;

// Card deck definition
const cardDeck = [
    { value: 'A', suit: '♠', color: 'black', numeric: 1 },
    { value: '2', suit: '♠', color: 'black', numeric: 2 },
    { value: '3', suit: '♠', color: 'black', numeric: 3 },
    { value: '4', suit: '♠', color: 'black', numeric: 4 },
    { value: '5', suit: '♠', color: 'black', numeric: 5 },
    { value: '6', suit: '♠', color: 'black', numeric: 6 },
    { value: '7', suit: '♠', color: 'black', numeric: 7 },
    { value: '8', suit: '♠', color: 'black', numeric: 8 },
    { value: '9', suit: '♠', color: 'black', numeric: 9 },
    { value: '10', suit: '♠', color: 'black', numeric: 10 },
    { value: 'J', suit: '♠', color: 'black', numeric: 11 },
    { value: 'Q', suit: '♠', color: 'black', numeric: 12 },
    { value: 'K', suit: '♠', color: 'black', numeric: 13 },
    { value: 'A', suit: '♥', color: 'red', numeric: 1 },
    { value: '2', suit: '♥', color: 'red', numeric: 2 },
    { value: '3', suit: '♥', color: 'red', numeric: 3 },
    { value: '4', suit: '♥', color: 'red', numeric: 4 },
    { value: '5', suit: '♥', color: 'red', numeric: 5 },
    { value: '6', suit: '♥', color: 'red', numeric: 6 },
    { value: '7', suit: '♥', color: 'red', numeric: 7 },
    { value: '8', suit: '♥', color: 'red', numeric: 8 },
    { value: '9', suit: '♥', color: 'red', numeric: 9 },
    { value: '10', suit: '♥', color: 'red', numeric: 10 },
    { value: 'J', suit: '♥', color: 'red', numeric: 11 },
    { value: 'Q', suit: '♥', color: 'red', numeric: 12 },
    { value: 'K', suit: '♥', color: 'red', numeric: 13 },
    { value: 'A', suit: '♦', color: 'red', numeric: 1 },
    { value: '2', suit: '♦', color: 'red', numeric: 2 },
    { value: '3', suit: '♦', color: 'red', numeric: 3 },
    { value: '4', suit: '♦', color: 'red', numeric: 4 },
    { value: '5', suit: '♦', color: 'red', numeric: 5 },
    { value: '6', suit: '♦', color: 'red', numeric: 6 },
    { value: '7', suit: '♦', color: 'red', numeric: 7 },
    { value: '8', suit: '♦', color: 'red', numeric: 8 },
    { value: '9', suit: '♦', color: 'red', numeric: 9 },
    { value: '10', suit: '♦', color: 'red', numeric: 10 },
    { value: 'J', suit: '♦', color: 'red', numeric: 11 },
    { value: 'Q', suit: '♦', color: 'red', numeric: 12 },
    { value: 'K', suit: '♦', color: 'red', numeric: 13 },
    { value: 'A', suit: '♣', color: 'black', numeric: 1 },
    { value: '2', suit: '♣', color: 'black', numeric: 2 },
    { value: '3', suit: '♣', color: 'black', numeric: 3 },
    { value: '4', suit: '♣', color: 'black', numeric: 4 },
    { value: '5', suit: '♣', color: 'black', numeric: 5 },
    { value: '6', suit: '♣', color: 'black', numeric: 6 },
    { value: '7', suit: '♣', color: 'black', numeric: 7 },
    { value: '8', suit: '♣', color: 'black', numeric: 8 },
    { value: '9', suit: '♣', color: 'black', numeric: 9 },
    { value: '10', suit: '♣', color: 'black', numeric: 10 },
    { value: 'J', suit: '♣', color: 'black', numeric: 11 },
    { value: 'Q', suit: '♣', color: 'black', numeric: 12 },
    { value: 'K', suit: '♣', color: 'black', numeric: 13 }
];

// Function to draw a random card
function drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    return { ...cardDeck[randomIndex] };
}

// Function to draw a card based on rank value (1-13)
function drawCardByRank(rank) {
    const validRank = Math.max(1, Math.min(13, rank));
    const matchingCards = cardDeck.filter(card => card.numeric === validRank);
    if (matchingCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingCards.length);
        return { ...matchingCards[randomIndex] };
    }
    return drawRandomCard();
}

// Helper function to get suit name
function getSuitName(suitSymbol) {
    const suitNames = {
        'S': '♠',
        'H': '♥',
        'D': '♦',
        'C': '♣'
    };
    return suitNames[suitSymbol] || 'Unk';
}

// Helper function to get numeric value
function getNumericValue(cardValue) {
    const values = {
        'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13
    };
    return values[cardValue] || 1;
}

// Function to update game status


// Function to update stats display


// Function to create a guess overlay element (NO MULTIPLIER on guess)
function createGuessOverlay(guessType, result = null) {
    const guessElement = document.createElement('div');
    guessElement.className = `guess-overlay ${guessType}`;
    
    if (result !== null) {
        guessElement.classList.add(result);
    }
    
    let symbol, text;
    switch(guessType) {
        case 'higherEqual':
            symbol = '⌃';
            text = 'HIGHER';
            break;
        case 'lowerEqual':
            symbol = '⌄';
            text = 'LOWER';
            break;
        case 'equal':
            symbol = '=';
            text = 'EQUAL';
            break;
        case 'skip':
            symbol = '»';
            text = 'SKIP';
            break;
		case 'higher':
            symbol = '⌃';
            text = 'HIGHER';
            break;
		case 'lower':
            symbol = '⌄';
            text = 'LOWER';
            break;
        default:
            symbol = '?';
            text = 'GUESS';
    }
    
    guessElement.innerHTML = `
        <div class="guess-symbol">${symbol}</div>
        <div class="guess-text">${text}</div>
    `;
	

    return guessElement;
}

// Function to create a card wrapper with card and guess overlay
function createCardWrapper(card, cardNumber, guessType = null, guessResult = null, multiplier = null, isGameOver = false) {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    
    let cardClass = `card black card-new`;
	if (dark) {
		cardClass = `card white card-new`;
	}
    if (cardNumber === 1) {
        cardClass += ' start';
    } else if (guessResult === 'win') {
        cardClass += ' win';
    } else if (guessResult === 'lose') {
        cardClass += ' lose';
        if (isGameOver) {
            cardClass += ' game-over';
			multiplier = 0
        }
    }
    
    // Create card
    const cardElement = document.createElement('div');
    cardElement.className = cardClass;
    cardElement.innerHTML = `
        <span class="card-index">#${cardNumber}</span>
        <div class="card-value">${card.rank}</div>
        <div class="card-suit">${getSuitName(card.suit)}</div>
        ${cardNumber > 1 && multiplier ? `<div class="card-multiplier">${parseFloat(multiplier.toFixed(2))}x</div>` : ''}
    `;
    

	
    let resultText = '';
    if (guessResult === 'win') resultText = ' - WIN';
    else if (guessResult === 'lose') resultText = ' - LOSE';
    else if (cardNumber === 1) resultText = ' - START';
    
    
    
    // Add click event to show details
    
    
    cardWrapper.appendChild(cardElement);
    
    // Add guess overlay if this is not the first card
    if (cardNumber > 1 && guessType) {
        const guessOverlay = createGuessOverlay(guessType, guessResult);
        cardWrapper.appendChild(guessOverlay);
    }
    
    return cardWrapper;
}

// Function to update current card display
function updateCurrentCardDisplay(card, multiplier = null, isGameOver = false) {
    const currentCardDisplay = document.getElementById('currentCardDisplay');
    
    if (card) {
        let cardClass = `card black`;
		if (dark) {
			cardClass = `card white`;
		}
        if (cardIndex === 1) {
            cardClass += ' start';
        } else if (isGameOver) {
            cardClass += '';
			multiplier = 0
        }
        
        currentCardDisplay.innerHTML = `
			<div class="${cardClass}">
				<span class="card-index">#${cardIndex}</span>
				<div class="card-value">${card.rank}</div>
				<div class="card-suit">${getSuitName(card.suit)}</div>
				${multiplier && cardIndex > 1 ? `<div class="card-multiplier">${parseFloat(multiplier.toFixed(2))}x</div>` : ''}
			</div>
			<button class="skip-btn" id="skipCardBtn" onclick="handleClick()" title="Skip card">»</button>
		`;
    } else {
        //currentCardDisplay.innerHTML = '<div class="card-placeholder">Click to start</div>';
    }
}

function updateExistingCard(cardWrapper, card, cardIndex, lastGuess, guessResult, currentMultiplier) {
    const cardElement = cardWrapper.querySelector('.card');
    const isLosingCard = guessResult === 'lose';
    
    // Update card classes
    cardElement.className = `card black`;
    if (cardIndex === 1) {
        cardElement.classList.add('start');
    } else if (guessResult === 'win') {
        cardElement.classList.add('win');
    } else if (guessResult === 'lose') {
        cardElement.classList.add('lose');
        if (isLosingCard) {
            cardElement.classList.add('game-over');
        }
    }
    
    // Update card content
    cardElement.innerHTML = `
        <span class="card-index">#${cardIndex}</span>
        <div class="card-value">${card.rank}</div>
        <div class="card-suit">${getSuitName(card.suit)}</div>
        ${cardIndex > 1 && currentMultiplier ? `<div class="card-multiplier">${parseFloat(currentMultiplier.toFixed(2))}x</div>` : ''}
    `;
    
	
	
    // Update or add guess overlay
    const existingOverlay = cardWrapper.querySelector('.guess-overlay');
    if (cardIndex > 1 && lastGuess) {
        if (existingOverlay) {
            // Update existing overlay
            existingOverlay.className = `guess-overlay ${lastGuess}`;
            if (guessResult) {
                existingOverlay.classList.add(guessResult);
            }
            let symbol, text;
            switch(lastGuess) {
                case 'higherEqual':
                    symbol = '⌃'; text = 'HIGHER'; break;
                case 'lowerEqual':
                    symbol = '⌄'; text = 'LOWER'; break;
                case 'equal':
                    symbol = '='; text = 'EQUAL'; break;
                case 'skip':
                    symbol = '»'; text = 'SKIP'; break;
                case 'higher':
                    symbol = '⌃'; text = 'HIGHER'; break;
                case 'lower':
                    symbol = '⌄'; text = 'LOWER'; break;
                default:
                    symbol = '?'; text = 'GUESS';
            }
            existingOverlay.innerHTML = `
                <div class="guess-symbol" style="">${symbol}</div>
                <div class="guess-text">${text}</div>
            `;
			
		
        } else {
            // Create new overlay
            const guessOverlay = createGuessOverlay(lastGuess, guessResult);
            cardWrapper.appendChild(guessOverlay);
        }
    } else if (existingOverlay && cardIndex <= 1) {
        // Remove overlay for first card
        cardWrapper.removeChild(existingOverlay);
    }
}

function updateCardStats() {
    const cardsSequence = document.getElementById('cardsSequence');
    const cardWrappers = cardsSequence.querySelectorAll('.card-wrapper');
    const cardCount = cardWrappers.length;
    
    // Count wins and losses
    let winCount = 0;
    let lossCount = 0;
    let currentMultiplier = 1.00;
    
    cardWrappers.forEach(wrapper => {
        const cardElement = wrapper.querySelector('.card');
        if (cardElement) {
            if (cardElement.classList.contains('win')) winCount++;
            if (cardElement.classList.contains('lose')) lossCount++;
            
            // Get multiplier from the last card
            const multiplierElement = wrapper.querySelector('.card-multiplier');
            if (multiplierElement) {
                const multiplierText = multiplierElement.textContent;
                const multiplierValue = parseFloat(multiplierText);
                if (!isNaN(multiplierValue) && multiplierValue > currentMultiplier) {
                    currentMultiplier = multiplierValue;
                }
            }
        }
    });
    
    // Update stats display
    document.getElementById('cardCount').textContent = cardCount;
    document.getElementById('winCount').textContent = winCount;
    document.getElementById('lossCount').textContent = lossCount;
    document.getElementById('currentMultiplier').textContent = currentMultiplier.toFixed(2) + 'x';
    
    // Update game status
    const gameStatus = document.getElementById('gameStatus');
    if (cardCount === 0) {
        gameStatus.textContent = 'READY';
        gameStatus.style.color = '#ffbd2e';
    } else if (cardWrappers[cardWrappers.length - 1]?.querySelector('.card')?.classList.contains('lose')) {
        gameStatus.textContent = 'LOSE';
        gameStatus.style.color = '#ff4757';
    } else {
        gameStatus.textContent = 'ACTIVE';
        gameStatus.style.color = '#2ed573';
    }
}

function resetCards() {
    const cardsSequence = document.getElementById('cardsSequence');
    
    cardsSequence.innerHTML = '';
    //document.getElementById('currentCardDisplay').innerHTML = '<div class="card-placeholder">Click to start</div>';
    
    currentCard = null;
    cardHistory = [];
    cardIndex = 0;
    
    // Reset counts
    winCount = 0;
    lossCount = 0;
    currentMultiplier = 1.00;
    lastGuess = null;
    lastGuessResult = null;
    sequenceItems = [];
    
    // Update stats display
    updateCardStats();
}

// Main function to feed a new card with optional multiplier
function feedCard(card, cardIndex, lastGuess, guessResult, currentMultiplier) {
    if (!card) {
        //console.warn('No card provided to feedCard');
        return;
    }
	if (!running) {
    startcard = card
	}
    const cardsSequence = document.getElementById('cardsSequence');
    
    // IMPORTANT: Always add the card for loss rounds
    const isLosingCard = guessResult === 'lose';
    
    // For loss cards, we should always show them
    if (isLosingCard) {
        // Clear any existing "lose" card to prevent duplicates
        const existingLoseCards = cardsSequence.querySelectorAll('.card.lose');
        existingLoseCards.forEach(loseCard => {
            const wrapper = loseCard.closest('.card-wrapper');
            if (wrapper) {
                cardsSequence.removeChild(wrapper);
            }
        });
    }
    
    // Check if we already have this card to prevent duplicates
    const existingCards = cardsSequence.querySelectorAll('.card-wrapper');
    
    // For loss cards, we want to add them regardless
    if (!isLosingCard && existingCards.length >= cardIndex) {
        // Card at this index already exists, update it instead
        if (existingCards[cardIndex - 1]) {
            updateExistingCard(existingCards[cardIndex - 1], card, cardIndex, lastGuess, guessResult, currentMultiplier);
            updateCardStats();
            cardsSequence.scrollLeft = cardsSequence.scrollWidth;
            return;
        }
    }
    
    // Create new card wrapper
    const cardWrapper = createCardWrapper(card, cardIndex, lastGuess, guessResult, currentMultiplier, isLosingCard);
    
    // Add to sequence
    cardsSequence.appendChild(cardWrapper);
    
    // Update current card display
    updateCurrentCardDisplay(card, currentMultiplier, isLosingCard);
    
    // Remove animation class after animation completes
    setTimeout(() => {
        const cardElement = cardWrapper.querySelector('.card');
        if (cardElement) {
            cardElement.classList.remove('card-new');
        }
    }, 300);
    
    // Scroll to right (horizontal scrolling)
    cardsSequence.scrollLeft = cardsSequence.scrollWidth;
    
    // Update game stats
    updateCardStats();
}


// Event Listeners
document.getElementById('drawCardBtn')?.addEventListener('click', () => {
  
});



// Add HILO game controls to the UI
function addHILOGameControls() {
    const hiloSection = document.querySelector('.hilo-section');
    
    const gameControls = document.createElement('div');
    gameControls.className = 'hilo-game-controls';
    gameControls.innerHTML = `
        <button class="hilo-action-btn lower" id="guessLowerBtn">Guess LOWER</button>
        <button class="hilo-action-btn equal" id="guessEqualBtn">Guess EQUAL</button>
        <button class="hilo-action-btn higher" id="guessHigherBtn">Guess HIGHER</button>
        <button class="hilo-action-btn skip" id="guessSkipBtn">Guess SKIP</button>
        <button class="hilo-action-btn cashout" id="cashoutBtn">CASHOUT</button>
    `;
    
    hiloSection.appendChild(gameControls);
    
    // Add event listeners for HILO game
    document.getElementById('guessLowerBtn')?.addEventListener('click', () => {
		running = false;
		let guesser = "lowerEqual"
		if(currentBet.state.rounds.at(-1)?.card.rank === "K"){
			guesser = "lower"
		}
		if(currentBet.state.rounds.length === 0 && currentBet.state.startCard.rank === "K"){
			guesser = "lower"
		}
		
		if(currentBet.state.rounds.at(-1)?.card.rank === "A"){
			return;
		}
		if(currentBet.state.rounds.length === 0 && currentBet.state.startCard.rank === "A"){
			return;
		}
		hiloNext(guesser);
    });
    
    document.getElementById('guessEqualBtn')?.addEventListener('click', () => {
		running = false;
        hiloNext("equal");
    });
    
    document.getElementById('guessHigherBtn')?.addEventListener('click', () => {
		running = false;
		let guesser = "higherEqual"
		if(currentBet.state.rounds.at(-1)?.card.rank === "A"){
			guesser = "higher"
		}
		if(currentBet.state.rounds.length === 0 && currentBet.state.startCard.rank === "A"){
			guesser = "higher"
		}
		
		if(currentBet.state.rounds.at(-1)?.card.rank === "K"){
			return;
		}
		if(currentBet.state.rounds.length === 0 && currentBet.state.startCard.rank === "K"){
			return;
		}
		hiloNext(guesser);

    });
    
    document.getElementById('guessSkipBtn')?.addEventListener('click', () => {
		running = false;
        hiloNext("skip");
       
    });
    
    document.getElementById('cashoutBtn')?.addEventListener('click', () => {
		running = false;
        hiloCash();
    });
}

// Initialize HILO game controls
addHILOGameControls();




secondTheme = `
:root {
    --text-color: #000000;
    --text-shadow: 0 0 5px rgba(56, 55, 54, 0.5);
    --bg-color: #e6e6e6;
}

.window-container {
    width: 80%;
    max-width: 800px;
    height: 500px;
    background-color: rgba(230, 230, 230, 0.98);
    border-radius: 20px;
    overflow: hidden;
    position: fixed;
    margin: 20px auto;
    box-shadow: 0 0 30px rgba(56, 55, 54, 0.3);
    border: 1px solid rgba(56, 55, 54, 0.5);
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', monospace;
    justify-content: center;
    align-items: center;
}

.minimized-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(230, 230, 230, 0.91);
    border-bottom: 2px solid rgba(56, 55, 54, 0.6);
    box-shadow: 0 4px 25px rgba(56, 55, 54, 0.3);
    z-index: 10000;
    font-family: 'Courier New', monospace;
    display: none;
    align-items: center;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    font-weight: bold;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.header-center {
    display: flex;
    align-items: center;
    gap: 35px;
    font-weight: bold;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.url-bar {
    background: rgba(230, 230, 230, 0.91);
    border: 1px solid rgba(56, 55, 54, 0.4);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    color: #000000;
    text-shadow: var(--text-shadow);
    min-width: 180px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(56, 55, 54, 0.2);
}

.url-bar::before {
    content: "🌐 ";
    margin-right: 6px;
    font-size: 10px;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000000;
    animation: blink 1s infinite;
    box-shadow: 0 0 8px #000000;
}

.header-data {
    font-weight: bold;
    text-shadow: var(--text-shadow);
}

.window-header {
    background-color: rgba(230, 230, 230, 0.91);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(56, 55, 54, 0.3);
    cursor: move;
    user-select: none;
}

.window-title {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.window-tabs {
    font-family: 'Courier New', monospace;
    display: flex;
    background-color: rgba(230, 230, 230, 0.91);
    border-bottom: 1px solid rgba(56, 55, 54, 0.2);
    padding: 0 6px;
    cursor: move;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.tabs-container {
    display: flex;
    flex: 1;
    cursor: move;
}

.window-controls {
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding: 0 10px;
    cursor: default;
}

.control-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
}

.close { background-color: #ff5f56; }
.minimize { background-color: #ffbd2e; }
.maximize { background-color: #27c93f; }

.tab {
    padding: 5px 16px;
    color: rgba(56, 55, 54, 0.7);
    text-shadow: var(--text-shadow);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    user-select: none;
}

.tab:hover {
    background-color: rgba(56, 55, 54, 0.1);
    color: #000000;
}

.tab.active {
    color: #000000;
    border-bottom: 2px solid #000000;
    background-color: rgba(56, 55, 54, 0.05);
}

.tab-content {
    display: none;
    height: calc(100% - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

#logContent {
    flex: 1;
    overflow-y: auto;
}

.tab-content::-webkit-scrollbar {
    display: none;
}

.tab-content.active {
    display: flex;
    flex-direction: column;
}

.matrix-container {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100% - 90px);
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
}

.matrix-column {
    position: absolute;
    top: 0;
    width: 20px;
    font-size: 18px;
    text-align: center;
    color: #000000;
    text-shadow: 0 0 5px #000000;
    animation: fall linear infinite;
    user-select: none;
}

@keyframes fall {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100%); }
}

.status-bar {
    position: absolute;
    bottom: 3px;
    width: 100%;
    background-color: rgba(230, 230, 230, 0.91);
    padding: 5px 15px;
    font-size: 14px;
    border-top: 1px solid rgba(56, 55, 54, 0.3);
    display: flex;
    justify-content: space-between;
    color: #000000;
    text-shadow: var(--text-shadow);
    cursor: move;
    user-select: none;
    height: 20px;
}

.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50%     { opacity: 0.5; }
}

.terminal-content {
    padding: 13px 15px;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    flex: 1;
    overflow-y: auto;
    cursor: pointer;
    user-select: text;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    cursor: text;
    user-select: text;
}

.chart-container {
    background: rgba(210, 210, 210, 0.2);
    border: 1px solid rgba(56, 55, 54, 0.2);
    border-radius: 10px;
    height: 150px;
    margin: 10px 20px;
    cursor: default;
    user-select: none;
    position: relative;
}

#chartContainer {
    width: 100%;
    height: 100%;
    cursor: default;
    user-select: none;
}

.command-line, .output, .prompt, .command {
    user-select: text;
    cursor: text;
}

.command-line {
    margin-bottom: 10px;
}

.output {
    margin-bottom: 5px;
    line-height: 1.4;
}

.prompt {
    color: #000000;
    text-shadow: var(--text-shadow);
    font-weight: bold;
}

.command {
    color: #000000;
    text-shadow: var(--text-shadow);
}

::selection {
    background: rgba(56, 55, 54, 0.3);
    color: #000000;
}

::-moz-selection {
    background: rgba(56, 55, 54, 0.3);
    color: #000000;
}

body.header-visible {
    padding-top: 50px;
    transition: padding-top 0.3s ease;
}

.code-content {
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    background: rgba(230, 230, 230, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(56, 55, 54, 0.2);
    height: 100%;
    overflow-y: auto;
    margin: 10px;
}

.log-content {
    font-family: 'Courier New', monospace;
    background: rgba(230, 230, 230, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(56, 55, 54, 0.2);
    flex: 1;
    overflow-y: auto;
    margin: 10px;
    margin-bottom: 0;
}

.log-entry {
    margin-bottom: 1px;
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(56, 55, 54, 0.1);
}

.log-time {
    color: rgba(56, 55, 54, 0.6);
    text-shadow: var(--text-shadow);
    font-size: 12px;
    margin-right: 10px;
}

.log-message {
    color: #000000;
    text-shadow: var(--text-shadow);
}

.console-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.console-input-container {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background: transparent;
    border-top: 1px solid rgba(56, 55, 54, 0.2);
    margin-top: auto;
    width: 100%;
    box-sizing: border-box;
}

.console-prompt {
    color: #000000;
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 10px;
}

.console-input {
    background: transparent;
    border: none;
    outline: none;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    flex: 1;
    caret-color: #000000;
    width: 100%;
}

.prompt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.prompt-text {
    color: #000000;
    text-shadow: var(--text-shadow);
    margin-right: 8px;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
}

.instructions {
    margin-top: 15px;
    font-size: 12px;
    color: #000000;
    text-shadow: var(--text-shadow);
}

#consoleInput {
    width: 100%;
    padding: 12px 15px;
    font-size: 14px;
    background: rgba(56, 55, 54, 0.1);
    border: 1px solid rgba(56, 55, 54, 0.3);
    border-radius: 4px;
    color: #000000;
    text-shadow: var(--text-shadow);
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

#consoleInput:focus {
    border-color: #000000;
    background: rgba(56, 55, 54, 0.15);
    box-shadow: 0 0 10px rgba(56, 55, 54, 0.3);
}

.cursor {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 20px;
    background-color: #000000;
    opacity: 0;
    transition: opacity 0.2s;
}

.blinking {
    animation: blink 1s infinite;
}

.tab-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.code-js {
    position: relative;
    height: 100%;
    width: 100%;
}

.CodeMirror {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 8px;
    font-size: 14px;
    height: 97% !important;
    width: 100% !important;
}

.CodeMirror-scroll {
    min-height: 97% !important;
}

.CodeMirror-gutters {
    background: rgba(0, 0, 0, 0.1) !important;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
}

.CodeMirror-linenumber {
    color: rgba(0, 0, 0, 0.5) !important;
}

.CodeMirror-cursor {
    border-left: 1px solid #000000 !important;
}

.cm-keyword { color: #ff5f56 !important; }
.cm-atom { color: #ff5f56 !important; }
.cm-number { color: #ff8c00 !important; }
.cm-def { color: #0066cc !important; }
.cm-variable { color: #0066cc !important; }
.cm-variable-2 { color: #0066cc !important; }
.cm-property { color: #0066cc !important; }
.cm-operator { color: #ff5f56 !important; }
.cm-comment { color: #228b22 !important; }
.cm-string { color: #8b4513 !important; }
.cm-string-2 { color: #8b4513 !important; }
.cm-meta { color: #0066cc !important; }
.cm-builtin { color: #ff5f56 !important; }
.cm-tag { color: #000080 !important; }
.cm-attribute { color: #0066cc !important; }
.cm-header { color: #ff5f56 !important; }
.cm-hr { color: #ff5f56 !important; }
.cm-link { color: #000080 !important; }

.command-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.top-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    justify-content: flex-end;
    font-family: 'Courier New', monospace;
}

.number-container {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding: 0 20px;
    font-family: 'Courier New', monospace;
}

.number {
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px;
    padding: 0;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
    transition: transform 0.3s ease;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.win {
    color: #1fa807;
}

.loss {
    color: #000000 ;
}

.separator {
    color: rgba(56, 55, 54, 0.3);
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.new-number {
    animation: slideInFromRight 0.3s ease forwards;
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slider-wrap {
    padding: 10px;
    background: linear-gradient(180deg, rgba(0,0,0,0.01), transparent);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
}

#chanceSlider {
    width: 100%;
    margin: 0;
}

input[type=range] {
    width: 90%;
    height: 11px;
    border-radius: 6px;
    appearance: none;
    background: linear-gradient(90deg, #000000 0%, #000000 50%, #a0a0a0 50%, #a0a0a0 100%);
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #000000;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #000000;
    cursor: pointer;
}

.target {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.target .value {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.result-bubble {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #0ea5e9;
    padding: 6px 10px;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    transition: left .35s cubic-bezier(.2,.9,.2,1),background .2s;
}

.result-bubble.win {
    background: #e6e6e6;
}

.result-bubble.lose {
    background: #000000;
}

.roller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid rgba(56, 55, 54, 0.14);
}

.jumping {
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.digits {
    display: flex;
    gap: 6px;
}

.digit {
    width: 72px;
    height: 96px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.meta {
    display: flex;
    gap: 10px;
    align-items: center;
}

.payout {
    background: rgba(0, 0, 0, 0.03);
    padding: 8px;
    border-radius: 8px;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.status-buttons {
    display: flex;
    gap: 1px;
    align-items: center;
    top: -6px;
}

.status-btn {
    background: none;
    border: none;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 2px 8px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    color: #000000;
    background: rgba(56, 55, 54, 0.1);
    border-radius: 3px;
}

.status-btn:active {
    transform: translateY(1px);
}

.status-bar > .status-buttons {
    transform: translateY(-6px);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 8px 10px;
    background: rgba(230, 230, 230, 0.91);
    border: 1px solid rgba(56, 55, 54, 0.2);
    border-width: 0 0 1px 1px;
    min-height: 40px;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

.stat-row:nth-child(odd) {
    border-left-width: 1px;
}

.stat-row:nth-last-child(-n+2) {
    border-bottom-width: 1px;
}

.stat-label {
    color: black;
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-size: 17px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
}

.stat-value {
    font-weight: bold;
    font-size: 17px;
    text-shadow: var(--text-shadow);
    text-align: right;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    min-width: 150px;
    color: #000000;
}

.stat-value.positive {
    color: #1fa807;
    text-shadow: 0 0 5px rgba(56, 55, 54, 0.7);
}

.stat-value.negative {
    color: #ff3333;
    text-shadow: 0 0 5px rgba(255, 51, 51, 0.7);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-row {
        border-width: 0 1px 1px 1px;
    }
    
    .stat-row:first-child {
        border-top-width: 1px;
    }
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
}

.transparent-bg-element {
}

.transparent-bg-element::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('chrome-extension://${imagedir}/img/background2.png');
    background-size: cover;
    background-position: center;
    opacity: 0.25;
    z-index: -1;
}

* {
    color: #000000;
    text-shadow: var(--text-shadow);
}

.skip-btn {
    margin-left: 15px;
    font-size: 40px;
    background: rgba(56, 55, 54, 0.1);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    color: #d9d9d9;
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.2s ease;
}

.skip-btn:hover:not(:disabled) {
    background: rgba(56, 55, 54, 0.2);
    transform: scale(1.1);
}

.skip-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

`

  
  // Even simpler: Update existing guess-overlay elements directly
function updateExistingGuessOverlays() {
    // Get all guess-overlay elements
    const guessOverlays = document.querySelectorAll('.guess-overlay');
    
	if (!dark){
    // Update each one
    guessOverlays.forEach(overlay => {
        overlay.style.background = '#3b3a39'; // Gray
        overlay.style.backgroundColor = '#3b3a39'; // Gray
    });
	} else {
		guessOverlays.forEach(overlay => {
        overlay.style.background = '#e8e8e8'; // Gray
        overlay.style.backgroundColor = '#e8e8e8'; // Gray
    });
	}
	
	
}

// Call this function after the HILO section is created
// You can call it in your initialization code
// Wait 1 second for everything to load
  
  function darkorLight(){
	  dark = !dark;
      
	  if(dark){
		    // Get the style element from the first theme
			const styleElement = matrixWrapper.querySelector('style');
			styleElement.textContent = secondTheme;
			stopcolor = "#000000"
			startcolor = "gray"
			const hiloSection2 = document.querySelector('.hilo-section');
			hiloSection2.style.background = "transparent"
			const cardStats = document.getElementById('cardStats');

			// Get ALL elements inside cardStats
			const allElements = cardStats.getElementsByTagName('*');

			// Loop through and change each element
			for (let element of allElements) {
				element.style.color = 'white';
			}
			const controls = document.querySelector('.hilo-game-controls');
			const allElements2 = controls.getElementsByTagName('button');

			// Loop through and change each element
			for (let element2 of allElements2) {
				element2.style.background = '#d1d1cf';
			}
			
			const allCards = document.querySelectorAll('.card-wrapper .card');
   
			// Light theme - white cards
			allCards.forEach(card => {
				card.style.background = '#ffffff';
				card.style.color = '#000000';
			});
			const card1 = document.querySelector('.current-card-display .card');
			card1.classList.replace('black', 'white');

	  } else {
		    // Get the style element from the first theme
			const styleElement = matrixWrapper.querySelector('style');
			styleElement.textContent = firstTheme;
			stopcolor = "#c4c1c0"
			startcolor = "gray"
			const cardStats = document.getElementById('cardStats');

			// Get ALL elements inside cardStats
			const allElements = cardStats.getElementsByTagName('*');

			// Loop through and change each element
			for (let element of allElements) {
				element.style.color = 'gray';
			}
			const controls = document.querySelector('.hilo-game-controls');
			const allElements2 = controls.getElementsByTagName('button');

			// Loop through and change each element
			for (let element2 of allElements2) {
				element2.style.background = '#4f4f4d';
			}
			
			
			const allCards = document.querySelectorAll('.card-wrapper .card');
			allCards.forEach(card => {
				card.style.backgroundColor = '#2f3542';
				card.style.color = '#ffffff';
			});

			
				const card1 = document.querySelector('.current-card-display .card');

				// Or using replace() if supported
				card1.classList.replace('white', 'black');

	  }
	  
  
	  
	  setTimeout(() => {
    // Try the direct method first
    //setGuessOverlayGrayDirectly();
    
    // Also update any existing elements
    updateExistingGuessOverlays();
		
		// Set up a mutation observer to update new elements
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					updateExistingGuessOverlays();
				}
			});
		});
		
		// Start observing the cards container
		const cardsContainer = document.getElementById('cardsContainer');
		if (cardsContainer) {
			observer.observe(cardsContainer, {
				childList: true,
				subtree: true
			});
		}
	}, 300); 
	  
	  document.getElementById('startBtn').style.color = stopcolor
		// Optional: Force a re-render to ensure changes take effect
		document.body.style.display = 'none';
		document.body.offsetHeight; // Trigger reflow
		document.body.style.display = '';
  }


function makeCurrentCardClickable() {
    const currentCardDisplay = document.getElementById('currentCardDisplay');
    
    // Add click event to the display area
    currentCardDisplay.addEventListener('click', function(e) {
        // Don't trigger if clicking on child elements that have their own handlers
        if (e.target.classList.contains('card') || 
            e.target.classList.contains('card-placeholder') ||
            e.target.closest('.card') ||
            this === e.target) {
            
            if (!running) {
                // Get random card
				stop()
                
                // Reset and show new card
                resetCards();
                //feedCard(startcard, 1, null, null, 1);
                 hiloBet(nextbet, startcard);
                // Log the action
                
                
                // If you want to immediately start a bet with this card
                // Uncomment the line below:
                // if (game === "hilo") hiloBet(nextbet, startcard);
            } else {
                //log("Cannot change card while bot is running");
            }
        }
    });
    
    // Add hover indication
    currentCardDisplay.style.cursor = 'pointer';
    currentCardDisplay.title = "Click to start new game";
}
updateCurrentCardDisplay(startcard, 0, false)
// Call this function after initializing the HILO section
makeCurrentCardClickable();

function handleClick() {
    //console.log('Button clicked!');
	if (!running) {
		
		 const randomCard = drawRandomCard();
                const newStartCard = {
                    rank: randomCard.value, 
                    suit: randomCard.suit === '♠' ? 'S' : 
                          randomCard.suit === '♥' ? 'H' :
                          randomCard.suit === '♦' ? 'D' : 'C'
                };
                
                // Update global startcard variable
                startcard = newStartCard;
         updateCurrentCardDisplay(startcard, 0, false);
    }
}

function feedableKenoResult(selectedNumbers, resultNumbers, risk, payoutMultiplier) {
    
    
    // Store the results in keno variables (should already be 0-39 from API)
    kenoSelectedNumbers = [...selectedNumbers].sort((a, b) => a - b);
    kenoResults = [...resultNumbers].sort((a, b) => a - b);
    kenoLastResults = [...kenoResults];
    
    // Set risk level if valid
    const validRisks = ['low', 'classic', 'medium', 'high'];
    if (validRisks.includes(risk.toLowerCase())) {
        setRiskLevel(risk.toLowerCase());
    } else {
        setRiskLevel('classic');
    }
    
    // Calculate matches
    kenoMatches = kenoSelectedNumbers.filter(num => kenoResults.includes(num)).length;
    kenoDisplayingMatch = true;
    
    // Update all UI elements
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Display the results - convert to display numbers (1-40)
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '';
        
        kenoResults.forEach((number, index) => {
            
                const resultNumber = document.createElement('div');
                resultNumber.className = 'keno-result-number';
                resultNumber.textContent = number + 1; // Convert 0-39 to 1-40 for display
                
                if (kenoSelectedNumbers.includes(number)) {
                    resultNumber.classList.add('match');
                }
                
                resultNumbersContainer.appendChild(resultNumber);
                
                // Update tile display
                updateKenoSelectionDisplay();
                
                if (index === kenoResults.length - 1) {
                    
                        updateMultipliersRow();
                        //log(`Keno Feed: Selected ${kenoSelectedNumbers.length} numbers, matched ${kenoMatches}. Payout: ${payoutMultiplier}x`);
                    
                }
            
        });
    }
    
    //log(`Keno results fed: ${selectedNumbers.length} selected, ${resultNumbers.length} drawn, ${kenoMatches} matches, ${risk} risk, ${payoutMultiplier}x payout`);
}

// First, update the changegame function to include Keno
let kenoDisplayingMatch = false;

// Add Keno CSS styles
const kenoStyles = document.createElement('style');
kenoStyles.textContent = `
    .keno-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .keno-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .keno-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .keno-controls {
        display: flex;
        gap: 6px;
    }

    .keno-content-wrapper {
        display: flex;
        gap: 8px;
        align-items: flex-start;
    }

    .keno-board-container {
        flex: 1;
    }

    .keno-board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 3px;
        background: rgba(59, 58, 57, 0.9);
        padding: 6px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 510px;
        height: 300px;
        overflow: hidden;
    }

    .keno-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(91, 90, 89, 0.8);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 2px;
        color: #c4c1c0;
        font-weight: bold;
        font-size: 10px;
        cursor: pointer;
        transition: all 0.15s ease;
        user-select: none;
        min-height: 0;
        min-width: 0;
    }

    .keno-tile:hover {
        background: rgba(196, 193, 192, 0.2);
        transform: scale(1.02);
    }

    .keno-tile.selected {
        background: rgba(178, 79, 232, 0.3);
        border-color: #9f0eed;
        color: #3b82f6;
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
    }

    .keno-tile.winning {
        background: rgba(46, 213, 115, 0.5);
        border-color: #0af26a;
        color: #2ed573;
        box-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
        animation: pulse 1s infinite;
    }

    .keno-tile.result {
        background: rgba(92, 90, 90, 0.3);
        border-color: #7d7a7b;
        color: #ababab;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .keno-side-panel {
        width: 180px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .keno-side-buttons {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .keno-btn {
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
    }

    .keno-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .keno-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .keno-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .keno-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #eb4034;
        color: #ff4757;
    }

    .keno-btn.auto {
        background: rgba(59, 130, 246, 0.1);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .keno-multipliers-container {
        margin-top: 8px;
    }

    .keno-multipliers {
        margin-bottom: 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        overflow: hidden;
    }

    .multipliers-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 6px;
        background: rgba(59, 58, 57, 0.95);
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .multipliers-title {
        color: #c4c1c0;
        font-weight: bold;
        font-size: 10px;
    }

    .multipliers-risks {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 4px;
    }

    .risk-btn {
        padding: 2px 6px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 2px;
        background: rgba(59, 58, 57, 0.8);
        color: rgba(196, 193, 192, 0.7);
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        flex: 1;
        min-width: 40px;
    }

    .risk-btn:hover {
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
    }

    .risk-btn.active {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .multipliers-row {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 6px;
        justify-content: center;
        align-items: center;
        min-height: 60px;
    }

    .multiplier-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        padding: 4px 3px;
        background: rgba(59, 58, 57, 0.6);
        border-radius: 3px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        transition: all 0.15s ease;
    }

    .multiplier-item.current-selection {
        background: rgba(59, 130, 246, 0.15);
        border-color: rgba(59, 130, 246, 0.3);
    }

    .multiplier-item.current-match {
        background: rgba(46, 213, 115, 0.2);
        border-color: rgba(46, 213, 115, 0.4);
        transform: scale(1.05);
        box-shadow: 0 0 5px rgba(46, 213, 115, 0.2);
    }

    .hit-count {
        color: rgba(196, 193, 192, 0.9);
        font-size: 9px;
        font-weight: bold;
        margin-bottom: 1px;
    }

    .multiplier-value {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
    }

    .multiplier-amount {
        color: #2ed573;
    }

    .multiplier-amount.zero {
        color: rgba(255, 71, 87, 0.6);
    }

    .multiplier-x {
        color: rgba(196, 193, 192, 0.6);
        font-size: 9px;
        margin-left: 1px;
    }

    .selection-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0 0 0;
        margin-top: 2px;
        border-top: 1px solid rgba(196, 193, 192, 0.1);
    }

    .selection-text {
        color: rgba(196, 193, 192, 0.7);
        font-size: 8px;
    }

    .current-matches {
        color: #2ed573;
        font-weight: bold;
        font-size: 9px;
        margin-top: 1px;
    }

    .keno-selection-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding: 6px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
    }

    .selected-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        max-width: 60%;
    }

    .selected-number {
        background: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
        padding: 2px 4px;
        border-radius: 2px;
        font-size: 9px;
        font-weight: bold;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }

    .keno-counter {
        font-size: 11px;
        color: #c4c1c0;
        font-weight: bold;
    }

    .keno-counter span {
        color: #3b82f6;
        font-size: 12px;
    }

    .keno-results {
        background: rgba(59, 58, 57, 0.3);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        margin-bottom: 8px;
    }

    .keno-results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .keno-results-title {
        color: #c4c1c0;
        font-weight: bold;
        font-size: 11px;
    }

    .keno-result-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: center;
        min-height: 26px;
    }

    .keno-result-number {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 71, 87, 0.2);
        border: 1px solid #ff4757;
        border-radius: 50%;
        color: #ff4757;
        font-weight: bold;
        font-size: 10px;
        animation: resultPop 0.3s ease-out;
    }

    .keno-result-number.match {
        background: rgba(46, 213, 115, 0.3);
        border-color: #2ed573;
        color: #2ed573;
        transform: scale(1.06);
    }

    @keyframes resultPop {
        0% { transform: scale(0); }
        70% { transform: scale(1.06); }
        100% { transform: scale(1); }
    }

    .keno-game-info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
        margin-bottom: 8px;
    }

    .keno-info-box {
        background: rgba(59, 58, 57, 0.3);
        padding: 6px;
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        text-align: center;
    }

    .keno-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
        margin-bottom: 2px;
    }

    .keno-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .keno-info-value.win {
        color: #2ed573;
    }

    .keno-info-value.lose {
        color: #ff4757;
    }

    .match-indicator {
        background: rgba(46, 213, 115, 0.2);
        color: #2ed573;
        border: 1px solid rgba(46, 213, 115, 0.3);
    }

    /* Dark theme adjustments */
    .dark .keno-tile {
        background: rgba(255, 255, 255, 0.05);
        color: #000000;
    }

    .dark .keno-tile:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .dark .keno-tile.selected {
        background: rgba(59, 130, 246, 0.2);
        color: #000000;
    }

    .dark .keno-tile.winning {
        background: rgba(10, 242, 106, 0.3);
        color: #000000;
    }

    .dark .keno-tile.result {
        background: rgba(255, 71, 87, 0.2);
        color: #000000;
    }

    .dark .keno-selection-info,
    .dark .keno-results,
    .dark .keno-info-box,
    .dark .keno-multipliers {
        background: rgba(255, 255, 255, 0.05);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .keno-section {
            max-width: 100%;
            padding: 6px;
        }
        
        .keno-content-wrapper {
            flex-direction: column;
        }
        
        .keno-side-panel {
            width: 100%;
        }
        
        .keno-board {
            width: 100%;
            height: 300px;
            max-width: 100%;
            gap: 2px;
            padding: 4px;
        }

        .keno-tile {
            font-size: 9px;
        }

        .multiplier-item {
            min-width: 35px;
            padding: 3px 2px;
        }

        .hit-count {
            font-size: 8px;
        }

        .multiplier-value {
            font-size: 9px;
        }

        .keno-game-info {
            grid-template-columns: repeat(2, 1fr);
        }

        .keno-buttons {
            flex-direction: column;
        }

        .selected-numbers {
            max-width: 50%;
        }
    }

    @media (max-width: 480px) {
        .keno-board {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(10, 1fr);
            height: 400px;
            gap: 1px;
            padding: 3px;
        }

        .keno-tile {
            font-size: 8px;
        }

        .multiplier-item {
            min-width: 30px;
            padding: 2px 1px;
        }

        .hit-count {
            font-size: 7px;
        }

        .multiplier-value {
            font-size: 8px;
        }

        .keno-game-info {
            grid-template-columns: 1fr;
        }

        .selected-numbers {
            max-width: 40%;
        }
    }
`;

document.head.appendChild(kenoStyles);

// Keno Game Variables
let kenoSelectedNumbers = [];
let kenoResults = [];
let kenoLastResults = [];
let kenoGameActive = false;
let kenoMatches = 0;
let currentRiskLevel = 'classic';

// Define risk multipliers based on your template
const riskMultipliers = {
    low: [
        [0.7, 1.85],
        [0, 2, 3.80],
        [0, 1.10, 1.38, 26],
        [0, 0, 2.20, 7.90, 90],
        [0, 0, 1.50, 4.20, 13, 300],
        [0, 0, 1.10, 2, 6.20, 100, 700],
        [0, 0, 1.10, 1.60, 3.50, 15, 225, 700],
        [0, 0, 1.10, 1.50, 2, 5.50, 39, 100, 800],
        [0, 0, 1.10, 1.30, 1.70, 2.50, 7.50, 50, 250, 1000],
        [0, 0, 1.10, 1.20, 1.30, 1.80, 3.50, 13, 50, 250, 1000]
    ],
    classic: [
        [0, 3.96],
        [0, 1.90, 4.50],
        [0, 1.00, 3.10, 10.40],
        [0, 0.80, 1.80, 5.00, 22.5],
        [0, 0.25, 1.40, 4.10, 16.5, 36],
        [0, 0, 1.00, 3.68, 7, 16.5, 40],
        [0, 0, 0.47, 3.00, 4.50, 14, 31, 60],
        [0, 0, 0, 2.20, 4, 13, 22, 55, 70],
        [0, 0, 0, 1.55, 3, 8, 15, 44, 60, 85],
        [0, 0, 0, 1.40, 2.25, 4.5, 8, 17, 50, 80, 100]
    ],
    medium: [
        [0.4, 2.75],
        [0, 1.8, 5.10],
        [0, 0, 2.8, 50],
        [0, 0, 1.7, 10, 100],
        [0, 0, 1.40, 4, 14, 390],
        [0, 0, 0, 3, 9, 180, 710],
        [0, 0, 0, 2, 7, 30, 400, 800],
        [0, 0, 0, 2, 4, 11, 67, 400, 900],
        [0, 0, 0, 2, 2.5, 5, 15, 100, 500, 1000],
        [0, 0, 0, 1.60, 2, 4, 7, 26, 100, 500, 1000]
    ],
    high: [
        [0, 3.96],
        [0, 0, 17.10],
        [0, 0, 0, 81.5],
        [0, 0, 0, 10, 259],
        [0, 0, 0, 4.5, 48, 450],
        [0, 0, 0, 0, 11, 350, 710],
        [0, 0, 0, 0, 7, 90, 400, 800],
        [0, 0, 0, 0, 5, 20, 270, 600, 900],
        [0, 0, 0, 0, 4, 11, 56, 500, 800, 1000],
        [0, 0, 0, 0, 3.5, 8, 13, 63, 500, 800, 1000]
    ]
};

// Create Keno section and add it to the console tab
function createKenoSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    // Create Keno section - insert after the top-bar
    const topBar = document.querySelector('.top-bar');
    const kenoSection = document.createElement('div');
    kenoSection.className = 'keno-section';
    kenoSection.style.display = 'none'; // Hidden by default
    kenoSection.innerHTML = `
        <div class="keno-content-wrapper">
            <div class="keno-board-container">
                <div class="keno-board" id="kenoBoard">
                    <!-- Keno tiles (1-40) will be generated here -->
                </div>
                
                <!-- MULTIPLIERS SECTION -->
                <div class="keno-multipliers-container">
                    <div class="keno-multipliers">
                        <div class="multipliers-risks">
                            <button class="risk-btn" data-risk="low">LOW</button>
                            <button class="risk-btn active" data-risk="classic">CLASSIC</button>
                            <button class="risk-btn" data-risk="medium">MEDIUM</button>
                            <button class="risk-btn" data-risk="high">HIGH</button>
                        </div>
                        <div class="multipliers-row" id="kenoMultipliersRow">
                            <!-- Multipliers will be populated here based on selection -->
                            <div class="multiplier-item">
                                <div class="hit-count">0</div>
                                <div class="multiplier-value">
                                    <span class="multiplier-amount zero">0</span>
                                    <span class="multiplier-x">x</span>
                                </div>
                            </div>
                            <div class="multiplier-item">
                                <div class="hit-count">1</div>
                                <div class="multiplier-value">
                                    <span class="multiplier-amount">1.85</span>
                                    <span class="multiplier-x">x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="keno-side-panel">
                <div class="keno-side-buttons">
                    <button class="keno-btn play" id="kenoPlayBtn">PLAY KENO</button>
                    <button class="keno-btn clear" id="kenoClearBtn">CLEAR SELECTION</button>
                    <button class="keno-btn auto" id="kenoAutoBtn">AUTO SELECT</button>
                </div>
                
                <div class="keno-selection-info">
                    <div class="selected-numbers" id="kenoSelectedNumbers">
                        <div class="selected-number">No numbers selected</div>
                    </div>
                    <div class="keno-counter">
                        Selected: <span id="kenoSelectedCount">0</span>/10
                    </div>
                </div>
                
                <div class="keno-results">
                    <div class="keno-results-header">
                        <div class="keno-results-title">WINNING NUMBERS</div>
                    </div>
                    <div class="keno-result-numbers" id="kenoResultNumbers">
                        <div class="keno-result-number">-</div>
                    </div>
                </div>
                
                <div class="keno-game-info">
                    <div class="keno-info-box">
                        <div class="keno-info-label">MATCHES</div>
                        <div class="keno-info-value" id="kenoCurrentMatches">0</div>
                    </div>
                    <div class="keno-info-box">
                        <div class="keno-info-label">SELECTED</div>
                        <div class="keno-info-value" id="kenoCurrentSelection">0</div>
                    </div>
                    <div class="keno-info-box">
                        <div class="keno-info-label">RISK</div>
                        <div class="keno-info-value" id="kenoCurrentRisk">CLASSIC</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(kenoSection, topBar.nextSibling);
    
    // Initialize Keno board
    initializeKenoBoard();
    
    // Initialize multipliers row for 0 selected (default)
    updateMultipliersRow();
    
    // Update selection info
    updateSelectionInfo();
    
    // Add event listeners
    document.getElementById('kenoClearBtn')?.addEventListener('click', clearKenoSelection);
    document.getElementById('kenoPlayBtn')?.addEventListener('click', playKenoGame);
    document.getElementById('kenoAutoBtn')?.addEventListener('click', autoSelectKenoNumbers);
    
    // Add event listeners for risk buttons
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setRiskLevel(this.dataset.risk);
        });
    });
}

// Set risk level and update multipliers
function setRiskLevel(risk) {
    currentRiskLevel = risk;
    
    // Update active button
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.risk === risk);
    });
    
    // Update risk display
    const riskElement = document.getElementById('kenoCurrentRisk');
    if (riskElement) {
        riskElement.textContent = risk.toUpperCase();
    }
    
    // Update multipliers row
    updateMultipliersRow();
}

// Update multipliers row based on current risk level and selected tiles
function updateMultipliersRow() {
    const multipliersRow = document.getElementById('kenoMultipliersRow');
    if (!multipliersRow) return;
    
    const selectedCount = kenoSelectedNumbers.length;
    const multipliers = riskMultipliers[currentRiskLevel];
    
    multipliersRow.innerHTML = '';
    
    // Only show multipliers if we have a selection
    if (selectedCount > 0 && selectedCount <= 10) {
        const currentMultipliers = multipliers[selectedCount - 1];
        
        // Create multiplier items for all possible hits (0 to selectedCount)
        for (let hitCount = 0; hitCount < currentMultipliers.length; hitCount++) {
            const multiplierItem = document.createElement('div');
            multiplierItem.className = 'multiplier-item';
            multiplierItem.dataset.hitCount = hitCount;
            
            // Get multiplier value
            const multiplierValue = currentMultipliers[hitCount];
            
            // Add hit count
            const hitCountElement = document.createElement('div');
            hitCountElement.className = 'hit-count';
            hitCountElement.textContent = hitCount;
            
            // Add multiplier value with "x"
            const multiplierValueElement = document.createElement('div');
            multiplierValueElement.className = 'multiplier-value';
            
            const amountSpan = document.createElement('span');
            amountSpan.className = multiplierValue === 0 ? 'multiplier-amount zero' : 'multiplier-amount';
            
            // Format multiplier value
            if (multiplierValue === 0) {
                amountSpan.textContent = '0';
            } else if (multiplierValue >= 1000) {
                amountSpan.textContent = multiplierValue.toFixed(0);
            } else if (multiplierValue >= 100) {
                amountSpan.textContent = multiplierValue.toFixed(1);
            } else if (multiplierValue >= 10) {
                amountSpan.textContent = multiplierValue.toFixed(2);
            } else {
                amountSpan.textContent = multiplierValue.toFixed(2);
            }
            
            const xSpan = document.createElement('span');
            xSpan.className = 'multiplier-x';
            xSpan.textContent = 'x';
            
            multiplierValueElement.appendChild(amountSpan);
            multiplierValueElement.appendChild(xSpan);
            
            multiplierItem.appendChild(hitCountElement);
            multiplierItem.appendChild(multiplierValueElement);
            
            // Highlight current match count only when displaying results
            if (kenoDisplayingMatch && hitCount === kenoMatches) {
                multiplierItem.classList.add('current-match');
            }
            
            multipliersRow.appendChild(multiplierItem);
        }
    } else {
        // Show default/placeholder when no selection
        const placeholder = document.createElement('div');
        placeholder.className = 'multiplier-item';
        placeholder.style.width = '100%';
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '12px';
        placeholder.style.color = 'rgba(196, 193, 192, 0.7)';
        placeholder.style.fontSize = '10px';
        placeholder.textContent = 'Select 1-10 tiles to see multipliers';
        multipliersRow.appendChild(placeholder);
    }
}

// Update selection info display
function updateSelectionInfo() {
    const currentSelectionElement = document.getElementById('kenoCurrentSelection');
    const currentMatchesElement = document.getElementById('kenoCurrentMatches');
    
    if (currentSelectionElement) {
        currentSelectionElement.textContent = kenoSelectedNumbers.length;
    }
    
    if (currentMatchesElement) {
        currentMatchesElement.textContent = kenoMatches;
        currentMatchesElement.className = kenoMatches > 0 ? 'keno-info-value win' : 'keno-info-value';
    }
}

// Initialize Keno board with 40 tiles
function initializeKenoBoard() {
    const kenoBoard = document.getElementById('kenoBoard');
    if (!kenoBoard) return;
    
    kenoBoard.innerHTML = '';
    
    // Create 40 tiles - display 1-40 but store 0-39 internally
    for (let i = 0; i < 40; i++) {
        const tile = document.createElement('div');
        tile.className = 'keno-tile';
        tile.textContent = i + 1; // Display 1-40 to user
        tile.dataset.number = i; // Store 0-39 internally
        
        tile.addEventListener('click', () => toggleKenoNumber(i));
        
        kenoBoard.appendChild(tile);
    }
    
    updateKenoSelectionDisplay();
}

// Toggle number selection
function toggleKenoNumber(number) {
    if (kenoGameActive) return;
    
    const index = kenoSelectedNumbers.indexOf(number);
    
    if (index === -1) {
        // Add number if not already selected and less than 10
        if (kenoSelectedNumbers.length < 10) {
            kenoSelectedNumbers.push(number);
            kenoSelectedNumbers.sort((a, b) => a - b);
        }
    } else {
        // Remove number if already selected
        kenoSelectedNumbers.splice(index, 1);
    }
    
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
}



// Update Keno selection display
function updateKenoSelectionDisplay() {
    const selectedNumbersContainer = document.getElementById('kenoSelectedNumbers');
    const selectedCountElement = document.getElementById('kenoSelectedCount');
    const kenoBoard = document.getElementById('kenoBoard');
    
    if (!selectedNumbersContainer || !selectedCountElement || !kenoBoard) return;
    
    // Update selected count
    const count = kenoSelectedNumbers.length;
    selectedCountElement.textContent = count;
    
    // Update selected numbers display - show display numbers (1-40)
    if (count === 0) {
        selectedNumbersContainer.innerHTML = '<div class="selected-number">No numbers selected</div>';
    } else {
        selectedNumbersContainer.innerHTML = kenoSelectedNumbers
            .map(num => `<div class="selected-number">${num + 1}</div>`) // Convert 0-39 to 1-40 for display
            .join('');
    }
    
    // Update tile states
    const tiles = kenoBoard.querySelectorAll('.keno-tile');
    tiles.forEach(tile => {
        const tileNumber = parseInt(tile.dataset.number); // This is 0-39
        
        // Remove all state classes
        tile.classList.remove('selected', 'winning', 'result');
        
        // Add selected class if number is selected
        if (kenoSelectedNumbers.includes(tileNumber)) {
            tile.classList.add('selected');
        }
        
        // Add result classes if we have results
        if (kenoResults.includes(tileNumber)) {
            if (kenoSelectedNumbers.includes(tileNumber)) {
                tile.classList.add('winning');
            } else {
                tile.classList.add('result');
            }
        }
    });
    
    // Update play button state
    const playBtn = document.getElementById('kenoPlayBtn');
    if (playBtn) {
        playBtn.disabled = count === 0 || kenoGameActive;
    }
}

// Clear Keno selection
function clearKenoSelection() {
    if (kenoGameActive) return;
    
    kenoSelectedNumbers = []; // Already 0-39 compatible
    kenoMatches = 0;
    kenoResults = [];
    kenoDisplayingMatch = false;
    
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Clear results display
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}
// Auto-select random Keno numbers
function autoSelectKenoNumbers() {
    if (kenoGameActive) return;
    
    // Clear existing selection
    kenoSelectedNumbers = [];
    kenoMatches = 0;
    kenoResults = [];
    kenoDisplayingMatch = false;
    
    // Select random number of numbers (1-10)
    const numToSelect = 10;
    
    // Create array of all possible numbers (0-39)
    const allNumbers = Array.from({ length: 40 }, (_, i) => i);
    
    // Shuffle array and take first numToSelect numbers
    for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
    
    kenoSelectedNumbers = allNumbers.slice(0, numToSelect).sort((a, b) => a - b);
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Clear results display
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}

// Play Keno game
function playKenoGame() {
    if (kenoSelectedNumbers.length === 0 || kenoGameActive) return;
    
    // Get bet amount from your system
    const betamount = basebet;
    const numbers = [...kenoSelectedNumbers]; // Already 0-39 internally
    const risk = currentRiskLevel;
    
    // Call your kenobet function with 0-39
    kenobet(nextbet, numbers, risk);
    
    // Keep UI disabled while waiting for result
    kenoGameActive = true;
    document.getElementById('kenoPlayBtn').disabled = true;
    document.getElementById('kenoClearBtn').disabled = true;
    document.getElementById('kenoAutoBtn').disabled = true;
    
    // Log display numbers (1-40) for user feedback
    const displayNumbers = numbers.map(n => n + 1).join(', ');
    //log(`Placing Keno bet: ${numbers.length} numbers (${displayNumbers}), ${risk} risk, ${formatCurrency(betamount)}`);
}


// Animate Keno results display
function animateKenoResults() {
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (!resultNumbersContainer) return;
    
    // Clear container
    resultNumbersContainer.innerHTML = '';
    
    // Display each result number with delay
    kenoResults.forEach((number, index) => {
        
        const resultNumber = document.createElement('div');
        resultNumber.className = 'keno-result-number';
        resultNumber.textContent = number;
        
        // Check if this is a match with selected numbers
        if (kenoSelectedNumbers.includes(number)) {
            resultNumber.classList.add('match');
        }
        
        resultNumbersContainer.appendChild(resultNumber);
        
        // Update tile display
        updateKenoSelectionDisplay();
        
        // If this is the last result, set displaying match flag and update
        if (index === kenoResults.length - 1) {
            setTimeout(() => {
                kenoDisplayingMatch = true; // Set flag to show current match
                updateMultipliersRow(); // Update with current match highlight
                finalizeKenoGame();
            }, 1); // Small delay after last number appears
        } // 100ms delay between each number
    });
}

// Finalize Keno game
function finalizeKenoGame() {
    // Update multipliers row with current match highlight
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Re-enable buttons
    document.getElementById('kenoPlayBtn').disabled = false;
    document.getElementById('kenoClearBtn').disabled = false;
    document.getElementById('kenoAutoBtn').disabled = false;
    
    kenoGameActive = false;
    
    // Log the result
    //log(`Keno: Selected ${kenoSelectedNumbers.length} numbers, matched ${kenoMatches}. ${kenoMatches > 0 ? 'WIN!' : 'LOSE'}`);
}

// Calculate Keno payout based on current risk level
function calculateKenoPayout(matches, numbersSelected) {
    if (numbersSelected < 1 || numbersSelected > 10) return 0;
    
    const multipliers = riskMultipliers[currentRiskLevel];
    if (numbersSelected - 1 < multipliers.length && matches < multipliers[numbersSelected - 1].length) {
        return multipliers[numbersSelected - 1][matches];
    }
    
    return 0;
}

// Clear Keno results display
function clearKenoResultsDisplay() {
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}

// Update Keno for dark theme
function updateKenoForDarkTheme() {
    const kenoSection = document.querySelector('.keno-section');
    if (!kenoSection) return;
    
    if (dark) {
        kenoSection.classList.add('dark');
    } else {
        kenoSection.classList.remove('dark');
    }
}

// Initialize Keno when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Keno section
    createKenoSection();
    
    // Add Keno to available functions
    availableFunctions['keno'] = () => {
        changegame('keno');
        return 'Switched to Keno game';
    };
    
    // Add feedable function to available functions
    availableFunctions['feedKeno'] = (selectedNumbers, resultNumbers, risk, payoutMultiplier) => {
        // Parse arrays if they're strings
        let selectedArr, resultArr;
        
        try {
            selectedArr = Array.isArray(selectedNumbers) ? selectedNumbers : JSON.parse(selectedNumbers);
            resultArr = Array.isArray(resultNumbers) ? resultNumbers : JSON.parse(resultNumbers);
        } catch (e) {
            return 'Error: Invalid array format. Use [1,2,3] format.';
        }
        
        feedableKenoResult(selectedArr, resultArr, risk, payoutMultiplier);
        return `Keno results fed: ${selectedArr.length} selected, ${resultArr.length} drawn`;
    };
    
    // Update Keno display when theme changes
    
});

function displayToInternalNumber(displayNum) {
    // Convert 1-40 to 0-39
    return displayNum - 1;
}

function internalToDisplayNumber(internalNum) {
    // Convert 0-39 to 1-40
    return internalNum + 1;
}
// Also call createKenoSection when your bot initializes
setTimeout(createKenoSection, 100);

// Replace the existing minesStyles and createMinesSection functions with these corrected versions:


const minesStyles = document.createElement('style');
minesStyles.textContent = `
    .mines-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .mines-content-wrapper {
        display: flex;
        gap: 15px;
        align-items: flex-start;
    }

    .mines-left-panel {
        flex: 1;
    }

    .mines-right-panel {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .mines-board {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 4px;
        background: rgba(59, 58, 57, 0.9);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .mines-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(91, 90, 89, 0.8);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 4px;
        color: #c4c1c0;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;
        position: relative;
        min-height: 50px;
    }

    .mines-tile:hover:not(.revealed):not(.mine):not(.gem) {
        background: rgba(196, 193, 192, 0.2);
        transform: scale(1.02);
    }

    .mines-tile.selected {
        background: rgba(59, 130, 246, 0.3);
        border-color: #3b82f6;
        color: #3b82f6;
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
    }

    .mines-tile.revealed {
        background: rgba(59, 58, 57, 0.6);
        border-color: rgba(196, 193, 192, 0.2);
        cursor: default;
    }

    .mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        border-color: #ff4757 !important;
        color: #ff4757;
        animation: minePulse 0.5s ease-in-out;
    }

    .mines-tile.mine::before {
        content: "X";
        font-size: 18px;
        font-weight: bold;
    }

    .mines-tile.gem {
        background: rgba(46, 213, 115, 0.5) !important;
        border-color: #2ed573 !important;
        color: #2ed573;
    }

    .mines-tile.gem::before {
        content: "✓";
        font-size: 18px;
        font-weight: bold;
    }

    @keyframes minePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .mines-tile .tile-number {
        font-size: 12px;
        color: rgba(196, 193, 192, 0.8);
        position: absolute;
        top: 2px;
        left: 4px;
    }

    .mines-side-buttons {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .mines-btn {
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
    }

    .mines-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .mines-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .mines-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .mines-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .mines-btn.cashout {
        background: rgba(255, 184, 46, 0.1);
        border-color: #ffb82e;
        color: #ffb82e;
    }

    .mines-settings {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin-bottom: 8px;
    }

    .mines-setting {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .mines-setting label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
    }

    .mines-setting select,
    .mines-setting input {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 3px;
        color: #c4c1c0;
        padding: 4px 6px;
        font-size: 10px;
        outline: none;
    }

    .mines-setting select:focus,
    .mines-setting input:focus {
        border-color: #3b82f6;
    }

    .mines-multiplier-display {
        font-size: 24px;
        font-weight: bold;
        color: #ffb82e;
        text-shadow: 0 0 10px rgba(255, 184, 46, 0.5);
        text-align: center;
        margin: 15px 0;
        padding: 10px;
        background: rgba(59, 58, 57, 0.3);
        border-radius: 6px;
        border: 1px solid rgba(255, 184, 46, 0.3);
    }

    .mines-selected-display {
        margin-top: 8px;
        max-height: 100px;
        overflow-y: auto;
    }

    .mines-selected-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        margin-top: 4px;
    }

    .mines-selected-number {
        background: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: bold;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }

    /* Dark theme adjustments */
    .dark .mines-tile {
        background: rgba(255, 255, 255, 0.05);
        color: #000000;
    }

    .dark .mines-tile:hover:not(.revealed):not(.mine):not(.gem) {
        background: rgba(0, 0, 0, 0.1);
    }

    .dark .mines-tile.selected {
        background: rgba(59, 130, 246, 0.2);
        color: #000000;
    }

    .dark .mines-tile.revealed {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        color: #ff4757 !important;
    }

    .dark .mines-multiplier-display {
        background: rgba(255, 255, 255, 0.05);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .mines-section {
            max-width: 100%;
            padding: 6px;
        }
        
        .mines-content-wrapper {
            flex-direction: column;
        }
        
        .mines-right-panel {
            width: 100%;
        }
        
        .mines-board {
            width: 280px;
            height: 280px;
            gap: 3px;
            padding: 6px;
        }

        .mines-tile {
            min-height: 45px;
            font-size: 12px;
        }

        .mines-tile .tile-number {
            font-size: 10px;
        }

        .mines-settings {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        .mines-board {
            width: 250px;
            height: 250px;
            gap: 2px;
            padding: 4px;
        }

        .mines-tile {
            min-height: 40px;
            font-size: 11px;
        }

        .mines-tile .tile-number {
            font-size: 9px;
        }

        .mines-btn {
            font-size: 10px;
            padding: 6px 8px;
        }
    }
	
	.mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        border-color: #ff4757 !important;
        color: #ff4757;
        animation: minePulse 0.5s ease-in-out;
    }

    .mines-tile.mine.clicked {
        background: rgba(217, 9, 9, 0.3) !important; /* Dark red for clicked bomb */
        border-color: #e65757 !important;
        color: #ff4757;
        animation: clickedMinePulse 0.5s ease-in-out;
    }

    @keyframes clickedMinePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
	


`;

document.head.appendChild(minesStyles);

/// Mines Game Variables
let minesSelectedNumbers = [];
let minesGameActive = false;
let minesRevealedCount = 0;
let currentMinesCount = 3;
let currentMinesMultiplier = 1.0;
let minesGameResult = null;
let minesBetActive = false;
let minesBoardState = Array(25).fill('hidden');
let actualMinePositions = [];
let lastClickedMine = null;
let currentGameIdentifier = null;
let isWaitingForResponse = false;


// Create Mines section and add it to the console tab
function createMinesSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const minesSection = document.createElement('div');
    minesSection.className = 'mines-section';
    minesSection.style.display = 'none';
    minesSection.innerHTML = `
        <div class="mines-content-wrapper">
            <div class="mines-left-panel">
                <div class="mines-board" id="minesBoard"></div>
            </div>
            
            <div class="mines-right-panel">
                <div class="mines-multiplier-display" id="minesCurrentMultiplier">1.0000x</div>
                
                <div class="mines-settings">
                    <div class="mines-setting">
                        <select id="minesCount">
                            ${Array.from({length: 24}, (_, i) => 
                                `<option value="${i + 1}" ${i + 1 === 3 ? 'selected' : ''}>${i + 1} Mine${i + 1 > 1 ? 's' : ''}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
                
                <div class="mines-side-buttons">
                    <button class="mines-btn play" id="minesPlayBtn">PICK RANDOM</button>
                    <button class="mines-btn cashout" id="minesCashoutBtn">CASHOUT</button>
                    <button class="mines-btn clear" id="minesClearBtn">PLACE BET</button>
                </div>
                
                <div class="mines-selected-display">
                    <div class="mines-info-label">SELECTED TILES</div>
                    <div class="mines-selected-numbers" id="minesSelectedNumbers">
                        <div class="mines-selected-number">None</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    topBar.parentNode.insertBefore(minesSection, topBar.nextSibling);
    
    initializeMinesBoard();
    updateMinesBoardDisplay();
    // Add event listeners
    document.getElementById('minesClearBtn')?.addEventListener('click', startMines);
    document.getElementById('minesPlayBtn')?.addEventListener('click', pickRandomTile);
    document.getElementById('minesCashoutBtn')?.addEventListener('click', minesCashout);
    document.getElementById('minesCount')?.addEventListener('change', function() {
        currentMinesCount = parseInt(this.value);
        //completeGameReset();
    });
}
// Calculate multiplier for Mines game
let usedNumbers = [];
const totalNumbers = 25;

function generateUniqueRandom() {
    // Reset if all numbers have been used
    if (usedNumbers.length >= totalNumbers) {
        usedNumbers = [];
    }
    
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * totalNumbers) + 1; // 1-25
    } while (usedNumbers.includes(randomNumber));
    
    usedNumbers.push(randomNumber);
    return randomNumber;
}

function pickRandomTile() { 
	const minesDiv = document.querySelectorAll('.mines-tile.mine');
	if (minesDiv.length > 0) {
		return;
	}
	if(usedNumbers.length > 24){
		//console.log('all numbers picked')
		return;
	}
    // Pick a random hidden tile
    const randomIndex = generateUniqueRandom() - 1;
	
	
    const tileIndex = randomIndex;
    
    // Temporarily show a "loading" state on the tile
    const tile = document.querySelector(`.mines-tile[data-index="${tileIndex}"]`);
    if (tile) {
        tile.classList.add('selected');
        tile.style.opacity = '0.7';
    }
  
    // Call minesNext with selected field (1-25 format)
    minesNext([tileIndex]);
}

// Update Mines board display based on current state





// Initialize Mines board with 25 tiles (1-25)
function initializeMinesBoard() {
    const minesBoard = document.getElementById('minesBoard');
    if (!minesBoard) return;
    
    minesBoard.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement('div');
        tile.className = 'mines-tile';
        tile.dataset.index = i;
        tile.dataset.number = i + 1;
        
        const tileNumber = document.createElement('div');
        tileNumber.className = 'tile-number';
        tileNumber.textContent = i + 1;
        tile.appendChild(tileNumber);
        
        // Add click event directly
        
        
        minesBoard.appendChild(tile);
    }
	
	const minesSelect = document.getElementById("minesCount");
	//let mines = parseInt(minesSelect.value);

	minesSelect.addEventListener("change", () => {
		mines = parseInt(minesSelect.value);
	});
    

}

function startMines() {

      minesStart(nextbet, mines);
   

}

// Update Mines board display based on current state


function handleTileClick(event) {
    
    const tile = event.currentTarget;
    const tileIndex = parseInt(tile.dataset.index);
    
    
    
    // Don't allow clicking on revealed tiles
    if (tile.classList.contains('revealed') || tile.classList.contains('gem') || 
        tile.classList.contains('mine')) {
        
        return;
    }
    
    // Add selected class immediately
    tile.classList.add('selected');

    
    // Add a visual indicator immediately
    tile.style.opacity = '0.7';
    
    // Get tile position (1-25)
    const tilePosition = tileIndex;
    usedNumbers.push(tilePosition);
    
    // Call minesNext with selected field
    minesNext([tilePosition]);
    

}

// Update Mines board display based on current state

function updateMinesBoardDisplay() {
    const minesBoard = document.getElementById('minesBoard');
    if (!minesBoard) return;
    
    usedNumbers = [];
    const tiles = minesBoard.querySelectorAll('.mines-tile');
    tiles.forEach((tile, index) => {
        // Save if this tile was just clicked/selected
        const wasSelected = tile.classList.contains('selected');
        
        // Remove all classes except tile-number
        tile.className = 'mines-tile';
        tile.style.opacity = '1';
        tile.style.backgroundColor = ''; // Reset debug color
        tile.dataset.index = index;
        tile.dataset.number = index + 1;
        
        // Ensure tile number exists
        let tileNumber = tile.querySelector('.tile-number');
        if (!tileNumber) {
            tileNumber = document.createElement('div');
            tileNumber.className = 'tile-number';
            tileNumber.textContent = index + 1;
            tile.innerHTML = '';
            tile.appendChild(tileNumber);
        } else {
            tileNumber.textContent = index + 1;
        }
        
        // Remove existing click event
        tile.addEventListener('click', handleTileClick);
        
        // Update based on state
        const state = minesBoardState[index];
        if (state === 'gem') {
            tile.classList.add('gem', 'revealed');
        } else if (state === 'mine') {
            tile.classList.add('mine', 'revealed');
        } else if (state === 'mine-clicked') {
            tile.classList.add('mine', 'clicked', 'revealed');
        } else if (minesBetActive && minesGameActive && minesGameResult === null) {
            // Hidden tile - make clickable if game is active and not ended
            
            // If this tile was just selected, keep the selected class
            if (wasSelected) {
               
                tile.classList.add('selected');
                tile.style.opacity = '0.7';
            }
            
            
        }
    });
}


// Initialize Mines when the page loads

createMinesSection();

function completeGameReset() {
    minesSelectedNumbers = [];
    minesGameActive = false;
    minesRevealedCount = 0;
    minesGameResult = null;
    minesBetActive = false;
    minesBoardState = Array(25).fill('hidden');
    actualMinePositions = [];
    
    // Reset UI
    document.getElementById('minesPlayBtn').disabled = false;
    document.getElementById('minesCashoutBtn').disabled = false;
    document.getElementById('minesClearBtn').disabled = false;
    
    updateMinesBoardDisplay()
}
// Helper function to manually trigger UI update (call this when you get API response)
function updateMinesUIFromResponse(response) {
    if (!response) {
		console.log('noo resp')
        return;
    }
	
	let resp = response.minesBet || response.minesNext || response.minesCashout || response.user.activeCasinoBet
	
	let rounds = resp.state.rounds;
	let mines = resp.state.mines;

	const multiplierElement = document.getElementById("minesCurrentMultiplier");
	multiplierElement.textContent = rounds[rounds.length - 1].payoutMultiplier.toFixed(4) + "x"

	if (!resp.active){
		
	}

	if (Array.isArray(mines)) {
		const tiles = minesBoard.querySelectorAll('.mines-tile');
		tiles.forEach((tile, index) => {
			tile.removeEventListener('click', handleTileClick);
		});
		
		// Add 'mine' or 'mine revealed' to each field in rounds
		rounds.forEach(round => {
			const fieldNumber = round.field;
			const tile = document.querySelector(`.mines-tile[data-index="${fieldNumber}"]`);
			if (!tile) return;

			if (mines.includes(fieldNumber)) {
				tile.classList.add('mine', 'clicked', 'revealed'); 
			} else {
				 // Clicked but not a mine
				
			}
		});

		// Add 'mine' to non-matching tiles (mines that were not revealed)
		mines.forEach(mineField => {
			// Skip already revealed tiles
			const alreadyRevealed = rounds.some(r => r.field === mineField);
			if (alreadyRevealed) return;

			const tile = document.querySelector(`.mines-tile[data-index="${mineField}"]`);
			if (!tile) return;

			tile.classList.add('mine'); // Non-revealed mine
		});
		
		rounds.forEach(round => {
			const { field, payoutMultiplier } = round;
			const tile = document.querySelector(`.mines-tile[data-index="${field}"]`);
			if (!tile) return;

			// Check if payoutMultiplier is greater than 1
			if (payoutMultiplier >= 1) {
				tile.classList.add('gem', 'revealed');
			}
		});
		
	} else {
		rounds.forEach(round => {
			const { field, payoutMultiplier } = round;
			const tile = document.querySelector(`.mines-tile[data-index="${field}"]`);
			if (!tile) return;

			// Check if payoutMultiplier is greater than 1
			if (payoutMultiplier >= 1) {
				tile.classList.add('gem', 'revealed');
			}
		});
		
	}
}

// Updated Baccarat CSS styles
const baccaratStyles = document.createElement('style');
baccaratStyles.textContent = `
    .baccarat-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .baccarat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .baccarat-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .baccarat-game-area {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .baccarat-betting-area {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
    }

    .betting-option {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    }

    .betting-option:hover {
        background: rgba(196, 193, 192, 0.1);
        transform: translateY(-2px);
    }

    .betting-option.active {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.player-bet {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.banker-bet {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.tie-bet {
        background: rgba(255, 165, 0, 0.2); 
        border-color: #ffa500;
        box-shadow: 0 0 8px rgba(255, 165, 0, 0.3);
    }

    .betting-option.winner {
        background: rgba(46, 213, 115, 0.3);
        border-color: #2ed573;
        box-shadow: 0 0 10px rgba(46, 213, 115, 0.5);
    }

    .betting-option .option-label {
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .betting-option .option-payout {
        color: #2ed573;
        font-size: 11px;
        font-weight: bold;
    }

    .betting-option .bet-amount {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(0, 0, 0, 0.6);
        color: #c4c1c0;
        font-size: 10px;
        padding: 2px 4px;
        border-radius: 3px;
        display: none;
    }

    .betting-option.active .bet-amount {
        display: block;
    }

    .cards-display-area {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
    }

    .player-area, .banker-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
    }

    .player-area.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .banker-area.active {
        border-color: #ff4757;
        background: rgba(255, 71, 87, 0.1);
    }

    /* Remove the area winner classes */
    .player-area.winner,
    .banker-area.winner {
        background: rgba(59, 58, 57, 0.9);
        border-color: rgba(196, 193, 192, 0.3);
        box-shadow: none;
    }

    .area-label {
        color: #c4c1c0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .cards-container {
        display: flex;
        gap: 5px;
        min-height: 100px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 5px;
        border-radius: 4px;
        border: 1px solid transparent;
        transition: all 0.3s ease;
    }

    /* Only color the cards container for winner */
    .cards-container.winner {
        background: rgba(46, 213, 115, 0.15);
        border-color: #2ed573;
        box-shadow: 0 0 10px rgba(46, 213, 115, 0.3);
    }

    /* HiLo-style cards */
    .baccarat-card {
        width: 60px;
        height: 80px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        border: 2px solid rgba(255, 255, 255, 0.1);
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .baccarat-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border-radius: 6px;
        z-index: 1;
    }

    .baccarat-card.new {
        animation: cardDeal 0.5s ease-out;
    }

    @keyframes cardDeal {
        0% {
            opacity: 0;
            transform: translateY(-20px) rotate(-5deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
    }

    /* HiLo-style card colors */
    .baccarat-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
        border-color: #ff9999;
    }

    .baccarat-card.black {
        background: linear-gradient(135deg, #1a1a1a, #333333);
        border-color: #666666;
    }

    .baccarat-card.red .card-rank,
    .baccarat-card.red .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .baccarat-card.black .card-rank,
    .baccarat-card.black .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .card-rank {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 2px;
        z-index: 2;
        position: relative;
        font-family: 'Arial', sans-serif;
    }

    .card-suit {
        font-size: 32px;
        z-index: 2;
        position: relative;
    }

    .empty-card {
        width: 60px;
        height: 80px;
        border-radius: 8px;
        border: 2px dashed rgba(196, 193, 192, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(196, 193, 192, 0.3);
        font-size: 24px;
        background: rgba(59, 58, 57, 0.5);
    }

    .total-score {
        margin-top: 8px;
        padding: 4px 8px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
    }

    .result-display {
        text-align: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        margin-top: 5px;
    }

    .result-text {
        color: #c4c1c0;
        font-size: 13px;
        font-weight: bold;
    }

    .result-text.win {
        color: #2ed573;
        text-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
    }

    .result-text.lose {
        color: #ff4757;
        text-shadow: 0 0 5px rgba(255, 71, 87, 0.5);
    }

    .baccarat-controls {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 10px;
    }

    .baccarat-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        min-width: 100px;
    }

    .baccarat-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .baccarat-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .baccarat-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .baccarat-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .baccarat-bet-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        margin-top: 8px;
    }

    .bet-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .bet-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
        margin-bottom: 2px;
    }

    .bet-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .bet-info-value.win {
        color: #2ed573;
    }

    .bet-info-value.lose {
        color: #ff4757;
    }

    .bet-amounts-display {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        margin-top: 5px;
        font-size: 10px;
        color: rgba(196, 193, 192, 0.8);
    }

    .bet-amount-item {
        text-align: center;
        flex: 1;
    }

    /* Dark theme adjustments */
    .dark .baccarat-section {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .betting-option,
    .dark .player-area,
    .dark .banker-area,
    .dark .result-display,
    .dark .baccarat-bet-info {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .baccarat-card {
        background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
        color: #000000;
    }

    .dark .baccarat-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
    }

    .dark .baccarat-card.black {
        background: linear-gradient(135deg, #333333, #444444);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .baccarat-betting-area,
        .cards-display-area {
            flex-direction: column;
            gap: 8px;
        }
        
        .betting-option,
        .player-area,
        .banker-area {
            width: 100%;
        }
        
        .baccarat-card {
            width: 50px;
            height: 70px;
        }
        
        .card-rank {
            font-size: 20px;
        }
        
        .card-suit {
            font-size: 24px;
        }
        
        .empty-card {
            width: 50px;
            height: 70px;
        }
        
        .baccarat-controls {
            flex-wrap: wrap;
        }
        
        .baccarat-btn {
            flex: 1;
            min-width: 80px;
        }
    }
`;

document.head.appendChild(baccaratStyles);

// Baccarat Game Variables
let baccaratBetType = {}; // Object to track multiple bets: {player: amount, banker: amount, tie: amount}
let baccaratGameActive = false;
let baccaratBetAmounts = {
    player: 0,
    banker: 0,
    tie: 0
};
let totalBetAmount = 0;
let baccaratResult = null;
let lastBaccaratResponse = null;

// Create Baccarat section and add it to the console tab
function createBaccaratSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const baccaratSection = document.createElement('div');
    baccaratSection.className = 'baccarat-section';
    baccaratSection.style.display = 'none';
    baccaratSection.innerHTML = `
        <div class="baccarat-game-area">
            <!-- Betting Area -->
            <div class="baccarat-betting-area">
                <div class="betting-option" data-bet="player" id="playerBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">PLAYER</div>
                    <div class="option-payout">1:1</div>
                </div>
                <div class="betting-option" data-bet="tie" id="tieBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">TIE</div>
                    <div class="option-payout">8:1</div>
                </div>
                <div class="betting-option" data-bet="banker" id="bankerBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">BANKER</div>
                    <div class="option-payout">0.95:1</div>
                </div>
            </div>
            
            <!-- Bet Amounts Summary -->
            <div class="bet-amounts-display" id="betAmountsSummary">
                <div class="bet-amount-item">Player: 0.00000000</div>
                <div class="bet-amount-item">Tie: 0.00000000</div>
				<div class="bet-amount-item">Banker: 0.00000000</div>
            </div>
            
            <!-- Cards Display Area -->
            <div class="cards-display-area">
                <div class="player-area" id="playerArea">
                    <div class="area-label">PLAYER</div>
                    <div class="cards-container" id="playerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                        <div class="empty-card">+</div>
                    </div>
                    <div class="total-score" id="playerScore">Score: -</div>
                </div>
                
                <div class="banker-area" id="bankerArea">
                    <div class="area-label">BANKER</div>
                    <div class="cards-container" id="bankerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                        <div class="empty-card">+</div>
                    </div>
                    <div class="total-score" id="bankerScore">Score: -</div>
                </div>
            </div>
            
            <!-- Result Display -->
            <div class="result-display">
                <div class="result-text" id="baccaratResult">Place your bet and click PLAY</div>
            </div>
            
            <!-- Controls -->
            <div class="baccarat-controls">
                <button class="baccarat-btn play" id="baccaratPlayBtn" disabled>PLAY BACCARAT</button>
                <button class="baccarat-btn clear" id="baccaratClearBtn">CLEAR ALL BETS</button>
            </div>
            
            <!-- Bet Info -->
            <div class="baccarat-bet-info">
                <div class="bet-info-item">
                    <div class="bet-info-label">TOTAL BET</div>
                    <div class="bet-info-value" id="totalBetAmount">0.00000000</div>
                </div>
                <div class="bet-info-item">
                    <div class="bet-info-label">WINNING BETS</div>
                    <div class="bet-info-value" id="winningBets">-</div>
                </div>
                <div class="bet-info-item">
                    <div class="bet-info-label">TOTAL PAYOUT</div>
                    <div class="bet-info-value" id="totalPayout">0.00000000</div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(baccaratSection, topBar.nextSibling);
    
    // Add event listeners
    document.querySelectorAll('.betting-option').forEach(option => {
        option.addEventListener('click', () => toggleBaccaratBet(option.dataset.bet));
    });
    
    document.getElementById('baccaratPlayBtn')?.addEventListener('click', playBaccaratGame);
    document.getElementById('baccaratClearBtn')?.addEventListener('click', clearBaccaratBet);
}

// Toggle Baccarat bet (allow multiple selections)
function toggleBaccaratBet(betType) {
    if (baccaratGameActive) return;
    
    const option = document.querySelector(`.betting-option[data-bet="${betType}"]`);
    const betAmount = nextbet; // Use current nextbet amount
    
    // Toggle the bet
    if (baccaratBetAmounts[betType] > 0) {
        // Remove bet
        baccaratBetAmounts[betType] = 0;
        option.classList.remove('active', `${betType}-bet`);
        option.querySelector('.bet-amount').textContent = '0';
    } else {
        // Add bet
        baccaratBetAmounts[betType] = betAmount;
        option.classList.add('active', `${betType}-bet`);
        option.querySelector('.bet-amount').textContent = betAmount.toFixed(2);
    }
    
    // Calculate total bet
    totalBetAmount = baccaratBetAmounts.player + baccaratBetAmounts.banker + baccaratBetAmounts.tie;
    
    // Update bet info
    updateBetInfoDisplay();
    
    // Enable/disable play button based on if any bets are placed
    document.getElementById('baccaratPlayBtn').disabled = totalBetAmount <= 0;
    
    // Update bet variables
    player = baccaratBetAmounts.player;
    banker = baccaratBetAmounts.banker;
    tie = baccaratBetAmounts.tie;
}

// Update bet information display
function updateBetInfoDisplay() {
    // Update bet amounts summary
    document.getElementById('betAmountsSummary').innerHTML = `
        <div class="bet-amount-item">Player: ${baccaratBetAmounts.player.toFixed(8)}</div>
        <div class="bet-amount-item">Tie: ${baccaratBetAmounts.tie.toFixed(8)}</div>
		<div class="bet-amount-item">Banker: ${baccaratBetAmounts.banker.toFixed(8)}</div>
    `;
    
    // Update total bet
    document.getElementById('totalBetAmount').textContent = totalBetAmount.toFixed(8);
}

// Clear all Baccarat bets
function clearBaccaratBet() {
    // Reset all bet amounts
    baccaratBetAmounts = betamount
    totalBetAmount = 0;
    baccaratGameActive = false;
    
    // Reset UI
    document.querySelectorAll('.betting-option').forEach(option => {
        option.classList.remove('active', 'player-bet', 'banker-bet', 'tie-bet', 'winner');
        //option.querySelector('.bet-amount').textContent = '0';
    });
    
    // Reset cards containers
    document.getElementById('playerCardsContainer').classList.remove('winner');
    document.getElementById('bankerCardsContainer').classList.remove('winner');
    
    document.getElementById('baccaratPlayBtn').disabled = true;
    
    // Reset bet info
    updateBetInfoDisplay();
    document.getElementById('winningBets').textContent = '-';
    document.getElementById('winningBets').className = 'bet-info-value';
    document.getElementById('totalPayout').textContent = '0.00000000';
    document.getElementById('totalPayout').className = 'bet-info-value';
    
    // Reset result display
    document.getElementById('baccaratResult').textContent = 'Place your bet and click PLAY';
    document.getElementById('baccaratResult').className = 'result-text';
    
    // Reset player/banker areas
    document.getElementById('playerArea').className = 'player-area';
    document.getElementById('bankerArea').className = 'banker-area';
    
    // Reset cards
    resetBaccaratCards();
    
    // Reset bet variables
    player = baccaratBetAmounts.player;
    banker = baccaratBetAmounts.banker;
    tie = baccaratBetAmounts.tie;
}

// Reset Baccarat cards display
function resetBaccaratCards() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');
    const bankerCardsContainer = document.getElementById('bankerCardsContainer');
    
    playerCardsContainer.innerHTML = `
        <div class="empty-card">?</div>
        <div class="empty-card">?</div>
        <div class="empty-card">+</div>
    `;
    
    bankerCardsContainer.innerHTML = `
        <div class="empty-card">?</div>
        <div class="empty-card">?</div>
        <div class="empty-card">+</div>
    `;
    
    document.getElementById('playerScore').textContent = 'Score: -';
    document.getElementById('bankerScore').textContent = 'Score: -';
}

// Play Baccarat game
function playBaccaratGame() {
    if (totalBetAmount <= 0 || baccaratGameActive) return;
    
    baccaratGameActive = true;
    
    // Disable controls during game
    document.getElementById('baccaratPlayBtn').disabled = true;
    document.getElementById('baccaratClearBtn').disabled = true;
    
    // Reset winner highlights
    document.getElementById('playerCardsContainer').classList.remove('winner');
    document.getElementById('bankerCardsContainer').classList.remove('winner');
    document.querySelectorAll('.betting-option').forEach(option => {
        option.classList.remove('winner');
    });
    
    // Place bet using your existing baccaratbet function
    baccaratbet(tie, player, banker);
}

// Function to display Baccarat results from JSON response
function displayBaccaratResult(baccaratResponse) {
    if (!baccaratResponse) return;
    
    lastBaccaratResponse = baccaratResponse;
    
    const betData = baccaratResponse.baccaratBet || baccaratResponse;
    const state = betData.state || {};
    
    // Get cards
    const playerCards = state.playerCards || [];
    const bankerCards = state.bankerCards || [];
    const result = state.result || '';
    
    // Clear existing cards
    const playerCardsContainer = document.getElementById('playerCardsContainer');
    const bankerCardsContainer = document.getElementById('bankerCardsContainer');
    
    playerCardsContainer.innerHTML = '';
    bankerCardsContainer.innerHTML = '';
    
    // Display player cards
    playerCards.forEach((card, index) => {
        const cardElement = createBaccaratCardElement(card, index);
        playerCardsContainer.appendChild(cardElement);
    });
    
    // Fill remaining slots
    for (let i = playerCards.length; i < 3; i++) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'empty-card';
        if (i === 2) emptyCard.textContent = '+';
        playerCardsContainer.appendChild(emptyCard);
    }
    
    // Display banker cards
    bankerCards.forEach((card, index) => {
        const cardElement = createBaccaratCardElement(card, index);
        bankerCardsContainer.appendChild(cardElement);
    });
    
    // Fill remaining slots
    for (let i = bankerCards.length; i < 3; i++) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'empty-card';
        if (i === 2) emptyCard.textContent = '+';
        bankerCardsContainer.appendChild(emptyCard);
    }
    
    // Calculate scores
    const playerScore = calculateBaccaratScore(playerCards);
    const bankerScore = calculateBaccaratScore(bankerCards);
    
    // Update scores
    document.getElementById('playerScore').textContent = `Score: ${playerScore}`;
    document.getElementById('bankerScore').textContent = `Score: ${bankerScore}`;
    
    // Determine winner and highlight ONLY the cards container
    let winner = '';
    
    if (result) {
        winner = result.toUpperCase();
        
        // Highlight ONLY the winning cards container
        if (result === 'player') {
            playerCardsContainer.classList.add('winner');
        } else if (result === 'banker') {
            bankerCardsContainer.classList.add('winner');
        } else if (result === 'tie') {
            playerCardsContainer.classList.add('winner');
            bankerCardsContainer.classList.add('winner');
        }
    }
    
    // Update result display
    const resultElement = document.getElementById('baccaratResult');
    resultElement.textContent = winner ? `${winner} WINS!` : 'RESULT PENDING';
    
    // Calculate winnings and update UI
    calculateAndDisplayWinnings(result, betData);
    
    // Re-enable controls
    document.getElementById('baccaratPlayBtn').disabled = true;
    document.getElementById('baccaratClearBtn').disabled = false;
    
    baccaratGameActive = false;
}

// Calculate and display winnings
function calculateAndDisplayWinnings(result, betData) {
    let totalPayout = 0;
    let winningBetsText = '';
    
    // Check which bets won
    const winningBets = [];
    
    if (result === 'player' && baccaratBetAmounts.player > 0) {
        const payout = baccaratBetAmounts.player * 2; // 1:1 payout
        totalPayout += payout;
        winningBets.push('Player');
        document.getElementById('playerBetOption').classList.add('winner');
    }
    
    if (result === 'banker' && baccaratBetAmounts.banker > 0) {
        const payout = baccaratBetAmounts.banker * 1.95; // 0.95:1 payout
        totalPayout += payout;
        winningBets.push('Banker');
        document.getElementById('bankerBetOption').classList.add('winner');
    }
    
    if (result === 'tie' && baccaratBetAmounts.tie > 0) {
        const payout = baccaratBetAmounts.tie * 9; // 8:1 payout
        totalPayout += payout;
        winningBets.push('Tie');
        document.getElementById('tieBetOption').classList.add('winner');
    }
    
    // Update winning bets display
    if (winningBets.length > 0) {
        winningBetsText = winningBets.join(', ');
        document.getElementById('winningBets').textContent = winningBetsText;
        document.getElementById('winningBets').className = 'bet-info-value win';
        document.getElementById('baccaratResult').className = 'result-text win';
    } else if (result) {
        document.getElementById('winningBets').textContent = 'None';
        document.getElementById('winningBets').className = 'bet-info-value lose';
        document.getElementById('baccaratResult').className = 'result-text lose';
    }
    
    // Update total payout
    if (totalPayout > 0) {
        document.getElementById('totalPayout').textContent = totalPayout.toFixed(8);
        document.getElementById('totalPayout').className = 'bet-info-value win';
    } else {
        document.getElementById('totalPayout').textContent = '0.00000000';
        document.getElementById('totalPayout').className = 'bet-info-value';
    }
    
    // If betData has actual payout, use it
    if (betData && betData.payout) {
        document.getElementById('totalPayout').textContent = parseFloat(betData.payout).toFixed(8);
    }
}

// Create Baccarat card element with HiLo style
function createBaccaratCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'baccarat-card new';
    
    // Determine color based on suit
    const suit = card.suit || '';
    const rank = card.rank || '';
    
    if (suit === 'H' || suit === 'D') {
        cardElement.classList.add('red');
    } else {
        cardElement.classList.add('black');
    }
    
    // Get suit symbol
    const suitSymbol = getSuitSymbol(suit);
    
    cardElement.innerHTML = `
        <div class="card-rank">${rank}</div>
        <div class="card-suit">${suitSymbol}</div>
    `;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        cardElement.classList.remove('new');
    }, 500);
    
    return cardElement;
}

// Get suit symbol
function getSuitSymbol(suit) {
    switch(suit) {
        case 'S': return '♠';
        case 'H': return '♥';
        case 'D': return '♦';
        case 'C': return '♣';
        default: return '?';
    }
}

// Calculate Baccarat score
function calculateBaccaratScore(cards) {
    if (!cards || cards.length === 0) return 0;
    
    let total = 0;
    
    cards.forEach(card => {
        const rank = card.rank || '';
        let value = 0;
        
        switch(rank) {
            case 'A': value = 1; break;
            case '2': value = 2; break;
            case '3': value = 3; break;
            case '4': value = 4; break;
            case '5': value = 5; break;
            case '6': value = 6; break;
            case '7': value = 7; break;
            case '8': value = 8; break;
            case '9': value = 9; break;
            case '10':
            case 'J':
            case 'Q':
            case 'K': value = 0; break;
            default: value = parseInt(rank) || 0;
        }
        
        total += value;
    });
    
    // Baccarat: only the last digit counts (modulo 10)
    return total % 10;
}

// Initialize Baccarat when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Baccarat section
    createBaccaratSection();
    
    // Add Baccarat to available functions
    availableFunctions['baccarat'] = () => {
        changegame('baccarat');
        return 'Switched to Baccarat game';
    };
    
    // Add feedable function for Baccarat
    availableFunctions['feedBaccarat'] = (jsonResponse) => {
        try {
            const response = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;
            displayBaccaratResult(response);
            return `Baccarat results fed: ${response.baccaratBet?.state?.result || 'Unknown result'}`;
        } catch (e) {
            return 'Error: Invalid JSON format for Baccarat response';
        }
    };
});

// Also call createBaccaratSection when your bot initializes
setTimeout(createBaccaratSection, 100);

// Add Blackjack CSS styles after the baccaratStyles
const blackjackStyles = document.createElement('style');
blackjackStyles.textContent = `
    .blackjack-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 6px;
    }

    .blackjack-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .blackjack-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .blackjack-game-area {
        display: flex;
        flex-direction: row;
        gap: 20px;
        min-height: 400px;
    }

    .cards-side {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .controls-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 200px;
        max-width: 300px;
    }

    .dealer-area, .player-area-blackjack {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
    }

    .dealer-area.active {
        border-color: #ff4757;
        background: rgba(255, 71, 87, 0.1);
    }

    .player-area-blackjack.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .area-label {
        color: #c4c1c0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
        width: 100%;
        text-align: left;
    }

    .cards-container-blackjack {
        display: flex;
        gap: 8px;
        min-height: 80px;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;
        width: 100%;
    }

    .blackjack-card {
        width: 50px;
        height: 70px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .blackjack-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border-radius: 6px;
        z-index: 1;
    }

    .blackjack-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
        border-color: #ff9999;
    }

    .blackjack-card.black {
        background: linear-gradient(135deg, #1a1a1a, #333333);
        border-color: #666666;
    }

    .blackjack-card.red .card-rank,
    .blackjack-card.red .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .blackjack-card.black .card-rank,
    .blackjack-card.black .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .blackjack-card.new {
        animation: cardDeal 0.5s ease-out;
    }

    .card-rank {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 2px;
        z-index: 2;
        position: relative;
        font-family: 'Arial', sans-serif;
    }

    .card-suit {
        font-size: 24px;
        z-index: 2;
        position: relative;
    }

    .hand-info {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        margin-top: 8px;
        width: 100%;
    }

    .hand-value {
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        border-radius: 3px;
    }

    .hand-actions {
        color: #c4c1c0;
        font-size: 11px;
        font-style: italic;
    }

    .blackjack-controls {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 10px;
    }

    .blackjack-btn {
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
        text-align: center;
    }

    .blackjack-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-2px);
    }

    .blackjack-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .blackjack-btn.hit {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .blackjack-btn.stand {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .blackjack-btn.double {
        background: rgba(59, 130, 246, 0.1);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .blackjack-btn.split {
        background: rgba(255, 165, 0, 0.1);
        border-color: #ffa500;
        color: #ffa500;
    }

    .blackjack-btn.insurance {
        background: rgba(155, 89, 182, 0.1);
        border-color: #9b59b6;
        color: #9b59b6;
    }

    .blackjack-btn.noinsurance {
        background: rgba(196, 193, 192, 0.1);
        border-color: rgba(196, 193, 192, 0.3);
        color: #c4c1c0;
    }

    .blackjack-bet-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        margin-top: 15px;
    }

    .bet-info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 0;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .bet-info-item:last-child {
        border-bottom: none;
    }

    .bet-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 10px;
    }

    .bet-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .bet-info-value.win {
        color: #2ed573;
    }

    .bet-info-value.lose {
        color: #ff4757;
    }

    .result-display-blackjack {
        text-align: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        margin-top: 15px;
    }

    .result-text-blackjack {
        color: #c4c1c0;
        font-size: 13px;
        font-weight: bold;
    }

    .result-text-blackjack.win {
        color: #2ed573;
        text-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
    }

    .result-text-blackjack.lose {
        color: #ff4757;
        text-shadow: 0 0 5px rgba(255, 71, 87, 0.5);
    }

    .result-text-blackjack.push {
        color: #ffa500;
        text-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
    }

    .player-hands-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .player-hand {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px;
        background: rgba(59, 58, 57, 0.7);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.2);
        width: 100%;
    }

    .player-hand.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .player-hand-label {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 5px;
        width: 100%;
        text-align: left;
    }

    /* Split layout */
    .split-hands-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 10px;
        width: 100%;
    }

    .split-hand {
        flex: 1;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px;
        background: rgba(59, 58, 57, 0.8);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.2);
    }

    .split-hand.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .split-hand-label {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 5px;
        width: 100%;
        text-align: left;
    }

    /* Dark theme adjustments */
    .dark .blackjack-section {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .dealer-area,
    .dark .player-area-blackjack,
    .dark .result-display-blackjack,
    .dark .blackjack-bet-info {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .blackjack-card {
        background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
        color: #000000;
    }

    .dark .blackjack-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
    }

    .dark .blackjack-card.black {
        background: linear-gradient(135deg, #333333, #444444);
    }

    /* Responsive adjustments */
    @media (max-width: 900px) {
        .blackjack-game-area {
            flex-direction: column;
        }
        
        .controls-side {
            max-width: 100%;
        }
        
        .split-hands-container {
            flex-direction: column;
        }
        
        .split-hand {
            min-width: 100%;
        }
        
        .blackjack-card {
            width: 45px;
            height: 63px;
        }
        
        .card-rank {
            font-size: 18px;
        }
        
        .card-suit {
            font-size: 20px;
        }
    }

    @media (max-width: 600px) {
        .cards-side {
            gap: 10px;
        }
        
        .dealer-area, .player-area-blackjack {
            padding: 8px;
        }
        
        .blackjack-card {
            width: 40px;
            height: 56px;
        }
        
        .card-rank {
            font-size: 16px;
        }
        
        .card-suit {
            font-size: 18px;
        }
        
        .hand-info {
            flex-direction: column;
            gap: 5px;
        }
    }
	 @keyframes blinkBorder {
        0%, 100% { border-color: transparent; }
        50% { border-color: currentColor; }
    }
    
    .blinking-border {
        animation: blinkBorder 1.5s ease-in-out infinite;
    }
    
    .blackjack-btn.insurance.blinking-border {
        border-color: #9b59b6;
    }
    
    .blackjack-btn.noinsurance.blinking-border {
        border-color: rgba(196, 193, 192, 0.3);
    }
`;

document.head.appendChild(blackjackStyles);

// Blackjack Game Variables
let blackjackGameActive = false;
let blackjackBetAmount = 0;
let currentBlackjackResponse = null;
let currentHandIndex = 0;

// Create Blackjack section
function createBlackjackSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const blackjackSection = document.createElement('div');
    blackjackSection.className = 'blackjack-section';
    blackjackSection.style.display = 'none';
    blackjackSection.innerHTML = `
        <div class="blackjack-game-area">
            <!-- Left side: Cards -->
            <div class="cards-side">
                <!-- Dealer Area -->
                <div class="dealer-area" id="dealerArea">
                    <div class="area-label">DEALER</div>
                    <div class="cards-container-blackjack" id="dealerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                    </div>
                    <div class="hand-info">
                        <div class="hand-value" id="dealerValue">Value: -</div>
                        <div class="hand-actions" id="dealerActions">Actions: -</div>
                    </div>
                </div>
                
                <!-- Player Hands Container -->
                <div id="playerHandsContainer">
                    <!-- Single hand or split hands will be dynamically added here -->
                </div>
            </div>
            
            <!-- Right side: Controls -->
            <div class="controls-side">
                <!-- Controls -->
                <div class="blackjack-controls" id="blackjackControls">
                    <button class="blackjack-btn hit" id="hitBtn">HIT</button>
                    <button class="blackjack-btn stand" id="standBtn">STAND</button>
                    <button class="blackjack-btn double" id="doubleBtn">DOUBLE</button>
                    <button class="blackjack-btn split" id="splitBtn">SPLIT</button>
                    <button class="blackjack-btn insurance" id="insuranceBtn" >INSURANCE</button>
                    <button class="blackjack-btn noinsurance" id="noInsuranceBtn" >NO INSURANCE</button>
                    <button class="blackjack-btn" id="newGameBtn">NEW GAME</button>
                </div>
                
                <!-- Result Display -->
                <div class="result-display-blackjack">
                    <div class="result-text-blackjack" id="blackjackResult">Place your bet to start</div>
                </div>
                
                <!-- Bet Info -->
                <div class="blackjack-bet-info">
                    <div class="bet-info-item1">
                        <div class="bet-info-label">BET AMOUNT</div>
                        <div class="bet-info-value" id="blackjackBetAmount">0.00000000</div>
                    </div>
                    <div class="bet-info-item3">
                        <div class="bet-info-label3">MULTIPLIER</div>
                        <div class="bet-info-value4" id="blackjackMultiplier">0.00x</div>
                    </div>
                    <div class="bet-info-item2">
                        <div class="bet-info-label">PAYOUT</div>
                        <div class="bet-info-value" id="blackjackPayout">0.00000000</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(blackjackSection, topBar.nextSibling);
    
    // Add event listeners
    document.getElementById('hitBtn')?.addEventListener('click', () => handleBlackjackAction('hit'));
    document.getElementById('standBtn')?.addEventListener('click', () => handleBlackjackAction('stand'));
    document.getElementById('doubleBtn')?.addEventListener('click', () => handleBlackjackAction('double'));
    document.getElementById('splitBtn')?.addEventListener('click', () => handleBlackjackAction('split'));
    document.getElementById('insuranceBtn')?.addEventListener('click', () => handleBlackjackAction('insurance'));
    document.getElementById('noInsuranceBtn')?.addEventListener('click', () => handleBlackjackAction('noInsurance'));
    document.getElementById('newGameBtn')?.addEventListener('click', startNewBlackjackGame);
}

// Handle Blackjack action
function handleBlackjackAction(action) {
    if (!blackjackGameActive) return;
    
    // Call blackjackNext with the selected action
    blackjackNext(action);
    
    // Update global action variable for auto-play
    if (running) {
        action = action;
    }
}

function resetBlackjackGame() {
    // Clear all containers
    const dealerCardsContainer = document.getElementById('dealerCardsContainer');
    const playerHandsContainer = document.getElementById('playerHandsContainer');
    
    if (dealerCardsContainer) {
        dealerCardsContainer.innerHTML = `
            <div class="empty-card">?</div>
            <div class="empty-card">?</div>
        `;
    }
    
    if (playerHandsContainer) {
        playerHandsContainer.innerHTML = '';
    }
    
    // Reset values
    document.getElementById('dealerValue').textContent = 'Value: -';
    document.getElementById('dealerActions').textContent = 'Actions: -';
    
    // Reset current hand index
    currentHandIndex = 0;
    
    // Disable action buttons
    //disableBlackjackButtons(true);
    
    // Stop blinking
    stopBlinking();
    
    // Hide insurance buttons
    document.getElementById('insuranceBtn').style.display = 'block';
    document.getElementById('noInsuranceBtn').style.display = 'block';
    
    // Enable new game button
    document.getElementById('newGameBtn').disabled = false;
    
    // Reset result text
    document.getElementById('blackjackResult').textContent = 'Place your bet to start';
    document.getElementById('blackjackResult').className = 'result-text-blackjack';
}
// Start new Blackjack game
function startNewBlackjackGame() {
    if (blackjackGameActive) {
        // If game is already active, don't start new one
        return;
    }
    
    blackjackBetAmount = nextbet;
    
    // Update bet info display
    document.getElementById('blackjackBetAmount').textContent = blackjackBetAmount.toFixed(8);
    document.getElementById('blackjackMultiplier').textContent = '0.00x';
    document.getElementById('blackjackPayout').textContent = '0.00000000';
    
    // Reset result display
    document.getElementById('blackjackResult').textContent = 'Placing bet...';
    document.getElementById('blackjackResult').className = 'result-text-blackjack';
    
    // Disable all action buttons initially
    //disableBlackjackButtons(true);
    
    // Call blackjackBet
    blackjackBet(blackjackBetAmount);
    
    blackjackGameActive = true;
}

// Disable/enable Blackjack buttons
function disableBlackjackButtons(disabled) {
    const actionButtons = ['hitBtn', 'standBtn', 'doubleBtn', 'splitBtn', 'insuranceBtn', 'noInsuranceBtn'];
    
    actionButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.disabled = disabled;
        }
    });
    
    // Don't disable new game button
    document.getElementById('newGameBtn').disabled = false;
}

// Update Blackjack UI from JSON response
function updateBlackjackUI(json) {
    if (!json) return;
    
    currentBlackjackResponse = json;
    
    const betData = json.blackjackBet || json.blackjackNext || json;
    const state = betData.state || {};
    const playerHands = state.player || [];
    const dealerHand = state.dealer?.[0] || { cards: [], value: 0, actions: [] };
    
    // Update dealer area
    updateDealerHand(dealerHand);
    
    // Update player hands
    updatePlayerHands(playerHands);
    
    // Update available actions for current hand
    updateAvailableActions(playerHands);
    
    // Update bet info
    updateBlackjackBetInfo(betData);
    
    // Check if we should blink insurance buttons
    if (dealerHand.cards[0]?.rank === 'A') {
        // Start blinking insurance buttons
        blinkerBtn();
    } else {
        // Stop blinking if dealer doesn't have Ace
        stopBlinking();
    }
    
    // Update result if game is over
    if (!betData.active) {
        showBlackjackResult(betData);
        blackjackGameActive = false;
        stopBlinking(); // Stop blinking when game ends
    } else {
        blackjackGameActive = true;
        
        // If game is still active but no actions are showing, check for insurance
        if (playerHands.length > 0) {
            const currentHand = playerHands[currentHandIndex];
            const actions = currentHand?.actions || [];
            
            if (actions.length === 0) {
                // Check if dealer shows Ace
                if (dealerHand.cards[0]?.rank === 'A') {
                    document.getElementById('insuranceBtn').style.display = 'inline-block';
                    document.getElementById('noInsuranceBtn').style.display = 'inline-block';
                    document.getElementById('insuranceBtn').disabled = false;
                    document.getElementById('noInsuranceBtn').disabled = false;
                }
            }
        }
    }
    
    // Always enable new game button after response
    document.getElementById('newGameBtn').disabled = false;
}

// Update dealer hand display
function updateDealerHand(dealerHand) {
    const dealerCardsContainer = document.getElementById('dealerCardsContainer');
    const dealerValueElement = document.getElementById('dealerValue');
    const dealerActionsElement = document.getElementById('dealerActions');
    
    if (!dealerCardsContainer) return;
    
    // Clear existing cards
    dealerCardsContainer.innerHTML = '';
    
    // Display dealer cards
    dealerHand.cards.forEach((card, index) => {
        const cardElement = createBlackjackCardElement(card, index);
        dealerCardsContainer.appendChild(cardElement);
    });
    
    // Update value and actions
    dealerValueElement.textContent = `Value: ${dealerHand.value}`;
    dealerActionsElement.textContent = `Actions: ${dealerHand.actions.join(', ')}`;
}

// Update player hands display (supports splits)
function updatePlayerHands(playerHands) {
    const playerHandsContainer = document.getElementById('playerHandsContainer');
    
    if (!playerHandsContainer) return;
    
    // Clear existing hands
    playerHandsContainer.innerHTML = '';
    
    if (playerHands.length === 1) {
        // Single hand layout
        const hand = playerHands[0];
        const handElement = document.createElement('div');
        handElement.className = `player-hand ${currentHandIndex === 0 ? 'active' : ''}`;
        
        const handLabel = document.createElement('div');
        handLabel.className = 'player-hand-label';
        handLabel.textContent = 'PLAYER';
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container-blackjack';
        
        // Add cards to this hand
        hand.cards.forEach((card, cardIndex) => {
            const cardElement = createBlackjackCardElement(card, cardIndex);
            cardsContainer.appendChild(cardElement);
        });
        
        const handInfo = document.createElement('div');
        handInfo.className = 'hand-info';
        
        const handValue = document.createElement('div');
        handValue.className = 'hand-value';
        handValue.textContent = `Value: ${hand.value}`;
        
        const handActions = document.createElement('div');
        handActions.className = 'hand-actions';
        handActions.textContent = `Actions: ${hand.actions.join(', ')}`;
        
        handInfo.appendChild(handValue);
        handInfo.appendChild(handActions);
        
        handElement.appendChild(handLabel);
        handElement.appendChild(cardsContainer);
        handElement.appendChild(handInfo);
        
        playerHandsContainer.appendChild(handElement);
    } else {
        // Split hands layout - display side by side
        const splitContainer = document.createElement('div');
        splitContainer.className = 'split-hands-container';
        
        playerHands.forEach((hand, index) => {
            const splitHand = document.createElement('div');
            splitHand.className = `split-hand ${index === currentHandIndex ? 'active' : ''}`;
            splitHand.id = `splitHand${index}`;
            
            const handLabel = document.createElement('div');
            handLabel.className = 'split-hand-label';
            handLabel.textContent = `HAND ${index + 1}`;
            
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'cards-container-blackjack';
            
            // Add cards to this split hand
            hand.cards.forEach((card, cardIndex) => {
                const cardElement = createBlackjackCardElement(card, cardIndex);
                cardsContainer.appendChild(cardElement);
            });
            
            const handInfo = document.createElement('div');
            handInfo.className = 'hand-info';
            
            const handValue = document.createElement('div');
            handValue.className = 'hand-value';
            handValue.textContent = `Value: ${hand.value}`;
            
            const handActions = document.createElement('div');
            handActions.className = 'hand-actions';
            handActions.textContent = `Actions: ${hand.actions.join(', ')}`;
            
            handInfo.appendChild(handValue);
            handInfo.appendChild(handActions);
            
            splitHand.appendChild(handLabel);
            splitHand.appendChild(cardsContainer);
            splitHand.appendChild(handInfo);
            
            splitContainer.appendChild(splitHand);
        });
        
        playerHandsContainer.appendChild(splitContainer);
    }
}

function blinkerBtn() {
    const insuranceBtn = document.getElementById('insuranceBtn');
    const noInsuranceBtn = document.getElementById('noInsuranceBtn');
    
    if (!insuranceBtn || !noInsuranceBtn) {
        console.error('Insurance buttons not found');
        return;
    }
    
    // Toggle blinking class
    insuranceBtn.classList.toggle('blinking-border');
    noInsuranceBtn.classList.toggle('blinking-border');
    
    // If blinking is being turned on, also ensure buttons are visible
    if (insuranceBtn.classList.contains('blinking-border')) {
        insuranceBtn.style.display = 'inline-block';
        noInsuranceBtn.style.display = 'inline-block';
        
        // Enable buttons if they were disabled
        insuranceBtn.disabled = false;
        noInsuranceBtn.disabled = false;
    }
}

// Optionally, add a function to stop blinking
function stopBlinking() {
    const insuranceBtn = document.getElementById('insuranceBtn');
    const noInsuranceBtn = document.getElementById('noInsuranceBtn');
    
    if (insuranceBtn && noInsuranceBtn) {
        insuranceBtn.classList.remove('blinking-border');
        noInsuranceBtn.classList.remove('blinking-border');
    }
}

// Update available actions for current hand
function updateAvailableActions(playerHands) {
    if (playerHands.length === 0) {
        // No hands yet, disable all action buttons
        //disableBlackjackButtons(true);
        return;
    }
    
    const currentHand = playerHands[currentHandIndex];
    const actions = currentHand?.actions || [];
    
	if (actions.includes('insurance') || actions.includes('noInsurance')) {
        stopBlinking(); // Stop blinking when insurance is no longer relevant
    }
    
	
    // Enable/disable buttons based on available actions
    //document.getElementById('hitBtn').disabled = !actions.includes('hit');
    //document.getElementById('standBtn').disabled = !actions.includes('stand');
    //document.getElementById('doubleBtn').disabled = !actions.includes('double');
    //document.getElementById('splitBtn').disabled = !actions.includes('split');
    
    // Show/hide insurance buttons if dealer shows Ace and insurance is available
    const dealerHand = currentBlackjackResponse?.blackjackBet?.state?.dealer?.[0] || 
                      currentBlackjackResponse?.blackjackNext?.state?.dealer?.[0];
    
    if (dealerHand?.cards?.[0]?.rank === 'A' && actions.includes('insurance')) {
        document.getElementById('insuranceBtn').style.display = 'inline-block';
        document.getElementById('noInsuranceBtn').style.display = 'inline-block';
        document.getElementById('insuranceBtn').disabled = false;
        document.getElementById('noInsuranceBtn').disabled = false;
    } else {
        document.getElementById('insuranceBtn').style.display = 'block';
        document.getElementById('noInsuranceBtn').style.display = 'block';
    }
    
    // Log for debugging
    console.log('Available actions:', actions);
    console.log('Hit enabled:', !actions.includes('hit'));
    console.log('Stand enabled:', !actions.includes('stand'));
}

// Update Blackjack bet information
function updateBlackjackBetInfo(betData) {
    document.getElementById('blackjackBetAmount').textContent = parseFloat(betData.amount || 0).toFixed(8);
    document.getElementById('blackjackMultiplier').textContent = `${parseFloat(betData.payoutMultiplier || 0).toFixed(2)}x`;
    document.getElementById('blackjackPayout').textContent = parseFloat(betData.payout || 0).toFixed(8);
}

// Show Blackjack result
function showBlackjackResult(betData) {
    const resultElement = document.getElementById('blackjackResult');
    const payout = parseFloat(betData.payout || 0);
    const betAmount = parseFloat(betData.amount || 0);
    const Multiplier = parseFloat(betData.payoutMultiplier || 0);
    
	if (Multiplier >= 1) {
        resultElement.textContent = 'WIN!';
        resultElement.className = 'result-text-blackjack win';
    } else if (payout === betAmount && payout > 0) {
        resultElement.textContent = 'PUSH';
        resultElement.className = 'result-text-blackjack push';
    } else {
        resultElement.textContent = 'LOSE';
        resultElement.className = 'result-text-blackjack lose';
    }
    
    // Disable all action buttons when game is over
    //disableBlackjackButtons(true);
    document.getElementById('blackjackMultiplier').textContent = `${parseFloat(betData.payoutMultiplier || 0).toFixed(2)}x`;
    document.getElementById('blackjackMultiplier').style.fontSize = '27px';
	document.getElementById('blackjackMultiplier').style.color = '#e6af0b';
	// Hide insurance buttons
    document.getElementById('insuranceBtn').style.display = 'block';
    document.getElementById('noInsuranceBtn').style.display = 'block';
    
    // Enable new game button
    document.getElementById('newGameBtn').disabled = false;
    
    // Game is no longer active
    blackjackGameActive = false;
}

// Create Blackjack card element
function createBlackjackCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'blackjack-card new';
    
    // Determine color based on suit
    const suit = card.suit || '';
    const rank = card.rank || '';
    
    if (suit === 'H' || suit === 'D') {
        cardElement.classList.add('red');
    } else {
        cardElement.classList.add('black');
    }
    
    // Get suit symbol
    const suitSymbol = getSuitSymbol(suit);
    
    cardElement.innerHTML = `
        <div class="card-rank">${rank}</div>
        <div class="card-suit">${suitSymbol}</div>
    `;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        cardElement.classList.remove('new');
    }, 500);
    
    return cardElement;
}

// Initialize Blackjack when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Blackjack section
    createBlackjackSection();
    
    // Initialize button states
    setTimeout(() => {
        // Ensure new game button is enabled on startup
        const newGameBtn = document.getElementById('newGameBtn');
        if (newGameBtn) {
            newGameBtn.disabled = false;
        }
        
        // Ensure action buttons are disabled initially
        //disableBlackjackButtons(true);
        
        // Hide insurance buttons
        const insuranceBtn = document.getElementById('insuranceBtn');
        const noInsuranceBtn = document.getElementById('noInsuranceBtn');
        if (insuranceBtn && noInsuranceBtn) {
            insuranceBtn.style.display = 'block';
            noInsuranceBtn.style.display = 'block';
        }
    }, 500);
});

// Also call createBlackjackSection when your bot initializes
setTimeout(createBlackjackSection, 100);

