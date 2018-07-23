import { log } from './decorators'

class Example {
    @log
    sum(a, b) {
        return a + b;
    }
}

const e = new Example();
e.sum(11, 5);
// Arguments: 11,5
// Result: 16