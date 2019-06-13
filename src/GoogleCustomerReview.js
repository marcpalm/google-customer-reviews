
const GOOGLE_API_CLIENT_URL = "https://apis.google.com/js/api.js"
const GOOGLE_MERCHANT_ID = 136160422;

const callback = (fn, ...argsWithoutCallback) =>
    new Promise(resolve => fn(...argsWithoutCallback, resolve));

export const loadScript = (src) =>
    new Promise((resolve, reject) =>
        document.head.appendChild(
            Object.assign(document.createElement('script'), {
                async: true,
                onload: resolve,
                onerror: reject,
                src,
            })
        )
    );

const GoogleCustomerReviewService = {
    initialize: async () => {
        const noop = (_) => {
            // do nothing
        };

        if (!window.gapi) {
            try {
                await loadScript(GOOGLE_API_CLIENT_URL);
            } catch (e) {
                if (e) {
                    // tslint:disable-next-line
                    console.error(e);
                }
                return noop;
            }
        }

        if (window.gapi && (!window.gapi.surveyoptin || !window.gapi.surveyoptin.render)) {
            try {
                await callback(window.gapi.load, 'surveyoptin');
            } catch (e) {
                if (e) {
                    // tslint:disable-next-line
                    console.error(e);
                }
                return noop;
            }
        }

        const render =
            window.gapi && window.gapi.surveyoptin && window.gapi.surveyoptin.render
                ? window.gapi.surveyoptin.render
                : undefined;

        if (!render) {
            return noop;
        }

        return (args) =>
            render({
                merchant_id: GOOGLE_MERCHANT_ID,
                order_id: args.orderId,
                email: args.email,
                delivery_country: args.deliveryCountry,
                estimated_delivery_date: new Date().toISOString().substring(0, 10),
            });
    },
};

export default GoogleCustomerReviewService;


