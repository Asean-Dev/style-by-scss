"use client";

import React from 'react';
import Link from "next/link";

export default function DetailShare() {
    return (
        <div className="share">
            <strong className="txt">แชร์เนื้อหานี้</strong>
            <ul className="item-list">
                <li>
                    <Link href="#" className="link facebook" title="facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.385" height="20" viewBox="0 0 10.385 20">
                            <path d="M11.549,20V10.878H14.61l.459-3.556h-3.52V5.051c0-1.029.285-1.731,1.762-1.731h1.882V.139A25.512,25.512,0,0,0,12.45,0C9.736,0,7.877,1.657,7.877,4.7V7.322H4.807v3.556h3.07V20Z" transform="translate(-4.807)" fill="#fff"/>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="link line" title="line" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.167" viewBox="0 0 20 19.167">
                            <path d="M10,.417C4.488.417,0,4.082,0,8.586,0,12.62,3.558,16,8.362,16.642c.326.069.769.217.882.5a2.062,2.062,0,0,1,.032.906l-.137.855c-.038.252-.2.994.874.541a32.243,32.243,0,0,0,7.863-5.849,7.251,7.251,0,0,0,2.123-5c0-4.5-4.488-8.169-10-8.169ZM6.086,11.264H4.1a.53.53,0,0,1-.525-.528v-4a.525.525,0,1,1,1.05,0v3.472H6.086a.528.528,0,0,1,0,1.056Zm2.055-.528a.524.524,0,1,1-1.048,0v-4a.524.524,0,1,1,1.048,0Zm4.784,0a.528.528,0,0,1-.36.5.538.538,0,0,1-.166.026.514.514,0,0,1-.425-.21L9.938,8.271v2.465a.524.524,0,1,1-1.047,0v-4a.526.526,0,0,1,.358-.5.485.485,0,0,1,.162-.028.538.538,0,0,1,.412.213l2.052,2.793V6.736a.525.525,0,1,1,1.05,0Zm3.212-2.529a.529.529,0,0,1,0,1.057H14.675v.943h1.462a.528.528,0,0,1,0,1.056H14.149a.528.528,0,0,1-.523-.528v-4a.528.528,0,0,1,.525-.528H16.14a.528.528,0,0,1,0,1.057H14.675v.943Z" transform="translate(0 -0.417)" fill="#fff"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    )
}