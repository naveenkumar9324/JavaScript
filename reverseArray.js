function reverseSentence(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  const sentence = 'This is a sunny day.';
  const reversedSentence = reverseSentence(sentence);
  console.log(reversedSentence); 