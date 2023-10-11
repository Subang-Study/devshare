![DevShare](https://github.com/Subang-Study/devshare/assets/48327655/da373c16-6092-487f-80e0-d53cfc406b22)

## 프로젝트 소개 
 | **📌 배포 URL** | [DevShare](https://devshare-delta.vercel.app/) | **Figma URL** | [DevShare Figma](https://www.figma.com/file/X37NgSJ5zdD1kya1M5QxGw/Untitled?type=design&node-id=0%3A1&mode=design&t=dtWlGVQHE3LVO2eC-1) |
 | :---: | :---: | :---: | :---: |

- "DEVSHARE"은 개발자들을 위한 온라인 플랫폼으로, 이력서를 공유하고 채용정보를 확인하며 개발자들의 커뮤니티를 형성하는 서비스입니다.



## ⚙️ Skills
**Frontend** : <p>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="React Query">
<img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=recoil&logoColor=white" alt="Recoil">
<img src="https://img.shields.io/badge/React%20Hook%20Form-EB4034?style=for-the-badge&logo=react-hook-form&logoColor=white" alt="React Hook Form">
<img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/React%20Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Icons">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

**Backend** : <p>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/Next%20Auth-000000?style=for-the-badge&logo=next-auth&logoColor=white" alt="Next-Auth">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

**Deploy** : <p>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
<img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white" alt="Amazon S3">
</p>

## 📍 Pin Point

- 넥스트.js를 선택한 이유 중 하나는 백엔드 지식 없이도 서버사이드 렌더링을 간단히 수행할 수 있어 웹 성능과 SEO를 개선할 수 있었다. 
- 개발 단계에서 재사용성과 커스터마이징에 대한 고민을 하게 되었고, 서칭을 통해 리액트 폼이 이러한 요구 사항을 충족시키는 가장 적합한 방법이라는 것을 알게 되어 이를 적용하게 되었습니다.
- 기능 3: 설명

## 📷 화면 예시

|로그인|메인|
|:---:|:---:|
|<img width="390" alt="로그인" src="https://github.com/Subang-Study/devshare/assets/115862267/7f1795fd-8c80-480f-a81f-c43e2d9884b4"/>|<img width="390" alt="메인" src="https://github.com/Subang-Study/devshare/assets/115862267/6cd3e60a-f755-4ac6-8c0c-96eac6dbc33d.gif"/>|
|**이력서상세**|**이력서 수정및작성**|
|<img width="390" alt="이력서상세" src="https://github.com/Subang-Study/devshare/assets/115862267/4a9d1533-e916-427c-bb99-42490e1c471c"/>|<img width="390" alt="이력서 수정및작성" src="https://github.com/Subang-Study/devshare/assets/115862267/aec2a146-a432-479e-b25b-0305035bb748.gif"/>|
|**다크모드**|
|<img width="390" alt="다크모드" src="https://github.com/Subang-Study/devshare/assets/115862267/42f12b04-2e5d-4bcc-a1d3-7328457d59fa"/>|



## 설치 및 실행

### 로컬 실행 방법

 1. 본 repogitory clone한 뒤
 2. Mongodb Atlas 계정 생성
 3. Github App을 통해 client ID, client Secret 발급
 4. Amazon S3 Bucket 생성 및 키 발급
 5. ```clone받은 폴더```에 ```.env.local``` 파일 생성 후 아래 내용 작성
 	```javascript
    	NEXT_PUBLIC_HOST=http://localhost:3000
    	MONGO_DB="Your Mongodb Atlas Access Url"
    	NEXTAUTH_URL=http://localhost:3000
    	NEXTAUTH_SECRET="Your Next-Auth Secret"
    	GITHUB_ID="Your Github client ID"
    	GITHUB_SECRET="Your Github client Secret"
    	AWS_S3_USERIMAGE_BUCKETNAME="Your S3 Bucket Name"
    	AWS_S3_USERIMAGE_KEY="Your S3 Bucket Access Key"
    	AWS_S3_USERIMAGE_SECRET="Your S3 Bucket Secret Key"
    ```

 6. 의존성 라이브러리 설치 후 개발 서버 시작
 	```shell
    	> npm i
    	> npm run dev
    ```
