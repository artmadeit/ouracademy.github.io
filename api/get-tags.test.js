import getTags from './get-tags'

export const posts = [
  { name: 'a post', tags: ['arquitectura', 'patron', 'testing'] },
  { name: 'a post 1', tags: ['planeacion', 'agil'] },
  { name: 'a post 2', tags: ['agil', 'requerimientos'] },
  { name: 'a post 3', tags: ['agil', 'equipo', 'codigo'] },
  { name: 'a post 4', tags: ['codigo', 'objetos', 'diseño'] },
  {
    name: 'a post 5',
    tags: ['patron', 'practica', 'proceso', 'debug', 'codigo']
  },
  { name: 'a post 6', tags: ['diseño', 'patron', 'testing'] },
  { name: 'a post 7', tags: ['analisis', 'diseño', 'objetos'] },
  { name: 'a post 8', tags: ['practica', 'testing'] },
  {
    name: 'a post 9',
    tags: ['arquitectura', 'codigo', 'testing', 'formas-de-ver']
  },
  { name: 'a post 10', tags: ['proceso', 'agil', 'formas-de-ver'] }
]

export const tags = [
  'agil',
  'analisis',
  'arquitectura',
  'codigo',
  'debug',
  'diseño',
  'equipo',
  'formas-de-ver',
  'objetos',
  'patron',
  'planeacion',
  'practica',
  'proceso',
  'requerimientos',
  'testing'
]

describe('getTags', () => {
  it('should get unique tags from posts', () => {
    const expected = tags

    expect(getTags(posts)).toEqual(expected)
  })
})
