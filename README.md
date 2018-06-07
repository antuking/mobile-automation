![alt text](https://momo.vn/loctaoquan/image/LogoMobile.png)

# Đặt tên elements
button_[Button_name]

label_[Label_name]

textView_[TextView_name]

textBox_[TextBox_name]

image_[Image_name]

# Đặt tên methods
tap_[element_name]

doubleTap_[element_name]

scroll_[element_name]

swipe_[element_name]

zoomIn_[element_name]

zoomOut_[element_name]

typeIn_[element_name]

# Đặt tên class
screen -> screens/[screenName]Screen

test suite -> tests/[suiteName]Suite

test case -> tests/[suiteName]Suite/[testcaseName]

# Đặt tên số điện thoại

| **Định danh** | **Có tiền** | **Nguồn tiền** | **Định dạng** | **Tên method** |
| :------: | :------: | :------: | :------: | :------: |
| no | yes | MoMo | `n`01234567899`tien` | testcase_`noname`_`tien` |
| no | no | - | `n`01234567899`no` | testcase_`noname`_`no` |
| yes | yes | MoMo | `x`01234567899 | testcase |
| yes | yes | bank* | `y`01234567899`bank*` | testcase_`bank*` |

**bank***: `visa`, `master`, `vcb`, `tpb`, `vpb`, `exb`, `bidv`, `ocb`, `vtb`, `acb`, `sacom` 

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










