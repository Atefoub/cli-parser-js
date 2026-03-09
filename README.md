🥋 Kata 9 - Parser une commande type CLI
Conditions d’achèvement
Objectif
Manipuler une string

Découper et analyser des paramètres

Retourner un objet structuré

const commands = [
  "add title=LearnJS priority=high",
  "add title=WriteDocs priority=low",
  "remove id=42",
  "add title=FixBug",
  "remove",
  "add title=Hello priority=medium"
];
Énoncé
Écris parseCommand(command) qui retourne un objet :

action: “add” ou “remove” (sinon “unknown”)

params: objet contenant les paires clé=valeur trouvées

Règles :

Une commande est une string, mots séparés par un espace

Le premier mot est l’action

Les autres mots peuvent être des paramètres key=value

Les tokens sans = sont ignorés

Si action inconnue ou absente : action = “unknown”

Exemples attendus :

“add title=LearnJS priority=high”

→ { action: “add”, params: { title: “LearnJS”, priority: “high” } }

“remove id=42”

→ { action: “remove”, params: { id: “42” } }

“remove”

→ { action: “remove”, params: {} }

Pseudo-code
Split command by spaces into tokens

If tokens is empty:
    return { action: "unknown", params: {} }

action = tokens[0]
If action is not "add" and not "remove":
    action = "unknown"

params = empty object

For each token from index 1:
    if token contains "=":
        split token into key and value
        set params[key] = value

Return { action, params }
