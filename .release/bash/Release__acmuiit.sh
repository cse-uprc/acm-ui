cd C:/Users/sambu/OneDrive/Desktop/acmui

echo "---------------------------------------------"
echo "Beginning Release ..."
echo ''

echo "Pulling Latest Changes ..."
git checkout development
git fetch
git pull
echo ''

echo "Creating Release Branch ..."
git checkout -b "ACMUI-VERSION-UPDATE-$RANDOM"
echo ''

echo "Getting Latest release ..."
TAG=$(git ls-remote --tags --refs --sort='v:refname' git://github.com/cse-uprc/acmkit.git | tail -n1 | sed 's/.*\///')
echo ''

echo "Installing Latest Release ..."
npm i cse-uprc/acmkit#$TAG
echo ""

echo "Pushing Branch ..."
sleep 10s
git add .
git commit -m "ACMKUI: Incremental Version Update -- package.json update"
git push -u origin HEAD
echo ''

echo "Switching to master ..."
git checkout master
echo ''

echo "---------------------------------------------"
echo ''

read -s -n 1 -p "Branch Release Complete!"
