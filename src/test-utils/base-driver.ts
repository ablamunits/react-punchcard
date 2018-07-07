export type BaseDriver = {
    $: (selector: string) => BaseDriver;
    $$: (selector: string) => BaseDriver[];
    text: () => string;
    getAttribute: (attr: string) => string;
};

export const createBaseDriver = (elem: Element): BaseDriver => {
    return {
        $: (selector: string) => {
            const e = elem.querySelector(selector);
            if (e) {
                return createBaseDriver(e);
            } else {
                throw new Error(`Element with selector ${selector} not found`);
            }
        },
        $$: (selector: string) => {
            const nodes = elem.querySelectorAll(selector);
            if (nodes.length > 0) {
                return Array.from(nodes).map((node) => createBaseDriver(node));
            } else {
                throw new Error(`Did not find any elements with selector ${selector}`);
            }
        },
        text: () => elem.textContent,
        getAttribute: (attr: string) => elem.getAttribute(attr) || ''
    };
};
