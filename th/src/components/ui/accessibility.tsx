"use client"

import { useEffect, useRef } from 'react';

// --- React Component ---
export default function Accessibility() {
    // Use useRef to hold references that persist across renders without causing re-renders
    const widgetInstanceRef = useRef<any>(null); // To hold the instance of the AccessibilityWidget class
    const widgetContainerRef = useRef<HTMLDivElement | null>(null); // To hold the main container div

    useEffect(() => {
        // Avoid running if already initialized (e.g., during development with React StrictMode double render)
        if (widgetInstanceRef.current) {
            return;
        }

        // --- Start of the original IIFE logic, adapted ---
        const t = {
            // Translations (keeping only 'en' for brevity, assuming 'th' is default in template)
            en: {
                "Accessibility Menu": "Accessibility Menu",
                "Reset settings": "Reset settings",
                Close: "Close",
                "Content Adjustments": "Content Adjustments",
                "Adjust Font Size": "Adjust Font Size",
                Default: "Default",
                "Highlight Title": "Highlight Title",
                "Highlight Links": "Highlight Links",
                "Readable Font": "Readable Font",
                "Color Adjustments": "Color Adjustments",
                "Dark Contrast": "Dark Contrast",
                "Yellow Contrast": "Yellow Contrast",
                "Light Contrast": "Light Contrast",
                "High Contrast": "High Contrast",
                "High Saturation": "High Saturation",
                "Low Saturation": "Low Saturation",
                Monochrome: "Monochrome",
                Tools: "Tools",
                "Reading Guide": "Reading Guide",
                "Stop Animations": "Stop Animations",
                "Big Cursor": "Big Cursor",
                "Increase Font Size": "Increase Font Size",
                "Decrease Font Size": "Decrease Font Size",
                "Letter Spacing": "Letter Spacing",
                "Line Height": "Line Height",
                "Font Weight": "Font Weight"
            },
            th: {
                "Accessibility Menu": "เมนูสำหรับผู้พิการ",
                "Reset settings": "รีเซ็ตการตั้งค่า",
                Close: "ปิด",
                "Content Adjustments": "การปรับแต่งเนื้อหา",
                "Adjust Font Size": "ปรับขนาดตัวอักษร",
                Default: "ปกติ",
                "Highlight Title": "เน้นชื่อเรื่อง",
                "Highlight Links": "เน้นลิงค์",
                "Readable Font": "ดีสเล็กซี่ฟ้อนท์",
                "Color Adjustments": "การปรับแต่งสี",
                "Dark Contrast": "มืด",
                "Yellow Contrast": "เหลือง",
                "Light Contrast": "สว่าง",
                "High Contrast": "ความคมชัดสูง",
                "High Saturation": "ความอิ่มตัวสูง",
                "Low Saturation": "ความอิ่มตัวต่ำ",
                Monochrome: "ขาว-ดำ",
                Tools: "เครื่องมือ",
                "Reading Guide": "ช่วยการอ่าน",
                "Stop Animations": "หยุดภาพเคลื่อนไหว",
                "Big Cursor": "เคอร์เซอร์ใหญ่",
                "Increase Font Size": "เพิ่มขนาดตัวอักษร",
                "Decrease Font Size": "ลดขนาดตัวอักษร",
                "Letter Spacing": "ขยายระยะห่างตัวอักษร",
                "Line Height": "เพิ่มความสูงบรรทัด",
                "Font Weight": "เพิ่มความหนาตัวอักษร"
            },
        };

        const e = [ // Color Adjustments
            { label: "Dark Contrast", key: "dark-contrast", icon: "dark_mode" },
            { label: "Yellow Contrast", key: "yellow-contrast", icon: "nightlight" },
            { label: "Light Contrast", key: "light-contrast", icon: "brightness_5" },
            { label: "High Contrast", key: "high-contrast", icon: "tonality" },
            { label: "Low Saturation", key: "low-saturation", icon: "gradient" },
            { label: "High Saturation", key: "high-saturation", icon: "filter_vintage" },
            { label: "Monochrome", key: "monochrome", icon: "filter_b_and_w" },
        ];

        const i = [ // Content Adjustments
            { label: "Highlight Title", key: "highlight-title", icon: "title" },
            { label: "Highlight Links", key: "highlight-links", icon: "link" },
            { label: "Readable Font", key: "readable-font", icon: "spellcheck" },
            { label: "Letter Spacing", key: "letter-spacing", icon: "space_bar" },
            { label: "Line Height", key: "line-height", icon: "format_line_spacing" },
            { label: "Font Weight", key: "font-weight", icon: "format_bold" },
        ];

        const s = [ // Tools
            { label: "Reading Guide", key: "readable-guide", icon: "local_library" },
            { label: "Stop Animations", key: "stop-animations", icon: "motion_photos_off" },
            { label: "Big Cursor", key: "big-cursor", icon: "mouse" },
        ];

        // --- AccessibilityWidget Class Definition ---
        class AccessibilityWidget {
            config: any;
            rendered: boolean;
            settings: { states: any; lang: string; };
            locale: any;
            menu: HTMLDivElement | null = null; // Reference to the main menu container
            styleElements: { [key: string]: HTMLStyleElement } = {}; // To keep track of added style tags
            readingGuideHandler: ((event: MouseEvent) => void) | null = null; // Store the reading guide handler

            constructor(config: any) {
                this.config = { ...config };
                this.rendered = false;
                this.settings = {
                    states: {},
                    lang: "th", // Default to Thai
                    ...config?.settings
                };

                // Determine language (simplified)
                let detectedLang = document.documentElement.lang || "th";
                // Basic check if detectedLang exists in our translations, otherwise default to 'th'
                this.settings.lang = t.hasOwnProperty(detectedLang) ? detectedLang : "th";
                this.locale = t[this.settings.lang as keyof typeof t] || t.th; // Fallback to Thai

                // Load settings from cookie immediately in constructor
                // This ensures settings are available before initial render logic like _createButtons
                this.loadSettings();
            }

            applyInitialSettings() {
                // Apply contrast first as it might affect other styles
                if (this.settings.states.contrast) {
                    this.changeFilter(this.settings.states.contrast);
                }
                 // Apply font size
                if (this.settings.states.fontSize && this.settings.states.fontSize !== 1) {
                    this.changeFont(null, this.settings.states.fontSize);
                }
                // Apply other content/tool controls
                this.changeControls(); // This applies all toggleable states
            }


            toggle() {
                if (!this.rendered) {
                    this.render();
                }
                if (this.menu) {
                    const wrapper = this.menu.querySelector<HTMLElement>('.asw-wrapper');
                    if (wrapper) {
                        wrapper.classList.toggle('active');
                        const isOpen = wrapper.classList.contains('active');
                        this.menu.querySelector<HTMLElement>('.asw-widget .asw-menu-btn')?.setAttribute('aria-expanded', String(isOpen));
                    }
                }
            }

            close() {
                if (this.menu) {
                    const wrapper = this.menu.querySelector<HTMLElement>('.asw-wrapper');
                    if (wrapper) {
                        wrapper.classList.remove('active');
                        this.menu.querySelector<HTMLElement>('.asw-widget .asw-menu-btn')?.setAttribute('aria-expanded', 'false');
                    }
                }
            }

            saveSettings() {
                this.setCookie("asw_settings", JSON.stringify({
                    ...this.settings,
                    updatedAt: new Date().toISOString() // Use ISO string for consistency
                }), 30); // Save for 30 days
            }

            setCookie(name: string, value: string, days: number) {
                const d = new Date();
                d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + d.toUTCString();
                // Ensure secure cookie practices if applicable (Secure; SameSite=Lax/Strict)
                document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
            }

            getCookie(name: string): string {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
                return "";
            }

            loadSettings() {
                const savedSettings = this.getCookie("asw_settings");
                if (savedSettings) {
                    try {
                        const parsed = JSON.parse(savedSettings);
                        // Basic validation could be added here
                        this.settings = { ...this.settings, ...parsed };
                        // Re-apply settings after loading
                        this.applyInitialSettings();
                    } catch (error) {
                        console.error("Error parsing accessibility settings from cookie:", error);
                        // Optionally clear the corrupted cookie
                        this.setCookie("asw_settings", "", -1);
                    }
                }
            }


            render() {
                if (this.rendered) return this; // Prevent double rendering

                this.menu = document.createElement("div");
                this.menu.className = "accessibility-container"; // Add a class for easier selection/cleanup
                // Removed hardcoded footer content (logo/text)
                this.menu.innerHTML = `
                    <div class="asw-wrapper">
                        <div class="asw-relative">
                            <div class="asw-menu">
                                <div class="asw-menu-header">
                                    <div class="asw-translate" data-translate="Accessibility Menu">เมนูสำหรับผู้พิการ</div>
                                    <div>
                                        <div role="button" tabindex="0" class="asw-menu-reset" title="Reset settings" data-translate="Reset settings">
                                            <span class="material-icons">restart_alt</span>
                                        </div>
                                        <div role="button" tabindex="0" class="asw-menu-close" title="Close" data-translate="Close">
                                            <span class="material-icons">close</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="asw-menu-content">
                                    <div class="asw-card">
                                        <div class="asw-card-title" data-translate="Content Adjustments">การปรับแต่งเนื้อหา</div>
                                        <div class="asw-adjust-font">
                                            <div class="asw-label">
                                                <span class="material-icons">format_size</span>
                                                <div class="asw-translate" data-translate="Adjust Font Size">ปรับขนาดตัวอักษร</div>
                                            </div>
                                            <div>
                                                <div class="asw-minus" data-key="font-size" role="button" tabindex="0" aria-pressed="false" title="Decrease Font Size" data-translate="Decrease Font Size">
                                                    <span class="material-icons">remove</span>
                                                </div>
                                                <div class="asw-amount" data-translate="Default">Default</div>
                                                <div class="asw-plus" data-key="font-size" role="button" tabindex="0" aria-pressed="false" title="Increase Font Size" data-translate="Increase Font Size">
                                                    <span class="material-icons">add</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="asw-items content"></div>
                                    </div>
                                    <div class="asw-card">
                                        <div class="asw-card-title" data-translate="Color Adjustments">การปรับแต่งสี</div>
                                        <div class="asw-items contrast"></div>
                                    </div>
                                    <div class="asw-card">
                                        <div class="asw-card-title" data-translate="Tools">เครื่องมือ</div>
                                        <div class="asw-items tools"></div>
                                    </div>
                                </div>
                                <div class="asw-footer">
                                    <div class="brand">
                                        <img src="/img/static/logo.svg" alt="ศาลปกครอง logo" width="30" height="38">
                                        <p>ศาลปกครอง
                                        <br>
                                            <small>The Administrative Court</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="asw-overlay"></div>
                        </div>
                    </div>
                    <div class="asw-widget">
                        <a href="javascript:void(0);" class="asw-menu-btn" title="Accessibility Menu" data-translate="Accessibility Menu" role="button" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z""></path> <!-- Use currentColor -->
                            </svg>
                        </a>
                    </div>`;

                // Populate buttons
                this.menu.querySelector(".content")!.innerHTML = this._createButtons(i);
                this.menu.querySelector(".tools")!.innerHTML = this._createButtons(s, "asw-tools");
                this.menu.querySelector(".contrast")!.innerHTML = this._createButtons(e, "asw-filter");

                // Add event listeners
                this.menu.querySelector(".asw-menu-close")?.addEventListener("click", this.close.bind(this));
                this.menu.querySelector(".asw-overlay")?.addEventListener("click", this.close.bind(this));
                this.menu.querySelector(".asw-widget .asw-menu-btn")?.addEventListener("click", this.toggle.bind(this));
                this.menu.querySelector(".asw-menu-reset")?.addEventListener("click", this.reset.bind(this));

                this.menu.querySelectorAll(".asw-btn").forEach(btn => {
                    btn.addEventListener("click", () => this.clickItem(btn as HTMLElement));
                    // Add keyboard accessibility
                     btn.addEventListener("keydown", (event) => {
                        if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
                            event.preventDefault();
                            this.clickItem(btn as HTMLElement);
                        }
                    });
                });

                this.menu.querySelectorAll(".asw-adjust-font div[role='button']").forEach(btn => {
                    btn.addEventListener("click", () => {
                        this.changeFont(btn as HTMLElement);
                        this.saveSettings();
                    });
                     // Add keyboard accessibility
                    btn.addEventListener("keydown", (event) => {
                        if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
                            event.preventDefault();
                            this.changeFont(btn as HTMLElement);
                            this.saveSettings();
                        }
                    });
                });

                // Apply translations and initial state
                this.translate();
                this.updateButtonStates(); // Ensure buttons reflect loaded state

                // Append to the container specified in config (or body)
                (this.config.container || document.body).appendChild(this.menu);
                this.rendered = true;

                // Load settings from cookie *after* rendering initial structure
                this.loadSettings();

                return this;
            }

            reset() {
                // Clear specific state keys, keep lang
                this.settings.states = {};
                // Reset visual states
                this.changeFilter(); // Remove contrast filter
                this.changeControls(); // Remove content/tool modifications
                this.changeFont(undefined, 1); // Reset font size to default (1)
                // Update UI
                if (this.menu) {
                    this.menu.querySelectorAll(".asw-btn.asw-selected").forEach(btn => {
                        btn.classList.remove("asw-selected");
                        btn.setAttribute('aria-pressed', 'false');
                    });
                }
                this.translate(); // Update font size display text
                // Clear cookie
                this.setCookie("asw_settings", "", -1); // Expire the cookie
            }

            changeFont(btn: HTMLElement | null | undefined, size?: number) {
                let currentSize = parseFloat(this.settings.states.fontSize) || 1;

                if (size !== undefined) {
                    currentSize = size; // Directly set size if provided
                } else if (btn) {
                    // Adjust based on button click
                    if (btn.classList.contains("asw-minus")) {
                        currentSize -= 0.1;
                    } else if (btn.classList.contains("asw-plus")) {
                        currentSize += 0.1;
                    }
                    // Clamp the size between 0.5 (50%) and 2.0 (200%)
                    currentSize = Math.max(0.5, Math.min(2.0, currentSize));
                    currentSize = parseFloat(currentSize.toFixed(2)); // Keep 2 decimal places
                }

                // Apply font size changes (consider performance for large pages)
                // Avoid applying to the widget itself if possible
                document.querySelectorAll("body *:not(.accessibility-widget-container *)").forEach((el: Element) => {
                    const htmlEl = el as HTMLElement;
                    if (htmlEl.style && !htmlEl.classList.contains('material-icons')) { // Check if style property exists
                        let originalSize = htmlEl.dataset.aswOrgFontSize;
                        if (!originalSize) {
                            originalSize = window.getComputedStyle(htmlEl).fontSize;
                            // Only store if it's a pixel value
                             if (originalSize.endsWith('px')) {
                                htmlEl.dataset.aswOrgFontSize = originalSize.replace('px', '');
                            } else {
                                // Handle non-pixel values if necessary, or skip
                                return;
                            }
                        }
                         // Ensure originalSize is parsed correctly
                        const baseSize = parseFloat(originalSize);
                        if (!isNaN(baseSize)) {
                            htmlEl.style.fontSize = `${baseSize * currentSize}px`;
                        }
                    }
                });


                this.settings.states.fontSize = currentSize;
                this.translate(); // Update the display text (e.g., "120%")
            }

            clickItem(btn: HTMLElement) {
                const key = btn.dataset.key;
                if (!key) return;

                const isFilter = btn.classList.contains("asw-filter");

                if (isFilter) {
                    const currentlySelected = this.settings.states.contrast === key;
                    // Deselect all filter buttons first
                    this.menu?.querySelectorAll(".asw-filter.asw-selected").forEach(b => {
                         if (b !== btn || currentlySelected) { // Deselect others, or self if clicking again
                            b.classList.remove("asw-selected");
                            b.setAttribute('aria-pressed', 'false');
                        }
                    });

                    if (currentlySelected) {
                        // If clicking the active filter, turn it off
                        this.settings.states.contrast = undefined;
                        this.changeFilter(); // Remove filter
                    } else {
                        // Activate the new filter
                        this.settings.states.contrast = key;
                        btn.classList.add("asw-selected");
                        btn.setAttribute('aria-pressed', 'true');
                        this.changeFilter(key);
                    }
                } else {
                    // Toggle non-filter buttons
                    this.settings.states[key] = !this.settings.states[key];
                    const isSelected = this.settings.states[key];
                    btn.classList.toggle("asw-selected", isSelected);
                    btn.setAttribute('aria-pressed', String(isSelected));
                    this.changeControls(); // Re-apply controls based on the new state
                }

                this.saveSettings();
            }

            changeControls() {
                const controlsConfig = [
                    { id: "highlight-title", selector: "h1, h2, h3, h4, h5, h6", css: "border: 1px solid  var(--color-warning) !important;" },
                    { id: "highlight-links", selector: "a[href]", css: "border: 1px solid var(--color-warning) !important;" },
                    { id: "readable-font", selector: "body, body *", css: "font-family: 'OpenDyslexic3', 'Comic Sans MS', 'Arial', sans-serif !important;" },
                    { id: "letter-spacing", selector: "p, span, a, li, td, th", css: "letter-spacing: 0.1em !important;" },
                    { id: "line-height", selector: "p, li", css: "line-height: 1.8em !important;" },
                    { id: "font-weight", selector: "body *:not(b):not(strong):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)", css: "font-weight: bold !important;" }, // Avoid double-bolding
                    { id: "stop-animations", selector: "*", css: `transition: none !important; animation-duration: 0.01s !important; animation-iteration-count: 1 !important; animation-fill-mode: forwards !important;` },
                    { id: "big-cursor", selector: "body, body *", css: `cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 512 512'%3E%3Cpath fill='%23000000' stroke='%23ffffff' stroke-width='10' d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z'/%3E%3C/svg%3E") 16 0, auto !important;` }, // Centered cursor hotspot
                ];

                let cssRules = "";
                const htmlEl = document.documentElement;

                controlsConfig.forEach(control => {
                    const isActive = !!this.settings.states[control.id];
                    htmlEl.classList.toggle(control.id, isActive); // Toggle class on <html> for global state indication

                    if (isActive) {
                        // Apply CSS rules directly
                        // Prefix selector with the class for specificity and to avoid global scope pollution
                        cssRules += `.${control.id} ${control.selector} { ${control.css} }\n`;

                        // Special handling for readable font (ensure font is loaded)
                        if (control.id === "readable-font" && !document.getElementById('asw-opendyslexic-font')) {
                             cssRules += `
                                @font-face {
                                    font-family: 'OpenDyslexic3';
                                    src: url('https://cdn.jsdelivr.net/gh/antijingoist/opendyslexic@master/packages/fonts/lib/OpenDyslexic-Regular.woff2') format('woff2'),
                                         url('https://cdn.jsdelivr.net/gh/antijingoist/opendyslexic@master/packages/fonts/lib/OpenDyslexic-Regular.woff') format('woff');
                                    font-weight: normal;
                                    font-style: normal;
                                    font-display: swap; /* Improve loading performance */
                                }
                            `;
                            // Add a marker style to know the font face rule is added
                            this.addStyleSheet('', 'asw-opendyslexic-font');
                        }
                    } else if (control.id === "readable-font") {
                         // Clean up font face if readable font is turned off
                        document.getElementById('asw-opendyslexic-font')?.remove();
                        delete this.styleElements['asw-opendyslexic-font'];
                    }
                });

                // Reading Guide Handling
                const readingGuideActive = !!this.settings.states["readable-guide"];
                const guideContainer = document.querySelector<HTMLElement>(".asw-rg-container");

                if (readingGuideActive) {
                    if (!guideContainer) {
                        const container = document.createElement("div");
                        container.className = "asw-rg-container";
                        container.innerHTML = `
                            <style>
                                .asw-rg { position: fixed; left: 0; right: 0; width: 100%; height: 0; pointer-events: none; background-color: rgba(0,0,0,0.6); z-index: 2147483646; /* High z-index */ }
                                .asw-rg-top { top: 0; }
                                .asw-rg-bottom { bottom: 0; }
                            </style>
                            <div class="asw-rg asw-rg-top"></div>
                            <div class="asw-rg asw-rg-bottom"></div>`;
                        document.body.appendChild(container);

                        const topGuide = container.querySelector<HTMLElement>(".asw-rg-top");
                        const bottomGuide = container.querySelector<HTMLElement>(".asw-rg-bottom");
                        const guideHeight = 25; // Height of the clear reading area

                        this.readingGuideHandler = (event: MouseEvent) => {
                            if (topGuide && bottomGuide) {
                                topGuide.style.height = `${event.clientY - guideHeight / 2}px`;
                                bottomGuide.style.height = `${window.innerHeight - event.clientY - guideHeight / 2}px`;
                            }
                        };
                        document.addEventListener("mousemove", this.readingGuideHandler, { passive: true }); // Use passive listener
                    }
                } else {
                    if (guideContainer) {
                        guideContainer.remove();
                    }
                    if (this.readingGuideHandler) {
                        document.removeEventListener("mousemove", this.readingGuideHandler);
                        this.readingGuideHandler = null;
                    }
                }

                this.addStyleSheet(cssRules, "asw-content-style");
            }

            addStyleSheet(css: string, id: string) {
                let styleElement = this.styleElements[id];
                if (!styleElement) {
                    styleElement = document.createElement("style");
                    styleElement.id = id;
                    document.head.appendChild(styleElement);
                    this.styleElements[id] = styleElement;
                }
                // Check if content is different before updating to avoid unnecessary reflows
                if (styleElement.textContent !== css) {
                    styleElement.textContent = css;
                }
            }

            removeStyleSheet(id: string) {
                 const styleElement = this.styleElements[id];
                 if (styleElement) {
                     styleElement.remove();
                     delete this.styleElements[id];
                 }
            }

            getFilterCSS(value: string, property: string = "filter"): string {
                // Basic filter application, vendor prefixes are generally not needed for modern browsers
                return `${property}: ${value};`;
            }

            changeFilter(filterKey?: string) {
                const htmlEl = document.documentElement;
                // Remove previous filter class
                const currentFilter = htmlEl.dataset.aswFilter;
                if (currentFilter) {
                    htmlEl.classList.remove(`asw-filter-${currentFilter}`);
                }

                let filterStyle = "";
                if (filterKey) {
                    htmlEl.dataset.aswFilter = filterKey; // Store current filter on html
                    htmlEl.classList.add(`asw-filter-${filterKey}`); // Add specific class

                    switch (filterKey) {
                        // case "dark-contrast":
                        //     filterStyle = `
                        //         html.asw-filter-dark-contrast { background-color: #121212 !important; color: #ffffff !important; }
                        //         html.asw-filter-dark-contrast img,
                        //         html.asw-filter-dark-contrast video,
                        //         html.asw-filter-dark-contrast iframe { filter: brightness(0.8) contrast(1.2); }
                        //         html.asw-filter-dark-contrast *:not(img):not(video):not(iframe) { background-color: transparent !important; color: inherit !important; border-color: #555 !important; }
                        //         html.asw-filter-dark-contrast a { color: #bb86fc !important; } /* Example link color */
                        //     `;
                        //     break;
                        // case "yellow-contrast":
                        //      filterStyle = `
                        //         html.asw-filter-yellow-contrast { background-color: #000000 !important; color: #ffff00 !important; }
                        //         html.asw-filter-yellow-contrast img,
                        //         html.asw-filter-yellow-contrast video,
                        //         html.asw-filter-yellow-contrast iframe { filter: brightness(0.9) contrast(1.1) sepia(0.2); }
                        //         html.asw-filter-yellow-contrast *:not(img):not(video):not(iframe) { background-color: transparent !important; color: inherit !important; border-color: #ffff00 !important; }
                        //         html.asw-filter-yellow-contrast a { color: #ffffff !important; text-decoration: underline !important;} /* Example link color */
                        //     `;
                        //     break;
                        case "light-contrast":
                            filterStyle = `html.asw-filter-light-contrast { ${this.getFilterCSS("brightness(1.2)")} }`;
                            break;
                        case "high-contrast":
                            filterStyle = `html.asw-filter-high-contrast { ${this.getFilterCSS("contrast(1.5)")} }`;
                            break;
                        case "high-saturation":
                            filterStyle = `html.asw-filter-high-saturation { ${this.getFilterCSS("saturate(1.8)")} }`;
                            break;
                        case "low-saturation":
                            filterStyle = `html.asw-filter-low-saturation { ${this.getFilterCSS("saturate(0.5)")} }`;
                            break;
                        case "monochrome":
                            filterStyle = `html.asw-filter-monochrome { ${this.getFilterCSS("grayscale(1)")} }`;
                            break;
                    }
                } else {
                    // No filter selected, remove attribute
                    delete htmlEl.dataset.aswFilter;
                }

                this.addStyleSheet(filterStyle, "asw-filter-style");
            }

            translate() {
                if (!this.menu) return;

                // Translate titles
                this.menu.querySelectorAll("[data-translate][title]").forEach(el => {
                    const key = el.getAttribute("data-translate")!;
                    el.setAttribute("title", this.locale?.[key] || key);
                });

                // Translate text content
                this.menu.querySelectorAll(".asw-translate").forEach(el => {
                    const key = el.getAttribute("data-translate") || el.textContent?.trim();
                    if (key) {
                        el.textContent = this.locale?.[key] || key;
                    }
                });

                // Update font size display
                const amountEl = this.menu.querySelector(".asw-amount");
                if (amountEl) {
                    const fontSize = this.settings.states.fontSize;
                    if (fontSize && fontSize !== 1) {
                        amountEl.textContent = `${Math.round(fontSize * 100)}%`;
                    } else {
                        const defaultKey = amountEl.getAttribute("data-translate") || "Default";
                        amountEl.textContent = this.locale?.[defaultKey] || defaultKey;
                    }
                }
            }

             updateButtonStates() {
                if (!this.menu) return;

                // Update toggle buttons
                this.menu.querySelectorAll(".asw-btn:not(.asw-filter)").forEach(btn => {
                    const key = (btn as HTMLElement).dataset.key;
                    if (key) {
                        const isActive = !!this.settings.states[key];
                        btn.classList.toggle("asw-selected", isActive);
                        btn.setAttribute('aria-pressed', String(isActive));
                    }
                });

                // Update filter buttons
                this.menu.querySelectorAll(".asw-filter").forEach(btn => {
                    const key = (btn as HTMLElement).dataset.key;
                    const isActive = this.settings.states.contrast === key;
                    btn.classList.toggle("asw-selected", isActive);
                     btn.setAttribute('aria-pressed', String(isActive));
                });
            }

            _createButtons(buttons: any[], className?: string): string {
                return buttons.map(btn => {
                    // Determine initial selected state (important for filters)
                    let isSelected = !!this.settings.states[btn.key];
                    if (className === 'asw-filter' && this.settings.states.contrast === btn.key) {
                        isSelected = true;
                    }
                    // Use button element for better semantics
                    return `
                        <button
                            class="asw-btn ${className || ""} ${isSelected ? "asw-selected" : ""}"
                            type="button"
                            data-key="${btn.key}"
                            title="${btn.label}"
                            data-translate="${btn.label}"
                            aria-pressed="${isSelected}"
                        >
                            <span class="material-icons" aria-hidden="true">${btn.icon}</span>
                            <span class="asw-translate">${btn.label}</span>
                        </button>`;
                }).join("");
            }

            // --- Cleanup Method ---
            destroy() {
                // Remove event listeners
                if (this.readingGuideHandler) {
                    document.removeEventListener("mousemove", this.readingGuideHandler);
                    this.readingGuideHandler = null;
                }
                // Remove reading guide container if it exists
                document.querySelector(".asw-rg-container")?.remove();

                // Remove added style sheets
                Object.keys(this.styleElements).forEach(id => this.removeStyleSheet(id));

                // Remove the main widget element from the DOM
                this.menu?.remove();

                // Reset HTML element classes and attributes
                const htmlEl = document.documentElement;
                Object.keys(this.settings.states).forEach(key => {
                     // Remove classes added by changeControls
                    if (document.body.classList.contains(key)) {
                        document.body.classList.remove(key);
                    }
                     if (htmlEl.classList.contains(key)) {
                        htmlEl.classList.remove(key);
                    }
                });
                 // Remove filter class and attribute
                const currentFilter = htmlEl.dataset.aswFilter;
                if (currentFilter) {
                    htmlEl.classList.remove(`asw-filter-${currentFilter}`);
                    delete htmlEl.dataset.aswFilter;
                }

                this.rendered = false;
                this.menu = null;
                console.log("AccessibilityWidget destroyed");
            }
        }
        // --- End of AccessibilityWidget Class Definition ---


        // --- Initialization Logic ---
        widgetContainerRef.current = document.createElement("div"); // Create container managed by React ref
        document.body.appendChild(widgetContainerRef.current); // Append container to body

        // Instantiate the widget, passing the container ref
        const widget = new AccessibilityWidget({
            container: widgetContainerRef.current,
        }).render(); // Render the widget

        widgetInstanceRef.current = widget; // Store the instance in the ref

        // --- Cleanup Function ---
        return () => {
            console.log("Running Accessibility cleanup");
            if (widgetInstanceRef.current) {
                widgetInstanceRef.current.destroy(); // Call the class's destroy method
                widgetInstanceRef.current = null; // Clear the ref
            }

            // Explicitly remove any lingering global listeners if not handled in destroy()
             const guideContainer = document.querySelector<HTMLElement>(".asw-rg-container");
             if (guideContainer) guideContainer.remove();
             // Ensure style tags are removed if not handled perfectly by destroy()
             document.getElementById('asw-filter-style')?.remove();
             document.getElementById('asw-content-style')?.remove();
             document.getElementById('asw-opendyslexic-font')?.remove();

        };

    }, []); 

    return null;
}
