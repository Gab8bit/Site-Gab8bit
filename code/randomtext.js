var texts = [
    "FULL BASS ACTIVE",
    "Always save your work. ALWAYS.",
    "How the f#ck can I center a div?!",
    "UwU",
    "Never forget brackets",
    "Money + More money = Happiness",
    "Set volume to 200% at the drop!",
    "Python is overrated. Change my mind.",
    "Finally some relax",
    "LineageOS >>> Android Stock",
    "Linux >>> Windows",
    "Mute channel when unused. ALWAYS.",
    "The Night is when the Magic begin",
    "Use <span> for inline-blocks",
    "Kill who invented bugs in the codes PLEASE"
  ];

window.onload = function() {
    document.getElementById('randomText').textContent = texts[Math.floor(Math.random()*texts.length)];
};