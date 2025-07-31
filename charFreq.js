
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}

class Histogram {
    constructor() {
        this.map = new DefaultMap(0);
        this.totalLetters = 0;
    }

    add(text) {
        // remove spaces from text
        text = text.replace(/\s/g, "g");

        for(const char of text) {
            const currentValue = this.map.get(char);
            this.map.set(char, currentValue + 1);
            this.totalLetters++;
        }
    }

    toString() {
        let chars = [...this.map];

        // sort by count then alphabetically
        chars.sort((a, b) => {
            if (a[1] === b[1]) {
                return (a[0] < b[0]) ? -1 : 1;
            } else {
                return (b[1] - a[1]);
            }
        });

        // calculate percentage of letters in text
        for (const char of chars) {
            chars[1] = (char[1] / this.totalLetters) * 100;
        }

        // skips all the letters with less than 1% occurence
        chars = chars.filter(x => (x[1] >= 1));

        const result = [];
        for(const char of chars) {
            const s = `${char[0]}: ${"#".repeat(Math.round(char[1]))} ${char[1].toFixed(2)}`;
            result.push(s);
        }

        return result.join("\n");
    }
}

async function printHistogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    const histogram = new Histogram();
    for await (const chunk of process.stdin) {
        histogram.add(chunk);
    }

    return histogram;
}

printHistogramFromStdin().then((histogram) => console.log(histogram.toString()));


