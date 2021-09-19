import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Guilherme' },
    { id: 2, name: 'Lucca' },
    { id: 3, name: 'Casali' },
  ]

  return response.json(users);
}