var animals = [
    "alligator",
"anaconda",
"ant",
"ass",
"baboon",
"bat",
"bear",
"bison",
"panther",
"spider",
"buffalo",
"camel",
"cat",
"caterpillar",
"cheetah",
"chicken",
"chimpanzee",
"chipmunk",
"cobra",
"cow",
"crab",
"crane",
"crocodile",
"deer",
"dinosaur",
"dog",
"dolphin",
"donkey",
"duck",
"elephant",
"emu",
"falcon",
"fox",
"frog",
"goat",
"gorilla",
"hamster",
"hawk",
"hippopotamus",
"horse",
"whale",
"kangaroo",
"leopard",
"lion",
"lizard",
"lobster",
"monkey",
"mosquito",
"moth",
"goat",
"mouse",
"octopus",
"ostrich",
"ox",
"oyster",
"panda",
"pig",
"porcupine",
"rabbit",
"raccoon",
"rat",
"rooster",
"sheep",
"snail",
"snake",
"spider",
"tiger",
"walrus",
"whale",
"wolf",
"zebra",  
]

function randomWord() {
    return animals[Math.floor(Math.random() * animals.length)]
}

export {randomWord}