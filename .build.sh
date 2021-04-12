echo -e "\n\033[32m1. Creating app folder\033[0m"
mkdir ./www

echo -e "\n\033[32m2. Building frontend\033[0m"
npm i --produdction
npm run build --produdction
mv ./dist ./www/
if [ $? -eq 0 ]
then
  echo -e "\n\033[34mFrontend successfully built.\033[0m"
else
  exit 1
fi

echo -e "\n\033[32m2. Adding backend\033[0m"
cp ./server.js ./www/server.js

echo -e "\n\033[42m Done! \033[0m\n"
