const sequences = Object.freeze([
  {
    acceptedSequence: [10, 20, 30, 40, 50],
    meta: "(+10)",
  },
  {
    acceptedSequence: [1, 7, 10, 16, 19],
    meta: "(+6,+3)",
  },
  {
    acceptedSequence: [2, 5, 10, 17, 26],
    meta: "(n²+1)",
  },
  {
    acceptedSequence: [1, 3, 8, 15, 24],
    meta: "(n²-1)",
  },
  {
    acceptedSequence: [0, 2, 7, 14, 23],
    meta: "(n²-2)",
  },
  {
    acceptedSequence: [3, 6, 11, 18, 27],
    meta: "(n²+2)",
  },
  {
    acceptedSequence: [4, 7, 12, 19, 28],
    meta: "(n²+3)",
  },
  {
    acceptedSequence: [5, 8, 13, 20, 29],
    meta: "(n²+4)",
  },
  {
    acceptedSequence: [2, 6, 12, 20, 30],
    meta: "(n²+n)",
  },
  {
    acceptedSequence: [1, 3, 7, 9, 13],
    meta: "(+2,+4)",
  },
  {
    acceptedSequence: [1, 4, 6, 10, 12],
    meta: "(+4,+2)",
  },
  {
    acceptedSequence: [1, 6, 16, 21, 31],
    meta: "(+5,+10)",
  },
  {
    acceptedSequence: [1, 11, 16, 26, 31],
    meta: "(+10,+5)",
  },
  {
    acceptedSequence: [1, 2, 4, 8, 16],
    meta: "(*2)",
  },
  {
    acceptedSequence: [3, 5, 7, 11, 13],
    meta: "(prime numbers)",
  },
  {
    acceptedSequence: [13, 15, 17, 21, 23],
    meta: "(prime+10)",
  },
  {
    acceptedSequence: [5, 10, 15, 20, 25],
    meta: "(+5)",
  },
  {
    acceptedSequence: [11, 17, 23, 29, 35],
    meta: "(+6)",
  },
  {
    acceptedSequence: [9, 18, 27, 36, 48],
    meta: "(+9)",
  },
  {
    acceptedSequence: [1, 1, 9, 25, 49],
    meta: "(odd squared starts from -1)",
  },
  {
    acceptedSequence: [16, 4, 4, 16, 36],
    meta: "(even squared starts from -2)",
  },
  {
    acceptedSequence: [0, 1, 1, 2, 3, 5],
    meta: "(fibonacci)",
  },
  {
    acceptedSequence: [0, 1, 1, 2, 4, 7],
    meta: "(tribonacci)",
  },
  {
    acceptedSequence: [0, 1, 1, 4, 9, 25],
    meta: "(fibonacci squared)",
  },
  {
    acceptedSequence: [0, 1, 1, 4, 9, 49],
    meta: "(tribonacci squared)",
  },
  {
    acceptedSequence: [1, 5, 9, 15, 21],
    meta: "(Vowel Positions)",
  },
  {
    acceptedSequence: [2, 4, 8, 14, 24],
    meta: "(+2,+4,+6,+8,+10)",
  },
  {
    acceptedSequence: [2, 8, 18, 32, 50],
    meta: "(n²*2)",
  },
  {
    acceptedSequence: [0, 12, 24, 36, 48],
    meta: "(+12)",
  },
  {
    acceptedSequence: [1, 3, 5, 7, 8, 10],
    meta: "(months with 31 days)",
  },
]);

module.exports = {
  sequences,
};
