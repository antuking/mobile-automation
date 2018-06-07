# Các hàm hỗ trợ

Mục đích là gộp nhiều methods lại thành 1 method để tiết kiệm thời gian và làm code sạch hơn

```java
void stepClick((MobileElement ele, String logMessage, ExtentTest extentTest))
```
Dùng để click vào element mình muốn (ele) và truyền pass log cho report (logMessage)

```java
void typingText(MobileElement ele, String txt, String logMessage, ExtentTest extentTest)
```
Dùng để nhập chuỗi ký tự (txt) và element (ele) và truyền pass log cho report (logMessage)

```java
void typingPasscode(String pass, String logMessage, ExtentTest extentTest)
```
Dùng để gõ passcode (pass) và truyền pass log cho report (logMessage)

# Các bước để viết một test case đơn giản

1. Tạo các screen cần thiết cho test case
2. Khai báo các elements cần thiết cho test case
3. Khai báo các methods cần thiết cho test case
4. Tạo test suite
5. Tạo test case trong test suite
6. Gọi các test step tương ứng với các screens đã khai báo ở các bước trước

# Các lib cần thiết

bsh-2.0b4.jar

bson-3.3.0.jar

commons-codec-1.9.jar

commons-logging-1.2.jar

extentreports-3.0.1.jar

freemarker-2.3.23.jar

httpclient-4.5.2.jar

httpcore-4.4.4.jar

httpmime-4.5.2.jar

java-client-3.2.0.jar

jcommander-1.48.jar

jsoup-1.9.2.jar

mongodb-driver-3.3.0.jar

mongodb-driver-core-3.3.0.jar

selenium-server-standalone-2.53.0.jar

testng-6.9.10.jar










