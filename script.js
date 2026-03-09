const commands = [
    "add title=LearnJS priority=high",
    "add title=WriteDocs priority=low",
    "remove id=42",
    "add title=FixBug",
    "remove",
    "add title=Hello priority=medium"
];

function parseCommand(command) {
    const tokens = command.trim().split(" ");
    const action = tokens[0] === "add" || tokens[0] === "remove" ? tokens[0] : "unknown";
    const params = {};

    for (let i = 1; i < tokens.length; i++) {
        if (tokens[i].includes("=")) {
            const [key, value] = tokens[i].split("=");
            params[key] = value;
        }
    }

    return { action, params };
}


for (let i = 0; i < commands.length; i++) {
    console.log(parseCommand(commands[i]));
}