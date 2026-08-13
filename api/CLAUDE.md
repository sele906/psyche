# psyche-api

Spring Boot + MongoDB. Claude API를 호출해 한도윤의 응답을 생성한다.

## 실행

./gradlew bootRun     # 8080

환경변수는 `.env` (gitignore됨). 필요한 키 목록은 `.env.example` 참고.

## 규칙

- **시크릿을 코드나 설정 파일에 절대 하드코딩하지 않는다.**
  `application.yml`에는 `${ENV_NAME}` 참조만 쓴다
- `.env`는 권한 설정으로 접근이 차단되어 있다.
필요한 환경변수 목록은 `.env.example`에 있으니 그쪽을 참고할 것.
- 패키지: `com.psyche.api.<도메인>` — chat, memory, relationship, character
- 도메인 로직은 서비스에. 컨트롤러는 얇게 유지

