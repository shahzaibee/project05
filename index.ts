import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a paragraph: ', (paragraph: string) => {
  const words = paragraph.trim().split(/\s+/);
  const wordCount = words.length;

  const charCount = paragraph.replace(/\s/g, '').length;

  console.log(`Character count (excluding whitespaces): ${charCount}`);
  console.log(`Word count (excluding whitespaces): ${wordCount}`);

  rl.close();
});

