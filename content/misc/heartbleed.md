---
date: 2015-05-09T16:46:35+02:00
title: "Balsamiq Heartbleed FAQ"
menu: "menumisc"
weight: 60
---
## Has My myBalsamiq or Customer Information Data Been Compromised Due to the [Heartbleed](Http://heartbleed.com/) Bug?

We have found no evidence of it.

## Was Balsamiq Vulnerable to the Heartbleed Bug?

Yes. These customer-facing services were vulnerable:

*   [myBalsamiq](https://balsamiq.com/products/mockups/mybalsamiq/)
*   our customer database (which DOES NOT include credit card numbers)

We quickly fixed the vulnerability in both cases (Amazon patched ELB and we re-issued our SSL certificates).

## What about My Credit Card Information?

We do not ever see your credit card; it never reaches our server. Instead, we use the following payment services. Please refer to each link below to see their Heartbleed FAQ:

*   [E-junkie](http://www.e-junkie.com/bb/topic/6793/pg/0)
*   [PayPal](https://www.paypal-community.com/t5/PayPal-Forward/OpenSSL-Heartbleed-Bug-PayPal-Account-Holders-are-Secure/ba-p/797568)
*   [Stripe](https://stripe.com/blog/heartbleed)
*   [Pin Payments](https://pinpayments.com/): via email:_We've been investigating how this issue may have affected Pin Payments merchants and customers. We have no evidence of any attack, and have confirmed that our systems have been updated and are no longer vulnerable to this issue._

## Should I Change My Password for myBalsamiq?

Yes. It's a good habit to change passwords regularly, and now that you know that myBalsamiq is safer than before, it's a good time to update your password there as well.

As always, pick a unique and hard to guess password!

## Any Other Questions?

Email us at [support@balsamiq.com](mailto:support@balsamiq.com), we're happy to hear from you!
