import sqlite from 'better-sqlite3'

const db = sqlite('meals.db')


export default async function getMeals () {
    await new Promise ((resolve) => setTimeout(resolve, 2000))

    // throw new Error('loading meals failed')
    return db.prepare('SELECT * FROM meals').all()
}


export  function getMeal (slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}