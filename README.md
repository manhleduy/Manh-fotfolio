
1 HOME PAGE
có một số hiêu ứng intro và một số background animation

2 PROJECT PAGE
chứa các project cùng với hình ảnh của nó, cùng với chi tiết về dự án, với các tehcstack nổi bật được sử dụng
khi hover vào các icon của nó các techstack sẽ hiệu lên một tooltip với các nội dung:
+ lí do sử dụng hoặc thông tin về techstack đó
+ snippet code thể hiện mốt số thư viện, cấu trúc được sử dụng  

dưới dùng phần này là link github


bên cạnh các techstack có chứa một bảng để thể hiện ngôn ngữ sử dụng và phần trăm sử dụng

dưới phần này là link live demo, nếu dự án đã có live demo thì đường link có màu sáng hơn, chiều dài lớn hơn

3 SKILL PAGE
bao gồm: technical skills, softskills và ngôn ngữ
* Technical Skills:
- Frontend Skills: chứa các progress bar thể hiện khả năng  vận dụng thành thạo dựa trên việc tham khảo các project thực tế trên github và các công cụ.

- Backend Skills:
+ Có chứa các icon của các framework, runtime environment, ngôn ngữ lập trình vươn ra từ một icon lớn ở giữa là REST API
+ Khi hover vào các icon đó sẽ hiện lên được trình độ dựa trên việc tham khảo code từ các dự án thực tế, tổ chức, sắp xếp code
+ Ở dưới cùng có các thông tin về số năm kinh nghiệm, các techstack đã tìm hiểu và sử dung, số lượng project có sử dụng một hệ thống REST API

- Database:
+ Có chứa các icon của các hệ quản trị cơ sở dữ liệu đã sử dụng, các icon có môt phần khuyết và khác nhau về kích thước để thể hiện trình độ thành thạo . Tên của hệ quản trị cơ sở dữ liệu và số lượng project đã sử dụng để ở dưới icon 
+ Khi hover vào các icon sẽ hiện ra một đoạn code tương ứng với các câu truy vấn khởi tạo đã thành thạo

- Tool:
+ có chứa các công cụ đã được sử dụng cùng với lí do sử dụng , với git là các dòng code được sử dụng phổ biến,
với docker là các image đã từng sử dụng

* Soft skill: hiện một số soft skill đươc bản thên và một người công nhận
* languages: ngôn ngữ mẹ đẻ và các ngôn ngữ đã có bằng cấp chứng minh trình độ

4 RESUME PAGE: có chứa một số thông tin cá nhân, mục tiêu nghề nghiệp
5 CONTACT PAGE: 
+ cho phép người đọc có thể liên lạc thông qua form
+ có các thông tin liên lác như là email, số điện thoại, địa chỉ, đường link trỏ đến trang cá nhân github và linked1in

6 NOTFOUND PAGE: hiện lên khi route không tồn tại


* Sử dụng shadcn/ui nhằm xây dựng các tooltip một cách nhanh chóng
* Sử dụng framer-motion cho các hiệu ứng
* Sử dụng react-hook-form nhằm thiết kế form
* tailwindcss cho việc phát triển môt cách nhanh chóng
* các icons trong file public được gộp vào một object trong file const.ts
* các thông tin được sử dụng trong mỗi page ở trong folder data
* thư viện chart.js cho việc xây dựng các bảng ở trang project
