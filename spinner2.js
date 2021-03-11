const spinner = function() {
  const spinLine = [`|   `, `/   `, `-   `, `\\    `, `|   `, `/   `, `-   `, `\\   `, `|   \n`];
  for (let i = 0; i < spinLine.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinLine[i] + '\r')
    }, i * 250)
  };
}
spinner();