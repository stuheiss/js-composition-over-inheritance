// use compositon when something "has a" whatever

const barker = (state) => ({
    bark: () => console.log(state.name + ' (' + state.type + ') says woof')
})
const meower = (state) => ({
    meow: () => console.log(state.name + ' (' + state.type + ') says meow')
})
const pooper = (state) => ({
    poop: () => console.log(state.name + ' (' + state.type + ') pooped')
})
const cleaner = (state) => ({
    clean: () => console.log(state.name + ' (' + state.type + ') is cleaning the poop')
})
const driver = (state) => ({
    drive: () => console.log(state.name + ' (' + state.type + ') is driving')
})
const killer = (state) => ({
    kill: () => console.log(state.name + ' (' + state.type + ') is making mayhem')
})

// one-off calls
barker({name: 'Rufus', type: 'doggy'}).bark()
killer({name: 'Optimus Prime', type: 'killer'}).kill()

const killerRobotDog = (name) => {
    let state = {
        name,
        type: 'killer robot dog'
    }
    return Object.assign(
        {},
        barker(state),
        killer(state),
        driver(state)
    )
}

// create a killer robot dog
const Sniffles = killerRobotDog('Sniffles')
// re-use Sniffles
Sniffles.bark()
Sniffles.drive()
Sniffles.kill()
try {
    Sniffles.poop()
} catch(error) {
    console.log('Sniffles is a robot and robots don\'t poop')
}

// show off all the things Sniffles can do!
const SnifflesInAction = (() => {
    console.log('Sniffles in action!')
    const Sniffles = killerRobotDog('sniffles')
    Sniffles.bark()
    Sniffles.drive()
    Sniffles.kill()
});

SnifflesInAction();