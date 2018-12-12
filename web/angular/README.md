# steps
These are the steps taken...
1. initialize npm
```bash
npm init
```

2. install angular-cli
```bash
npm i -D @angular/cli
```
> **-D** is an alias of **--save-dev**

> if **-g** is used instead of **-D**, **npx** is not needed below. I just like not to meddle with the rest of the system.



3. create application
```bash
npx ng new organizer --routing --style=scss -S --minimal
```

4. clean up
   1. remove favicon
   2. remove html from src/app/app.component.ts

> **--routing** add routing (we'll need it)

> **--style=scssPP

# Docs
- [npm](https://docs.npmjs.com/cli/npm) (v6.5.0)
- [angular/cli](https://angular.io/cli) (7.1.2)
