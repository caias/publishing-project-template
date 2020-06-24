[![Netlify Status](https://api.netlify.com/api/v1/badges/9ca41bf1-5303-4007-b268-caadf205ee7d/deploy-status)](https://app.netlify.com/sites/cits/deploys)

# C-ITS PROJECT

## Install
clone받은 폴더 루트 이동후  
### yarn이 설치되있지 않다면  
```js
npm install yarn -G
```

### yarn이 설치되있다면
```js
yarn
```

## Run
```js
gulp
```

#### babel 하위 버전까지는 세팅이 안되있기에 es6 array method는 Array.prototype[method].call로 사용해야함.
