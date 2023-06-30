const idGenerator = () => {
  const length = 5;
  let generatedID = '';
  const availableChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz-_';

  for (let i = 0; i < length; i++) {
    generatedID += availableChar.charAt(
      Math.floor(Math.random() * availableChar.length)
    );
  }
  return generatedID;
};

module.exports = idGenerator;
