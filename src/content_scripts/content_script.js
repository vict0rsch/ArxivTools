/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert($.easing.default);
            return $.easing[$.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158; var p = 0; var a = c;
            if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
            if (a < Math.abs(c)) { a = c; var s = p / 4; }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158; var p = 0; var a = c;
            if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
            if (a < Math.abs(c)) { a = c; var s = p / 4; }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158; var p = 0; var a = c;
            if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) { a = c; var s = p / 4; }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

var timeout = null;
var prevent = false;

const svg = name => {

    switch (name) {
        case "download":
            return `<svg
                        width="52px" height="42px" viewBox="0 0 22 16"
                    >
                        <path d="M2,10 L6,13 L12.8760559,4.5959317 C14.1180021,3.0779974 16.2457925,2.62289624 18,3.5 L18,3.5 C19.8385982,4.4192991 21,6.29848669 21,8.35410197 L21,10 C21,12.7614237 18.7614237,15 16,15 L1,15" id="check"></path>
                        <polyline points="4.5 8.5 8 11 11.5 8.5" class="svg-out"></polyline>
                        <path d="M8,1 L8,11" class="svg-out"></path>
                    </svg>`
        case "clipboard-default":
            return `<svg
                class="copy-feedback tabler-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="64" height="32" viewBox="0 0 24 24"
                stroke-width="1.25" stroke="rgb(0, 119, 255)" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
            >
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <line x1="9" y1="12" x2="9.01" y2="12" />
                <line x1="13" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="9.01" y2="16" />
                <line x1="13" y1="16" x2="15" y2="16" />
            </svg>`

        case "clipboard-default-ok":
            return `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="tabler-icon copy-feedback-ok"
                style="display:none"
                width="64" height="64" viewBox="0 0 24 24"
                stroke-width="1.25" stroke="rgb(0, 200, 84)" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <path d="M9 14l2 2l4 -4" />
            </svg>`

        case "vanity-close":
            return `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="tabler-icon"
                width="24" height="24" viewBox="0 0 24 24"
                stroke-width="1.25" stroke="#b31b1b" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>`

        case "vanity-clipboard":
            return `<svg
                class="copy-feedback tabler-icon" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24"
                stroke-width="1.25" stroke="rgb(0, 119, 255)" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <line x1="9" y1="12" x2="9.01" y2="12" />
                <line x1="13" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="9.01" y2="16" />
                <line x1="13" y1="16" x2="15" y2="16" />
            </svg>`

        case "vanity-clipboard-ok":
            return `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="tabler-icon copy-feedback-ok"
                style="display:none"
                width="64" height="64" viewBox="0 0 24 24"
                stroke-width="1.25" stroke="rgb(0, 200, 84)" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <path d="M9 14l2 2l4 -4" />
            </svg>`

        default:
            break;
    }
}

const copyDivToClipboard = divId => {
    var range = document.createRange();
    range.selectNode(document.getElementById(divId));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

/* Helper function */
const download_file = (fileURL, fileName) => {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
        save.download = fileName || filename;
        if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
            document.location = save.href;
            // window event not working here
        } else {
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

const main = checks => {

    const isVanity = window.location.href.indexOf("arxiv-vanity.com") > -1;
    if (!isVanity) {
        arxiv(checks)
    } else if (checks.checkVanity) {
        vanity()
    }
}

const feedback = text => {
    try {
        clearTimeout(timeout)
        $("#feedback-notif").remove();
        prevent = true;
    } catch (error) {
        console.log("No feedback to remove.")
    }
    $("body").append(`
        <div id="feedback-notif">${text}</div>
    `)
    $("#feedback-notif").animate({
        right: "64px",
        opacity: "1"
    }, 400, "easeInOutBack");
    timeout = setTimeout(() => {
        $("#feedback-notif").animate({
            right: "-200px",
            opacity: "0"
        }, 400, "easeInOutBack", () => {
            !prevent && $("#feedback-notif").remove();
            prevent = false;
        });

    }, 2000)
}

const arxiv = checks => {

    const { checkMd,
        checkBib,
        checkDownload,
        checkPdfTitle } = checks;

    var h = null;
    $("h2").each((idx, el) => {
        if ($(el).html() === "Download:") {
            h = $(el);
        }
    });
    const id = window.location.href.match(/\d{4}\.\d{4,5}\d/g)[0];
    const isPdf = window.location.href.match(/\d{4}.\d{5}(v\d{1,2})?.pdf/g);
    const pdfUrl = "https://arxiv.org/pdf/" + id + ".pdf";
    const fileName = id + " - " + document.title.split(" ").slice(1).join(" ") + ".pdf";

    // -----------------------------
    // -----  Download Button  -----
    // -----------------------------
    if (checkDownload && !isPdf) {
        const button = `
            <div class="arxivTools-container">
                <div id="arxiv-button">
                    ${svg("download")}
                </div>
            </div>
            `;
        h.parent().append(button)
        var downloadTimeout;
        $("#arxiv-button").click(() => {
            $("#arxiv-button").removeClass("downloaded");
            $("#arxiv-button").addClass("downloaded");
            downloadTimeout && clearTimeout(downloadTimeout);
            downloadTimeout = setTimeout(() => {
                $("#arxiv-button").hasClass("downloaded") && $("#arxiv-button").removeClass("downloaded");
            }, 1500)
            download_file(pdfUrl, fileName);
        })
    }
    // ---------------------------
    // -----  Markdown Link  -----
    // ---------------------------
    if (checkMd && !isPdf) {
        h.parent().append(`
            <div id="markdown-container">
                <div id="markdown-header" class="arxivTools-header">
                    <h3>Markdown</h3>
                    ${svg("clipboard-default")}
                    ${svg("clipboard-default-ok")}
                </div>
                <div id="markdown-link" class="arxivTools-codify">[${document.title}](${window.location.href})</div>
            </div>
        `);
        $("#markdown-header .copy-feedback").click(e => {
            $("#markdown-header .copy-feedback").fadeOut(200, () => {
                $("#markdown-header .copy-feedback-ok").fadeIn(200, () => {
                    setTimeout(() => {
                        $("#markdown-header .copy-feedback-ok").fadeOut(200,
                            () => {
                                $("#markdown-header .copy-feedback").fadeIn(200)
                            }
                        )
                    }, 1500)
                })
            })
            copyDivToClipboard("markdown-link");
            feedback("Markdown Link Copied!");
        });
    }

    if (checkPdfTitle && isPdf) {
        setTimeout(
            () => {
                $.get(`https://export.arxiv.org/api/query?id_list=${id}`).then(data => {
                    const bib = $(data);
                    const title = $(bib.find("entry title")[0]).text();
                    window.document.title = title + ` (${id}).pdf`
                });
            }, 500
        )
    }

    if (checkBib && !isPdf) {

        h.parent().append(`
                <div id="loader-container" class="arxivTools-container">
                    <div class="sk-folding-cube">
                        <div class="sk-cube1 sk-cube"></div>
                        <div class="sk-cube2 sk-cube"></div>
                        <div class="sk-cube4 sk-cube"></div>
                        <div class="sk-cube3 sk-cube"></div>
                    </div>
                </div>
            `);



        $.get(`https://export.arxiv.org/api/query?id_list=${id}`).then(data => {

            const { bibvars, bibtext } = parseBibtex(data)

            const bibtexDiv = `
                    <div id="bibtexDiv">
                        <div id="texHeader" class="arxivTools-header">
                            <h3>BibTex:</h3>
                            ${svg("clipboard-default")}
                            ${svg("clipboard-default-ok")}
                        </div>
                        <div id="texTextarea" class="arxivTools-codify">${bibtext}</div>
                    </div>
                `;

            $("#loader-container").fadeOut(() => {
                $("#loader-container").remove();
                h.parent().append(bibtexDiv);
                $("#texHeader .copy-feedback").click(e => {
                    $("#texHeader .copy-feedback").fadeOut(200, () => {
                        $("#texHeader .copy-feedback-ok").fadeIn(200, () => {
                            setTimeout(() => {
                                $("#texHeader .copy-feedback-ok").fadeOut(200,
                                    () => {
                                        $("#texHeader .copy-feedback").fadeIn(200)
                                    }
                                )
                            }, 1500)
                        })
                    })
                    copyDivToClipboard("texTextarea");
                    feedback("Bibtex Citation Copied!");
                });
            });


        })
    }
}

const vanity = () => {

    var citationtimeout
    $(".ltx_ref").on("mouseenter", (e) => {
        clearTimeout(citationtimeout);
        $(".arxivTools-card").remove();
        if (!$(e.target).hasClass("ltx_engrafo_tooltip")) {
            return
        }
        citationtimeout = setTimeout(() => {
            const popper = $($(".tippy-popper:visible")[0])
            const journal = $(popper.find(".ltx_bib_journal")[0])
            let query;
            let arxivId;
            let vanityTitle;
            let isArxivCitation = false;
            if (journal.text().indexOf("arXiv:") > -1) {
                arxivId = journal.text().split("arXiv:");
                arxivId = arxivId[arxivId.length - 1];
                query = `https://export.arxiv.org/api/query?id_list=${arxivId}`;
                isArxivCitation = true;
            }
            else {
                vanityTitle = $(popper.find(".ltx_bib_title")[0]).text();
                query = `https://export.arxiv.org/api/query?search_query=all:${vanityTitle}&max_results=1`
            }

            $.get(query).then(data => {
                $(".arxivTools-card").remove();
                const { bibvars, bibtext } = parseBibtex(data)
                if (
                    !isArxivCitation
                    && bibvars.title.toLowerCase().replace(/[^a-z]/gi, '') !== vanityTitle.toLowerCase().replace(/[^a-z]/gi, '')
                ) {
                    console.log("Wrong title from Arxiv API:",
                        vanityTitle,
                        bibvars.title
                    )
                    return
                }

                const offset = $(e.target).offset();
                $("body").append(`
                        <div id="arxivTools-${bibvars.arxivId}" class="arxivTools-card" style="top:${offset.top + 30}px">
                            <div class="arxivTools-card-body">
                                <div class="arxivTools-card-header">
                                    ArxivTools: BibTex citation
                                </div>
                                <div class="arxivTools-bibtex" id="arxivTools-bibtex-${bibvars.arxivId}">
                                    ${bibtext}
                                </div>
                                <div class="arxivTools-buttons">
                                    <div class="arxivTools-close">
                                        ${svg("vanity-close")}
                                    </div>
                                    <div class="arxivTools-copy" id="arxivTools-copy-${bibvars.arxivId}">
                                        ${svg("vanity-clipboard")}
                                        ${svg("vanity-clipboard-ok")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        `);

                $(".arxivTools-close").click(() => {
                    $(".arxivTools-card").remove()
                });
                $(".arxivTools-copy").click((e) => {
                    let id = $($(e.target).parent().parent().find(".arxivTools-copy")[0]).attr('id').split("-");
                    id = id[id.length - 1];
                    copyDivToClipboard("arxivTools-bibtex-" + id)
                    $(".copy-feedback").fadeOut(() => {
                        $(".copy-feedback-ok").fadeIn(() => {
                            setTimeout(() => {
                                $(".copy-feedback-ok").fadeOut(() => {
                                    $(".copy-feedback").fadeIn();
                                });
                            }, 1000);
                        });
                    });
                });
            })
        }, 400)
    })
}

$(() => {
    const checks = ['checkBib', 'checkMd', 'checkDownload', 'checkPdfTitle', "checkVanity"];
    chrome.storage.sync.get(checks, function (items) {

        const checkMd = items.hasOwnProperty("checkMd") ? items.checkMd : true;
        const checkBib = items.hasOwnProperty("checkBib") ? items.checkBib : true;
        const checkDownload = items.hasOwnProperty("checkDownload") ? items.checkDownload : true;
        const checkPdfTitle = items.hasOwnProperty("checkPdfTitle") ? items.checkPdfTitle : true;
        const checkVanity = items.hasOwnProperty("checkVanity") ? items.checkVanity : true;

        main({
            checkMd,
            checkBib,
            checkDownload,
            checkPdfTitle,
            checkVanity
        })

    });

})
