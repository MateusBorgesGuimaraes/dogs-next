import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // await jwtVerify(
    //   token,
    //   new TextEncoder().encode('so para fins didaticos, nao vai funcionar'),
    //   {
    //     algorithms: ['HS256'],
    //   },
    // );
    return true;
  } catch (error) {
    return false;
  }
}
