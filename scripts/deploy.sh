#! bash
npm run build
git add dist
git commit -m "BUILD: new Build"
git subtree push origin --prefix dist gh-pages