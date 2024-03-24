import moment from "moment-timezone";
import nodemailer from "nodemailer";

export async function sendMail(body: {
    name: string;
    email: string;
    phone: string;
    message: string;
}) {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: false,
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, //
            },
        });


        await transporter.sendMail({
            from: process.env.EMAIL,
            to: body.email,
            subject: "Thank You for Reaching Out to ABC Limo Service",
            html: `<!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        
        <head>
            <title>Thank You for Reaching Out to ABC Limo Service</title>
            <meta name=x-apple-disable-message-reformatting>
            <meta http-equiv=X-UA-Compatible>
            <meta charset=utf-8>
            <meta name=viewport content=target-densitydpi=device-dpi>
            <meta content=true name=HandheldFriendly>
            <meta content=width=device-width name=viewport>
            <style type="text/css">
                table {
                    border-collapse: separate;
                    table-layout: fixed;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt
                }
        
                table td {
                    border-collapse: collapse
                }
        
                .ExternalClass {
                    width: 100%
                }
        
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                    line-height: 100%
                }
        
                * {
                    line-height: inherit;
                    text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    -moz-text-size-adjust: 100%;
                    -o-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale
                }
        
                html {
                    -webkit-text-size-adjust: none !important
                }
        
                img+div {
                    display: none;
                    display: none !important
                }
        
                img {
                    Margin: 0;
                    padding: 0;
                    -ms-interpolation-mode: bicubic
                }
        
                h1,
                h2,
                h3,
                p,
                a {
                    line-height: 1;
                    overflow-wrap: normal;
                    white-space: normal;
                    word-break: break-word
                }
        
                a {
                    text-decoration: none
                }
        
                h1,
                h2,
                h3,
                p {
                    min-width: 100% !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    display: inline-block !important;
                    border: 0;
                    padding: 0;
                    margin: 0
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important
                }
        
                a[href^="mailto"],
                a[href^="tel"],
                a[href^="sms"] {
                    color: inherit;
                    text-decoration: none
                }
        
                @media (min-width: 481px) {
                    .hd {
                        display: none !important
                    }
                }
        
                @media (max-width: 480px) {
                    .hm {
                        display: none !important
                    }
                }
        
                [style*="Albert Sans"] {
                    font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
                }
        
                @media only screen and (min-width: 481px) {
                    .t3 {
                        mso-line-height-alt: 45px !important;
                        line-height: 45px !important;
                        display: block !important
                    }
        
                    .t9 {
                        padding-left: 50px !important;
                        padding-bottom: 60px !important;
                        padding-right: 50px !important
                    }
        
                    .t11 {
                        padding-left: 50px !important;
                        padding-bottom: 60px !important;
                        padding-right: 50px !important;
                        width: 500px !important
                    }
        
                    .t15,
                    .t20 {
                        padding-bottom: 15px !important
                    }
        
                    .t21 {
                        line-height: 26px !important;
                        font-size: 24px !important;
                        letter-spacing: -1.56px !important
                    }
        
                    .t28 {
                        padding: 48px 50px !important
                    }
        
                    .t30 {
                        padding: 48px 50px !important;
                        width: 500px !important
                    }
        
                    .t44,
                    .t49 {
                        padding-bottom: 44px !important
                    }
        
                    .t157 {
                        padding-bottom: 60px !important
                    }
        
                    .t159 {
                        width: 26% !important;
                        max-width: 130px !important
                    }
        
                    .t162 {
                        padding-bottom: 60px !important
                    }
        
                    .t167 {
                        width: 74% !important
                    }
        
                    .t227,
                    .t235 {
                        width: 250px !important
                    }
        
                    .t248 {
                        padding-left: 10px !important;
                        width: 590px !important
                    }
        
                    .t253 {
                        padding-left: 10px !important
                    }
        
                    .t258 {
                        padding-left: 10px !important;
                        width: 590px !important
                    }
        
                    .t263 {
                        padding-left: 10px !important
                    }
        
                    .t276 {
                        mso-line-height-alt: 0px !important;
                        line-height: 0 !important;
                        display: none !important
                    }
        
                    .t278 {
                        width: 50% !important
                    }
        
                    .t279 {
                        padding-left: inherit !important;
                        padding-right: inherit !important
                    }
        
                    .t281,
                    .t283 {
                        padding-bottom: 0 !important;
                        padding-right: 5px !important
                    }
        
                    .t287 {
                        width: 50% !important
                    }
        
                    .t288 {
                        padding-left: inherit !important;
                        padding-right: inherit !important
                    }
        
                    .t290,
                    .t292 {
                        padding-left: 5px !important
                    }
        
                    .t296 {
                        padding-left: 10px !important;
                        width: 590px !important
                    }
        
                    .t301 {
                        padding-left: 10px !important
                    }
                }
        
            </style>
        
            <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"
                type="text/css">
        
        
            <script
                type="application/ld+json">[{"@context":"http://schema.org/","@type":"Organization","logo":"https://uploads.tabular.email/u/17ebbdb2-1cfc-48f0-ac9e-608550c2e649/e1f0cfd7-b20f-48d5-8633-0d939e801aa7.png"},{"@context":"http://schema.org/","@type":"EmailMessage","subjectLine":"subject"},{"@context":"http://schema.org/","@type":"PromotionCard","image":"https://uploads.tabular.email/u/17ebbdb2-1cfc-48f0-ac9e-608550c2e649/d04b14a1-4c90-4d4b-9b85-1bde7caa3268.jpeg"}]</script>
        
        </head>
        
        <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
            <div
                style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
                ABC LIMO</div>
            <div style="font-size: 0px; line-height:0px; display: none; max-height: 0px; overflow: hidden;">
                &#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
            </div>
            <div class=t1 style="background-color:#242424;">
                <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                    <tr>
                        <td class=t479 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
        
                            <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                                <tr>
                                    <td>
                                        <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                            <tr>
        
                                                <td class=t11
                                                    style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
        
        
                                                    <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                        <tr>
                                                            <td>
                                                                <table class=t146 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t147 style="overflow:hidden;width:800px;">
        
        
                                                                            <div class=t153
                                                                                style="display:inline-table;width:100%;text-align:right;vertical-align:top;">
        
                                                                                <div class=t167
                                                                                    style="display:inline-table;text-align:initial;vertical-align:inherit;width:59.22222%;max-width:370px;">
                                                                                    <table role=presentation width=100%
                                                                                        cellpadding=0 cellspacing=0 class=t169>
                                                                                        <tr>
                                                                                            <td class=t170
                                                                                                style="overflow:hidden;padding:35px 0 0 0;">
                                                                                                <table role=presentation
                                                                                                    width=100% cellpadding=0
                                                                                                    cellspacing=0>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table class=t195
                                                                                                                role=presentation
                                                                                                                cellpadding=0
                                                                                                                cellspacing=0
                                                                                                                align=center>
                                                                                                                <tr>
        
                                                                                                                    <td class=t196
                                                                                                                        style="width:600px;">
        
        
                                                                                                                        <p class=t202
                                                                                                                            style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                            <span
                                                                                                                                class=t203
                                                                                                                                style="font-weight:bold;mso-line-height-rule:exactly;">ABC
                                                                                                                                Limo
                                                                                                                                Service</span>
                                                                                                                        </p>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table class=t185
                                                                                                                role=presentation
                                                                                                                cellpadding=0
                                                                                                                cellspacing=0
                                                                                                                align=center>
                                                                                                                <tr>
        
                                                                                                                    <td class=t186
                                                                                                                        style="width:600px;padding:0 0 22px 0;">
        
        
                                                                                                                        <p class=t192
                                                                                                                            style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                            
                                                                                                                        </p>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
        
                                                                                <div class=t159
                                                                                    style="display:inline-table;text-align:initial;vertical-align:inherit;width:40.77778%;max-width:auto;">
                                                                                    <table role=presentation width=100%
                                                                                        cellpadding=0 cellspacing=0 class=t161>
                                                                                        <tr>
                                                                                            <td 
                                                                                                >
                                                                                                <div style="font-size:0px;"><img
                                                                                                        class=t163
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=160 height=auto
                                                                                                        src=${process.env.CLIENT_APP_URL}/192x192.png />
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t15 style="width:600px;padding:0 0 20px 0;">
        
        
                                                                            <h1 class=t21
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                Dear ${body.name},</h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t206 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t207 style="width:600px;padding:0 0 22px 0;">
        
        
                                                                            <p class=t213
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                Thank you for contacting ABC Limo Service! Your
                                                                                message is important to us, and we're thrilled
                                                                                to
                                                                                hear from you. Our team is currently reviewing
                                                                                your inquiry and will get back to you as soon as
                                                                                possible.
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t216 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t217 style="width:600px;padding:0 0 22px 0;">
        
        
                                                                            <p class=t223
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:justify;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                If your message requires urgent attention or you
                                                                                have further questions, feel free to call us
                                                                                directly at <a
                                                                                    href="tel:+12069727000">+1(206)-972-7000</a>.
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t175 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t176 style="width:600px;padding:0 0 22px 0;">
        
        
                                                                            <p class=t182
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                We're committed to providing exceptional service
                                                                                and ensuring all your needs are met. We look
                                                                                forward to connecting with you soon.
                                                                            </p>
                                                                            <p style="margin-bottom: 10px;"></p>
                                                                            <p class=t182
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                
                                                                                Warm regards,
                                                                            </p>
                                                                           
                                                                            <p class=t182
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                ABC Limo Service Team
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t267 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t268
                                                                            style="background-color:#F0F0F0;overflow:hidden;width:520px;padding:40px 40px 40px 40px;">
        
        
                                                                            <div class=t274
                                                                                style="display:inline-table;width:100%;text-align:left;vertical-align:top;">
        
                                                                                <div class=t278
                                                                                    style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
                                                                                    <table role=presentation width=100%
                                                                                        cellpadding=0 cellspacing=0 class=t280>
                                                                                        <tr>
                                                                                            <td class=t281
                                                                                                style="overflow:hidden;padding:0 0 15px 0;">
                                                                                                <table role=presentation
                                                                                                    width=100% cellpadding=0
                                                                                                    cellspacing=0>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table class=t339
                                                                                                                role=presentation
                                                                                                                cellpadding=0
                                                                                                                cellspacing=0
                                                                                                                align=center>
                                                                                                                <tr>
        
                                                                                                                    <td class=t340
                                                                                                                        style="overflow:hidden;width:800px;">
        
        
                                                                                                                        <table
                                                                                                                            role=presentation
                                                                                                                            width=100%
                                                                                                                            cellpadding=0
                                                                                                                            cellspacing=0>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t343
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t344
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <h1 class=t350
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                                                                    Details
                                                                                                                                                </h1>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <div class=t342
                                                                                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                                                        &nbsp;
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t353
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t354
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t360
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    Name:
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t363
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t364
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t370
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    Email:
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t373
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t374
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t380
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    Phone
                                                                                                                                                    Number:
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t383
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t384
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t390
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    Your
                                                                                                                                                    Message:
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
        
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
        
                                                                                    <div class=t276
                                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">
                                                                                        &nbsp;</div>
        
                                                                                </div>
        
                                                                                <div class=t287
                                                                                    style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
                                                                                    <table role=presentation width=100%
                                                                                        cellpadding=0 cellspacing=0 class=t289>
                                                                                        <tr>
                                                                                            <td class=t290
                                                                                                style="overflow:hidden;">
                                                                                                <table role=presentation
                                                                                                    width=100% cellpadding=0
                                                                                                    cellspacing=0>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table class=t398
                                                                                                                role=presentation
                                                                                                                cellpadding=0
                                                                                                                cellspacing=0
                                                                                                                align=center>
                                                                                                                <tr>
        
                                                                                                                    <td class=t399
                                                                                                                        style="overflow:hidden;width:800px;">
        
        
                                                                                                                        <table
                                                                                                                            role=presentation
                                                                                                                            width=100%
                                                                                                                            cellpadding=0
                                                                                                                            cellspacing=0>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t402
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t403
                                                                                                                                                style="width:600px;">
        
        
        
                                                                                                                                                <div
                                                                                                                                                    style="height: 16px;">
        
                                                                                                                                                </div>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <div class=t401
                                                                                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                                                        &nbsp;
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t412
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t413
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t419
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    ${body.name}
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t422
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t423
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t429
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    ${body.email}
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t432
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t433
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t439
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    ${body.phone}
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>
                                                                                                                                    <table
                                                                                                                                        class=t442
                                                                                                                                        role=presentation
                                                                                                                                        cellpadding=0
                                                                                                                                        cellspacing=0
                                                                                                                                        align=center>
                                                                                                                                        <tr>
        
                                                                                                                                            <td class=t443
                                                                                                                                                style="width:600px;">
        
        
                                                                                                                                                <p class=t449
                                                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                                    ${body.message}
                                                                                                                                                </p>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
        
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class=t29 role=presentation cellpadding=0 cellspacing=0 align=center>
                                            <tr>
        
                                                <td class=t30
                                                    style="background-color:#242424;overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
        
        
                                                    <table role=presentation width=100% cellpadding=0 cellspacing=0>

                                                        <tr>
                                                            <td>
                                                            <table class=t43 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t44
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">


                                                                    <div class=t50
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:middle;">

                                                                        <div class=t56
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t57>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t58>
                                                                                    <tr>
                                                                                        <td class=t59>
                                                                                            <a href="${process.env.CLIENT_APP_URL}"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                style="text-decoration: none;">
                                                                                                <div
                                                                                                    style="font-size:0px; background-color: white;">
                                                                                                    <img class=t60
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=${process.env.CLIENT_APP_URL}/192x192.png />
                                                                                                </div>
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                        <div class=t96
                                                                            style="display:inline-table;text-align:center;vertical-align:inherit;width: 40%;">
                                                                            <div class=t97>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t98>
                                                                                    <tr>
                                                                                        <td class=t99>
                                                                                            <div>
                                                                                                <a class=t121
                                                                                                    href="tel:+12069727000"
                                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#ffffff;mso-line-height-rule:exactly;font-size: 10px;"
                                                                                                    target=_blank>
                                                                                                    +1(206)-972-7000</a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                        <div class=t86
                                                                            style="display:inline-table;text-align:center;vertical-align:inherit;width: 40%;">
                                                                            <div class=t87>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t88>
                                                                                    <tr>
                                                                                        <td class=t89>
                                                                                            <div>
                                                                                                <a class=t121
                                                                                                    href="mailto:abclimo2000@gmail.com"
                                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#ffffff;mso-line-height-rule:exactly;font-size: 10px;"
                                                                                                    target=_blank>
                                                                                                    abclimo2000@gmail.com
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t113 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t114 style="width:600px;">
        
        
                                                                            <p class=t120
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                ABC Limo Services
        
                                                                                111 W 11th St Ste 234
                                                                                Beverly Hills, LA 90209</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table class=t103 role=presentation cellpadding=0 cellspacing=0
                                                                    align=center>
                                                                    <tr>
        
                                                                        <td class=t104 style="width:600px;">
        
        
                                                                            <p class=t110
                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                <a class=t121
                                                                                    href=${process.env.CLIENT_APP_URL}contact
                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                                    target=_blank>Unsubscribe</a>  •  <a
                                                                                    class=t122
                                                                                    href=${process.env.CLIENT_APP_URL}
                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                                    target=_blank>Privacy policy</a>  •  <a
                                                                                    class=t123
                                                                                    href=${process.env.CLIENT_APP_URL}contact
                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                                    target=_blank>Contact us</a>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
        
        </html>
        `,
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "New contact email",
            html: `<p>you have a new contact request</p>
               <h3>Contact details</h3>
               <ul>
                   <li>Name: ${body.name}</li>
                   <li>Email: ${body.email}</li>
                   <li>Phone: ${body.phone}</li>
               </ul> <h3>Message</h3> <p>${body.message}</p>
               `
        });

    } catch (error) {
        throw new Error("Error sending email");
    }

    //send email to confirm we resived the email

}

export const COMFIRMAION_EMAIL = (data: any) => {
    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <title>confirm</title>
    <meta name=x-apple-disable-message-reformatting>
    <meta http-equiv=X-UA-Compatible>
    <meta charset=utf-8>
    <meta name=viewport content=target-densitydpi=device-dpi>
    <meta content=true name=HandheldFriendly>
    <meta content=width=device-width name=viewport>
    <style type="text/css">
        table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
        }

        table td {
            border-collapse: collapse
        }

        .ExternalClass {
            width: 100%
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }

        * {
            line-height: inherit;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -o-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        html {
            -webkit-text-size-adjust: none !important
        }

        img+div {
            display: none;
            display: none !important
        }

        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }

        h1,
        h2,
        h3,
        p,
        a {
            line-height: 1;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }

        a {
            text-decoration: none
        }

        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }

        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }

        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }

        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }

        [style*="Albert Sans"] {
            font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
        }

        @media only screen and (min-width: 481px) {
            .t3 {
                mso-line-height-alt: 45px !important;
                line-height: 45px !important;
                display: block !important
            }

            .t9 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important
            }

            .t11 {
                padding-left: 50px !important;
                padding-bottom: 60px !important;
                padding-right: 50px !important;
                width: 500px !important
            }

            .t15,
            .t20 {
                padding-bottom: 15px !important
            }

            .t21 {
                line-height: 26px !important;
                font-size: 24px !important;
                letter-spacing: -1.56px !important
            }

            .t28 {
                padding: 48px 50px !important
            }

            .t30 {
                padding: 48px 50px !important;
                width: 500px !important
            }

            .t44,
            .t49 {
                padding-bottom: 44px !important
            }

            .t157 {
                padding-bottom: 60px !important
            }

            .t159 {
                width: 26% !important;
                max-width: 130px !important
            }

            .t162 {
                padding-bottom: 60px !important
            }

            .t167 {
                width: 74% !important
            }

            .t227,
            .t235 {
                width: 250px !important
            }

            .t248 {
                padding-left: 10px !important;
                width: 590px !important
            }

            .t253 {
                padding-left: 10px !important
            }

            .t258 {
                padding-left: 10px !important;
                width: 590px !important
            }

            .t263 {
                padding-left: 10px !important
            }

            .t276 {
                mso-line-height-alt: 0px !important;
                line-height: 0 !important;
                display: none !important
            }

            .t278 {
                width: 50% !important
            }

            .t279 {
                padding-left: inherit !important;
                padding-right: inherit !important
            }

            .t281,
            .t283 {
                padding-bottom: 0 !important;
                padding-right: 5px !important
            }

            .t287 {
                width: 50% !important
            }

            .t288 {
                padding-left: inherit !important;
                padding-right: inherit !important
            }

            .t290,
            .t292 {
                padding-left: 5px !important
            }

            .t296 {
                padding-left: 10px !important;
                width: 590px !important
            }

            .t301 {
                padding-left: 10px !important
            }
        }

    </style>

    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"
        type="text/css">


    <script
        type="application/ld+json">[{"@context":"http://schema.org/","@type":"Organization","logo":"https://uploads.tabular.email/u/17ebbdb2-1cfc-48f0-ac9e-608550c2e649/e1f0cfd7-b20f-48d5-8633-0d939e801aa7.png"},{"@context":"http://schema.org/","@type":"EmailMessage","subjectLine":"subject"},{"@context":"http://schema.org/","@type":"PromotionCard","image":"https://uploads.tabular.email/u/17ebbdb2-1cfc-48f0-ac9e-608550c2e649/d04b14a1-4c90-4d4b-9b85-1bde7caa3268.jpeg"}]</script>

</head>

<body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div
        style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
        ABC LIMO</div>
    <div style="font-size: 0px; line-height:0px; display: none; max-height: 0px; overflow: hidden;">
        &#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
    </div>
    <div class=t1 style="background-color:#242424;">
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
            <tr>
                <td class=t479 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>

                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                        <tr>
                            <td>
                                <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>

                                        <td class=t11
                                            style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">


                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t146 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t147 style="overflow:hidden;width:800px;">


                                                                    <div class=t153
                                                                        style="display:inline-table;width:100%;text-align:right;vertical-align:top;">

                                                                        <div class=t167
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:59.22222%;max-width:370px;">
                                                                            <table role=presentation width=100%
                                                                                cellpadding=0 cellspacing=0 class=t169>
                                                                                <tr>
                                                                                    <td class=t170
                                                                                        style="overflow:hidden;padding:35px 0 0 0;">
                                                                                        <table role=presentation
                                                                                            width=100% cellpadding=0
                                                                                            cellspacing=0>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table class=t195
                                                                                                        role=presentation
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0
                                                                                                        align=center>
                                                                                                        <tr>

                                                                                                            <td class=t196
                                                                                                                style="width:600px;">


                                                                                                                <p class=t202
                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                    <span
                                                                                                                        class=t203
                                                                                                                        style="font-weight:bold;mso-line-height-rule:exactly;">Ride
                                                                                                                        Confirmation</span>
                                                                                                                </p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table class=t185
                                                                                                        role=presentation
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0
                                                                                                        align=center>
                                                                                                        <tr>

                                                                                                            <td class=t186
                                                                                                                style="width:600px;padding:0 0 22px 0;">


                                                                                                                <p class=t192
                                                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                    
                                                                                                                </p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>

                                                                        <div class=t159
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:40.77778%;max-width:auto;">
                                                                            <table role=presentation width=100%
                                                                                cellpadding=0 cellspacing=0 class=t161>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div style="font-size:0px;"><img
                                                                                                class=t163
                                                                                                style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                width=160 height=auto
                                                                                                src=${process.env.CLIENT_APP_URL}/192x192.png />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t14 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t15 style="width:600px;padding:0 0 20px 0;">


                                                                    <h1 class=t21
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        Hello ${data.firstName},</h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t206 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t207 style="width:600px;padding:0 0 22px 0;">


                                                                    <p class=t213
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Thank you for booking our limo service. We are
                                                                        excited to serve you! Our team will get in touch
                                                                        with you shortly to confirm all the details of
                                                                        your reservation.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t216 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t217 style="width:600px;padding:0 0 22px 0;">


                                                                    <p class=t223
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:justify;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        We understand how important it is for you to
                                                                        have a smooth and enjoyable experience, so we
                                                                        will make sure everything is arranged according
                                                                        to your preferences.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t175 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t176 style="width:600px;padding:0 0 22px 0;">


                                                                    <p class=t182
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:justify;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        If you have any special requests or additional
                                                                        requirements, feel free to let us know, and
                                                                        we'll do our best to accommodate them.
                                                                    </p>
                                                                    <p class=t182
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:justify;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        Looking forward to providing you with a
                                                                        fantastic service!
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t226 role=presentation cellpadding=0 cellspacing=0
                                                            align=left>
                                                            <tr>

                                                                <td class=t227
                                                                    style="background-color:#181818;overflow:hidden;width:353px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">


                                                                    <a class=t233
                                                                        style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:44px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:2.4px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                        target=_blank
                                                                        href="${process.env.CLIENT_APP_URL}">Explore
                                                                        More</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t225
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">
                                                            &nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t126 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t127
                                                                    style="background-color:#F0F0F0;overflow:hidden;width:760px;padding:20px 20px 20px 20px;">


                                                                    <div class=t133
                                                                        style="display:inline-table;width:100%;text-align:left;vertical-align:middle;">

                                                                        <div class=t139
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:41.22959%;max-width:221px;">
                                                                            <div class=t140
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t141>
                                                                                    <tr>
                                                                                        <td class=t142>
                                                                                            <div style="font-size:0px;">
                                                                                                <img class=t143
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width=150.33566433566433
                                                                                                    height=110.734375
                                                                                                    src=${data.vehicle.img} />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                        <div class=t239
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:57.77041%;max-width:820px;">
                                                                            <div class=t240
                                                                                style="padding:0 10px 0 10px;">
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t241>
                                                                                    <tr>
                                                                                        <td class=t242
                                                                                            style="overflow:hidden;">
                                                                                            <table role=presentation
                                                                                                width=100% cellpadding=0
                                                                                                cellspacing=0>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <table
                                                                                                            class=t295
                                                                                                            role=presentation
                                                                                                            cellpadding=0
                                                                                                            cellspacing=0
                                                                                                            align=center>
                                                                                                            <tr>

                                                                                                                <td class=t296
                                                                                                                    style="width:600px;">


                                                                                                                    <h1 class=t302
                                                                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                                        ${data.vehicle.name}
                                                                                                                    </h1>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <div class=t294
                                                                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                            &nbsp;</div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <table
                                                                                                            class=t257
                                                                                                            role=presentation
                                                                                                            cellpadding=0
                                                                                                            cellspacing=0
                                                                                                            align=center>
                                                                                                            <tr>

                                                                                                                <td class=t258
                                                                                                                    style="width:600px;">


                                                                                                                    <h1 class=t264
                                                                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                                        ${data.vehicle.model}
                                                                                                                    </h1>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <div class=t245
                                                                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">
                                                                                                            &nbsp;</div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <table
                                                                                                            class=t247
                                                                                                            role=presentation
                                                                                                            cellpadding=0
                                                                                                            cellspacing=0
                                                                                                            align=center>
                                                                                                            <tr>

                                                                                                                <td class=t248
                                                                                                                    style="border-top:1px solid #CCCCCC;width:600px;padding:15px 0 0 0;">


                                                                                                                    <h1 class=t254
                                                                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                                        ${data.vehicle.type}
                                                                                                                    </h1>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class=t125
                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">
                                                            &nbsp;</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t267 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>

                                                                <td class=t268
                                                                    style="background-color:#F0F0F0;overflow:hidden;width:520px;padding:40px 40px 40px 40px;">


                                                                    <div class=t274
                                                                        style="display:inline-table;width:100%;text-align:left;vertical-align:top;">

                                                                        <div class=t278
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
                                                                            <table role=presentation width=100%
                                                                                cellpadding=0 cellspacing=0 class=t280>
                                                                                <tr>
                                                                                    <td class=t281
                                                                                        style="overflow:hidden;padding:0 0 15px 0;">
                                                                                        <table role=presentation
                                                                                            width=100% cellpadding=0
                                                                                            cellspacing=0>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table class=t339
                                                                                                        role=presentation
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0
                                                                                                        align=center>
                                                                                                        <tr>

                                                                                                            <td class=t340
                                                                                                                style="overflow:hidden;width:800px;">


                                                                                                                <table
                                                                                                                    role=presentation
                                                                                                                    width=100%
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t343
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t344
                                                                                                                                        style="width:600px;">


                                                                                                                                        <h1 class=t350 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"> Details
                                                                                                                                        </h1>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <div class=t342
                                                                                                                                style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                                                &nbsp;
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t353
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t354
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t360 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> Name:
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t363
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t364
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t370 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> Pick Up Location:
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t373
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t374
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t380 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> Drop Off Location:
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t383
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t384
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t390 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> Pick Up Date:
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t383
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t384
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t390 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> Pick Up Time:
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>

                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

                                                                            <div class=t276
                                                                                style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">
                                                                                &nbsp;</div>

                                                                        </div>

                                                                        <div class=t287
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
                                                                            <table role=presentation width=100%
                                                                                cellpadding=0 cellspacing=0 class=t289>
                                                                                <tr>
                                                                                    <td class=t290
                                                                                        style="overflow:hidden;">
                                                                                        <table role=presentation
                                                                                            width=100% cellpadding=0
                                                                                            cellspacing=0>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table class=t398
                                                                                                        role=presentation
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0
                                                                                                        align=center>
                                                                                                        <tr>

                                                                                                            <td class=t399
                                                                                                                style="overflow:hidden;width:800px;">


                                                                                                                <table
                                                                                                                    role=presentation
                                                                                                                    width=100%
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t402
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t403
                                                                                                                                        style="width:600px;">



                                                                                                                                        <div style="height: 16px;">

                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <div class=t401
                                                                                                                                style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                                                &nbsp;
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t412
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t413
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t419 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> ${data.firstName + ' ' + data.lastName}
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t422
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t423
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t429 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> ${data.fromAddress}
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t432
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t433
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t439 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> ${data.toAddress}
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t442
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t443
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t449 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> ${moment(data.journeyDate).tz("America/Los_Angeles").format('ddd MMM DD YYYY')}
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td>
                                                                                                                            <table
                                                                                                                                class=t442
                                                                                                                                role=presentation
                                                                                                                                cellpadding=0
                                                                                                                                cellspacing=0
                                                                                                                                align=center>
                                                                                                                                <tr>

                                                                                                                                    <td class=t443
                                                                                                                                        style="width:600px;">


                                                                                                                                        <p class=t449 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"> ${moment(data.journeyDate).tz("America/Los_Angeles").format('hh:mm A z')}
                                                                                                                                        </p>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>

                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class=t29 role=presentation cellpadding=0 cellspacing=0 align=center>
                                    <tr>
        
                                        <td class=t30
                                            style="background-color:#242424;overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
        
        
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                <tr>
                                                    <td>
                                                        <table class=t43 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
        
                                                                <td class=t44
                                                                    style="overflow:hidden;width:800px;padding:10px 0 36px 0;">
        
        
                                                                    <div class=t50
                                                                        style="display:inline-table;width:100%;text-align:center;vertical-align:middle;">
        
                                                                        <div class=t56
                                                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:20%;max-width:44px;">
                                                                            <div class=t57>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t58>
                                                                                    <tr>
                                                                                        <td class=t59>
                                                                                            <a href="${process.env.CLIENT_APP_URL}"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                style="text-decoration: none;">
                                                                                                <div
                                                                                                    style="font-size:0px; background-color: white;">
                                                                                                    <img class=t60
                                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                        width=24
                                                                                                        height=24
                                                                                                        src=${process.env.CLIENT_APP_URL}/192x192.png />
                                                                                                </div>
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
        
                                                                        <div class=t96
                                                                            style="display:inline-table;text-align:center;vertical-align:inherit;width: 40%;">
                                                                            <div class=t97>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t98>
                                                                                    <tr>
                                                                                        <td class=t99>
                                                                                            <div>
                                                                                                <a class=t121
                                                                                                    href="tel:+12069727000"
                                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#ffffff;mso-line-height-rule:exactly;font-size: 10px;"
                                                                                                    target=_blank>
                                                                                                    +1(206)-972-7000</a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
        
                                                                        <div class=t86
                                                                            style="display:inline-table;text-align:center;vertical-align:inherit;width: 40%;">
                                                                            <div class=t87>
                                                                                <table role=presentation width=100%
                                                                                    cellpadding=0 cellspacing=0
                                                                                    class=t88>
                                                                                    <tr>
                                                                                        <td class=t89>
                                                                                            <div>
                                                                                                <a class=t121
                                                                                                    href="mailto:abclimo2000@gmail.com"
                                                                                                    style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#ffffff;mso-line-height-rule:exactly;font-size: 10px;"
                                                                                                    target=_blank>
                                                                                                    abclimo2000@gmail.com
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </div>
        
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t113 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
        
                                                                <td class=t114 style="width:600px;">
        
        
                                                                    <p class=t120
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        ABC Limo Services
        
                                                                        111 W 11th St Ste 234
                                                                        Beverly Hills, LA 90209</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class=t103 role=presentation cellpadding=0 cellspacing=0
                                                            align=center>
                                                            <tr>
        
                                                                <td class=t104 style="width:600px;">
        
        
                                                                    <p class=t110
                                                                        style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class=t121
                                                                            href=${process.env.CLIENT_APP_URL}contact
                                                                            style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Unsubscribe</a>  •  <a
                                                                            class=t122
                                                                            href=${process.env.CLIENT_APP_URL}
                                                                            style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target=_blank>Privacy policy</a>  •  <a
                                                                            class=t123
                                                                            href=${process.env.CLIENT_APP_URL}contact
                                                                            style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target=_blank>Contact us</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
`
}
