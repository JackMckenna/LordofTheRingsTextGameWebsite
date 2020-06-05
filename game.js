const textElement = document.getElementById('text')
const selectButtonsElement = document.getElementById('option-buttons')

let state = {}
function startGame() {
state = {}
showTextNode(1)
}

function showTextNode(textNodeIndex) {
 const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
 textElement.innerText = textNode.text
    selectButtonsElement.innerHTML = ''
 
 textNode.options.forEach(option => {
     if (showOption(option)){
        const button =document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        selectButtonsElement.appendChild(button)
     }
 })
}
function journeyHelp() {
    var i = document.getElementById("journeySelect");
    if (i.style.display === "none") {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  }

function music() {
    var i = document.getElementById("play");
    if (i.style.display === "none") {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  }

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
var s = 0;
var txt= text;
var speed = 60;
var interval;

function story(text) {
  if (s < txt.length) {
    document.getElementById(textNodes).innerHTML += txt.charAt(s);
    s++;

  }
  else{
      return clearInterval(interval)
  }
}
interval=setInterval(() => story(txt), 200)

const textNodes = [
    {
        id: 1,
        text: 'Welcome to the game; you are a ranger travelling from the aincient kingdoms of Arnor south to the planes of Rohan for the hope of sanctury from the war that is dwelling in Middle Earth.',
        options : [
            {
                text: 'Start Game',
                nextText: 2
            }
            
        ]
    },
    {
        id: 2,
        text: 'You have travelled along on of the roads of the Misty Mountains where a glint from a gold ring catches your eye. You kneel down to get a closer look. Some faint carvings seem to appear on the ring, but as quickly as they appeared they disappear. Unsure of what to do, you place the ring in your bag and continue on your journey to Bree.',
        options : [
            {
                text: 'Continue',
                nextText: 3
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
    },
    {
        id: 3,
        text: 'You have reached Bree and made your way to the Prancing Pony. On a more thorough inspection of the ring, you consider it may be a ring of power. To find out if it is, you decide to travel to Riverdale to consult the council of Elrond to identify this mysterious ring.',
        options : [
            {
                text: 'Continue',
                nextText: 4
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 4,
        text: 'On your way from Bree to Riverdale, you feel you are being followed by a shadow. You have decided to camp for the night on Weather Top. Hungry, you have the option of lighting a fire and cooking up some food; however, this will draw attention to your whereabouts. What do you do?',
        options : [
            {
                text: 'Cook food',
                setState: {Morgul: true},
                nextText: 5
            },
            {
                text: 'Dont eat and sleep on a empty stomach',
                nextText: 6
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 5,
        text: 'You have lit the fire and made your self visable to unfriendly eyes. They have hunted you down and found you. The Nazgul. After fighting well and pushing away the Nazgul, you look down and see it. During the fighting, you have been cut with a morgul blade. You must hurry to Riverdale before the wounds take hold and you become a Wraith.',
        options : [
            {
                text: 'Continue and look for medical help',
                requiredState: (currentState) => currentState.Morgul,
                nextText: 76
            },
            {
                text: 'Continue on your journey injured',
                nextText:6
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 76,
        text: 'While continuing on your way to Riverdale, you come across a group of Elves who offer to help you; this would slow you on your journey, but you are seriously injured from the morgul blade. What do you choose to do?',
        options : [
            {
                text: 'Get the elves to help heel you',
                setState: {Morgul: false},
                nextText:6                
            },
            {
                text: 'Continue with haist on your journey injured',
                nextText:6
            },
            {
                text:'Restart Game',
                nextText: 1
            }
        ]
    },
    {
        id: 6,
        text: ' In Riverdale and after much debate, the Council of Elrond has decided for you to take the ring to Mordor to destroy it. However, the path is still unclear and for you to decide. Each path has enemies along the way, and it will require skill to pass, but which one will you select?',
        options : [
            
            {
                text: 'Northern route',
                nextText: 7
            },
            {
                text: 'Midland route',
                nextText: 22
            },
            {
                text: 'Southern route',
                nextText: 36
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 7,
        text: 'You have set off on your journey to destroy the ring travelling through the Northern Kingdoms.',
        options : [
            {
                text: 'Continue',
                nextText: 8
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 8,
        text: 'You start by travelling through the ruined kingdom of Rhudar; this is a clear reminder of the destruction coming for Middle Earth and how easily man is corrupted by the power of the ring',
        options : [
            {
                text: 'Continue',
                nextText: 9
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 9,
        text: 'You push on and begin the climb up through the Misty Mountains',
        options : [
            {
                text: 'Continue',
                nextText: 10
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 10,
        text: 'You have climbed to the top of the Misty Moutains and encoutered Gwaihir -  one of the great eagles -  you ask for his council. He warns you about the path you have chosen and tells you not to continue on your journey and return to Riverdale. This is down to perils you will face within the Northern Territories with the hills covered with goblins and the greed of the dwarves, leading them not to be trusted to help you on your journey. What will you choose to do?',
        options : [
            {
                text: 'Continue on your current path',
                nextText: 11
            },
            {
                text: 'Take the advice of Gwaihir and return to Riverdale',
                nextText: 6
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 11,
        text: 'You have crossed the Misty Moutains and arrived in the aincient dwavern kingdom of Erebor',
        options : [
            {
                text: 'Continue',
                nextText: 12
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 12,
        text: 'Gloin of Erebor hears of your quest and asks to join you on your quest; do you acccept his offer?',
        options : [
            {
                text: 'Accept Gloins offer',
                setState: {Gloin: true},
                nextText: 13
            },
            {
                text: 'Refuse Gloins offer and continue journey alone',
                setState: {Gloin: false},
                nextText:14
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 13,
        text: 'With Gloin accompanying you, your quest continues',
        options : [
            {
                text: 'Continue',
                nextText: 15
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 14,
        text: 'Alone again, your quest continues',
        options : [
            {
                text: 'Continue',
                nextText: 15
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 15,
        text: 'You are travelling through the stone paths of Mirkwood heading south without a clear idea of your root. What do you do?',
        options : [
            {
                text: 'Follow Gloin',
                requiredState: (currentState) => currentState.Gloin,
                nextText: 17
            },
            {
                text: 'Follow the stones',
                nextText: 16
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 16,
        text: 'You have lost your way and become lost in the enchanted woods of Mirkwood',
        options : [
            {
                text: 'End game',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 17,
        text: 'Following Gloin, you have made it out of Mirkwood and accross the plains of Rhun',
        options : [
            {
                text: 'Continue',
                nextText: 18
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 18,
        text: 'You begin your climb up the Ash Mountains, though as helpful as he has been, you notice the change happening in Gloin. You worry the ring may take hold of him.',
        options : [
            {
                text: 'Continue',
                nextText: 19
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 19,
        text: 'You have made it to the foot of Mount Doom and have almost completed your quest and restored peace to Middle Earth; however, your fears have been confirmed and it is clear to see the ring has taken hold of Gloin. What do you do?',
        options : [
            {
                text: 'Leave Gloin be, and hope he has the strength to repel the powers of the ring',
                nextText: 20
            },
            {
                text: 'Restrain Gloin so he cannot follow you any further and hinder your quest',
                nextText: 21
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 20,
        text: 'While climbing the Mountain of Doom, Gloin turns and attacks you and takes the ring.  He is never to be seen again and the armies of Sauron destroy the Kingdoms of Men, Elves and Dwarfs',
        options : [
            {
                text: 'Continue',
                nextText: 99
            }            
        ]
        
    },
    {
        id: 21,
        text: 'Congratulations youve climed the black sands of Mount Doom and managed to repel the powers of the ring and have destroyed the one ring and saved Middle Earth',
        options : [
            {
                text: 'Continue',
                nextText: 100
            }
        ]
        
    },
    {
        id: 22,
        text: 'You have choosen to travel the central root to complete your quest. On this route the first place you come accross is the Mines of Moria where you are greeted by Balin',
        options : [
            {
                text: 'Continue',
                nextText: 23
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 23,
        text: 'Balin tells you of the troubles they have been facing in Moria and tells you of the Balrog that have been plaguing their forces and warns you of its presence',
        options : [
            {
                text: 'Continue',
                nextText: 24
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 24,
        text: 'Balin offers you the might of his forces so that you have the strength to take on the Balrog. However, there is still a chance you are able to make it past the Balrog undetected by being able to continue alone. What do you choose to do?',
        options : [
            {
                text: 'Take Balins offer and attack the Balrog full on with the might of the dwarves of Moria',
                nextText: 25
            },
            {
                text: 'Continue to travel through Moria by yourself and try and pass the Balrog undetected',
                nextText: 26
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 25,
        text: 'The dwavern forces were no match for the great Balrog.',
        options : [
            {
                text: 'Continue',
                nextText: 75
            }   
        ]   
    },
    {
        id: 75,
        text: 'With the remaining survivours, you decide to retreat out of the and cross the mountians to the ancient dwarven Kingdom of Erebor',
        options : [
            {
                text: 'Continue',
                nextText: 11
            }   
        ]   
    },
    {
        id: 26,
        text: 'You have succesfully passed through the mines of Moria and have arrived on the border of the Elfish Kingdom of Lorien',
        options : [
            {
                text: 'Continue',
                nextText: 27
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 27,
        text: 'In Lorien, the elves give you a river boat to head south to the planes of Rohan',
        options : [
            {
                text: 'Continue',
                nextText: 28
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 28,
        text: 'On arriving, you see the roaming horse men of Rohan lead by Eomer. With no clear plan on how to cross the planes, what do you choose to do?',
        options : [
            {
                text: 'Hide and wait for the heard to pass and continue to travel alone',
                nextText: 29
            },
            {
                text: 'Approach Eomer and ask for help on your quest',
                nextText: 30
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 29,
        text: 'Without any clear landmarks accross the flat plains, you find your self lost',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 30,
        text: 'After approaching Eomer, he has agreed to take you to the Black Gate',
        options : [
            {
                text: 'Continue',
                nextText: 31
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 31,
        text: 'You have arrived at the Black Gate, on the border of Mordor, with no clear plan. What do you choose to do? ',
        options : [
            {
                text: 'Call upon the Kingdoms of Men to help you and face the armies of Sauron head on',
                nextText: 32
            },
            {
                text: 'Head south and try and find the Men of Rhun to disguise yourself as one of them',
                nextText: 33
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 32,
        text: 'Your call for aid falls on deaf ears as the Kingdoms of Men are too busy with petty feuds of their own',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 33,
        text: 'You have succesfully infultrated a squadren of Men of Rhun and disguised yourself as one of then',
        options : [
            {
                text: 'Continue',
                nextText: 34
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 34,
        text: 'Disguised as a man of Rhun you have managed to get through the Black Gates and reached Mount Doom when you realise you are all-powerful with the ring able to rule all. What do you choose to do?',
        options : [
            {
                text: 'Keep the ring',
                requiredState: (currentState) => currentState.Morgul,
                nextText: 35
            },
            {
                text: 'Destroy the ring',
                nextText: 100
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 35,
        text: 'The ring takes hold of you and you become nothing more than a shadow, and Middle Earth falls to the armies of Sauron',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 36,
        text: 'You have chosen the southern route',
        options : [
            {
                text: 'Continue',
                nextText: 37
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 37,
        text: 'From Riverdale, you travel to the Grey Havens where you hope to enlist the help of the elves to gift you a boat to assist you on your quest',
        options : [
            {
                text: 'Continue',
                nextText: 78
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id:78,
        text: 'The lady Galadriel offer you an enchanted moth which you can use to call upon the elves for help. Do you accept this gift?',
        options : [
            {
                text:'Accept gift',
                setState: {Moth: true},
                nextText: 38
            },
            {
                text:'Decline gift',
                setState: {Moth: false},
                nextText: 38
            }
        ]
    },
    {
        id: 38,
        text: 'The elves agree to help you and give you a boat to cross along the western coast of Middle Earth',
        options : [
            {
                text: 'Continue',
                nextText: 39
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 39,
        text: 'As your boat travels along the coast of Andrast, you see that it is safe to dock in Anfalas with small setlments of ranger along the coast, or you could Sail further and try dock at Harondor; however, you hear rumours of these men being loyal to Sauron. what do you choose to do?',
        options : [
            {
                text: 'Dock at Anfalas',
                nextText: 41
            },
            {
                text: 'Dock at Harondor',
                nextText: 40
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 40,
        text: 'Before docking in Harondor, you are met by men of Harad loyal to Sauron. They ransack your boat and find the ring, taking it for their own',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 41,
        text: 'You have docked and arrived safely in Anfalas and the Kingdom of Gondor',
        options : [
            {
                text: 'Continue',
                nextText: 42
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 42,
        text: 'After much traveling east you see the great city of Minas Tirith on the horizon ',
        options : [
            {
                text: 'Continue',
                nextText: 43
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 43,
        text: 'Feeling tired and seeing the white peaks of Minas Tirith, you consider sharing your burden with the men of Gondor; however, you hear rumours of the sickness that troubles the steward in these dark times',
        options : [
            {
                text: 'Enter Minas Tirith and seek help from the steward',
                nextText: 44
            },
            {
                text: 'Continue to travel by yourself along your quest',
                nextText: 45
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 44,
        text: 'The ring easily corrupts the mind of the steward and the ring is taken from you as you are thrown into a cell',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 45,
        text: 'You continue to travel by your self along your quest',
        options : [
            {
                text: 'Continue',
                nextText: 46
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 46,
        text: 'You travel west through Osigiath then turn to follow the river south to maintain your bearings whilst looking for a crossing into Mordor',
        options : [
            {
                text: 'Continue',
                nextText: 47
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 47,
        text: 'After many days of travelling, you find a gap within the moutains that will grant you access into Mordor; however you are still many days walk south of the Mountain of Doom, and with many foes in your way',
        options : [
            {
                text: 'Continue',
                nextText: 48
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 48,
        text: 'You can see the slopes of Mount Doom. Conscious of the dangers you will face, what do you to choose to do?',
        options : [
            {
                text: 'Carry on your way alone',
                nextText: 49
            },
            {
                text: 'Use the enchanted Moth to call the elves for help',
                requiredState: (currentState) => currentState.Moth,
                nextText: 50
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 49,
        text: 'On your way alone to the moutain of Doom, you are spotted by the Great Eye and killed by his forces',
        options : [
            {
                text: 'Continue',
                nextText: 99
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 50,
        text: 'A great force of 10,000 Elves, Men and Dwarfs marches on the Black Gate, getting ready to battle the armys of Sauron, clearing the way to the Mountain of Doom for you',
        options : [
            {
                text: 'Continue',
                nextText: 51
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 51,
        text: 'The path is clear and you are able to climb Mount Doom and destroy the ring and vanquish Sauron once and for all',
        options : [
            {
                text: 'Continue',
                nextText: 100
            },
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    
    
    {
        id: 99,
        text: 'You have failed to complete your quest',
        options : [
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    },
    {
        id: 100,
        text: 'GAME WON',
        options : [
            {
                text: 'Restart game',
                nextText: 1
            }
        ]
        
    }
]

startGame()