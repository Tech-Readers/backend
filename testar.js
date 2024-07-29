import bcrypt from 'bcryptjs';

const testPassword = async () => {
  const password = 'senha1236';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hash:', hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log('Match:', isMatch);
};

testPassword();
