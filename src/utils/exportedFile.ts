// Exporting the class which will be 
// used in another file 
// Export keyword or form should be 
// used to use the class 
export class exportedFile {
loadAllDistrict(): { value: string; code: string; }[] {
throw new Error('Method not implemented.');
} 

	// Class method which prints the 
	// user called in another file 
	sayHello(user){ 
		return "Hello " + user+ "!"; 
	} 

	loadAllProvince(){
		return this.loadAll()
	}

	loadDistrictByProvince(pid:any){
		let array = this.loadAll();
		let data= array.filter(function (object) {
			return object['code'] === pid;
		});
		return data.districts
	}

	loadAll(){
		return [
			{
			  "value": "Thành phố Hà Nội",
			  "code": 1,
			  "districts": [
				{
				  "value": "Quận Ba Đình",
				  "code": 1,
				  "wards": [
					{
					  "value": "Phường Phúc Xá"
					},
					{
					  "value": "Phường Trúc Bạch"
					},
					{
					  "value": "Phường Vĩnh Phúc"
					},
					{
					  "value": "Phường Cống Vị"
					},
					{
					  "value": "Phường Liễu Giai"
					},
					{
					  "value": "Phường Nguyễn Trung Trực"
					},
					{
					  "value": "Phường Quán Thánh"
					},
					{
					  "value": "Phường Ngọc Hà"
					},
					{
					  "value": "Phường Điện Biên"
					},
					{
					  "value": "Phường Đội Cấn"
					},
					{
					  "value": "Phường Ngọc Khánh"
					},
					{
					  "value": "Phường Kim Mã"
					},
					{
					  "value": "Phường Giảng Võ"
					},
					{
					  "value": "Phường Thành Công"
					}
				  ]
				},
				{
				  "value": "Quận Hoàn Kiếm",
				  "code": 2,
				  "wards": [
					{
					  "value": "Phường Phúc Tân"
					},
					{
					  "value": "Phường Đồng Xuân"
					},
					{
					  "value": "Phường Hàng Mã"
					},
					{
					  "value": "Phường Hàng Buồm"
					},
					{
					  "value": "Phường Hàng Đào"
					},
					{
					  "value": "Phường Hàng Bồ"
					},
					{
					  "value": "Phường Cửa Đông"
					},
					{
					  "value": "Phường Lý Thái Tổ"
					},
					{
					  "value": "Phường Hàng Bạc"
					},
					{
					  "value": "Phường Hàng Gai"
					},
					{
					  "value": "Phường Chương Dương"
					},
					{
					  "value": "Phường Hàng Trống"
					},
					{
					  "value": "Phường Cửa Nam"
					},
					{
					  "value": "Phường Hàng Bông"
					},
					{
					  "value": "Phường Tràng Tiền"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Phan Chu Trinh"
					},
					{
					  "value": "Phường Hàng Bài"
					}
				  ]
				},
				{
				  "value": "Quận Tây Hồ",
				  "code": 3,
				  "wards": [
					{
					  "value": "Phường Phú Thượng"
					},
					{
					  "value": "Phường Nhật Tân"
					},
					{
					  "value": "Phường Tứ Liên"
					},
					{
					  "value": "Phường Quảng An"
					},
					{
					  "value": "Phường Xuân La"
					},
					{
					  "value": "Phường Yên Phụ"
					},
					{
					  "value": "Phường Bưởi"
					},
					{
					  "value": "Phường Thụy Khuê"
					}
				  ]
				},
				{
				  "value": "Quận Long Biên",
				  "code": 4,
				  "wards": [
					{
					  "value": "Phường Thượng Thanh"
					},
					{
					  "value": "Phường Ngọc Thụy"
					},
					{
					  "value": "Phường Giang Biên"
					},
					{
					  "value": "Phường Đức Giang"
					},
					{
					  "value": "Phường Việt Hưng"
					},
					{
					  "value": "Phường Gia Thụy"
					},
					{
					  "value": "Phường Ngọc Lâm"
					},
					{
					  "value": "Phường Phúc Lợi"
					},
					{
					  "value": "Phường Bồ Đề"
					},
					{
					  "value": "Phường Sài Đồng"
					},
					{
					  "value": "Phường Long Biên"
					},
					{
					  "value": "Phường Thạch Bàn"
					},
					{
					  "value": "Phường Phúc Đồng"
					},
					{
					  "value": "Phường Cự Khối"
					}
				  ]
				},
				{
				  "value": "Quận Cầu Giấy",
				  "code": 5,
				  "wards": [
					{
					  "value": "Phường Nghĩa Đô"
					},
					{
					  "value": "Phường Nghĩa Tân"
					},
					{
					  "value": "Phường Mai Dịch"
					},
					{
					  "value": "Phường Dịch Vọng"
					},
					{
					  "value": "Phường Dịch Vọng Hậu"
					},
					{
					  "value": "Phường Quan Hoa"
					},
					{
					  "value": "Phường Yên Hoà"
					},
					{
					  "value": "Phường Trung Hoà"
					}
				  ]
				},
				{
				  "value": "Quận Đống Đa",
				  "code": 6,
				  "wards": [
					{
					  "value": "Phường Cát Linh"
					},
					{
					  "value": "Phường Văn Miếu"
					},
					{
					  "value": "Phường Quốc Tử Giám"
					},
					{
					  "value": "Phường Láng Thượng"
					},
					{
					  "value": "Phường Ô Chợ Dừa"
					},
					{
					  "value": "Phường Văn Chương"
					},
					{
					  "value": "Phường Hàng Bột"
					},
					{
					  "value": "Phường Láng Hạ"
					},
					{
					  "value": "Phường Khâm Thiên"
					},
					{
					  "value": "Phường Thổ Quan"
					},
					{
					  "value": "Phường Nam Đồng"
					},
					{
					  "value": "Phường Trung Phụng"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Trung Liệt"
					},
					{
					  "value": "Phường Phương Liên"
					},
					{
					  "value": "Phường Thịnh Quang"
					},
					{
					  "value": "Phường Trung Tự"
					},
					{
					  "value": "Phường Kim Liên"
					},
					{
					  "value": "Phường Phương Mai"
					},
					{
					  "value": "Phường Ngã Tư Sở"
					},
					{
					  "value": "Phường Khương Thượng"
					}
				  ]
				},
				{
				  "value": "Quận Hai Bà Trưng",
				  "code": 7,
				  "wards": [
					{
					  "value": "Phường Nguyễn Du"
					},
					{
					  "value": "Phường Bạch Đằng"
					},
					{
					  "value": "Phường Phạm Đình Hổ"
					},
					{
					  "value": "Phường Lê Đại Hành"
					},
					{
					  "value": "Phường Đồng Nhân"
					},
					{
					  "value": "Phường Phố Huế"
					},
					{
					  "value": "Phường Đống Mác"
					},
					{
					  "value": "Phường Thanh Lương"
					},
					{
					  "value": "Phường Thanh Nhàn"
					},
					{
					  "value": "Phường Cầu Dền"
					},
					{
					  "value": "Phường Bách Khoa"
					},
					{
					  "value": "Phường Đồng Tâm"
					},
					{
					  "value": "Phường Vĩnh Tuy"
					},
					{
					  "value": "Phường Bạch Mai"
					},
					{
					  "value": "Phường Quỳnh Mai"
					},
					{
					  "value": "Phường Quỳnh Lôi"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Phường Trương Định"
					}
				  ]
				},
				{
				  "value": "Quận Hoàng Mai",
				  "code": 8,
				  "wards": [
					{
					  "value": "Phường Thanh Trì"
					},
					{
					  "value": "Phường Vĩnh Hưng"
					},
					{
					  "value": "Phường Định Công"
					},
					{
					  "value": "Phường Mai Động"
					},
					{
					  "value": "Phường Tương Mai"
					},
					{
					  "value": "Phường Đại Kim"
					},
					{
					  "value": "Phường Tân Mai"
					},
					{
					  "value": "Phường Hoàng Văn Thụ"
					},
					{
					  "value": "Phường Giáp Bát"
					},
					{
					  "value": "Phường Lĩnh Nam"
					},
					{
					  "value": "Phường Thịnh Liệt"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Hoàng Liệt"
					},
					{
					  "value": "Phường Yên Sở"
					}
				  ]
				},
				{
				  "value": "Quận Thanh Xuân",
				  "code": 9,
				  "wards": [
					{
					  "value": "Phường Nhân Chính"
					},
					{
					  "value": "Phường Thượng Đình"
					},
					{
					  "value": "Phường Khương Trung"
					},
					{
					  "value": "Phường Khương Mai"
					},
					{
					  "value": "Phường Thanh Xuân Trung"
					},
					{
					  "value": "Phường Phương Liệt"
					},
					{
					  "value": "Phường Hạ Đình"
					},
					{
					  "value": "Phường Khương Đình"
					},
					{
					  "value": "Phường Thanh Xuân Bắc"
					},
					{
					  "value": "Phường Thanh Xuân Nam"
					},
					{
					  "value": "Phường Kim Giang"
					}
				  ]
				},
				{
				  "value": "Huyện Sóc Sơn",
				  "code": 16,
				  "wards": [
					{
					  "value": "Thị trấn Sóc Sơn"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Minh Trí"
					},
					{
					  "value": "Xã Hồng Kỳ"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Trung Giã"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Minh Phú"
					},
					{
					  "value": "Xã Phù Linh"
					},
					{
					  "value": "Xã Bắc Phú"
					},
					{
					  "value": "Xã Tân Minh"
					},
					{
					  "value": "Xã Quang Tiến"
					},
					{
					  "value": "Xã Hiền Ninh"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Tiên Dược"
					},
					{
					  "value": "Xã Việt Long"
					},
					{
					  "value": "Xã Xuân Giang"
					},
					{
					  "value": "Xã Mai Đình"
					},
					{
					  "value": "Xã Đức Hoà"
					},
					{
					  "value": "Xã Thanh Xuân"
					},
					{
					  "value": "Xã Đông Xuân"
					},
					{
					  "value": "Xã Kim Lũ"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Phú Minh"
					},
					{
					  "value": "Xã Phù Lỗ"
					},
					{
					  "value": "Xã Xuân Thu"
					}
				  ]
				},
				{
				  "value": "Huyện Đông Anh",
				  "code": 17,
				  "wards": [
					{
					  "value": "Thị trấn Đông Anh"
					},
					{
					  "value": "Xã Xuân Nộn"
					},
					{
					  "value": "Xã Thuỵ Lâm"
					},
					{
					  "value": "Xã Bắc Hồng"
					},
					{
					  "value": "Xã Nguyên Khê"
					},
					{
					  "value": "Xã Nam Hồng"
					},
					{
					  "value": "Xã Tiên Dương"
					},
					{
					  "value": "Xã Vân Hà"
					},
					{
					  "value": "Xã Uy Nỗ"
					},
					{
					  "value": "Xã Vân Nội"
					},
					{
					  "value": "Xã Liên Hà"
					},
					{
					  "value": "Xã Việt Hùng"
					},
					{
					  "value": "Xã Kim Nỗ"
					},
					{
					  "value": "Xã Kim Chung"
					},
					{
					  "value": "Xã Dục Tú"
					},
					{
					  "value": "Xã Đại Mạch"
					},
					{
					  "value": "Xã Vĩnh Ngọc"
					},
					{
					  "value": "Xã Cổ Loa"
					},
					{
					  "value": "Xã Hải Bối"
					},
					{
					  "value": "Xã Xuân Canh"
					},
					{
					  "value": "Xã Võng La"
					},
					{
					  "value": "Xã Tàm Xá"
					},
					{
					  "value": "Xã Mai Lâm"
					},
					{
					  "value": "Xã Đông Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Gia Lâm",
				  "code": 18,
				  "wards": [
					{
					  "value": "Thị trấn Yên Viên"
					},
					{
					  "value": "Xã Yên Thường"
					},
					{
					  "value": "Xã Yên Viên"
					},
					{
					  "value": "Xã Ninh Hiệp"
					},
					{
					  "value": "Xã Đình Xuyên"
					},
					{
					  "value": "Xã Dương Hà"
					},
					{
					  "value": "Xã Phù Đổng"
					},
					{
					  "value": "Xã Trung Mầu"
					},
					{
					  "value": "Xã Lệ Chi"
					},
					{
					  "value": "Xã Cổ Bi"
					},
					{
					  "value": "Xã Đặng Xá"
					},
					{
					  "value": "Xã Phú Thị"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Thị trấn Trâu Quỳ"
					},
					{
					  "value": "Xã Dương Quang"
					},
					{
					  "value": "Xã Dương Xá"
					},
					{
					  "value": "Xã Đông Dư"
					},
					{
					  "value": "Xã Đa Tốn"
					},
					{
					  "value": "Xã Kiêu Kỵ"
					},
					{
					  "value": "Xã Bát Tràng"
					},
					{
					  "value": "Xã Kim Lan"
					},
					{
					  "value": "Xã Văn Đức"
					}
				  ]
				},
				{
				  "value": "Quận Nam Từ Liêm",
				  "code": 19,
				  "wards": [
					{
					  "value": "Phường Cầu Diễn"
					},
					{
					  "value": "Phường Xuân Phương"
					},
					{
					  "value": "Phường Phương Canh"
					},
					{
					  "value": "Phường Mỹ Đình 1"
					},
					{
					  "value": "Phường Mỹ Đình 2"
					},
					{
					  "value": "Phường Tây Mỗ"
					},
					{
					  "value": "Phường Mễ Trì"
					},
					{
					  "value": "Phường Phú Đô"
					},
					{
					  "value": "Phường Đại Mỗ"
					},
					{
					  "value": "Phường Trung Văn"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Trì",
				  "code": 20,
				  "wards": [
					{
					  "value": "Thị trấn Văn Điển"
					},
					{
					  "value": "Xã Tân Triều"
					},
					{
					  "value": "Xã Thanh Liệt"
					},
					{
					  "value": "Xã Tả Thanh Oai"
					},
					{
					  "value": "Xã Hữu Hoà"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Tứ Hiệp"
					},
					{
					  "value": "Xã Yên Mỹ"
					},
					{
					  "value": "Xã Vĩnh Quỳnh"
					},
					{
					  "value": "Xã Ngũ Hiệp"
					},
					{
					  "value": "Xã Duyên Hà"
					},
					{
					  "value": "Xã Ngọc Hồi"
					},
					{
					  "value": "Xã Vạn Phúc"
					},
					{
					  "value": "Xã Đại áng"
					},
					{
					  "value": "Xã Liên Ninh"
					},
					{
					  "value": "Xã Đông Mỹ"
					}
				  ]
				},
				{
				  "value": "Quận Bắc Từ Liêm",
				  "code": 21,
				  "wards": [
					{
					  "value": "Phường Thượng Cát"
					},
					{
					  "value": "Phường Liên Mạc"
					},
					{
					  "value": "Phường Đông Ngạc"
					},
					{
					  "value": "Phường Đức Thắng"
					},
					{
					  "value": "Phường Thụy Phương"
					},
					{
					  "value": "Phường Tây Tựu"
					},
					{
					  "value": "Phường Xuân Đỉnh"
					},
					{
					  "value": "Phường Xuân Tảo"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Phường Cổ Nhuế 1"
					},
					{
					  "value": "Phường Cổ Nhuế 2"
					},
					{
					  "value": "Phường Phú Diễn"
					},
					{
					  "value": "Phường Phúc Diễn"
					}
				  ]
				},
				{
				  "value": "Huyện Mê Linh",
				  "code": 250,
				  "wards": [
					{
					  "value": "Thị trấn Chi Đông"
					},
					{
					  "value": "Xã Đại Thịnh"
					},
					{
					  "value": "Xã Kim Hoa"
					},
					{
					  "value": "Xã Thạch Đà"
					},
					{
					  "value": "Xã Tiến Thắng"
					},
					{
					  "value": "Xã Tự Lập"
					},
					{
					  "value": "Thị trấn Quang Minh"
					},
					{
					  "value": "Xã Thanh Lâm"
					},
					{
					  "value": "Xã Tam Đồng"
					},
					{
					  "value": "Xã Liên Mạc"
					},
					{
					  "value": "Xã Vạn Yên"
					},
					{
					  "value": "Xã Chu Phan"
					},
					{
					  "value": "Xã Tiến Thịnh"
					},
					{
					  "value": "Xã Mê Linh"
					},
					{
					  "value": "Xã Văn Khê"
					},
					{
					  "value": "Xã Hoàng Kim"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Tráng Việt"
					}
				  ]
				},
				{
				  "value": "Quận Hà Đông",
				  "code": 268,
				  "wards": [
					{
					  "value": "Phường Nguyễn Trãi"
					},
					{
					  "value": "Phường Mộ Lao"
					},
					{
					  "value": "Phường Văn Quán"
					},
					{
					  "value": "Phường Vạn Phúc"
					},
					{
					  "value": "Phường Yết Kiêu"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường La Khê"
					},
					{
					  "value": "Phường Phú La"
					},
					{
					  "value": "Phường Phúc La"
					},
					{
					  "value": "Phường Hà Cầu"
					},
					{
					  "value": "Phường Yên Nghĩa"
					},
					{
					  "value": "Phường Kiến Hưng"
					},
					{
					  "value": "Phường Phú Lãm"
					},
					{
					  "value": "Phường Phú Lương"
					},
					{
					  "value": "Phường Dương Nội"
					},
					{
					  "value": "Phường Đồng Mai"
					},
					{
					  "value": "Phường Biên Giang"
					}
				  ]
				},
				{
				  "value": "Thị xã Sơn Tây",
				  "code": 269,
				  "wards": [
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Phú Thịnh"
					},
					{
					  "value": "Phường Ngô Quyền"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Sơn Lộc"
					},
					{
					  "value": "Phường Xuân Khanh"
					},
					{
					  "value": "Xã Đường Lâm"
					},
					{
					  "value": "Phường Viên Sơn"
					},
					{
					  "value": "Xã Xuân Sơn"
					},
					{
					  "value": "Phường Trung Hưng"
					},
					{
					  "value": "Xã Thanh Mỹ"
					},
					{
					  "value": "Phường Trung Sơn Trầm"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Xã Sơn Đông"
					},
					{
					  "value": "Xã Cổ Đông"
					}
				  ]
				},
				{
				  "value": "Huyện Ba Vì",
				  "code": 271,
				  "wards": [
					{
					  "value": "Thị trấn Tây Đằng"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Cổ Đô"
					},
					{
					  "value": "Xã Tản Hồng"
					},
					{
					  "value": "Xã Vạn Thắng"
					},
					{
					  "value": "Xã Châu Sơn"
					},
					{
					  "value": "Xã Phong Vân"
					},
					{
					  "value": "Xã Phú Đông"
					},
					{
					  "value": "Xã Phú Phương"
					},
					{
					  "value": "Xã Phú Châu"
					},
					{
					  "value": "Xã Thái Hòa"
					},
					{
					  "value": "Xã Đồng Thái"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Minh Châu"
					},
					{
					  "value": "Xã Vật Lại"
					},
					{
					  "value": "Xã Chu Minh"
					},
					{
					  "value": "Xã Tòng Bạt"
					},
					{
					  "value": "Xã Cẩm Lĩnh"
					},
					{
					  "value": "Xã Sơn Đà"
					},
					{
					  "value": "Xã Đông Quang"
					},
					{
					  "value": "Xã Tiên Phong"
					},
					{
					  "value": "Xã Thụy An"
					},
					{
					  "value": "Xã Cam Thượng"
					},
					{
					  "value": "Xã Thuần Mỹ"
					},
					{
					  "value": "Xã Tản Lĩnh"
					},
					{
					  "value": "Xã Ba Trại"
					},
					{
					  "value": "Xã Minh Quang"
					},
					{
					  "value": "Xã Ba Vì"
					},
					{
					  "value": "Xã Vân Hòa"
					},
					{
					  "value": "Xã Yên Bài"
					},
					{
					  "value": "Xã Khánh Thượng"
					}
				  ]
				},
				{
				  "value": "Huyện Phúc Thọ",
				  "code": 272,
				  "wards": [
					{
					  "value": "Thị trấn Phúc Thọ"
					},
					{
					  "value": "Xã Vân Hà"
					},
					{
					  "value": "Xã Vân Phúc"
					},
					{
					  "value": "Xã Vân Nam"
					},
					{
					  "value": "Xã Xuân Đình"
					},
					{
					  "value": "Xã Sen Phương"
					},
					{
					  "value": "Xã Võng Xuyên"
					},
					{
					  "value": "Xã Thọ Lộc"
					},
					{
					  "value": "Xã Long Xuyên"
					},
					{
					  "value": "Xã Thượng Cốc"
					},
					{
					  "value": "Xã Hát Môn"
					},
					{
					  "value": "Xã Tích Giang"
					},
					{
					  "value": "Xã Thanh Đa"
					},
					{
					  "value": "Xã Trạch Mỹ Lộc"
					},
					{
					  "value": "Xã Phúc Hòa"
					},
					{
					  "value": "Xã Ngọc Tảo"
					},
					{
					  "value": "Xã Phụng Thượng"
					},
					{
					  "value": "Xã Tam Thuấn"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Hiệp Thuận"
					},
					{
					  "value": "Xã Liên Hiệp"
					}
				  ]
				},
				{
				  "value": "Huyện Đan Phượng",
				  "code": 273,
				  "wards": [
					{
					  "value": "Thị trấn Phùng"
					},
					{
					  "value": "Xã Trung Châu"
					},
					{
					  "value": "Xã Thọ An"
					},
					{
					  "value": "Xã Thọ Xuân"
					},
					{
					  "value": "Xã Hồng Hà"
					},
					{
					  "value": "Xã Liên Hồng"
					},
					{
					  "value": "Xã Liên Hà"
					},
					{
					  "value": "Xã Hạ Mỗ"
					},
					{
					  "value": "Xã Liên Trung"
					},
					{
					  "value": "Xã Phương Đình"
					},
					{
					  "value": "Xã Thượng Mỗ"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Đan Phượng"
					},
					{
					  "value": "Xã Đồng Tháp"
					},
					{
					  "value": "Xã Song Phượng"
					}
				  ]
				},
				{
				  "value": "Huyện Hoài Đức",
				  "code": 274,
				  "wards": [
					{
					  "value": "Thị trấn Trạm Trôi"
					},
					{
					  "value": "Xã Đức Thượng"
					},
					{
					  "value": "Xã Minh Khai"
					},
					{
					  "value": "Xã Dương Liễu"
					},
					{
					  "value": "Xã Di Trạch"
					},
					{
					  "value": "Xã Đức Giang"
					},
					{
					  "value": "Xã Cát Quế"
					},
					{
					  "value": "Xã Kim Chung"
					},
					{
					  "value": "Xã Yên Sở"
					},
					{
					  "value": "Xã Sơn Đồng"
					},
					{
					  "value": "Xã Vân Canh"
					},
					{
					  "value": "Xã Đắc Sở"
					},
					{
					  "value": "Xã Lại Yên"
					},
					{
					  "value": "Xã Tiền Yên"
					},
					{
					  "value": "Xã Song Phương"
					},
					{
					  "value": "Xã An Khánh"
					},
					{
					  "value": "Xã An Thượng"
					},
					{
					  "value": "Xã Vân Côn"
					},
					{
					  "value": "Xã La Phù"
					},
					{
					  "value": "Xã Đông La"
					}
				  ]
				},
				{
				  "value": "Huyện Quốc Oai",
				  "code": 275,
				  "wards": [
					{
					  "value": "Xã Đông Xuân"
					},
					{
					  "value": "Thị trấn Quốc Oai"
					},
					{
					  "value": "Xã Sài Sơn"
					},
					{
					  "value": "Xã Phượng Cách"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Ngọc Liệp"
					},
					{
					  "value": "Xã Ngọc Mỹ"
					},
					{
					  "value": "Xã Liệp Tuyết"
					},
					{
					  "value": "Xã Thạch Thán"
					},
					{
					  "value": "Xã Đồng Quang"
					},
					{
					  "value": "Xã Phú Cát"
					},
					{
					  "value": "Xã Tuyết Nghĩa"
					},
					{
					  "value": "Xã Nghĩa Hương"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Đại Thành"
					},
					{
					  "value": "Xã Phú Mãn"
					},
					{
					  "value": "Xã Cấn Hữu"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Hòa Thạch"
					},
					{
					  "value": "Xã Đông Yên"
					}
				  ]
				},
				{
				  "value": "Huyện Thạch Thất",
				  "code": 276,
				  "wards": [
					{
					  "value": "Xã Yên Trung"
					},
					{
					  "value": "Xã Yên Bình"
					},
					{
					  "value": "Xã Tiến Xuân"
					},
					{
					  "value": "Thị trấn Liên Quan"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Cẩm Yên"
					},
					{
					  "value": "Xã Lại Thượng"
					},
					{
					  "value": "Xã Phú Kim"
					},
					{
					  "value": "Xã Hương Ngải"
					},
					{
					  "value": "Xã Canh Nậu"
					},
					{
					  "value": "Xã Kim Quan"
					},
					{
					  "value": "Xã Dị Nậu"
					},
					{
					  "value": "Xã Bình Yên"
					},
					{
					  "value": "Xã Chàng Sơn"
					},
					{
					  "value": "Xã Thạch Hoà"
					},
					{
					  "value": "Xã Cần Kiệm"
					},
					{
					  "value": "Xã Hữu Bằng"
					},
					{
					  "value": "Xã Phùng Xá"
					},
					{
					  "value": "Xã Tân Xã"
					},
					{
					  "value": "Xã Thạch Xá"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Hạ Bằng"
					},
					{
					  "value": "Xã Đồng Trúc"
					}
				  ]
				},
				{
				  "value": "Huyện Chương Mỹ",
				  "code": 277,
				  "wards": [
					{
					  "value": "Thị trấn Chúc Sơn"
					},
					{
					  "value": "Thị trấn Xuân Mai"
					},
					{
					  "value": "Xã Phụng Châu"
					},
					{
					  "value": "Xã Tiên Phương"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Đông Phương Yên"
					},
					{
					  "value": "Xã Phú Nghĩa"
					},
					{
					  "value": "Xã Trường Yên"
					},
					{
					  "value": "Xã Ngọc Hòa"
					},
					{
					  "value": "Xã Thủy Xuân Tiên"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Xã Trung Hòa"
					},
					{
					  "value": "Xã Đại Yên"
					},
					{
					  "value": "Xã Thụy Hương"
					},
					{
					  "value": "Xã Tốt Động"
					},
					{
					  "value": "Xã Lam Điền"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Nam Phương Tiến"
					},
					{
					  "value": "Xã Hợp Đồng"
					},
					{
					  "value": "Xã Hoàng Văn Thụ"
					},
					{
					  "value": "Xã Hoàng Diệu"
					},
					{
					  "value": "Xã Hữu Văn"
					},
					{
					  "value": "Xã Quảng Bị"
					},
					{
					  "value": "Xã Mỹ Lương"
					},
					{
					  "value": "Xã Thượng Vực"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Đồng Phú"
					},
					{
					  "value": "Xã Trần Phú"
					},
					{
					  "value": "Xã Văn Võ"
					},
					{
					  "value": "Xã Đồng Lạc"
					},
					{
					  "value": "Xã Hòa Chính"
					},
					{
					  "value": "Xã Phú Nam An"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Oai",
				  "code": 278,
				  "wards": [
					{
					  "value": "Thị trấn Kim Bài"
					},
					{
					  "value": "Xã Cự Khê"
					},
					{
					  "value": "Xã Bích Hòa"
					},
					{
					  "value": "Xã Mỹ Hưng"
					},
					{
					  "value": "Xã Cao Viên"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Tam Hưng"
					},
					{
					  "value": "Xã Thanh Cao"
					},
					{
					  "value": "Xã Thanh Thùy"
					},
					{
					  "value": "Xã Thanh Mai"
					},
					{
					  "value": "Xã Thanh Văn"
					},
					{
					  "value": "Xã Đỗ Động"
					},
					{
					  "value": "Xã Kim An"
					},
					{
					  "value": "Xã Kim Thư"
					},
					{
					  "value": "Xã Phương Trung"
					},
					{
					  "value": "Xã Tân Ước"
					},
					{
					  "value": "Xã Dân Hòa"
					},
					{
					  "value": "Xã Liên Châu"
					},
					{
					  "value": "Xã Cao Dương"
					},
					{
					  "value": "Xã Xuân Dương"
					},
					{
					  "value": "Xã Hồng Dương"
					}
				  ]
				},
				{
				  "value": "Huyện Thường Tín",
				  "code": 279,
				  "wards": [
					{
					  "value": "Thị trấn Thường Tín"
					},
					{
					  "value": "Xã Ninh Sở"
					},
					{
					  "value": "Xã Nhị Khê"
					},
					{
					  "value": "Xã Duyên Thái"
					},
					{
					  "value": "Xã Khánh Hà"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Văn Bình"
					},
					{
					  "value": "Xã Hiền Giang"
					},
					{
					  "value": "Xã Hồng Vân"
					},
					{
					  "value": "Xã Vân Tảo"
					},
					{
					  "value": "Xã Liên Phương"
					},
					{
					  "value": "Xã Văn Phú"
					},
					{
					  "value": "Xã Tự Nhiên"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Hà Hồi"
					},
					{
					  "value": "Xã Thư Phú"
					},
					{
					  "value": "Xã Nguyễn Trãi"
					},
					{
					  "value": "Xã Quất Động"
					},
					{
					  "value": "Xã Chương Dương"
					},
					{
					  "value": "Xã Tân Minh"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Thắng Lợi"
					},
					{
					  "value": "Xã Dũng Tiến"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Nghiêm Xuyên"
					},
					{
					  "value": "Xã Tô Hiệu"
					},
					{
					  "value": "Xã Văn Tự"
					},
					{
					  "value": "Xã Vạn Điểm"
					},
					{
					  "value": "Xã Minh Cường"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Xuyên",
				  "code": 280,
				  "wards": [
					{
					  "value": "Thị trấn Phú Minh"
					},
					{
					  "value": "Thị trấn Phú Xuyên"
					},
					{
					  "value": "Xã Hồng Minh"
					},
					{
					  "value": "Xã Phượng Dực"
					},
					{
					  "value": "Xã Nam Tiến"
					},
					{
					  "value": "Xã Tri Trung"
					},
					{
					  "value": "Xã Đại Thắng"
					},
					{
					  "value": "Xã Phú Túc"
					},
					{
					  "value": "Xã Văn Hoàng"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Hoàng Long"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Nam Phong"
					},
					{
					  "value": "Xã Nam Triều"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Chuyên Mỹ"
					},
					{
					  "value": "Xã Khai Thái"
					},
					{
					  "value": "Xã Phúc Tiến"
					},
					{
					  "value": "Xã Vân Từ"
					},
					{
					  "value": "Xã Tri Thủy"
					},
					{
					  "value": "Xã Đại Xuyên"
					},
					{
					  "value": "Xã Phú Yên"
					},
					{
					  "value": "Xã Bạch Hạ"
					},
					{
					  "value": "Xã Quang Lãng"
					},
					{
					  "value": "Xã Châu Can"
					},
					{
					  "value": "Xã Minh Tân"
					}
				  ]
				},
				{
				  "value": "Huyện Ứng Hòa",
				  "code": 281,
				  "wards": [
					{
					  "value": "Thị trấn Vân Đình"
					},
					{
					  "value": "Xã Viên An"
					},
					{
					  "value": "Xã Viên Nội"
					},
					{
					  "value": "Xã Hoa Sơn"
					},
					{
					  "value": "Xã Quảng Phú Cầu"
					},
					{
					  "value": "Xã Trường Thịnh"
					},
					{
					  "value": "Xã Cao Thành"
					},
					{
					  "value": "Xã Liên Bạt"
					},
					{
					  "value": "Xã Sơn Công"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Phương Tú"
					},
					{
					  "value": "Xã Trung Tú"
					},
					{
					  "value": "Xã Đồng Tân"
					},
					{
					  "value": "Xã Tảo Dương Văn"
					},
					{
					  "value": "Xã Vạn Thái"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Xã Hòa Lâm"
					},
					{
					  "value": "Xã Hòa Xá"
					},
					{
					  "value": "Xã Trầm Lộng"
					},
					{
					  "value": "Xã Kim Đường"
					},
					{
					  "value": "Xã Hòa Nam"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Đội Bình"
					},
					{
					  "value": "Xã Đại Hùng"
					},
					{
					  "value": "Xã Đông Lỗ"
					},
					{
					  "value": "Xã Phù Lưu"
					},
					{
					  "value": "Xã Đại Cường"
					},
					{
					  "value": "Xã Lưu Hoàng"
					},
					{
					  "value": "Xã Hồng Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Mỹ Đức",
				  "code": 282,
				  "wards": [
					{
					  "value": "Thị trấn Đại Nghĩa"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Thượng Lâm"
					},
					{
					  "value": "Xã Tuy Lai"
					},
					{
					  "value": "Xã Phúc Lâm"
					},
					{
					  "value": "Xã Mỹ Thành"
					},
					{
					  "value": "Xã Bột Xuyên"
					},
					{
					  "value": "Xã An Mỹ"
					},
					{
					  "value": "Xã Hồng Sơn"
					},
					{
					  "value": "Xã Lê Thanh"
					},
					{
					  "value": "Xã Xuy Xá"
					},
					{
					  "value": "Xã Phùng Xá"
					},
					{
					  "value": "Xã Phù Lưu Tế"
					},
					{
					  "value": "Xã Đại Hưng"
					},
					{
					  "value": "Xã Vạn Kim"
					},
					{
					  "value": "Xã Đốc Tín"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Hùng Tiến"
					},
					{
					  "value": "Xã An Tiến"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Hợp Thanh"
					},
					{
					  "value": "Xã An Phú"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hà Giang",
			  "code": 2,
			  "districts": [
				{
				  "value": "Thành phố Hà Giang",
				  "code": 24,
				  "wards": [
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Ngọc Hà"
					},
					{
					  "value": "Phường Nguyễn Trãi"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Xã Ngọc Đường"
					},
					{
					  "value": "Xã Phương Độ"
					},
					{
					  "value": "Xã Phương Thiện"
					}
				  ]
				},
				{
				  "value": "Huyện Đồng Văn",
				  "code": 26,
				  "wards": [
					{
					  "value": "Thị trấn Phó Bảng"
					},
					{
					  "value": "Xã Lũng Cú"
					},
					{
					  "value": "Xã Má Lé"
					},
					{
					  "value": "Thị trấn Đồng Văn"
					},
					{
					  "value": "Xã Lũng Táo"
					},
					{
					  "value": "Xã Phố Là"
					},
					{
					  "value": "Xã Thài Phìn Tủng"
					},
					{
					  "value": "Xã Sủng Là"
					},
					{
					  "value": "Xã Xà Phìn"
					},
					{
					  "value": "Xã Tả Phìn"
					},
					{
					  "value": "Xã Tả Lủng"
					},
					{
					  "value": "Xã Phố Cáo"
					},
					{
					  "value": "Xã Sính Lủng"
					},
					{
					  "value": "Xã Sảng Tủng"
					},
					{
					  "value": "Xã Lũng Thầu"
					},
					{
					  "value": "Xã Hố Quáng Phìn"
					},
					{
					  "value": "Xã Vần Chải"
					},
					{
					  "value": "Xã Lũng Phìn"
					},
					{
					  "value": "Xã Sủng Trái"
					}
				  ]
				},
				{
				  "value": "Huyện Mèo Vạc",
				  "code": 27,
				  "wards": [
					{
					  "value": "Thị trấn Mèo Vạc"
					},
					{
					  "value": "Xã Thượng Phùng"
					},
					{
					  "value": "Xã Pải Lủng"
					},
					{
					  "value": "Xã Xín Cái"
					},
					{
					  "value": "Xã Pả Vi"
					},
					{
					  "value": "Xã Giàng Chu Phìn"
					},
					{
					  "value": "Xã Sủng Trà"
					},
					{
					  "value": "Xã Sủng Máng"
					},
					{
					  "value": "Xã Sơn Vĩ"
					},
					{
					  "value": "Xã Tả Lủng"
					},
					{
					  "value": "Xã Cán Chu Phìn"
					},
					{
					  "value": "Xã Lũng Pù"
					},
					{
					  "value": "Xã Lũng Chinh"
					},
					{
					  "value": "Xã Tát Ngà"
					},
					{
					  "value": "Xã Nậm Ban"
					},
					{
					  "value": "Xã Khâu Vai"
					},
					{
					  "value": "Xã Niêm Tòng"
					},
					{
					  "value": "Xã Niêm Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Minh",
				  "code": 28,
				  "wards": [
					{
					  "value": "Thị trấn Yên Minh"
					},
					{
					  "value": "Xã Thắng Mố"
					},
					{
					  "value": "Xã Phú Lũng"
					},
					{
					  "value": "Xã Sủng Tráng"
					},
					{
					  "value": "Xã Bạch Đích"
					},
					{
					  "value": "Xã Na Khê"
					},
					{
					  "value": "Xã Sủng Thài"
					},
					{
					  "value": "Xã Hữu Vinh"
					},
					{
					  "value": "Xã Lao Và Chải"
					},
					{
					  "value": "Xã Mậu Duệ"
					},
					{
					  "value": "Xã Đông Minh"
					},
					{
					  "value": "Xã Mậu Long"
					},
					{
					  "value": "Xã Ngam La"
					},
					{
					  "value": "Xã Ngọc Long"
					},
					{
					  "value": "Xã Đường Thượng"
					},
					{
					  "value": "Xã Lũng Hồ"
					},
					{
					  "value": "Xã Du Tiến"
					},
					{
					  "value": "Xã Du Già"
					}
				  ]
				},
				{
				  "value": "Huyện Quản Bạ",
				  "code": 29,
				  "wards": [
					{
					  "value": "Thị trấn Tam Sơn"
					},
					{
					  "value": "Xã Bát Đại Sơn"
					},
					{
					  "value": "Xã Nghĩa Thuận"
					},
					{
					  "value": "Xã Cán Tỷ"
					},
					{
					  "value": "Xã Cao Mã Pờ"
					},
					{
					  "value": "Xã Thanh Vân"
					},
					{
					  "value": "Xã Tùng Vài"
					},
					{
					  "value": "Xã Đông Hà"
					},
					{
					  "value": "Xã Quản Bạ"
					},
					{
					  "value": "Xã Lùng Tám"
					},
					{
					  "value": "Xã Quyết Tiến"
					},
					{
					  "value": "Xã Tả Ván"
					},
					{
					  "value": "Xã Thái An"
					}
				  ]
				},
				{
				  "value": "Huyện Vị Xuyên",
				  "code": 30,
				  "wards": [
					{
					  "value": "Xã Kim Thạch"
					},
					{
					  "value": "Xã Phú Linh"
					},
					{
					  "value": "Xã Kim Linh"
					},
					{
					  "value": "Thị trấn Vị Xuyên"
					},
					{
					  "value": "Thị trấn Nông Trường Việt Lâm"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Thuận Hoà"
					},
					{
					  "value": "Xã Tùng Bá"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã Thanh Đức"
					},
					{
					  "value": "Xã Phong Quang"
					},
					{
					  "value": "Xã Xín Chải"
					},
					{
					  "value": "Xã Phương Tiến"
					},
					{
					  "value": "Xã Lao Chải"
					},
					{
					  "value": "Xã Cao Bồ"
					},
					{
					  "value": "Xã Đạo Đức"
					},
					{
					  "value": "Xã Thượng Sơn"
					},
					{
					  "value": "Xã Linh Hồ"
					},
					{
					  "value": "Xã Quảng Ngần"
					},
					{
					  "value": "Xã Việt Lâm"
					},
					{
					  "value": "Xã Ngọc Linh"
					},
					{
					  "value": "Xã Ngọc Minh"
					},
					{
					  "value": "Xã Bạch Ngọc"
					},
					{
					  "value": "Xã Trung Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Mê",
				  "code": 31,
				  "wards": [
					{
					  "value": "Xã Minh Sơn"
					},
					{
					  "value": "Xã Giáp Trung"
					},
					{
					  "value": "Xã Yên Định"
					},
					{
					  "value": "Thị trấn Yên Phú"
					},
					{
					  "value": "Xã Minh Ngọc"
					},
					{
					  "value": "Xã Yên Phong"
					},
					{
					  "value": "Xã Lạc Nông"
					},
					{
					  "value": "Xã Phú Nam"
					},
					{
					  "value": "Xã Yên Cường"
					},
					{
					  "value": "Xã Thượng Tân"
					},
					{
					  "value": "Xã Đường Âm"
					},
					{
					  "value": "Xã Đường Hồng"
					},
					{
					  "value": "Xã Phiêng Luông"
					}
				  ]
				},
				{
				  "value": "Huyện Hoàng Su Phì",
				  "code": 32,
				  "wards": [
					{
					  "value": "Thị trấn Vinh Quang"
					},
					{
					  "value": "Xã Bản Máy"
					},
					{
					  "value": "Xã Thàng Tín"
					},
					{
					  "value": "Xã Thèn Chu Phìn"
					},
					{
					  "value": "Xã Pố Lồ"
					},
					{
					  "value": "Xã Bản Phùng"
					},
					{
					  "value": "Xã Túng Sán"
					},
					{
					  "value": "Xã Chiến Phố"
					},
					{
					  "value": "Xã Đản Ván"
					},
					{
					  "value": "Xã Tụ Nhân"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Nàng Đôn"
					},
					{
					  "value": "Xã Pờ Ly Ngài"
					},
					{
					  "value": "Xã Sán Xả Hồ"
					},
					{
					  "value": "Xã Bản Luốc"
					},
					{
					  "value": "Xã Ngàm Đăng Vài"
					},
					{
					  "value": "Xã Bản Nhùng"
					},
					{
					  "value": "Xã Tả Sử Choóng"
					},
					{
					  "value": "Xã Nậm Dịch"
					},
					{
					  "value": "Xã Hồ Thầu"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Nậm Tỵ"
					},
					{
					  "value": "Xã Thông Nguyên"
					},
					{
					  "value": "Xã Nậm Khòa"
					}
				  ]
				},
				{
				  "value": "Huyện Xín Mần",
				  "code": 33,
				  "wards": [
					{
					  "value": "Thị trấn Cốc Pài"
					},
					{
					  "value": "Xã Nàn Xỉn"
					},
					{
					  "value": "Xã Bản Díu"
					},
					{
					  "value": "Xã Chí Cà"
					},
					{
					  "value": "Xã Xín Mần"
					},
					{
					  "value": "Xã Thèn Phàng"
					},
					{
					  "value": "Xã Trung Thịnh"
					},
					{
					  "value": "Xã Pà Vầy Sủ"
					},
					{
					  "value": "Xã Cốc Rế"
					},
					{
					  "value": "Xã Thu Tà"
					},
					{
					  "value": "Xã Nàn Ma"
					},
					{
					  "value": "Xã Tả Nhìu"
					},
					{
					  "value": "Xã Bản Ngò"
					},
					{
					  "value": "Xã Chế Là"
					},
					{
					  "value": "Xã Nấm Dẩn"
					},
					{
					  "value": "Xã Quảng Nguyên"
					},
					{
					  "value": "Xã Nà Chì"
					},
					{
					  "value": "Xã Khuôn Lùng"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Quang",
				  "code": 34,
				  "wards": [
					{
					  "value": "Thị trấn Việt Quang"
					},
					{
					  "value": "Thị trấn Vĩnh Tuy"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Tân Quang"
					},
					{
					  "value": "Xã Thượng Bình"
					},
					{
					  "value": "Xã Hữu Sản"
					},
					{
					  "value": "Xã Kim Ngọc"
					},
					{
					  "value": "Xã Việt Vinh"
					},
					{
					  "value": "Xã Bằng Hành"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Liên Hiệp"
					},
					{
					  "value": "Xã Vô Điếm"
					},
					{
					  "value": "Xã Việt Hồng"
					},
					{
					  "value": "Xã Hùng An"
					},
					{
					  "value": "Xã Đức Xuân"
					},
					{
					  "value": "Xã Tiên Kiều"
					},
					{
					  "value": "Xã Vĩnh Hảo"
					},
					{
					  "value": "Xã Vĩnh Phúc"
					},
					{
					  "value": "Xã Đồng Yên"
					},
					{
					  "value": "Xã Đông Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Quang Bình",
				  "code": 35,
				  "wards": [
					{
					  "value": "Xã Xuân Minh"
					},
					{
					  "value": "Xã Tiên Nguyên"
					},
					{
					  "value": "Xã Tân Nam"
					},
					{
					  "value": "Xã Bản Rịa"
					},
					{
					  "value": "Xã Yên Thành"
					},
					{
					  "value": "Thị trấn Yên Bình"
					},
					{
					  "value": "Xã Tân Trịnh"
					},
					{
					  "value": "Xã Tân Bắc"
					},
					{
					  "value": "Xã Bằng Lang"
					},
					{
					  "value": "Xã Yên Hà"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Xuân Giang"
					},
					{
					  "value": "Xã Nà Khương"
					},
					{
					  "value": "Xã Tiên Yên"
					},
					{
					  "value": "Xã Vĩ Thượng"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Cao Bằng",
			  "code": 4,
			  "districts": [
				{
				  "value": "Thành phố Cao Bằng",
				  "code": 40,
				  "wards": [
					{
					  "value": "Phường Sông Hiến"
					},
					{
					  "value": "Phường Sông Bằng"
					},
					{
					  "value": "Phường Hợp Giang"
					},
					{
					  "value": "Phường Tân Giang"
					},
					{
					  "value": "Phường Ngọc Xuân"
					},
					{
					  "value": "Phường Đề Thám"
					},
					{
					  "value": "Phường Hoà Chung"
					},
					{
					  "value": "Phường Duyệt Trung"
					},
					{
					  "value": "Xã Vĩnh Quang"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Chu Trinh"
					}
				  ]
				},
				{
				  "value": "Huyện Bảo Lâm",
				  "code": 42,
				  "wards": [
					{
					  "value": "Thị trấn Pác Miầu"
					},
					{
					  "value": "Xã Đức Hạnh"
					},
					{
					  "value": "Xã Lý Bôn"
					},
					{
					  "value": "Xã Nam Cao"
					},
					{
					  "value": "Xã Nam Quang"
					},
					{
					  "value": "Xã Vĩnh Quang"
					},
					{
					  "value": "Xã Quảng Lâm"
					},
					{
					  "value": "Xã Thạch Lâm"
					},
					{
					  "value": "Xã Vĩnh Phong"
					},
					{
					  "value": "Xã Mông Ân"
					},
					{
					  "value": "Xã Thái Học"
					},
					{
					  "value": "Xã Thái Sơn"
					},
					{
					  "value": "Xã Yên Thổ"
					}
				  ]
				},
				{
				  "value": "Huyện Bảo Lạc",
				  "code": 43,
				  "wards": [
					{
					  "value": "Thị trấn Bảo Lạc"
					},
					{
					  "value": "Xã Cốc Pàng"
					},
					{
					  "value": "Xã Thượng Hà"
					},
					{
					  "value": "Xã Cô Ba"
					},
					{
					  "value": "Xã Bảo Toàn"
					},
					{
					  "value": "Xã Khánh Xuân"
					},
					{
					  "value": "Xã Xuân Trường"
					},
					{
					  "value": "Xã Hồng Trị"
					},
					{
					  "value": "Xã Kim Cúc"
					},
					{
					  "value": "Xã Phan Thanh"
					},
					{
					  "value": "Xã Hồng An"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Hưng Thịnh"
					},
					{
					  "value": "Xã Huy Giáp"
					},
					{
					  "value": "Xã Đình Phùng"
					},
					{
					  "value": "Xã Sơn Lập"
					},
					{
					  "value": "Xã Sơn Lộ"
					}
				  ]
				},
				{
				  "value": "Huyện Hà Quảng",
				  "code": 45,
				  "wards": [
					{
					  "value": "Thị trấn Thông Nông"
					},
					{
					  "value": "Xã Cần Yên"
					},
					{
					  "value": "Xã Cần Nông"
					},
					{
					  "value": "Xã Lương Thông"
					},
					{
					  "value": "Xã Đa Thông"
					},
					{
					  "value": "Xã Ngọc Động"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Lương Can"
					},
					{
					  "value": "Xã Thanh Long"
					},
					{
					  "value": "Thị trấn Xuân Hòa"
					},
					{
					  "value": "Xã Lũng Nặm"
					},
					{
					  "value": "Xã Trường Hà"
					},
					{
					  "value": "Xã Cải Viên"
					},
					{
					  "value": "Xã Nội Thôn"
					},
					{
					  "value": "Xã Tổng Cọt"
					},
					{
					  "value": "Xã Sóc Hà"
					},
					{
					  "value": "Xã Thượng Thôn"
					},
					{
					  "value": "Xã Hồng Sỹ"
					},
					{
					  "value": "Xã Quý Quân"
					},
					{
					  "value": "Xã Mã Ba"
					},
					{
					  "value": "Xã Ngọc Đào"
					}
				  ]
				},
				{
				  "value": "Huyện Trùng Khánh",
				  "code": 47,
				  "wards": [
					{
					  "value": "Thị trấn Trà Lĩnh"
					},
					{
					  "value": "Xã Tri Phương"
					},
					{
					  "value": "Xã Quang Hán"
					},
					{
					  "value": "Xã Xuân Nội"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Quang Vinh"
					},
					{
					  "value": "Xã Cao Chương"
					},
					{
					  "value": "Thị trấn Trùng Khánh"
					},
					{
					  "value": "Xã Ngọc Khê"
					},
					{
					  "value": "Xã Ngọc Côn"
					},
					{
					  "value": "Xã Phong Nậm"
					},
					{
					  "value": "Xã Đình Phong"
					},
					{
					  "value": "Xã Đàm Thuỷ"
					},
					{
					  "value": "Xã Khâm Thành"
					},
					{
					  "value": "Xã Chí Viễn"
					},
					{
					  "value": "Xã Lăng Hiếu"
					},
					{
					  "value": "Xã Phong Châu"
					},
					{
					  "value": "Xã Trung Phúc"
					},
					{
					  "value": "Xã Cao Thăng"
					},
					{
					  "value": "Xã Đức Hồng"
					},
					{
					  "value": "Xã Đoài Dương"
					}
				  ]
				},
				{
				  "value": "Huyện Hạ Lang",
				  "code": 48,
				  "wards": [
					{
					  "value": "Xã Minh Long"
					},
					{
					  "value": "Xã Lý Quốc"
					},
					{
					  "value": "Xã Thắng Lợi"
					},
					{
					  "value": "Xã Đồng Loan"
					},
					{
					  "value": "Xã Đức Quang"
					},
					{
					  "value": "Xã Kim Loan"
					},
					{
					  "value": "Xã Quang Long"
					},
					{
					  "value": "Xã An Lạc"
					},
					{
					  "value": "Thị trấn Thanh Nhật"
					},
					{
					  "value": "Xã Vinh Quý"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Cô Ngân"
					},
					{
					  "value": "Xã Thị Hoa"
					}
				  ]
				},
				{
				  "value": "Huyện Quảng Hòa",
				  "code": 49,
				  "wards": [
					{
					  "value": "Xã Quốc Toản"
					},
					{
					  "value": "Thị trấn Quảng Uyên"
					},
					{
					  "value": "Xã Phi Hải"
					},
					{
					  "value": "Xã Quảng Hưng"
					},
					{
					  "value": "Xã Độc Lập"
					},
					{
					  "value": "Xã Cai Bộ"
					},
					{
					  "value": "Xã Phúc Sen"
					},
					{
					  "value": "Xã Chí Thảo"
					},
					{
					  "value": "Xã Tự Do"
					},
					{
					  "value": "Xã Hồng Quang"
					},
					{
					  "value": "Xã Ngọc Động"
					},
					{
					  "value": "Xã Hạnh Phúc"
					},
					{
					  "value": "Thị trấn Tà Lùng"
					},
					{
					  "value": "Xã Bế Văn Đàn"
					},
					{
					  "value": "Xã Cách Linh"
					},
					{
					  "value": "Xã Đại Sơn"
					},
					{
					  "value": "Xã Tiên Thành"
					},
					{
					  "value": "Thị trấn Hoà Thuận"
					},
					{
					  "value": "Xã Mỹ Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Hoà An",
				  "code": 51,
				  "wards": [
					{
					  "value": "Thị trấn Nước Hai"
					},
					{
					  "value": "Xã Dân Chủ"
					},
					{
					  "value": "Xã Nam Tuấn"
					},
					{
					  "value": "Xã Đại Tiến"
					},
					{
					  "value": "Xã Đức Long"
					},
					{
					  "value": "Xã Ngũ Lão"
					},
					{
					  "value": "Xã Trương Lương"
					},
					{
					  "value": "Xã Hồng Việt"
					},
					{
					  "value": "Xã Hoàng Tung"
					},
					{
					  "value": "Xã Nguyễn Huệ"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Bạch Đằng"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Xã Lê Chung"
					},
					{
					  "value": "Xã Hồng Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Nguyên Bình",
				  "code": 52,
				  "wards": [
					{
					  "value": "Thị trấn Nguyên Bình"
					},
					{
					  "value": "Thị trấn Tĩnh Túc"
					},
					{
					  "value": "Xã Yên Lạc"
					},
					{
					  "value": "Xã Triệu Nguyên"
					},
					{
					  "value": "Xã Ca Thành"
					},
					{
					  "value": "Xã Vũ Nông"
					},
					{
					  "value": "Xã Minh Tâm"
					},
					{
					  "value": "Xã Thể Dục"
					},
					{
					  "value": "Xã Mai Long"
					},
					{
					  "value": "Xã Vũ Minh"
					},
					{
					  "value": "Xã Hoa Thám"
					},
					{
					  "value": "Xã Phan Thanh"
					},
					{
					  "value": "Xã Quang Thành"
					},
					{
					  "value": "Xã Tam Kim"
					},
					{
					  "value": "Xã Thành Công"
					},
					{
					  "value": "Xã Thịnh Vượng"
					},
					{
					  "value": "Xã Hưng Đạo"
					}
				  ]
				},
				{
				  "value": "Huyện Thạch An",
				  "code": 53,
				  "wards": [
					{
					  "value": "Thị trấn Đông Khê"
					},
					{
					  "value": "Xã Canh Tân"
					},
					{
					  "value": "Xã Kim Đồng"
					},
					{
					  "value": "Xã Minh Khai"
					},
					{
					  "value": "Xã Đức Thông"
					},
					{
					  "value": "Xã Thái Cường"
					},
					{
					  "value": "Xã Vân Trình"
					},
					{
					  "value": "Xã Thụy Hùng"
					},
					{
					  "value": "Xã Quang Trọng"
					},
					{
					  "value": "Xã Trọng Con"
					},
					{
					  "value": "Xã Lê Lai"
					},
					{
					  "value": "Xã Đức Long"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Đức Xuân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bắc Kạn",
			  "code": 6,
			  "districts": [
				{
				  "value": "Thành Phố Bắc Kạn",
				  "code": 58,
				  "wards": [
					{
					  "value": "Phường Nguyễn Thị Minh Khai"
					},
					{
					  "value": "Phường Sông Cầu"
					},
					{
					  "value": "Phường Đức Xuân"
					},
					{
					  "value": "Phường Phùng Chí Kiên"
					},
					{
					  "value": "Phường Huyền Tụng"
					},
					{
					  "value": "Xã Dương Quang"
					},
					{
					  "value": "Xã Nông Thượng"
					},
					{
					  "value": "Phường Xuất Hóa"
					}
				  ]
				},
				{
				  "value": "Huyện Pác Nặm",
				  "code": 60,
				  "wards": [
					{
					  "value": "Xã Bằng Thành"
					},
					{
					  "value": "Xã Nhạn Môn"
					},
					{
					  "value": "Xã Bộc Bố"
					},
					{
					  "value": "Xã Công Bằng"
					},
					{
					  "value": "Xã Giáo Hiệu"
					},
					{
					  "value": "Xã Xuân La"
					},
					{
					  "value": "Xã An Thắng"
					},
					{
					  "value": "Xã Cổ Linh"
					},
					{
					  "value": "Xã Nghiên Loan"
					},
					{
					  "value": "Xã Cao Tân"
					}
				  ]
				},
				{
				  "value": "Huyện Ba Bể",
				  "code": 61,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Rã"
					},
					{
					  "value": "Xã Bành Trạch"
					},
					{
					  "value": "Xã Phúc Lộc"
					},
					{
					  "value": "Xã Hà Hiệu"
					},
					{
					  "value": "Xã Cao Thượng"
					},
					{
					  "value": "Xã Khang Ninh"
					},
					{
					  "value": "Xã Nam Mẫu"
					},
					{
					  "value": "Xã Thượng Giáo"
					},
					{
					  "value": "Xã Địa Linh"
					},
					{
					  "value": "Xã Yến Dương"
					},
					{
					  "value": "Xã Chu Hương"
					},
					{
					  "value": "Xã Quảng Khê"
					},
					{
					  "value": "Xã Mỹ Phương"
					},
					{
					  "value": "Xã Hoàng Trĩ"
					},
					{
					  "value": "Xã Đồng Phúc"
					}
				  ]
				},
				{
				  "value": "Huyện Ngân Sơn",
				  "code": 62,
				  "wards": [
					{
					  "value": "Thị trấn Nà Phặc"
					},
					{
					  "value": "Xã Thượng Ân"
					},
					{
					  "value": "Xã Bằng Vân"
					},
					{
					  "value": "Xã Cốc Đán"
					},
					{
					  "value": "Xã Trung Hoà"
					},
					{
					  "value": "Xã Đức Vân"
					},
					{
					  "value": "Thị trấn Vân Tùng"
					},
					{
					  "value": "Xã Thượng Quan"
					},
					{
					  "value": "Xã Hiệp Lực"
					},
					{
					  "value": "Xã Thuần Mang"
					}
				  ]
				},
				{
				  "value": "Huyện Bạch Thông",
				  "code": 63,
				  "wards": [
					{
					  "value": "Thị trấn Phủ Thông"
					},
					{
					  "value": "Xã Vi Hương"
					},
					{
					  "value": "Xã Sĩ Bình"
					},
					{
					  "value": "Xã Vũ Muộn"
					},
					{
					  "value": "Xã Đôn Phong"
					},
					{
					  "value": "Xã Lục Bình"
					},
					{
					  "value": "Xã Tân Tú"
					},
					{
					  "value": "Xã Nguyên Phúc"
					},
					{
					  "value": "Xã Cao Sơn"
					},
					{
					  "value": "Xã Quân Hà"
					},
					{
					  "value": "Xã Cẩm Giàng"
					},
					{
					  "value": "Xã Mỹ Thanh"
					},
					{
					  "value": "Xã Dương Phong"
					},
					{
					  "value": "Xã Quang Thuận"
					}
				  ]
				},
				{
				  "value": "Huyện Chợ Đồn",
				  "code": 64,
				  "wards": [
					{
					  "value": "Thị trấn Bằng Lũng"
					},
					{
					  "value": "Xã Xuân Lạc"
					},
					{
					  "value": "Xã Nam Cường"
					},
					{
					  "value": "Xã Đồng Lạc"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Bản Thi"
					},
					{
					  "value": "Xã Quảng Bạch"
					},
					{
					  "value": "Xã Bằng Phúc"
					},
					{
					  "value": "Xã Yên Thịnh"
					},
					{
					  "value": "Xã Yên Thượng"
					},
					{
					  "value": "Xã Phương Viên"
					},
					{
					  "value": "Xã Ngọc Phái"
					},
					{
					  "value": "Xã Đồng Thắng"
					},
					{
					  "value": "Xã Lương Bằng"
					},
					{
					  "value": "Xã Bằng Lãng"
					},
					{
					  "value": "Xã Đại Sảo"
					},
					{
					  "value": "Xã Nghĩa Tá"
					},
					{
					  "value": "Xã Yên Mỹ"
					},
					{
					  "value": "Xã Bình Trung"
					},
					{
					  "value": "Xã Yên Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Chợ Mới",
				  "code": 65,
				  "wards": [
					{
					  "value": "Thị trấn Đồng Tâm"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Thanh Vận"
					},
					{
					  "value": "Xã Mai Lạp"
					},
					{
					  "value": "Xã Hoà Mục"
					},
					{
					  "value": "Xã Thanh Mai"
					},
					{
					  "value": "Xã Cao Kỳ"
					},
					{
					  "value": "Xã Nông Hạ"
					},
					{
					  "value": "Xã Yên Cư"
					},
					{
					  "value": "Xã Thanh Thịnh"
					},
					{
					  "value": "Xã Yên Hân"
					},
					{
					  "value": "Xã Như Cố"
					},
					{
					  "value": "Xã Bình Văn"
					},
					{
					  "value": "Xã Quảng Chu"
					}
				  ]
				},
				{
				  "value": "Huyện Na Rì",
				  "code": 66,
				  "wards": [
					{
					  "value": "Xã Văn Vũ"
					},
					{
					  "value": "Xã Văn Lang"
					},
					{
					  "value": "Xã Lương Thượng"
					},
					{
					  "value": "Xã Kim Hỷ"
					},
					{
					  "value": "Xã Cường Lợi"
					},
					{
					  "value": "Thị trấn Yến Lạc"
					},
					{
					  "value": "Xã Kim Lư"
					},
					{
					  "value": "Xã Sơn Thành"
					},
					{
					  "value": "Xã Văn Minh"
					},
					{
					  "value": "Xã Côn Minh"
					},
					{
					  "value": "Xã Cư Lễ"
					},
					{
					  "value": "Xã Trần Phú"
					},
					{
					  "value": "Xã Quang Phong"
					},
					{
					  "value": "Xã Dương Sơn"
					},
					{
					  "value": "Xã Xuân Dương"
					},
					{
					  "value": "Xã Đổng Xá"
					},
					{
					  "value": "Xã Liêm Thuỷ"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Tuyên Quang",
			  "code": 8,
			  "districts": [
				{
				  "value": "Thành phố Tuyên Quang",
				  "code": 70,
				  "wards": [
					{
					  "value": "Phường Phan Thiết"
					},
					{
					  "value": "Phường Minh Xuân"
					},
					{
					  "value": "Phường Tân Quang"
					},
					{
					  "value": "Xã Tràng Đà"
					},
					{
					  "value": "Phường Nông Tiến"
					},
					{
					  "value": "Phường Ỷ La"
					},
					{
					  "value": "Phường Tân Hà"
					},
					{
					  "value": "Phường Hưng Thành"
					},
					{
					  "value": "Xã Kim Phú"
					},
					{
					  "value": "Xã An Khang"
					},
					{
					  "value": "Phường Mỹ Lâm"
					},
					{
					  "value": "Phường An Tường"
					},
					{
					  "value": "Xã Lưỡng Vượng"
					},
					{
					  "value": "Xã Thái Long"
					},
					{
					  "value": "Phường Đội Cấn"
					}
				  ]
				},
				{
				  "value": "Huyện Lâm Bình",
				  "code": 71,
				  "wards": [
					{
					  "value": "Xã Phúc Yên"
					},
					{
					  "value": "Xã Xuân Lập"
					},
					{
					  "value": "Xã Khuôn Hà"
					},
					{
					  "value": "Thị trấn Lăng Can"
					},
					{
					  "value": "Xã Thượng Lâm"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Hồng Quang"
					},
					{
					  "value": "Xã Thổ Bình"
					},
					{
					  "value": "Xã Phúc Sơn"
					},
					{
					  "value": "Xã Minh Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Na Hang",
				  "code": 72,
				  "wards": [
					{
					  "value": "Thị trấn Na Hang"
					},
					{
					  "value": "Xã Sinh Long"
					},
					{
					  "value": "Xã Thượng Giáp"
					},
					{
					  "value": "Xã Thượng Nông"
					},
					{
					  "value": "Xã Côn Lôn"
					},
					{
					  "value": "Xã Yên Hoa"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Đà Vị"
					},
					{
					  "value": "Xã Khau Tinh"
					},
					{
					  "value": "Xã Sơn Phú"
					},
					{
					  "value": "Xã Năng Khả"
					},
					{
					  "value": "Xã Thanh Tương"
					}
				  ]
				},
				{
				  "value": "Huyện Chiêm Hóa",
				  "code": 73,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Lộc"
					},
					{
					  "value": "Xã Trung Hà"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Hà Lang"
					},
					{
					  "value": "Xã Hùng Mỹ"
					},
					{
					  "value": "Xã Yên Lập"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Xuân Quang"
					},
					{
					  "value": "Xã Ngọc Hội"
					},
					{
					  "value": "Xã Phú Bình"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Phúc Thịnh"
					},
					{
					  "value": "Xã Kiên Đài"
					},
					{
					  "value": "Xã Tân Thịnh"
					},
					{
					  "value": "Xã Trung Hòa"
					},
					{
					  "value": "Xã Kim Bình"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Vinh Quang"
					},
					{
					  "value": "Xã Tri Phú"
					},
					{
					  "value": "Xã Nhân Lý"
					},
					{
					  "value": "Xã Yên Nguyên"
					},
					{
					  "value": "Xã Linh Phú"
					},
					{
					  "value": "Xã Bình Nhân"
					}
				  ]
				},
				{
				  "value": "Huyện Hàm Yên",
				  "code": 74,
				  "wards": [
					{
					  "value": "Thị trấn Tân Yên"
					},
					{
					  "value": "Xã Yên Thuận"
					},
					{
					  "value": "Xã Bạch Xa"
					},
					{
					  "value": "Xã Minh Khương"
					},
					{
					  "value": "Xã Yên Lâm"
					},
					{
					  "value": "Xã Minh Dân"
					},
					{
					  "value": "Xã Phù Lưu"
					},
					{
					  "value": "Xã Minh Hương"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Bình Xa"
					},
					{
					  "value": "Xã Thái Sơn"
					},
					{
					  "value": "Xã Nhân Mục"
					},
					{
					  "value": "Xã Thành Long"
					},
					{
					  "value": "Xã Bằng Cốc"
					},
					{
					  "value": "Xã Thái Hòa"
					},
					{
					  "value": "Xã Đức Ninh"
					},
					{
					  "value": "Xã Hùng Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Sơn",
				  "code": 75,
				  "wards": [
					{
					  "value": "Xã Quí Quân"
					},
					{
					  "value": "Xã Lực Hành"
					},
					{
					  "value": "Xã Kiến Thiết"
					},
					{
					  "value": "Xã Trung Minh"
					},
					{
					  "value": "Xã Chiêu Yên"
					},
					{
					  "value": "Xã Trung Trực"
					},
					{
					  "value": "Xã Xuân Vân"
					},
					{
					  "value": "Xã Phúc Ninh"
					},
					{
					  "value": "Xã Hùng Lợi"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Tứ Quận"
					},
					{
					  "value": "Xã Đạo Viện"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Thị trấn Yên Sơn"
					},
					{
					  "value": "Xã Kim Quan"
					},
					{
					  "value": "Xã Lang Quán"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Công Đa"
					},
					{
					  "value": "Xã Trung Môn"
					},
					{
					  "value": "Xã Chân Sơn"
					},
					{
					  "value": "Xã Thái Bình"
					},
					{
					  "value": "Xã Tiến Bộ"
					},
					{
					  "value": "Xã Mỹ Bằng"
					},
					{
					  "value": "Xã Hoàng Khai"
					},
					{
					  "value": "Xã Nhữ Hán"
					},
					{
					  "value": "Xã Nhữ Khê"
					},
					{
					  "value": "Xã Đội Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Dương",
				  "code": 76,
				  "wards": [
					{
					  "value": "Thị trấn Sơn Dương"
					},
					{
					  "value": "Xã Trung Yên"
					},
					{
					  "value": "Xã Minh Thanh"
					},
					{
					  "value": "Xã Tân Trào"
					},
					{
					  "value": "Xã Vĩnh Lợi"
					},
					{
					  "value": "Xã Thượng Ấm"
					},
					{
					  "value": "Xã Bình Yên"
					},
					{
					  "value": "Xã Lương Thiện"
					},
					{
					  "value": "Xã Tú Thịnh"
					},
					{
					  "value": "Xã Cấp Tiến"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Phúc Ứng"
					},
					{
					  "value": "Xã Đông Thọ"
					},
					{
					  "value": "Xã Kháng Nhật"
					},
					{
					  "value": "Xã Hợp Hòa"
					},
					{
					  "value": "Xã Quyết Thắng"
					},
					{
					  "value": "Xã Đồng Quý"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã Vân Sơn"
					},
					{
					  "value": "Xã Văn Phú"
					},
					{
					  "value": "Xã Chi Thiết"
					},
					{
					  "value": "Xã Đông Lợi"
					},
					{
					  "value": "Xã Thiện Kế"
					},
					{
					  "value": "Xã Hồng Lạc"
					},
					{
					  "value": "Xã Phú Lương"
					},
					{
					  "value": "Xã Ninh Lai"
					},
					{
					  "value": "Xã Đại Phú"
					},
					{
					  "value": "Xã Sơn Nam"
					},
					{
					  "value": "Xã Hào Phú"
					},
					{
					  "value": "Xã Tam Đa"
					},
					{
					  "value": "Xã Trường Sinh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Lào Cai",
			  "code": 10,
			  "districts": [
				{
				  "value": "Thành phố Lào Cai",
				  "code": 80,
				  "wards": [
					{
					  "value": "Phường Duyên Hải"
					},
					{
					  "value": "Phường Lào Cai"
					},
					{
					  "value": "Phường Cốc Lếu"
					},
					{
					  "value": "Phường Kim Tân"
					},
					{
					  "value": "Phường Bắc Lệnh"
					},
					{
					  "value": "Phường Pom Hán"
					},
					{
					  "value": "Phường Xuân Tăng"
					},
					{
					  "value": "Phường Bình Minh"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Đồng Tuyển"
					},
					{
					  "value": "Xã Vạn Hoà"
					},
					{
					  "value": "Phường Bắc Cường"
					},
					{
					  "value": "Phường Nam Cường"
					},
					{
					  "value": "Xã Cam Đường"
					},
					{
					  "value": "Xã Tả Phời"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Cốc San"
					}
				  ]
				},
				{
				  "value": "Huyện Bát Xát",
				  "code": 82,
				  "wards": [
					{
					  "value": "Thị trấn Bát Xát"
					},
					{
					  "value": "Xã A Mú Sung"
					},
					{
					  "value": "Xã Nậm Chạc"
					},
					{
					  "value": "Xã A Lù"
					},
					{
					  "value": "Xã Trịnh Tường"
					},
					{
					  "value": "Xã Y Tý"
					},
					{
					  "value": "Xã Cốc Mỳ"
					},
					{
					  "value": "Xã Dền Sáng"
					},
					{
					  "value": "Xã Bản Vược"
					},
					{
					  "value": "Xã Sàng Ma Sáo"
					},
					{
					  "value": "Xã Bản Qua"
					},
					{
					  "value": "Xã Mường Vi"
					},
					{
					  "value": "Xã Dền Thàng"
					},
					{
					  "value": "Xã Bản Xèo"
					},
					{
					  "value": "Xã Mường Hum"
					},
					{
					  "value": "Xã Trung Lèng Hồ"
					},
					{
					  "value": "Xã Quang Kim"
					},
					{
					  "value": "Xã Pa Cheo"
					},
					{
					  "value": "Xã Nậm Pung"
					},
					{
					  "value": "Xã Phìn Ngan"
					},
					{
					  "value": "Xã Tòng Sành"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Khương",
				  "code": 83,
				  "wards": [
					{
					  "value": "Xã Pha Long"
					},
					{
					  "value": "Xã Tả Ngải Chồ"
					},
					{
					  "value": "Xã Tung Chung Phố"
					},
					{
					  "value": "Thị trấn Mường Khương"
					},
					{
					  "value": "Xã Dìn Chin"
					},
					{
					  "value": "Xã Tả Gia Khâu"
					},
					{
					  "value": "Xã Nậm Chảy"
					},
					{
					  "value": "Xã Nấm Lư"
					},
					{
					  "value": "Xã Lùng Khấu Nhin"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Xã Cao Sơn"
					},
					{
					  "value": "Xã Lùng Vai"
					},
					{
					  "value": "Xã Bản Lầu"
					},
					{
					  "value": "Xã La Pan Tẩn"
					},
					{
					  "value": "Xã Tả Thàng"
					},
					{
					  "value": "Xã Bản Sen"
					}
				  ]
				},
				{
				  "value": "Huyện Si Ma Cai",
				  "code": 84,
				  "wards": [
					{
					  "value": "Xã Nàn Sán"
					},
					{
					  "value": "Xã Thào Chư Phìn"
					},
					{
					  "value": "Xã Bản Mế"
					},
					{
					  "value": "Thị trấn Si Ma Cai"
					},
					{
					  "value": "Xã Sán Chải"
					},
					{
					  "value": "Xã Lùng Thẩn"
					},
					{
					  "value": "Xã Cán Cấu"
					},
					{
					  "value": "Xã Sín Chéng"
					},
					{
					  "value": "Xã Quan Hồ Thẩn"
					},
					{
					  "value": "Xã Nàn Xín"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Hà",
				  "code": 85,
				  "wards": [
					{
					  "value": "Thị trấn Bắc Hà"
					},
					{
					  "value": "Xã Lùng Cải"
					},
					{
					  "value": "Xã Lùng Phình"
					},
					{
					  "value": "Xã Tả Van Chư"
					},
					{
					  "value": "Xã Tả Củ Tỷ"
					},
					{
					  "value": "Xã Thải Giàng Phố"
					},
					{
					  "value": "Xã Hoàng Thu Phố"
					},
					{
					  "value": "Xã Bản Phố"
					},
					{
					  "value": "Xã Bản Liền"
					},
					{
					  "value": "Xã Tà Chải"
					},
					{
					  "value": "Xã Na Hối"
					},
					{
					  "value": "Xã Cốc Ly"
					},
					{
					  "value": "Xã Nậm Mòn"
					},
					{
					  "value": "Xã Nậm Đét"
					},
					{
					  "value": "Xã Nậm Khánh"
					},
					{
					  "value": "Xã Bảo Nhai"
					},
					{
					  "value": "Xã Nậm Lúc"
					},
					{
					  "value": "Xã Cốc Lầu"
					},
					{
					  "value": "Xã Bản Cái"
					}
				  ]
				},
				{
				  "value": "Huyện Bảo Thắng",
				  "code": 86,
				  "wards": [
					{
					  "value": "Thị trấn N.T Phong Hải"
					},
					{
					  "value": "Thị trấn Phố Lu"
					},
					{
					  "value": "Thị trấn Tằng Loỏng"
					},
					{
					  "value": "Xã Bản Phiệt"
					},
					{
					  "value": "Xã Bản Cầm"
					},
					{
					  "value": "Xã Thái Niên"
					},
					{
					  "value": "Xã Phong Niên"
					},
					{
					  "value": "Xã Gia Phú"
					},
					{
					  "value": "Xã Xuân Quang"
					},
					{
					  "value": "Xã Sơn Hải"
					},
					{
					  "value": "Xã Xuân Giao"
					},
					{
					  "value": "Xã Trì Quang"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Phú Nhuận"
					}
				  ]
				},
				{
				  "value": "Huyện Bảo Yên",
				  "code": 87,
				  "wards": [
					{
					  "value": "Thị trấn Phố Ràng"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Nghĩa Đô"
					},
					{
					  "value": "Xã Vĩnh Yên"
					},
					{
					  "value": "Xã Điện Quan"
					},
					{
					  "value": "Xã Xuân Hoà"
					},
					{
					  "value": "Xã Tân Dương"
					},
					{
					  "value": "Xã Thượng Hà"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Xã Cam Cọn"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Xuân Thượng"
					},
					{
					  "value": "Xã Việt Tiến"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Bảo Hà"
					},
					{
					  "value": "Xã Lương Sơn"
					},
					{
					  "value": "Xã Phúc Khánh"
					}
				  ]
				},
				{
				  "value": "Thị xã Sa Pa",
				  "code": 88,
				  "wards": [
					{
					  "value": "Phường Sa Pa"
					},
					{
					  "value": "Phường Sa Pả"
					},
					{
					  "value": "Phường Ô Quý Hồ"
					},
					{
					  "value": "Xã Ngũ Chỉ Sơn"
					},
					{
					  "value": "Phường Phan Si Păng"
					},
					{
					  "value": "Xã Trung Chải"
					},
					{
					  "value": "Xã Tả Phìn"
					},
					{
					  "value": "Phường Hàm Rồng"
					},
					{
					  "value": "Xã Hoàng Liên"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Phường Cầu Mây"
					},
					{
					  "value": "Xã Mường Hoa"
					},
					{
					  "value": "Xã Tả Van"
					},
					{
					  "value": "Xã Mường Bo"
					},
					{
					  "value": "Xã Bản Hồ"
					},
					{
					  "value": "Xã Liên Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Bàn",
				  "code": 89,
				  "wards": [
					{
					  "value": "Thị trấn Khánh Yên"
					},
					{
					  "value": "Xã Võ Lao"
					},
					{
					  "value": "Xã Sơn Thuỷ"
					},
					{
					  "value": "Xã Nậm Mả"
					},
					{
					  "value": "Xã Tân Thượng"
					},
					{
					  "value": "Xã Nậm Rạng"
					},
					{
					  "value": "Xã Nậm Chầy"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Khánh Yên Thượng"
					},
					{
					  "value": "Xã Nậm Xé"
					},
					{
					  "value": "Xã Dần Thàng"
					},
					{
					  "value": "Xã Chiềng Ken"
					},
					{
					  "value": "Xã Làng Giàng"
					},
					{
					  "value": "Xã Hoà Mạc"
					},
					{
					  "value": "Xã Khánh Yên Trung"
					},
					{
					  "value": "Xã Khánh Yên Hạ"
					},
					{
					  "value": "Xã Dương Quỳ"
					},
					{
					  "value": "Xã Nậm Tha"
					},
					{
					  "value": "Xã Minh Lương"
					},
					{
					  "value": "Xã Thẩm Dương"
					},
					{
					  "value": "Xã Liêm Phú"
					},
					{
					  "value": "Xã Nậm Xây"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Điện Biên",
			  "code": 11,
			  "districts": [
				{
				  "value": "Thành phố Điện Biên Phủ",
				  "code": 94,
				  "wards": [
					{
					  "value": "Phường Noong Bua"
					},
					{
					  "value": "Phường Him Lam"
					},
					{
					  "value": "Phường Thanh Bình"
					},
					{
					  "value": "Phường Tân Thanh"
					},
					{
					  "value": "Phường Mường Thanh"
					},
					{
					  "value": "Phường Nam Thanh"
					},
					{
					  "value": "Phường Thanh Trường"
					},
					{
					  "value": "Xã Thanh Minh"
					},
					{
					  "value": "Xã Nà Tấu"
					},
					{
					  "value": "Xã Nà Nhạn"
					},
					{
					  "value": "Xã Mường Phăng"
					},
					{
					  "value": "Xã Pá Khoang"
					}
				  ]
				},
				{
				  "value": "Thị xã Mường Lay",
				  "code": 95,
				  "wards": [
					{
					  "value": "Phường Sông Đà"
					},
					{
					  "value": "Phường Na Lay"
					},
					{
					  "value": "Xã Lay Nưa"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Nhé",
				  "code": 96,
				  "wards": [
					{
					  "value": "Xã Sín Thầu"
					},
					{
					  "value": "Xã Sen Thượng"
					},
					{
					  "value": "Xã Chung Chải"
					},
					{
					  "value": "Xã Leng Su Sìn"
					},
					{
					  "value": "Xã Pá Mỳ"
					},
					{
					  "value": "Xã Mường Nhé"
					},
					{
					  "value": "Xã Nậm Vì"
					},
					{
					  "value": "Xã Nậm Kè"
					},
					{
					  "value": "Xã Mường Toong"
					},
					{
					  "value": "Xã Quảng Lâm"
					},
					{
					  "value": "Xã Huổi Lếnh"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Chà",
				  "code": 97,
				  "wards": [
					{
					  "value": "Thị trấn Mường Chà"
					},
					{
					  "value": "Xã Xá Tổng"
					},
					{
					  "value": "Xã Mường Tùng"
					},
					{
					  "value": "Xã Hừa Ngài"
					},
					{
					  "value": "Xã Huổi Mí"
					},
					{
					  "value": "Xã Pa Ham"
					},
					{
					  "value": "Xã Nậm Nèn"
					},
					{
					  "value": "Xã Huổi Lèng"
					},
					{
					  "value": "Xã Sa Lông"
					},
					{
					  "value": "Xã Ma Thì Hồ"
					},
					{
					  "value": "Xã Na Sang"
					},
					{
					  "value": "Xã Mường Mươn"
					}
				  ]
				},
				{
				  "value": "Huyện Tủa Chùa",
				  "code": 98,
				  "wards": [
					{
					  "value": "Thị trấn Tủa Chùa"
					},
					{
					  "value": "Xã Huổi Só"
					},
					{
					  "value": "Xã Xín Chải"
					},
					{
					  "value": "Xã Tả Sìn Thàng"
					},
					{
					  "value": "Xã Lao Xả Phình"
					},
					{
					  "value": "Xã Tả Phìn"
					},
					{
					  "value": "Xã Tủa Thàng"
					},
					{
					  "value": "Xã Trung Thu"
					},
					{
					  "value": "Xã Sính Phình"
					},
					{
					  "value": "Xã Sáng Nhè"
					},
					{
					  "value": "Xã Mường Đun"
					},
					{
					  "value": "Xã Mường Báng"
					}
				  ]
				},
				{
				  "value": "Huyện Tuần Giáo",
				  "code": 99,
				  "wards": [
					{
					  "value": "Thị trấn Tuần Giáo"
					},
					{
					  "value": "Xã Phình Sáng"
					},
					{
					  "value": "Xã Rạng Đông"
					},
					{
					  "value": "Xã Mùn Chung"
					},
					{
					  "value": "Xã Nà Tòng"
					},
					{
					  "value": "Xã Ta Ma"
					},
					{
					  "value": "Xã Mường Mùn"
					},
					{
					  "value": "Xã Pú Xi"
					},
					{
					  "value": "Xã Pú Nhung"
					},
					{
					  "value": "Xã Quài Nưa"
					},
					{
					  "value": "Xã Mường Thín"
					},
					{
					  "value": "Xã Tỏa Tình"
					},
					{
					  "value": "Xã Nà Sáy"
					},
					{
					  "value": "Xã Mường Khong"
					},
					{
					  "value": "Xã Quài Cang"
					},
					{
					  "value": "Xã Quài Tở"
					},
					{
					  "value": "Xã Chiềng Sinh"
					},
					{
					  "value": "Xã Chiềng Đông"
					},
					{
					  "value": "Xã Tênh Phông"
					}
				  ]
				},
				{
				  "value": "Huyện Điện Biên",
				  "code": 100,
				  "wards": [
					{
					  "value": "Xã Mường Pồn"
					},
					{
					  "value": "Xã Thanh Nưa"
					},
					{
					  "value": "Xã Hua Thanh"
					},
					{
					  "value": "Xã Thanh Luông"
					},
					{
					  "value": "Xã Thanh Hưng"
					},
					{
					  "value": "Xã Thanh Xương"
					},
					{
					  "value": "Xã Thanh Chăn"
					},
					{
					  "value": "Xã Pa Thơm"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Thanh Yên"
					},
					{
					  "value": "Xã Noong Luống"
					},
					{
					  "value": "Xã Noọng Hẹt"
					},
					{
					  "value": "Xã Sam Mứn"
					},
					{
					  "value": "Xã Pom Lót"
					},
					{
					  "value": "Xã Núa Ngam"
					},
					{
					  "value": "Xã Hẹ Muông"
					},
					{
					  "value": "Xã Na Ư"
					},
					{
					  "value": "Xã Mường Nhà"
					},
					{
					  "value": "Xã Na Tông"
					},
					{
					  "value": "Xã Mường Lói"
					},
					{
					  "value": "Xã Phu Luông"
					}
				  ]
				},
				{
				  "value": "Huyện Điện Biên Đông",
				  "code": 101,
				  "wards": [
					{
					  "value": "Thị trấn Điện Biên Đông"
					},
					{
					  "value": "Xã Na Son"
					},
					{
					  "value": "Xã Phì Nhừ"
					},
					{
					  "value": "Xã Chiềng Sơ"
					},
					{
					  "value": "Xã Mường Luân"
					},
					{
					  "value": "Xã Pú Nhi"
					},
					{
					  "value": "Xã Nong U"
					},
					{
					  "value": "Xã Xa Dung"
					},
					{
					  "value": "Xã Keo Lôm"
					},
					{
					  "value": "Xã Luân Giới"
					},
					{
					  "value": "Xã Phình Giàng"
					},
					{
					  "value": "Xã Pú Hồng"
					},
					{
					  "value": "Xã Tìa Dình"
					},
					{
					  "value": "Xã Háng Lìa"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Ảng",
				  "code": 102,
				  "wards": [
					{
					  "value": "Thị trấn Mường Ảng"
					},
					{
					  "value": "Xã Mường Đăng"
					},
					{
					  "value": "Xã Ngối Cáy"
					},
					{
					  "value": "Xã Ẳng Tở"
					},
					{
					  "value": "Xã Búng Lao"
					},
					{
					  "value": "Xã Xuân Lao"
					},
					{
					  "value": "Xã Ẳng Nưa"
					},
					{
					  "value": "Xã Ẳng Cang"
					},
					{
					  "value": "Xã Nặm Lịch"
					},
					{
					  "value": "Xã Mường Lạn"
					}
				  ]
				},
				{
				  "value": "Huyện Nậm Pồ",
				  "code": 103,
				  "wards": [
					{
					  "value": "Xã Nậm Tin"
					},
					{
					  "value": "Xã Pa Tần"
					},
					{
					  "value": "Xã Chà Cang"
					},
					{
					  "value": "Xã Na Cô Sa"
					},
					{
					  "value": "Xã Nà Khoa"
					},
					{
					  "value": "Xã Nà Hỳ"
					},
					{
					  "value": "Xã Nà Bủng"
					},
					{
					  "value": "Xã Nậm Nhừ"
					},
					{
					  "value": "Xã Nậm Chua"
					},
					{
					  "value": "Xã Nậm Khăn"
					},
					{
					  "value": "Xã Chà Tở"
					},
					{
					  "value": "Xã Vàng Đán"
					},
					{
					  "value": "Xã Chà Nưa"
					},
					{
					  "value": "Xã Phìn Hồ"
					},
					{
					  "value": "Xã Si Pa Phìn"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Lai Châu",
			  "code": 12,
			  "districts": [
				{
				  "value": "Thành phố Lai Châu",
				  "code": 105,
				  "wards": [
					{
					  "value": "Phường Quyết Thắng"
					},
					{
					  "value": "Phường Tân Phong"
					},
					{
					  "value": "Phường Quyết Tiến"
					},
					{
					  "value": "Phường Đoàn Kết"
					},
					{
					  "value": "Xã Sùng Phài"
					},
					{
					  "value": "Phường Đông Phong"
					},
					{
					  "value": "Xã San Thàng"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Đường",
				  "code": 106,
				  "wards": [
					{
					  "value": "Thị trấn Tam Đường"
					},
					{
					  "value": "Xã Thèn Sin"
					},
					{
					  "value": "Xã Tả Lèng"
					},
					{
					  "value": "Xã Giang Ma"
					},
					{
					  "value": "Xã Hồ Thầu"
					},
					{
					  "value": "Xã Bình Lư"
					},
					{
					  "value": "Xã Sơn Bình"
					},
					{
					  "value": "Xã Nùng Nàng"
					},
					{
					  "value": "Xã Bản Giang"
					},
					{
					  "value": "Xã Bản Hon"
					},
					{
					  "value": "Xã Bản Bo"
					},
					{
					  "value": "Xã Nà Tăm"
					},
					{
					  "value": "Xã Khun Há"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Tè",
				  "code": 107,
				  "wards": [
					{
					  "value": "Thị trấn Mường Tè"
					},
					{
					  "value": "Xã Thu Lũm"
					},
					{
					  "value": "Xã Ka Lăng"
					},
					{
					  "value": "Xã Tá Bạ"
					},
					{
					  "value": "Xã Pa ủ"
					},
					{
					  "value": "Xã Mường Tè"
					},
					{
					  "value": "Xã Pa Vệ Sử"
					},
					{
					  "value": "Xã Mù Cả"
					},
					{
					  "value": "Xã Bum Tở"
					},
					{
					  "value": "Xã Nậm Khao"
					},
					{
					  "value": "Xã Tà Tổng"
					},
					{
					  "value": "Xã Bum Nưa"
					},
					{
					  "value": "Xã Vàng San"
					},
					{
					  "value": "Xã Kan Hồ"
					}
				  ]
				},
				{
				  "value": "Huyện Sìn Hồ",
				  "code": 108,
				  "wards": [
					{
					  "value": "Thị trấn Sìn Hồ"
					},
					{
					  "value": "Xã Chăn Nưa"
					},
					{
					  "value": "Xã Pa Tần"
					},
					{
					  "value": "Xã Phìn Hồ"
					},
					{
					  "value": "Xã Hồng Thu"
					},
					{
					  "value": "Xã Phăng Sô Lin"
					},
					{
					  "value": "Xã Ma Quai"
					},
					{
					  "value": "Xã Lùng Thàng"
					},
					{
					  "value": "Xã Tả Phìn"
					},
					{
					  "value": "Xã Sà Dề Phìn"
					},
					{
					  "value": "Xã Nậm Tăm"
					},
					{
					  "value": "Xã Tả Ngảo"
					},
					{
					  "value": "Xã Pu Sam Cáp"
					},
					{
					  "value": "Xã Nậm Cha"
					},
					{
					  "value": "Xã Pa Khoá"
					},
					{
					  "value": "Xã Làng Mô"
					},
					{
					  "value": "Xã Noong Hẻo"
					},
					{
					  "value": "Xã Nậm Mạ"
					},
					{
					  "value": "Xã Căn Co"
					},
					{
					  "value": "Xã Tủa Sín Chải"
					},
					{
					  "value": "Xã Nậm Cuổi"
					},
					{
					  "value": "Xã Nậm Hăn"
					}
				  ]
				},
				{
				  "value": "Huyện Phong Thổ",
				  "code": 109,
				  "wards": [
					{
					  "value": "Xã Lả Nhì Thàng"
					},
					{
					  "value": "Xã Huổi Luông"
					},
					{
					  "value": "Thị trấn Phong Thổ"
					},
					{
					  "value": "Xã Sì Lở Lầu"
					},
					{
					  "value": "Xã Mồ Sì San"
					},
					{
					  "value": "Xã Pa Vây Sử"
					},
					{
					  "value": "Xã Vàng Ma Chải"
					},
					{
					  "value": "Xã Tông Qua Lìn"
					},
					{
					  "value": "Xã Mù Sang"
					},
					{
					  "value": "Xã Dào San"
					},
					{
					  "value": "Xã Ma Ly Pho"
					},
					{
					  "value": "Xã Bản Lang"
					},
					{
					  "value": "Xã Hoang Thèn"
					},
					{
					  "value": "Xã Khổng Lào"
					},
					{
					  "value": "Xã Nậm Xe"
					},
					{
					  "value": "Xã Mường So"
					},
					{
					  "value": "Xã Sin Suối Hồ"
					}
				  ]
				},
				{
				  "value": "Huyện Than Uyên",
				  "code": 110,
				  "wards": [
					{
					  "value": "Thị trấn Than Uyên"
					},
					{
					  "value": "Xã Phúc Than"
					},
					{
					  "value": "Xã Mường Than"
					},
					{
					  "value": "Xã Mường Mít"
					},
					{
					  "value": "Xã Pha Mu"
					},
					{
					  "value": "Xã Mường Cang"
					},
					{
					  "value": "Xã Hua Nà"
					},
					{
					  "value": "Xã Tà Hừa"
					},
					{
					  "value": "Xã Mường Kim"
					},
					{
					  "value": "Xã Tà Mung"
					},
					{
					  "value": "Xã Tà Gia"
					},
					{
					  "value": "Xã Khoen On"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Uyên",
				  "code": 111,
				  "wards": [
					{
					  "value": "Thị trấn Tân Uyên"
					},
					{
					  "value": "Xã Mường Khoa"
					},
					{
					  "value": "Xã Phúc Khoa"
					},
					{
					  "value": "Xã Thân Thuộc"
					},
					{
					  "value": "Xã Trung Đồng"
					},
					{
					  "value": "Xã Hố Mít"
					},
					{
					  "value": "Xã Nậm Cần"
					},
					{
					  "value": "Xã Nậm Sỏ"
					},
					{
					  "value": "Xã Pắc Ta"
					},
					{
					  "value": "Xã Tà Mít"
					}
				  ]
				},
				{
				  "value": "Huyện Nậm Nhùn",
				  "code": 112,
				  "wards": [
					{
					  "value": "Thị trấn Nậm Nhùn"
					},
					{
					  "value": "Xã Hua Bun"
					},
					{
					  "value": "Xã Mường Mô"
					},
					{
					  "value": "Xã Nậm Chà"
					},
					{
					  "value": "Xã Nậm Manh"
					},
					{
					  "value": "Xã Nậm Hàng"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Pú Đao"
					},
					{
					  "value": "Xã Nậm Pì"
					},
					{
					  "value": "Xã Nậm Ban"
					},
					{
					  "value": "Xã Trung Chải"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Sơn La",
			  "code": 14,
			  "districts": [
				{
				  "value": "Thành phố Sơn La",
				  "code": 116,
				  "wards": [
					{
					  "value": "Phường Chiềng Lề"
					},
					{
					  "value": "Phường Tô Hiệu"
					},
					{
					  "value": "Phường Quyết Thắng"
					},
					{
					  "value": "Phường Quyết Tâm"
					},
					{
					  "value": "Xã Chiềng Cọ"
					},
					{
					  "value": "Xã Chiềng Đen"
					},
					{
					  "value": "Xã Chiềng Xôm"
					},
					{
					  "value": "Phường Chiềng An"
					},
					{
					  "value": "Phường Chiềng Cơi"
					},
					{
					  "value": "Xã Chiềng Ngần"
					},
					{
					  "value": "Xã Hua La"
					},
					{
					  "value": "Phường Chiềng Sinh"
					}
				  ]
				},
				{
				  "value": "Huyện Quỳnh Nhai",
				  "code": 118,
				  "wards": [
					{
					  "value": "Xã Mường Chiên"
					},
					{
					  "value": "Xã Cà Nàng"
					},
					{
					  "value": "Xã Chiềng Khay"
					},
					{
					  "value": "Xã Mường Giôn"
					},
					{
					  "value": "Xã Pá Ma Pha Khinh"
					},
					{
					  "value": "Xã Chiềng Ơn"
					},
					{
					  "value": "Xã Mường Giàng"
					},
					{
					  "value": "Xã Chiềng Bằng"
					},
					{
					  "value": "Xã Mường Sại"
					},
					{
					  "value": "Xã Nậm ét"
					},
					{
					  "value": "Xã Chiềng Khoang"
					}
				  ]
				},
				{
				  "value": "Huyện Thuận Châu",
				  "code": 119,
				  "wards": [
					{
					  "value": "Thị trấn Thuận Châu"
					},
					{
					  "value": "Xã Phổng Lái"
					},
					{
					  "value": "Xã Mường é"
					},
					{
					  "value": "Xã Chiềng Pha"
					},
					{
					  "value": "Xã Chiềng La"
					},
					{
					  "value": "Xã Chiềng Ngàm"
					},
					{
					  "value": "Xã Liệp Tè"
					},
					{
					  "value": "Xã é Tòng"
					},
					{
					  "value": "Xã Phổng Lập"
					},
					{
					  "value": "Xã Phổng Lăng"
					},
					{
					  "value": "Xã Chiềng Ly"
					},
					{
					  "value": "Xã Noong Lay"
					},
					{
					  "value": "Xã Mường Khiêng"
					},
					{
					  "value": "Xã Mường Bám"
					},
					{
					  "value": "Xã Long Hẹ"
					},
					{
					  "value": "Xã Chiềng Bôm"
					},
					{
					  "value": "Xã Thôm Mòn"
					},
					{
					  "value": "Xã Tông Lạnh"
					},
					{
					  "value": "Xã Tông Cọ"
					},
					{
					  "value": "Xã Bó Mười"
					},
					{
					  "value": "Xã Co Mạ"
					},
					{
					  "value": "Xã Púng Tra"
					},
					{
					  "value": "Xã Chiềng Pấc"
					},
					{
					  "value": "Xã Nậm Lầu"
					},
					{
					  "value": "Xã Bon Phặng"
					},
					{
					  "value": "Xã Co Tòng"
					},
					{
					  "value": "Xã Muổi Nọi"
					},
					{
					  "value": "Xã Pá Lông"
					},
					{
					  "value": "Xã Bản Lầm"
					}
				  ]
				},
				{
				  "value": "Huyện Mường La",
				  "code": 120,
				  "wards": [
					{
					  "value": "Thị trấn Ít Ong"
					},
					{
					  "value": "Xã Nậm Giôn"
					},
					{
					  "value": "Xã Chiềng Lao"
					},
					{
					  "value": "Xã Hua Trai"
					},
					{
					  "value": "Xã Ngọc Chiến"
					},
					{
					  "value": "Xã Mường Trai"
					},
					{
					  "value": "Xã Nậm Păm"
					},
					{
					  "value": "Xã Chiềng Muôn"
					},
					{
					  "value": "Xã Chiềng Ân"
					},
					{
					  "value": "Xã Pi Toong"
					},
					{
					  "value": "Xã Chiềng Công"
					},
					{
					  "value": "Xã Tạ Bú"
					},
					{
					  "value": "Xã Chiềng San"
					},
					{
					  "value": "Xã Mường Bú"
					},
					{
					  "value": "Xã Chiềng Hoa"
					},
					{
					  "value": "Xã Mường Chùm"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Yên",
				  "code": 121,
				  "wards": [
					{
					  "value": "Thị trấn Bắc Yên"
					},
					{
					  "value": "Xã Phiêng Ban"
					},
					{
					  "value": "Xã Hang Chú"
					},
					{
					  "value": "Xã Xím Vàng"
					},
					{
					  "value": "Xã Tà Xùa"
					},
					{
					  "value": "Xã Háng Đồng"
					},
					{
					  "value": "Xã Pắc Ngà"
					},
					{
					  "value": "Xã Làng Chếu"
					},
					{
					  "value": "Xã Chim Vàn"
					},
					{
					  "value": "Xã Mường Khoa"
					},
					{
					  "value": "Xã Song Pe"
					},
					{
					  "value": "Xã Hồng Ngài"
					},
					{
					  "value": "Xã Tạ Khoa"
					},
					{
					  "value": "Xã Hua Nhàn"
					},
					{
					  "value": "Xã Phiêng Côn"
					},
					{
					  "value": "Xã Chiềng Sại"
					}
				  ]
				},
				{
				  "value": "Huyện Phù Yên",
				  "code": 122,
				  "wards": [
					{
					  "value": "Thị trấn Phù Yên"
					},
					{
					  "value": "Xã Suối Tọ"
					},
					{
					  "value": "Xã Mường Thải"
					},
					{
					  "value": "Xã Mường Cơi"
					},
					{
					  "value": "Xã Quang Huy"
					},
					{
					  "value": "Xã Huy Bắc"
					},
					{
					  "value": "Xã Huy Thượng"
					},
					{
					  "value": "Xã Tân Lang"
					},
					{
					  "value": "Xã Gia Phù"
					},
					{
					  "value": "Xã Tường Phù"
					},
					{
					  "value": "Xã Huy Hạ"
					},
					{
					  "value": "Xã Huy Tân"
					},
					{
					  "value": "Xã Mường Lang"
					},
					{
					  "value": "Xã Suối Bau"
					},
					{
					  "value": "Xã Huy Tường"
					},
					{
					  "value": "Xã Mường Do"
					},
					{
					  "value": "Xã Sập Xa"
					},
					{
					  "value": "Xã Tường Thượng"
					},
					{
					  "value": "Xã Tường Tiến"
					},
					{
					  "value": "Xã Tường Phong"
					},
					{
					  "value": "Xã Tường Hạ"
					},
					{
					  "value": "Xã Kim Bon"
					},
					{
					  "value": "Xã Mường Bang"
					},
					{
					  "value": "Xã Đá Đỏ"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Nam Phong"
					},
					{
					  "value": "Xã Bắc Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Mộc Châu",
				  "code": 123,
				  "wards": [
					{
					  "value": "Thị trấn Mộc Châu"
					},
					{
					  "value": "Thị trấn NT Mộc Châu"
					},
					{
					  "value": "Xã Chiềng Sơn"
					},
					{
					  "value": "Xã Tân Hợp"
					},
					{
					  "value": "Xã Qui Hướng"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Nà Mường"
					},
					{
					  "value": "Xã Tà Lai"
					},
					{
					  "value": "Xã Chiềng Hắc"
					},
					{
					  "value": "Xã Hua Păng"
					},
					{
					  "value": "Xã Chiềng Khừa"
					},
					{
					  "value": "Xã Mường Sang"
					},
					{
					  "value": "Xã Đông Sang"
					},
					{
					  "value": "Xã Phiêng Luông"
					},
					{
					  "value": "Xã Lóng Sập"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Châu",
				  "code": 124,
				  "wards": [
					{
					  "value": "Thị trấn Yên Châu"
					},
					{
					  "value": "Xã Chiềng Đông"
					},
					{
					  "value": "Xã Sập Vạt"
					},
					{
					  "value": "Xã Chiềng Sàng"
					},
					{
					  "value": "Xã Chiềng Pằn"
					},
					{
					  "value": "Xã Viêng Lán"
					},
					{
					  "value": "Xã Chiềng Hặc"
					},
					{
					  "value": "Xã Mường Lựm"
					},
					{
					  "value": "Xã Chiềng On"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Chiềng Khoi"
					},
					{
					  "value": "Xã Tú Nang"
					},
					{
					  "value": "Xã Lóng Phiêng"
					},
					{
					  "value": "Xã Phiêng Khoài"
					},
					{
					  "value": "Xã Chiềng Tương"
					}
				  ]
				},
				{
				  "value": "Huyện Mai Sơn",
				  "code": 125,
				  "wards": [
					{
					  "value": "Thị trấn Hát Lót"
					},
					{
					  "value": "Xã Chiềng Sung"
					},
					{
					  "value": "Xã Mường Bằng"
					},
					{
					  "value": "Xã Chiềng Chăn"
					},
					{
					  "value": "Xã Mương Chanh"
					},
					{
					  "value": "Xã Chiềng Ban"
					},
					{
					  "value": "Xã Chiềng Mung"
					},
					{
					  "value": "Xã Mường Bon"
					},
					{
					  "value": "Xã Chiềng Chung"
					},
					{
					  "value": "Xã Chiềng Mai"
					},
					{
					  "value": "Xã Hát Lót"
					},
					{
					  "value": "Xã Nà Pó"
					},
					{
					  "value": "Xã Cò Nòi"
					},
					{
					  "value": "Xã Chiềng Nơi"
					},
					{
					  "value": "Xã Phiêng Cằm"
					},
					{
					  "value": "Xã Chiềng Dong"
					},
					{
					  "value": "Xã Chiềng Kheo"
					},
					{
					  "value": "Xã Chiềng Ve"
					},
					{
					  "value": "Xã Chiềng Lương"
					},
					{
					  "value": "Xã Phiêng Pằn"
					},
					{
					  "value": "Xã Nà Ơt"
					},
					{
					  "value": "Xã Tà Hộc"
					}
				  ]
				},
				{
				  "value": "Huyện Sông Mã",
				  "code": 126,
				  "wards": [
					{
					  "value": "Thị trấn Sông Mã"
					},
					{
					  "value": "Xã Bó Sinh"
					},
					{
					  "value": "Xã Pú Pẩu"
					},
					{
					  "value": "Xã Chiềng Phung"
					},
					{
					  "value": "Xã Chiềng En"
					},
					{
					  "value": "Xã Mường Lầm"
					},
					{
					  "value": "Xã Nậm Ty"
					},
					{
					  "value": "Xã Đứa Mòn"
					},
					{
					  "value": "Xã Yên Hưng"
					},
					{
					  "value": "Xã Chiềng Sơ"
					},
					{
					  "value": "Xã Nà Nghịu"
					},
					{
					  "value": "Xã Nậm Mằn"
					},
					{
					  "value": "Xã Chiềng Khoong"
					},
					{
					  "value": "Xã Chiềng Cang"
					},
					{
					  "value": "Xã Huổi Một"
					},
					{
					  "value": "Xã Mường Sai"
					},
					{
					  "value": "Xã Mường Cai"
					},
					{
					  "value": "Xã Mường Hung"
					},
					{
					  "value": "Xã Chiềng Khương"
					}
				  ]
				},
				{
				  "value": "Huyện Sốp Cộp",
				  "code": 127,
				  "wards": [
					{
					  "value": "Xã Sam Kha"
					},
					{
					  "value": "Xã Púng Bánh"
					},
					{
					  "value": "Xã Sốp Cộp"
					},
					{
					  "value": "Xã Dồm Cang"
					},
					{
					  "value": "Xã Nậm Lạnh"
					},
					{
					  "value": "Xã Mường Lèo"
					},
					{
					  "value": "Xã Mường Và"
					},
					{
					  "value": "Xã Mường Lạn"
					}
				  ]
				},
				{
				  "value": "Huyện Vân Hồ",
				  "code": 128,
				  "wards": [
					{
					  "value": "Xã Suối Bàng"
					},
					{
					  "value": "Xã Song Khủa"
					},
					{
					  "value": "Xã Liên Hoà"
					},
					{
					  "value": "Xã Tô Múa"
					},
					{
					  "value": "Xã Mường Tè"
					},
					{
					  "value": "Xã Chiềng Khoa"
					},
					{
					  "value": "Xã Mường Men"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Vân Hồ"
					},
					{
					  "value": "Xã Lóng Luông"
					},
					{
					  "value": "Xã Chiềng Yên"
					},
					{
					  "value": "Xã Chiềng Xuân"
					},
					{
					  "value": "Xã Xuân Nha"
					},
					{
					  "value": "Xã Tân Xuân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Yên Bái",
			  "code": 15,
			  "districts": [
				{
				  "value": "Thành phố Yên Bái",
				  "code": 132,
				  "wards": [
					{
					  "value": "Phường Yên Thịnh"
					},
					{
					  "value": "Phường Yên Ninh"
					},
					{
					  "value": "Phường Minh Tân"
					},
					{
					  "value": "Phường Nguyễn Thái Học"
					},
					{
					  "value": "Phường Đồng Tâm"
					},
					{
					  "value": "Phường Nguyễn Phúc"
					},
					{
					  "value": "Phường Hồng Hà"
					},
					{
					  "value": "Xã Minh Bảo"
					},
					{
					  "value": "Phường Nam Cường"
					},
					{
					  "value": "Xã Tuy Lộc"
					},
					{
					  "value": "Xã Tân Thịnh"
					},
					{
					  "value": "Xã Âu Lâu"
					},
					{
					  "value": "Xã Giới Phiên"
					},
					{
					  "value": "Phường Hợp Minh"
					},
					{
					  "value": "Xã Văn Phú"
					}
				  ]
				},
				{
				  "value": "Thị xã Nghĩa Lộ",
				  "code": 133,
				  "wards": [
					{
					  "value": "Phường Pú Trạng"
					},
					{
					  "value": "Phường Trung Tâm"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Cầu Thia"
					},
					{
					  "value": "Xã Nghĩa Lợi"
					},
					{
					  "value": "Xã Nghĩa Phúc"
					},
					{
					  "value": "Xã Nghĩa An"
					},
					{
					  "value": "Xã Nghĩa Lộ"
					},
					{
					  "value": "Xã Sơn A"
					},
					{
					  "value": "Xã Phù Nham"
					},
					{
					  "value": "Xã Thanh Lương"
					},
					{
					  "value": "Xã Hạnh Sơn"
					},
					{
					  "value": "Xã Phúc Sơn"
					},
					{
					  "value": "Xã Thạch Lương"
					}
				  ]
				},
				{
				  "value": "Huyện Lục Yên",
				  "code": 135,
				  "wards": [
					{
					  "value": "Thị trấn Yên Thế"
					},
					{
					  "value": "Xã Tân Phượng"
					},
					{
					  "value": "Xã Lâm Thượng"
					},
					{
					  "value": "Xã Khánh Thiện"
					},
					{
					  "value": "Xã Minh Chuẩn"
					},
					{
					  "value": "Xã Mai Sơn"
					},
					{
					  "value": "Xã Khai Trung"
					},
					{
					  "value": "Xã Mường Lai"
					},
					{
					  "value": "Xã An Lạc"
					},
					{
					  "value": "Xã Minh Xuân"
					},
					{
					  "value": "Xã Tô Mậu"
					},
					{
					  "value": "Xã Tân Lĩnh"
					},
					{
					  "value": "Xã Yên Thắng"
					},
					{
					  "value": "Xã Khánh Hoà"
					},
					{
					  "value": "Xã Vĩnh Lạc"
					},
					{
					  "value": "Xã Liễu Đô"
					},
					{
					  "value": "Xã Động Quan"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Trúc Lâu"
					},
					{
					  "value": "Xã Phúc Lợi"
					},
					{
					  "value": "Xã Phan Thanh"
					},
					{
					  "value": "Xã An Phú"
					},
					{
					  "value": "Xã Trung Tâm"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Yên",
				  "code": 136,
				  "wards": [
					{
					  "value": "Thị trấn Mậu A"
					},
					{
					  "value": "Xã Lang Thíp"
					},
					{
					  "value": "Xã Lâm Giang"
					},
					{
					  "value": "Xã Châu Quế Thượng"
					},
					{
					  "value": "Xã Châu Quế Hạ"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Đông An"
					},
					{
					  "value": "Xã Đông Cuông"
					},
					{
					  "value": "Xã Phong Dụ Hạ"
					},
					{
					  "value": "Xã Mậu Đông"
					},
					{
					  "value": "Xã Ngòi A"
					},
					{
					  "value": "Xã Xuân Tầm"
					},
					{
					  "value": "Xã Tân Hợp"
					},
					{
					  "value": "Xã An Thịnh"
					},
					{
					  "value": "Xã Yên Thái"
					},
					{
					  "value": "Xã Phong Dụ Thượng"
					},
					{
					  "value": "Xã Yên Hợp"
					},
					{
					  "value": "Xã Đại Sơn"
					},
					{
					  "value": "Xã Đại Phác"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Xã Xuân Ái"
					},
					{
					  "value": "Xã Viễn Sơn"
					},
					{
					  "value": "Xã Mỏ Vàng"
					},
					{
					  "value": "Xã Nà Hẩu"
					}
				  ]
				},
				{
				  "value": "Huyện Mù Căng Chải",
				  "code": 137,
				  "wards": [
					{
					  "value": "Thị trấn Mù Căng Chải"
					},
					{
					  "value": "Xã Hồ Bốn"
					},
					{
					  "value": "Xã Nậm Có"
					},
					{
					  "value": "Xã Khao Mang"
					},
					{
					  "value": "Xã Mồ Dề"
					},
					{
					  "value": "Xã Chế Cu Nha"
					},
					{
					  "value": "Xã Lao Chải"
					},
					{
					  "value": "Xã Kim Nọi"
					},
					{
					  "value": "Xã Cao Phạ"
					},
					{
					  "value": "Xã La Pán Tẩn"
					},
					{
					  "value": "Xã Dế Su Phình"
					},
					{
					  "value": "Xã Chế Tạo"
					},
					{
					  "value": "Xã Púng Luông"
					},
					{
					  "value": "Xã Nậm Khắt"
					}
				  ]
				},
				{
				  "value": "Huyện Trấn Yên",
				  "code": 138,
				  "wards": [
					{
					  "value": "Thị trấn Cổ Phúc"
					},
					{
					  "value": "Xã Tân Đồng"
					},
					{
					  "value": "Xã Báo Đáp"
					},
					{
					  "value": "Xã Đào Thịnh"
					},
					{
					  "value": "Xã Việt Thành"
					},
					{
					  "value": "Xã Hòa Cuông"
					},
					{
					  "value": "Xã Minh Quán"
					},
					{
					  "value": "Xã Quy Mông"
					},
					{
					  "value": "Xã Cường Thịnh"
					},
					{
					  "value": "Xã Kiên Thành"
					},
					{
					  "value": "Xã Nga Quán"
					},
					{
					  "value": "Xã Y Can"
					},
					{
					  "value": "Xã Lương Thịnh"
					},
					{
					  "value": "Xã Bảo Hưng"
					},
					{
					  "value": "Xã Việt Cường"
					},
					{
					  "value": "Xã Minh Quân"
					},
					{
					  "value": "Xã Hồng Ca"
					},
					{
					  "value": "Xã Hưng Thịnh"
					},
					{
					  "value": "Xã Hưng Khánh"
					},
					{
					  "value": "Xã Việt Hồng"
					},
					{
					  "value": "Xã Vân Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Trạm Tấu",
				  "code": 139,
				  "wards": [
					{
					  "value": "Thị trấn Trạm Tấu"
					},
					{
					  "value": "Xã Túc Đán"
					},
					{
					  "value": "Xã Pá Lau"
					},
					{
					  "value": "Xã Xà Hồ"
					},
					{
					  "value": "Xã Phình Hồ"
					},
					{
					  "value": "Xã Trạm Tấu"
					},
					{
					  "value": "Xã Tà Si Láng"
					},
					{
					  "value": "Xã Pá Hu"
					},
					{
					  "value": "Xã Làng Nhì"
					},
					{
					  "value": "Xã Bản Công"
					},
					{
					  "value": "Xã Bản Mù"
					},
					{
					  "value": "Xã Hát Lìu"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Chấn",
				  "code": 140,
				  "wards": [
					{
					  "value": "Thị trấn NT Liên Sơn"
					},
					{
					  "value": "Thị trấn NT Trần Phú"
					},
					{
					  "value": "Xã Tú Lệ"
					},
					{
					  "value": "Xã Nậm Búng"
					},
					{
					  "value": "Xã Gia Hội"
					},
					{
					  "value": "Xã Sùng Đô"
					},
					{
					  "value": "Xã Nậm Mười"
					},
					{
					  "value": "Xã An Lương"
					},
					{
					  "value": "Xã Nậm Lành"
					},
					{
					  "value": "Xã Sơn Lương"
					},
					{
					  "value": "Xã Suối Quyền"
					},
					{
					  "value": "Xã Suối Giàng"
					},
					{
					  "value": "Xã Nghĩa Sơn"
					},
					{
					  "value": "Xã Suối Bu"
					},
					{
					  "value": "Thị trấn Sơn Thịnh"
					},
					{
					  "value": "Xã Đại Lịch"
					},
					{
					  "value": "Xã Đồng Khê"
					},
					{
					  "value": "Xã Cát Thịnh"
					},
					{
					  "value": "Xã Tân Thịnh"
					},
					{
					  "value": "Xã Chấn Thịnh"
					},
					{
					  "value": "Xã Bình Thuận"
					},
					{
					  "value": "Xã Thượng Bằng La"
					},
					{
					  "value": "Xã Minh An"
					},
					{
					  "value": "Xã Nghĩa Tâm"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Bình",
				  "code": 141,
				  "wards": [
					{
					  "value": "Thị trấn Yên Bình"
					},
					{
					  "value": "Thị trấn Thác Bà"
					},
					{
					  "value": "Xã Xuân Long"
					},
					{
					  "value": "Xã Cảm Nhân"
					},
					{
					  "value": "Xã Ngọc Chấn"
					},
					{
					  "value": "Xã Tân Nguyên"
					},
					{
					  "value": "Xã Phúc Ninh"
					},
					{
					  "value": "Xã Bảo Ái"
					},
					{
					  "value": "Xã Mỹ Gia"
					},
					{
					  "value": "Xã Xuân Lai"
					},
					{
					  "value": "Xã Mông Sơn"
					},
					{
					  "value": "Xã Cảm Ân"
					},
					{
					  "value": "Xã Yên Thành"
					},
					{
					  "value": "Xã Tân Hương"
					},
					{
					  "value": "Xã Phúc An"
					},
					{
					  "value": "Xã Bạch Hà"
					},
					{
					  "value": "Xã Vũ Linh"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Vĩnh Kiên"
					},
					{
					  "value": "Xã Yên Bình"
					},
					{
					  "value": "Xã Thịnh Hưng"
					},
					{
					  "value": "Xã Hán Đà"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Đại Minh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hoà Bình",
			  "code": 17,
			  "districts": [
				{
				  "value": "Thành phố Hòa Bình",
				  "code": 148,
				  "wards": [
					{
					  "value": "Phường Thái Bình"
					},
					{
					  "value": "Phường Tân Hòa"
					},
					{
					  "value": "Phường Thịnh Lang"
					},
					{
					  "value": "Phường Hữu Nghị"
					},
					{
					  "value": "Phường Tân Thịnh"
					},
					{
					  "value": "Phường Đồng Tiến"
					},
					{
					  "value": "Phường Phương Lâm"
					},
					{
					  "value": "Xã Yên Mông"
					},
					{
					  "value": "Phường Quỳnh Lâm"
					},
					{
					  "value": "Phường Dân Chủ"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Kỳ Sơn"
					},
					{
					  "value": "Xã Thịnh Minh"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Quang Tiến"
					},
					{
					  "value": "Xã Mông Hóa"
					},
					{
					  "value": "Phường Trung Minh"
					},
					{
					  "value": "Xã Độc Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Đà Bắc",
				  "code": 150,
				  "wards": [
					{
					  "value": "Thị trấn Đà Bắc"
					},
					{
					  "value": "Xã Nánh Nghê"
					},
					{
					  "value": "Xã Giáp Đắt"
					},
					{
					  "value": "Xã Mường Chiềng"
					},
					{
					  "value": "Xã Tân Pheo"
					},
					{
					  "value": "Xã Đồng Chum"
					},
					{
					  "value": "Xã Tân Minh"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Đồng Ruộng"
					},
					{
					  "value": "Xã Tú Lý"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Yên Hòa"
					},
					{
					  "value": "Xã Cao Sơn"
					},
					{
					  "value": "Xã Toàn Sơn"
					},
					{
					  "value": "Xã Hiền Lương"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Vầy Nưa"
					}
				  ]
				},
				{
				  "value": "Huyện Lương Sơn",
				  "code": 152,
				  "wards": [
					{
					  "value": "Thị trấn Lương Sơn"
					},
					{
					  "value": "Xã Lâm Sơn"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Tân Vinh"
					},
					{
					  "value": "Xã Nhuận Trạch"
					},
					{
					  "value": "Xã Cao Sơn"
					},
					{
					  "value": "Xã Cư Yên"
					},
					{
					  "value": "Xã Liên Sơn"
					},
					{
					  "value": "Xã Cao Dương"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Thanh Cao"
					}
				  ]
				},
				{
				  "value": "Huyện Kim Bôi",
				  "code": 153,
				  "wards": [
					{
					  "value": "Thị trấn Bo"
					},
					{
					  "value": "Xã Đú Sáng"
					},
					{
					  "value": "Xã Hùng Sơn"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Tú Sơn"
					},
					{
					  "value": "Xã Vĩnh Tiến"
					},
					{
					  "value": "Xã Đông Bắc"
					},
					{
					  "value": "Xã Xuân Thủy"
					},
					{
					  "value": "Xã Vĩnh Đồng"
					},
					{
					  "value": "Xã Kim Lập"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Kim Bôi"
					},
					{
					  "value": "Xã Nam Thượng"
					},
					{
					  "value": "Xã Cuối Hạ"
					},
					{
					  "value": "Xã Sào Báy"
					},
					{
					  "value": "Xã Mi Hòa"
					},
					{
					  "value": "Xã Nuông Dăm"
					}
				  ]
				},
				{
				  "value": "Huyện Cao Phong",
				  "code": 154,
				  "wards": [
					{
					  "value": "Thị trấn Cao Phong"
					},
					{
					  "value": "Xã Bình Thanh"
					},
					{
					  "value": "Xã Thung Nai"
					},
					{
					  "value": "Xã Bắc Phong"
					},
					{
					  "value": "Xã Thu Phong"
					},
					{
					  "value": "Xã Hợp Phong"
					},
					{
					  "value": "Xã Tây Phong"
					},
					{
					  "value": "Xã Dũng Phong"
					},
					{
					  "value": "Xã Nam Phong"
					},
					{
					  "value": "Xã Thạch Yên"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Lạc",
				  "code": 155,
				  "wards": [
					{
					  "value": "Thị trấn Mãn Đức"
					},
					{
					  "value": "Xã Suối Hoa"
					},
					{
					  "value": "Xã Phú Vinh"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Quyết Chiến"
					},
					{
					  "value": "Xã Phong Phú"
					},
					{
					  "value": "Xã Tử Nê"
					},
					{
					  "value": "Xã Thanh Hối"
					},
					{
					  "value": "Xã Ngọc Mỹ"
					},
					{
					  "value": "Xã Đông Lai"
					},
					{
					  "value": "Xã Vân Sơn"
					},
					{
					  "value": "Xã Nhân Mỹ"
					},
					{
					  "value": "Xã Lỗ Sơn"
					},
					{
					  "value": "Xã Ngổ Luông"
					},
					{
					  "value": "Xã Gia Mô"
					}
				  ]
				},
				{
				  "value": "Huyện Mai Châu",
				  "code": 156,
				  "wards": [
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Thị trấn Mai Châu"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Pà Cò"
					},
					{
					  "value": "Xã Hang Kia"
					},
					{
					  "value": "Xã Đồng Tân"
					},
					{
					  "value": "Xã Cun Pheo"
					},
					{
					  "value": "Xã Bao La"
					},
					{
					  "value": "Xã Tòng Đậu"
					},
					{
					  "value": "Xã Nà Phòn"
					},
					{
					  "value": "Xã Săm Khóe"
					},
					{
					  "value": "Xã Chiềng Châu"
					},
					{
					  "value": "Xã Mai Hạ"
					},
					{
					  "value": "Xã Thành Sơn"
					},
					{
					  "value": "Xã Mai Hịch"
					},
					{
					  "value": "Xã Vạn Mai"
					}
				  ]
				},
				{
				  "value": "Huyện Lạc Sơn",
				  "code": 157,
				  "wards": [
					{
					  "value": "Thị trấn Vụ Bản"
					},
					{
					  "value": "Xã Quý Hòa"
					},
					{
					  "value": "Xã Miền Đồi"
					},
					{
					  "value": "Xã Mỹ Thành"
					},
					{
					  "value": "Xã Tuân Đạo"
					},
					{
					  "value": "Xã Văn Nghĩa"
					},
					{
					  "value": "Xã Văn Sơn"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Nhân Nghĩa"
					},
					{
					  "value": "Xã Thượng Cốc"
					},
					{
					  "value": "Xã Quyết Thắng"
					},
					{
					  "value": "Xã Xuất Hóa"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Xã Bình Hẻm"
					},
					{
					  "value": "Xã Định Cư"
					},
					{
					  "value": "Xã Chí Đạo"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Hương Nhượng"
					},
					{
					  "value": "Xã Vũ Bình"
					},
					{
					  "value": "Xã Tự Do"
					},
					{
					  "value": "Xã Yên Nghiệp"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Ân Nghĩa"
					},
					{
					  "value": "Xã Ngọc Lâu"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Thủy",
				  "code": 158,
				  "wards": [
					{
					  "value": "Thị trấn Hàng Trạm"
					},
					{
					  "value": "Xã Lạc Sỹ"
					},
					{
					  "value": "Xã Lạc Lương"
					},
					{
					  "value": "Xã Bảo Hiệu"
					},
					{
					  "value": "Xã Đa Phúc"
					},
					{
					  "value": "Xã Hữu Lợi"
					},
					{
					  "value": "Xã Lạc Thịnh"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Phú Lai"
					},
					{
					  "value": "Xã Yên Trị"
					},
					{
					  "value": "Xã Ngọc Lương"
					}
				  ]
				},
				{
				  "value": "Huyện Lạc Thủy",
				  "code": 159,
				  "wards": [
					{
					  "value": "Thị trấn Ba Hàng Đồi"
					},
					{
					  "value": "Thị trấn Chi Nê"
					},
					{
					  "value": "Xã Phú Nghĩa"
					},
					{
					  "value": "Xã Phú Thành"
					},
					{
					  "value": "Xã Hưng Thi"
					},
					{
					  "value": "Xã Khoan Dụ"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Yên Bồng"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã An Bình"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Thái Nguyên",
			  "code": 19,
			  "districts": [
				{
				  "value": "Thành phố Thái Nguyên",
				  "code": 164,
				  "wards": [
					{
					  "value": "Phường Quán Triều"
					},
					{
					  "value": "Phường Quang Vinh"
					},
					{
					  "value": "Phường Túc Duyên"
					},
					{
					  "value": "Phường Hoàng Văn Thụ"
					},
					{
					  "value": "Phường Trưng Vương"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Phan Đình Phùng"
					},
					{
					  "value": "Phường Tân Thịnh"
					},
					{
					  "value": "Phường Thịnh Đán"
					},
					{
					  "value": "Phường Đồng Quang"
					},
					{
					  "value": "Phường Gia Sàng"
					},
					{
					  "value": "Phường Tân Lập"
					},
					{
					  "value": "Phường Cam Giá"
					},
					{
					  "value": "Phường Phú Xá"
					},
					{
					  "value": "Phường Hương Sơn"
					},
					{
					  "value": "Phường Trung Thành"
					},
					{
					  "value": "Phường Tân Thành"
					},
					{
					  "value": "Phường Tân Long"
					},
					{
					  "value": "Xã Phúc Hà"
					},
					{
					  "value": "Xã Phúc Xuân"
					},
					{
					  "value": "Xã Quyết Thắng"
					},
					{
					  "value": "Xã Phúc Trìu"
					},
					{
					  "value": "Xã Thịnh Đức"
					},
					{
					  "value": "Phường Tích Lương"
					},
					{
					  "value": "Xã Tân Cương"
					},
					{
					  "value": "Xã Sơn Cẩm"
					},
					{
					  "value": "Phường Chùa Hang"
					},
					{
					  "value": "Xã Cao Ngạn"
					},
					{
					  "value": "Xã Linh Sơn"
					},
					{
					  "value": "Phường Đồng Bẩm"
					},
					{
					  "value": "Xã Huống Thượng"
					},
					{
					  "value": "Xã Đồng Liên"
					}
				  ]
				},
				{
				  "value": "Thành phố Sông Công",
				  "code": 165,
				  "wards": [
					{
					  "value": "Phường Lương Sơn"
					},
					{
					  "value": "Phường Châu Sơn"
					},
					{
					  "value": "Phường Mỏ Chè"
					},
					{
					  "value": "Phường Cải Đan"
					},
					{
					  "value": "Phường Thắng Lợi"
					},
					{
					  "value": "Phường Phố Cò"
					},
					{
					  "value": "Xã Tân Quang"
					},
					{
					  "value": "Phường Bách Quang"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Bá Xuyên"
					}
				  ]
				},
				{
				  "value": "Huyện Định Hóa",
				  "code": 167,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Chu"
					},
					{
					  "value": "Xã Linh Thông"
					},
					{
					  "value": "Xã Lam Vỹ"
					},
					{
					  "value": "Xã Quy Kỳ"
					},
					{
					  "value": "Xã Tân Thịnh"
					},
					{
					  "value": "Xã Kim Phượng"
					},
					{
					  "value": "Xã Bảo Linh"
					},
					{
					  "value": "Xã Phúc Chu"
					},
					{
					  "value": "Xã Tân Dương"
					},
					{
					  "value": "Xã Phượng Tiến"
					},
					{
					  "value": "Xã Bảo Cường"
					},
					{
					  "value": "Xã Đồng Thịnh"
					},
					{
					  "value": "Xã Định Biên"
					},
					{
					  "value": "Xã Thanh Định"
					},
					{
					  "value": "Xã Trung Hội"
					},
					{
					  "value": "Xã Trung Lương"
					},
					{
					  "value": "Xã Bình Yên"
					},
					{
					  "value": "Xã Điềm Mặc"
					},
					{
					  "value": "Xã Phú Tiến"
					},
					{
					  "value": "Xã Bộc Nhiêu"
					},
					{
					  "value": "Xã Sơn Phú"
					},
					{
					  "value": "Xã Phú Đình"
					},
					{
					  "value": "Xã Bình Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Lương",
				  "code": 168,
				  "wards": [
					{
					  "value": "Thị trấn Giang Tiên"
					},
					{
					  "value": "Thị trấn Đu"
					},
					{
					  "value": "Xã Yên Ninh"
					},
					{
					  "value": "Xã Yên Trạch"
					},
					{
					  "value": "Xã Yên Đổ"
					},
					{
					  "value": "Xã Yên Lạc"
					},
					{
					  "value": "Xã Ôn Lương"
					},
					{
					  "value": "Xã Động Đạt"
					},
					{
					  "value": "Xã Phủ Lý"
					},
					{
					  "value": "Xã Phú Đô"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Tức Tranh"
					},
					{
					  "value": "Xã Phấn Mễ"
					},
					{
					  "value": "Xã Vô Tranh"
					},
					{
					  "value": "Xã Cổ Lũng"
					}
				  ]
				},
				{
				  "value": "Huyện Đồng Hỷ",
				  "code": 169,
				  "wards": [
					{
					  "value": "Thị trấn Sông Cầu"
					},
					{
					  "value": "Thị trấn Trại Cau"
					},
					{
					  "value": "Xã Văn Lăng"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Quang Sơn"
					},
					{
					  "value": "Xã Minh Lập"
					},
					{
					  "value": "Xã Văn Hán"
					},
					{
					  "value": "Xã Hóa Trung"
					},
					{
					  "value": "Xã Khe Mo"
					},
					{
					  "value": "Xã Cây Thị"
					},
					{
					  "value": "Thị trấn Hóa Thượng"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Tân Lợi"
					},
					{
					  "value": "Xã Nam Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Võ Nhai",
				  "code": 170,
				  "wards": [
					{
					  "value": "Thị trấn Đình Cả"
					},
					{
					  "value": "Xã Sảng Mộc"
					},
					{
					  "value": "Xã Nghinh Tường"
					},
					{
					  "value": "Xã Thần Xa"
					},
					{
					  "value": "Xã Vũ Chấn"
					},
					{
					  "value": "Xã Thượng Nung"
					},
					{
					  "value": "Xã Phú Thượng"
					},
					{
					  "value": "Xã Cúc Đường"
					},
					{
					  "value": "Xã La Hiên"
					},
					{
					  "value": "Xã Lâu Thượng"
					},
					{
					  "value": "Xã Tràng Xá"
					},
					{
					  "value": "Xã Phương Giao"
					},
					{
					  "value": "Xã Liên Minh"
					},
					{
					  "value": "Xã Dân Tiến"
					},
					{
					  "value": "Xã Bình Long"
					}
				  ]
				},
				{
				  "value": "Huyện Đại Từ",
				  "code": 171,
				  "wards": [
					{
					  "value": "Thị trấn Hùng Sơn"
					},
					{
					  "value": "Xã Phúc Lương"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Yên Lãng"
					},
					{
					  "value": "Xã Đức Lương"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Na Mao"
					},
					{
					  "value": "Xã Phú Lạc"
					},
					{
					  "value": "Xã Tân Linh"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Phục Linh"
					},
					{
					  "value": "Xã Phú Xuyên"
					},
					{
					  "value": "Xã Bản Ngoại"
					},
					{
					  "value": "Xã Tiên Hội"
					},
					{
					  "value": "Xã Cù Vân"
					},
					{
					  "value": "Xã Hà Thượng"
					},
					{
					  "value": "Xã La Bằng"
					},
					{
					  "value": "Xã Hoàng Nông"
					},
					{
					  "value": "Xã Khôi Kỳ"
					},
					{
					  "value": "Xã An Khánh"
					},
					{
					  "value": "Xã Tân Thái"
					},
					{
					  "value": "Xã Bình Thuận"
					},
					{
					  "value": "Xã Lục Ba"
					},
					{
					  "value": "Xã Mỹ Yên"
					},
					{
					  "value": "Xã Vạn Thọ"
					},
					{
					  "value": "Xã Văn Yên"
					},
					{
					  "value": "Xã Ký Phú"
					},
					{
					  "value": "Xã Cát Nê"
					},
					{
					  "value": "Thị trấn Quân Chu"
					}
				  ]
				},
				{
				  "value": "Thành phố Phổ Yên",
				  "code": 172,
				  "wards": [
					{
					  "value": "Phường Bãi Bông"
					},
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Ba Hàng"
					},
					{
					  "value": "Xã Phúc Tân"
					},
					{
					  "value": "Xã Phúc Thuận"
					},
					{
					  "value": "Phường Hồng Tiến"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Phường Đắc Sơn"
					},
					{
					  "value": "Phường Đồng Tiến"
					},
					{
					  "value": "Xã Thành Công"
					},
					{
					  "value": "Phường Tiên Phong"
					},
					{
					  "value": "Xã Vạn Phái"
					},
					{
					  "value": "Phường Nam Tiến"
					},
					{
					  "value": "Phường Tân Hương"
					},
					{
					  "value": "Phường Đông Cao"
					},
					{
					  "value": "Phường Trung Thành"
					},
					{
					  "value": "Phường Tân Phú"
					},
					{
					  "value": "Phường Thuận Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Bình",
				  "code": 173,
				  "wards": [
					{
					  "value": "Thị trấn Hương Sơn"
					},
					{
					  "value": "Xã Bàn Đạt"
					},
					{
					  "value": "Xã Tân Khánh"
					},
					{
					  "value": "Xã Tân Kim"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Đào Xá"
					},
					{
					  "value": "Xã Bảo Lý"
					},
					{
					  "value": "Xã Thượng Đình"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Nhã Lộng"
					},
					{
					  "value": "Xã Điềm Thụy"
					},
					{
					  "value": "Xã Xuân Phương"
					},
					{
					  "value": "Xã Tân Đức"
					},
					{
					  "value": "Xã Úc Kỳ"
					},
					{
					  "value": "Xã Lương Phú"
					},
					{
					  "value": "Xã Nga My"
					},
					{
					  "value": "Xã Kha Sơn"
					},
					{
					  "value": "Xã Thanh Ninh"
					},
					{
					  "value": "Xã Dương Thành"
					},
					{
					  "value": "Xã Hà Châu"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Lạng Sơn",
			  "code": 20,
			  "districts": [
				{
				  "value": "Thành phố Lạng Sơn",
				  "code": 178,
				  "wards": [
					{
					  "value": "Phường Hoàng Văn Thụ"
					},
					{
					  "value": "Phường Tam Thanh"
					},
					{
					  "value": "Phường Vĩnh Trại"
					},
					{
					  "value": "Phường Đông Kinh"
					},
					{
					  "value": "Phường Chi Lăng"
					},
					{
					  "value": "Xã Hoàng Đồng"
					},
					{
					  "value": "Xã Quảng Lạc"
					},
					{
					  "value": "Xã Mai Pha"
					}
				  ]
				},
				{
				  "value": "Huyện Tràng Định",
				  "code": 180,
				  "wards": [
					{
					  "value": "Thị trấn Thất Khê"
					},
					{
					  "value": "Xã Khánh Long"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Quốc Khánh"
					},
					{
					  "value": "Xã Vĩnh Tiến"
					},
					{
					  "value": "Xã Cao Minh"
					},
					{
					  "value": "Xã Chí Minh"
					},
					{
					  "value": "Xã Tri Phương"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Tân Yên"
					},
					{
					  "value": "Xã Đội Cấn"
					},
					{
					  "value": "Xã Tân Minh"
					},
					{
					  "value": "Xã Kim Đồng"
					},
					{
					  "value": "Xã Chi Lăng"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Đào Viên"
					},
					{
					  "value": "Xã Đề Thám"
					},
					{
					  "value": "Xã Kháng Chiến"
					},
					{
					  "value": "Xã Hùng Sơn"
					},
					{
					  "value": "Xã Quốc Việt"
					},
					{
					  "value": "Xã Hùng Việt"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Gia",
				  "code": 181,
				  "wards": [
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Vĩnh Yên"
					},
					{
					  "value": "Xã Hoa Thám"
					},
					{
					  "value": "Xã Quý Hòa"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Yên Lỗ"
					},
					{
					  "value": "Xã Thiện Hòa"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Thiện Thuật"
					},
					{
					  "value": "Xã Minh Khai"
					},
					{
					  "value": "Xã Thiện Long"
					},
					{
					  "value": "Xã Hoàng Văn Thụ"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Mông Ân"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Thị trấn Bình Gia"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Bình La"
					},
					{
					  "value": "Xã Tân Văn"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Lãng",
				  "code": 182,
				  "wards": [
					{
					  "value": "Thị trấn Na Sầm"
					},
					{
					  "value": "Xã Trùng Khánh"
					},
					{
					  "value": "Xã Bắc La"
					},
					{
					  "value": "Xã Thụy Hùng"
					},
					{
					  "value": "Xã Bắc Hùng"
					},
					{
					  "value": "Xã Tân Tác"
					},
					{
					  "value": "Xã Thanh Long"
					},
					{
					  "value": "Xã Hội Hoan"
					},
					{
					  "value": "Xã Bắc Việt"
					},
					{
					  "value": "Xã Hoàng Việt"
					},
					{
					  "value": "Xã Gia Miễn"
					},
					{
					  "value": "Xã Thành Hòa"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Hoàng Văn Thụ"
					},
					{
					  "value": "Xã Nhạc Kỳ"
					}
				  ]
				},
				{
				  "value": "Huyện Cao Lộc",
				  "code": 183,
				  "wards": [
					{
					  "value": "Thị trấn Đồng Đăng"
					},
					{
					  "value": "Thị trấn Cao Lộc"
					},
					{
					  "value": "Xã Bảo Lâm"
					},
					{
					  "value": "Xã Thanh Lòa"
					},
					{
					  "value": "Xã Cao Lâu"
					},
					{
					  "value": "Xã Thạch Đạn"
					},
					{
					  "value": "Xã Xuất Lễ"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Thụy Hùng"
					},
					{
					  "value": "Xã Lộc Yên"
					},
					{
					  "value": "Xã Phú Xá"
					},
					{
					  "value": "Xã Bình Trung"
					},
					{
					  "value": "Xã Hải Yến"
					},
					{
					  "value": "Xã Hòa Cư"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Công Sơn"
					},
					{
					  "value": "Xã Gia Cát"
					},
					{
					  "value": "Xã Mẫu Sơn"
					},
					{
					  "value": "Xã Xuân Long"
					},
					{
					  "value": "Xã Tân Liên"
					},
					{
					  "value": "Xã Yên Trạch"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Quan",
				  "code": 184,
				  "wards": [
					{
					  "value": "Thị trấn Văn Quan"
					},
					{
					  "value": "Xã Trấn Ninh"
					},
					{
					  "value": "Xã Liên Hội"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Tú Xuyên"
					},
					{
					  "value": "Xã Điềm He"
					},
					{
					  "value": "Xã An Sơn"
					},
					{
					  "value": "Xã Khánh Khê"
					},
					{
					  "value": "Xã Lương Năng"
					},
					{
					  "value": "Xã Đồng Giáp"
					},
					{
					  "value": "Xã Bình Phúc"
					},
					{
					  "value": "Xã Tràng Các"
					},
					{
					  "value": "Xã Tân Đoàn"
					},
					{
					  "value": "Xã Tri Lễ"
					},
					{
					  "value": "Xã Tràng Phái"
					},
					{
					  "value": "Xã Yên Phúc"
					},
					{
					  "value": "Xã Hữu Lễ"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Sơn",
				  "code": 185,
				  "wards": [
					{
					  "value": "Thị trấn Bắc Sơn"
					},
					{
					  "value": "Xã Long Đống"
					},
					{
					  "value": "Xã Vạn Thủy"
					},
					{
					  "value": "Xã Đồng ý"
					},
					{
					  "value": "Xã Tân Tri"
					},
					{
					  "value": "Xã Bắc Quỳnh"
					},
					{
					  "value": "Xã Hưng Vũ"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Vũ Sơn"
					},
					{
					  "value": "Xã Chiêu Vũ"
					},
					{
					  "value": "Xã Tân Hương"
					},
					{
					  "value": "Xã Chiến Thắng"
					},
					{
					  "value": "Xã Vũ Lăng"
					},
					{
					  "value": "Xã Trấn Yên"
					},
					{
					  "value": "Xã Vũ Lễ"
					},
					{
					  "value": "Xã Nhất Hòa"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Nhất Tiến"
					}
				  ]
				},
				{
				  "value": "Huyện Hữu Lũng",
				  "code": 186,
				  "wards": [
					{
					  "value": "Thị trấn Hữu Lũng"
					},
					{
					  "value": "Xã Hữu Liên"
					},
					{
					  "value": "Xã Yên Bình"
					},
					{
					  "value": "Xã Quyết Thắng"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Yên Thịnh"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Thiện Tân"
					},
					{
					  "value": "Xã Yên Vượng"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Nhật Tiến"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Đồng Tân"
					},
					{
					  "value": "Xã Cai Kinh"
					},
					{
					  "value": "Xã Hòa Lạc"
					},
					{
					  "value": "Xã Vân Nham"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Minh Sơn"
					},
					{
					  "value": "Xã Hồ Sơn"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Minh Hòa"
					},
					{
					  "value": "Xã Hòa Thắng"
					}
				  ]
				},
				{
				  "value": "Huyện Chi Lăng",
				  "code": 187,
				  "wards": [
					{
					  "value": "Thị trấn Đồng Mỏ"
					},
					{
					  "value": "Thị trấn Chi Lăng"
					},
					{
					  "value": "Xã Vân An"
					},
					{
					  "value": "Xã Vân Thủy"
					},
					{
					  "value": "Xã Gia Lộc"
					},
					{
					  "value": "Xã Bắc Thủy"
					},
					{
					  "value": "Xã Chiến Thắng"
					},
					{
					  "value": "Xã Mai Sao"
					},
					{
					  "value": "Xã Bằng Hữu"
					},
					{
					  "value": "Xã Thượng Cường"
					},
					{
					  "value": "Xã Bằng Mạc"
					},
					{
					  "value": "Xã Nhân Lý"
					},
					{
					  "value": "Xã Lâm Sơn"
					},
					{
					  "value": "Xã Liên Sơn"
					},
					{
					  "value": "Xã Vạn Linh"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Hữu Kiên"
					},
					{
					  "value": "Xã Quan Sơn"
					},
					{
					  "value": "Xã Y Tịch"
					},
					{
					  "value": "Xã Chi Lăng"
					}
				  ]
				},
				{
				  "value": "Huyện Lộc Bình",
				  "code": 188,
				  "wards": [
					{
					  "value": "Thị trấn Na Dương"
					},
					{
					  "value": "Thị trấn Lộc Bình"
					},
					{
					  "value": "Xã Mẫu Sơn"
					},
					{
					  "value": "Xã Yên Khoái"
					},
					{
					  "value": "Xã Khánh Xuân"
					},
					{
					  "value": "Xã Tú Mịch"
					},
					{
					  "value": "Xã Hữu Khánh"
					},
					{
					  "value": "Xã Đồng Bục"
					},
					{
					  "value": "Xã Tam Gia"
					},
					{
					  "value": "Xã Tú Đoạn"
					},
					{
					  "value": "Xã Khuất Xá"
					},
					{
					  "value": "Xã Tĩnh Bắc"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Sàn Viên"
					},
					{
					  "value": "Xã Đông Quan"
					},
					{
					  "value": "Xã Minh Hiệp"
					},
					{
					  "value": "Xã Hữu Lân"
					},
					{
					  "value": "Xã Lợi Bác"
					},
					{
					  "value": "Xã Nam Quan"
					},
					{
					  "value": "Xã Xuân Dương"
					},
					{
					  "value": "Xã Ái Quốc"
					}
				  ]
				},
				{
				  "value": "Huyện Đình Lập",
				  "code": 189,
				  "wards": [
					{
					  "value": "Thị trấn Đình Lập"
					},
					{
					  "value": "Thị trấn NT Thái Bình"
					},
					{
					  "value": "Xã Bắc Xa"
					},
					{
					  "value": "Xã Bính Xá"
					},
					{
					  "value": "Xã Kiên Mộc"
					},
					{
					  "value": "Xã Đình Lập"
					},
					{
					  "value": "Xã Thái Bình"
					},
					{
					  "value": "Xã Cường Lợi"
					},
					{
					  "value": "Xã Châu Sơn"
					},
					{
					  "value": "Xã Lâm Ca"
					},
					{
					  "value": "Xã Đồng Thắng"
					},
					{
					  "value": "Xã Bắc Lãng"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Quảng Ninh",
			  "code": 22,
			  "districts": [
				{
				  "value": "Thành phố Hạ Long",
				  "code": 193,
				  "wards": [
					{
					  "value": "Phường Hà Khánh"
					},
					{
					  "value": "Phường Hà Phong"
					},
					{
					  "value": "Phường Hà Khẩu"
					},
					{
					  "value": "Phường Cao Xanh"
					},
					{
					  "value": "Phường Giếng Đáy"
					},
					{
					  "value": "Phường Hà Tu"
					},
					{
					  "value": "Phường Hà Trung"
					},
					{
					  "value": "Phường Hà Lầm"
					},
					{
					  "value": "Phường Bãi Cháy"
					},
					{
					  "value": "Phường Cao Thắng"
					},
					{
					  "value": "Phường Hùng Thắng"
					},
					{
					  "value": "Phường Yết Kiêu"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Hồng Hải"
					},
					{
					  "value": "Phường Hồng Gai"
					},
					{
					  "value": "Phường Bạch Đằng"
					},
					{
					  "value": "Phường Hồng Hà"
					},
					{
					  "value": "Phường Tuần Châu"
					},
					{
					  "value": "Phường Việt Hưng"
					},
					{
					  "value": "Phường Đại Yên"
					},
					{
					  "value": "Phường Hoành Bồ"
					},
					{
					  "value": "Xã Kỳ Thượng"
					},
					{
					  "value": "Xã Đồng Sơn"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Đồng Lâm"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Vũ Oai"
					},
					{
					  "value": "Xã Dân Chủ"
					},
					{
					  "value": "Xã Quảng La"
					},
					{
					  "value": "Xã Bằng Cả"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Sơn Dương"
					},
					{
					  "value": "Xã Lê Lợi"
					}
				  ]
				},
				{
				  "value": "Thành phố Móng Cái",
				  "code": 194,
				  "wards": [
					{
					  "value": "Phường Ka Long"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Ninh Dương"
					},
					{
					  "value": "Phường Hoà Lạc"
					},
					{
					  "value": "Phường Trà Cổ"
					},
					{
					  "value": "Xã Hải Sơn"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Hải Đông"
					},
					{
					  "value": "Xã Hải Tiến"
					},
					{
					  "value": "Phường Hải Yên"
					},
					{
					  "value": "Xã Quảng Nghĩa"
					},
					{
					  "value": "Phường Hải Hoà"
					},
					{
					  "value": "Xã Hải Xuân"
					},
					{
					  "value": "Xã Vạn Ninh"
					},
					{
					  "value": "Phường Bình Ngọc"
					},
					{
					  "value": "Xã Vĩnh Trung"
					},
					{
					  "value": "Xã Vĩnh Thực"
					}
				  ]
				},
				{
				  "value": "Thành phố Cẩm Phả",
				  "code": 195,
				  "wards": [
					{
					  "value": "Phường Mông Dương"
					},
					{
					  "value": "Phường Cửa Ông"
					},
					{
					  "value": "Phường Cẩm Sơn"
					},
					{
					  "value": "Phường Cẩm Đông"
					},
					{
					  "value": "Phường Cẩm Phú"
					},
					{
					  "value": "Phường Cẩm Tây"
					},
					{
					  "value": "Phường Quang Hanh"
					},
					{
					  "value": "Phường Cẩm Thịnh"
					},
					{
					  "value": "Phường Cẩm Thủy"
					},
					{
					  "value": "Phường Cẩm Thạch"
					},
					{
					  "value": "Phường Cẩm Thành"
					},
					{
					  "value": "Phường Cẩm Trung"
					},
					{
					  "value": "Phường Cẩm Bình"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Cẩm Hải"
					},
					{
					  "value": "Xã Dương Huy"
					}
				  ]
				},
				{
				  "value": "Thành phố Uông Bí",
				  "code": 196,
				  "wards": [
					{
					  "value": "Phường Vàng Danh"
					},
					{
					  "value": "Phường Thanh Sơn"
					},
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Trưng Vương"
					},
					{
					  "value": "Phường Nam Khê"
					},
					{
					  "value": "Phường Yên Thanh"
					},
					{
					  "value": "Xã Thượng Yên Công"
					},
					{
					  "value": "Phường Phương Đông"
					},
					{
					  "value": "Phường Phương Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Liêu",
				  "code": 198,
				  "wards": [
					{
					  "value": "Thị trấn Bình Liêu"
					},
					{
					  "value": "Xã Hoành Mô"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Đồng Văn"
					},
					{
					  "value": "Xã Vô Ngại"
					},
					{
					  "value": "Xã Lục Hồn"
					},
					{
					  "value": "Xã Húc Động"
					}
				  ]
				},
				{
				  "value": "Huyện Tiên Yên",
				  "code": 199,
				  "wards": [
					{
					  "value": "Thị trấn Tiên Yên"
					},
					{
					  "value": "Xã Hà Lâu"
					},
					{
					  "value": "Xã Đại Dực"
					},
					{
					  "value": "Xã Phong Dụ"
					},
					{
					  "value": "Xã Điền Xá"
					},
					{
					  "value": "Xã Đông Ngũ"
					},
					{
					  "value": "Xã Yên Than"
					},
					{
					  "value": "Xã Đông Hải"
					},
					{
					  "value": "Xã Hải Lạng"
					},
					{
					  "value": "Xã Tiên Lãng"
					},
					{
					  "value": "Xã Đồng Rui"
					}
				  ]
				},
				{
				  "value": "Huyện Đầm Hà",
				  "code": 200,
				  "wards": [
					{
					  "value": "Thị trấn Đầm Hà"
					},
					{
					  "value": "Xã Quảng Lâm"
					},
					{
					  "value": "Xã Quảng An"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Dực Yên"
					},
					{
					  "value": "Xã Quảng Tân"
					},
					{
					  "value": "Xã Đầm Hà"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Đại Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Hải Hà",
				  "code": 201,
				  "wards": [
					{
					  "value": "Thị trấn Quảng Hà"
					},
					{
					  "value": "Xã Quảng Đức"
					},
					{
					  "value": "Xã Quảng Sơn"
					},
					{
					  "value": "Xã Quảng Thành"
					},
					{
					  "value": "Xã Quảng Thịnh"
					},
					{
					  "value": "Xã Quảng Minh"
					},
					{
					  "value": "Xã Quảng Chính"
					},
					{
					  "value": "Xã Quảng Long"
					},
					{
					  "value": "Xã Đường Hoa"
					},
					{
					  "value": "Xã Quảng Phong"
					},
					{
					  "value": "Xã Cái Chiên"
					}
				  ]
				},
				{
				  "value": "Huyện Ba Chẽ",
				  "code": 202,
				  "wards": [
					{
					  "value": "Thị trấn Ba Chẽ"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Thanh Lâm"
					},
					{
					  "value": "Xã Đạp Thanh"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Lương Mông"
					},
					{
					  "value": "Xã Đồn Đạc"
					},
					{
					  "value": "Xã Minh Cầm"
					}
				  ]
				},
				{
				  "value": "Huyện Vân Đồn",
				  "code": 203,
				  "wards": [
					{
					  "value": "Thị trấn Cái Rồng"
					},
					{
					  "value": "Xã Đài Xuyên"
					},
					{
					  "value": "Xã Bình Dân"
					},
					{
					  "value": "Xã Vạn Yên"
					},
					{
					  "value": "Xã Minh Châu"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Hạ Long"
					},
					{
					  "value": "Xã Đông Xá"
					},
					{
					  "value": "Xã Bản Sen"
					},
					{
					  "value": "Xã Thắng Lợi"
					},
					{
					  "value": "Xã Quan Lạn"
					},
					{
					  "value": "Xã Ngọc Vừng"
					}
				  ]
				},
				{
				  "value": "Thị xã Đông Triều",
				  "code": 205,
				  "wards": [
					{
					  "value": "Phường Mạo Khê"
					},
					{
					  "value": "Phường Đông Triều"
					},
					{
					  "value": "Xã An Sinh"
					},
					{
					  "value": "Xã Tràng Lương"
					},
					{
					  "value": "Xã Bình Khê"
					},
					{
					  "value": "Xã Việt Dân"
					},
					{
					  "value": "Xã Tân Việt"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Phường Đức Chính"
					},
					{
					  "value": "Phường Tràng An"
					},
					{
					  "value": "Xã Nguyễn Huệ"
					},
					{
					  "value": "Xã Thủy An"
					},
					{
					  "value": "Phường Xuân Sơn"
					},
					{
					  "value": "Xã Hồng Thái Tây"
					},
					{
					  "value": "Xã Hồng Thái Đông"
					},
					{
					  "value": "Phường Hoàng Quế"
					},
					{
					  "value": "Phường Yên Thọ"
					},
					{
					  "value": "Phường Hồng Phong"
					},
					{
					  "value": "Phường Kim Sơn"
					},
					{
					  "value": "Phường Hưng Đạo"
					},
					{
					  "value": "Xã Yên Đức"
					}
				  ]
				},
				{
				  "value": "Thị xã Quảng Yên",
				  "code": 206,
				  "wards": [
					{
					  "value": "Phường Quảng Yên"
					},
					{
					  "value": "Phường Đông Mai"
					},
					{
					  "value": "Phường Minh Thành"
					},
					{
					  "value": "Xã Sông Khoai"
					},
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Phường Cộng Hòa"
					},
					{
					  "value": "Xã Tiền An"
					},
					{
					  "value": "Xã Hoàng Tân"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Yên Giang"
					},
					{
					  "value": "Phường Nam Hoà"
					},
					{
					  "value": "Phường Hà An"
					},
					{
					  "value": "Xã Cẩm La"
					},
					{
					  "value": "Phường Phong Hải"
					},
					{
					  "value": "Phường Yên Hải"
					},
					{
					  "value": "Xã Liên Hòa"
					},
					{
					  "value": "Phường Phong Cốc"
					},
					{
					  "value": "Xã Liên Vị"
					},
					{
					  "value": "Xã Tiền Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Cô Tô",
				  "code": 207,
				  "wards": [
					{
					  "value": "Thị trấn Cô Tô"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Thanh Lân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bắc Giang",
			  "code": 24,
			  "districts": [
				{
				  "value": "Thành phố Bắc Giang",
				  "code": 213,
				  "wards": [
					{
					  "value": "Phường Thọ Xương"
					},
					{
					  "value": "Phường Trần Nguyên Hãn"
					},
					{
					  "value": "Phường Ngô Quyền"
					},
					{
					  "value": "Phường Hoàng Văn Thụ"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Mỹ Độ"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Xã Song Mai"
					},
					{
					  "value": "Phường Xương Giang"
					},
					{
					  "value": "Phường Đa Mai"
					},
					{
					  "value": "Phường Dĩnh Kế"
					},
					{
					  "value": "Xã Dĩnh Trì"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Đồng Sơn"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Song Khê"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Thế",
				  "code": 215,
				  "wards": [
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Canh Nậu"
					},
					{
					  "value": "Xã Xuân Lương"
					},
					{
					  "value": "Xã Tam Tiến"
					},
					{
					  "value": "Xã Đồng Vương"
					},
					{
					  "value": "Xã Đồng Hưu"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Tiến Thắng"
					},
					{
					  "value": "Xã Hồng Kỳ"
					},
					{
					  "value": "Xã Đồng Lạc"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Hương Vĩ"
					},
					{
					  "value": "Xã Đồng Kỳ"
					},
					{
					  "value": "Xã An Thượng"
					},
					{
					  "value": "Thị trấn Phồn Xương"
					},
					{
					  "value": "Xã Tân Sỏi"
					},
					{
					  "value": "Thị trấn Bố Hạ"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Yên",
				  "code": 216,
				  "wards": [
					{
					  "value": "Xã Lan Giới"
					},
					{
					  "value": "Thị trấn Nhã Nam"
					},
					{
					  "value": "Xã Tân Trung"
					},
					{
					  "value": "Xã Đại Hóa"
					},
					{
					  "value": "Xã Quang Tiến"
					},
					{
					  "value": "Xã Phúc Sơn"
					},
					{
					  "value": "Xã An Dương"
					},
					{
					  "value": "Xã Phúc Hòa"
					},
					{
					  "value": "Xã Liên Sơn"
					},
					{
					  "value": "Xã Hợp Đức"
					},
					{
					  "value": "Xã Lam Cốt"
					},
					{
					  "value": "Xã Cao Xá"
					},
					{
					  "value": "Thị trấn Cao Thượng"
					},
					{
					  "value": "Xã Việt Ngọc"
					},
					{
					  "value": "Xã Song Vân"
					},
					{
					  "value": "Xã Ngọc Châu"
					},
					{
					  "value": "Xã Ngọc Vân"
					},
					{
					  "value": "Xã Việt Lập"
					},
					{
					  "value": "Xã Liên Chung"
					},
					{
					  "value": "Xã Ngọc Thiện"
					},
					{
					  "value": "Xã Ngọc Lý"
					},
					{
					  "value": "Xã Quế Nham"
					}
				  ]
				},
				{
				  "value": "Huyện Lạng Giang",
				  "code": 217,
				  "wards": [
					{
					  "value": "Thị trấn Vôi"
					},
					{
					  "value": "Xã Nghĩa Hòa"
					},
					{
					  "value": "Xã Nghĩa Hưng"
					},
					{
					  "value": "Xã Quang Thịnh"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Đào Mỹ"
					},
					{
					  "value": "Xã Tiên Lục"
					},
					{
					  "value": "Xã An Hà"
					},
					{
					  "value": "Thị trấn Kép"
					},
					{
					  "value": "Xã Mỹ Hà"
					},
					{
					  "value": "Xã Hương Lạc"
					},
					{
					  "value": "Xã Dương Đức"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã Yên Mỹ"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Mỹ Thái"
					},
					{
					  "value": "Xã Xương Lâm"
					},
					{
					  "value": "Xã Xuân Hương"
					},
					{
					  "value": "Xã Tân Dĩnh"
					},
					{
					  "value": "Xã Đại Lâm"
					},
					{
					  "value": "Xã Thái Đào"
					}
				  ]
				},
				{
				  "value": "Huyện Lục Nam",
				  "code": 218,
				  "wards": [
					{
					  "value": "Thị trấn Đồi Ngô"
					},
					{
					  "value": "Xã Đông Hưng"
					},
					{
					  "value": "Xã Đông Phú"
					},
					{
					  "value": "Xã Tam Dị"
					},
					{
					  "value": "Xã Bảo Sơn"
					},
					{
					  "value": "Xã Bảo Đài"
					},
					{
					  "value": "Xã Thanh Lâm"
					},
					{
					  "value": "Xã Tiên Nha"
					},
					{
					  "value": "Xã Trường Giang"
					},
					{
					  "value": "Thị trấn Phương Sơn"
					},
					{
					  "value": "Xã Chu Điện"
					},
					{
					  "value": "Xã Cương Sơn"
					},
					{
					  "value": "Xã Nghĩa Phương"
					},
					{
					  "value": "Xã Vô Tranh"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Lan Mẫu"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Khám Lạng"
					},
					{
					  "value": "Xã Huyền Sơn"
					},
					{
					  "value": "Xã Trường Sơn"
					},
					{
					  "value": "Xã Lục Sơn"
					},
					{
					  "value": "Xã Bắc Lũng"
					},
					{
					  "value": "Xã Vũ Xá"
					},
					{
					  "value": "Xã Cẩm Lý"
					},
					{
					  "value": "Xã Đan Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Lục Ngạn",
				  "code": 219,
				  "wards": [
					{
					  "value": "Thị trấn Chũ"
					},
					{
					  "value": "Xã Cấm Sơn"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Phong Minh"
					},
					{
					  "value": "Xã Phong Vân"
					},
					{
					  "value": "Xã Xa Lý"
					},
					{
					  "value": "Xã Hộ Đáp"
					},
					{
					  "value": "Xã Sơn Hải"
					},
					{
					  "value": "Xã Thanh Hải"
					},
					{
					  "value": "Xã Kiên Lao"
					},
					{
					  "value": "Xã Biên Sơn"
					},
					{
					  "value": "Xã Kiên Thành"
					},
					{
					  "value": "Xã Hồng Giang"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Xã Tân Hoa"
					},
					{
					  "value": "Xã Giáp Sơn"
					},
					{
					  "value": "Xã Biển Động"
					},
					{
					  "value": "Xã Quý Sơn"
					},
					{
					  "value": "Xã Trù Hựu"
					},
					{
					  "value": "Xã Phì Điền"
					},
					{
					  "value": "Xã Tân Quang"
					},
					{
					  "value": "Xã Đồng Cốc"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Phú Nhuận"
					},
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Nam Dương"
					},
					{
					  "value": "Xã Tân Mộc"
					},
					{
					  "value": "Xã Đèo Gia"
					},
					{
					  "value": "Xã Phượng Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Động",
				  "code": 220,
				  "wards": [
					{
					  "value": "Thị trấn An Châu"
					},
					{
					  "value": "Thị trấn Tây Yên Tử"
					},
					{
					  "value": "Xã Vân Sơn"
					},
					{
					  "value": "Xã Hữu Sản"
					},
					{
					  "value": "Xã Đại Sơn"
					},
					{
					  "value": "Xã Phúc Sơn"
					},
					{
					  "value": "Xã Giáo Liêm"
					},
					{
					  "value": "Xã Cẩm Đàn"
					},
					{
					  "value": "Xã An Lạc"
					},
					{
					  "value": "Xã Vĩnh An"
					},
					{
					  "value": "Xã Yên Định"
					},
					{
					  "value": "Xã Lệ Viễn"
					},
					{
					  "value": "Xã An Bá"
					},
					{
					  "value": "Xã Tuấn Đạo"
					},
					{
					  "value": "Xã Dương Hưu"
					},
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Thanh Luận"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Dũng",
				  "code": 221,
				  "wards": [
					{
					  "value": "Thị trấn Nham Biền"
					},
					{
					  "value": "Thị trấn Tân An"
					},
					{
					  "value": "Xã Lão Hộ"
					},
					{
					  "value": "Xã Hương Gián"
					},
					{
					  "value": "Xã Quỳnh Sơn"
					},
					{
					  "value": "Xã Nội Hoàng"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Xuân Phú"
					},
					{
					  "value": "Xã Tân Liễu"
					},
					{
					  "value": "Xã Trí Yên"
					},
					{
					  "value": "Xã Lãng Sơn"
					},
					{
					  "value": "Xã Yên Lư"
					},
					{
					  "value": "Xã Tiến Dũng"
					},
					{
					  "value": "Xã Đức Giang"
					},
					{
					  "value": "Xã Cảnh Thụy"
					},
					{
					  "value": "Xã Tư Mại"
					},
					{
					  "value": "Xã Đồng Việt"
					},
					{
					  "value": "Xã Đồng Phúc"
					}
				  ]
				},
				{
				  "value": "Huyện Việt Yên",
				  "code": 222,
				  "wards": [
					{
					  "value": "Xã Thượng Lan"
					},
					{
					  "value": "Xã Việt Tiến"
					},
					{
					  "value": "Xã Nghĩa Trung"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Xã Hương Mai"
					},
					{
					  "value": "Xã Tự Lạn"
					},
					{
					  "value": "Thị trấn Bích Động"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Tiên Sơn"
					},
					{
					  "value": "Xã Tăng Tiến"
					},
					{
					  "value": "Xã Quảng Minh"
					},
					{
					  "value": "Thị trấn Nếnh"
					},
					{
					  "value": "Xã Ninh Sơn"
					},
					{
					  "value": "Xã Vân Trung"
					},
					{
					  "value": "Xã Vân Hà"
					},
					{
					  "value": "Xã Quang Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Hiệp Hòa",
				  "code": 223,
				  "wards": [
					{
					  "value": "Xã Đồng Tân"
					},
					{
					  "value": "Xã Thanh Vân"
					},
					{
					  "value": "Xã Hoàng Lương"
					},
					{
					  "value": "Xã Hoàng Vân"
					},
					{
					  "value": "Xã Hoàng Thanh"
					},
					{
					  "value": "Xã Hoàng An"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Thái Sơn"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Thị trấn Thắng"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Lương Phong"
					},
					{
					  "value": "Xã Hùng Sơn"
					},
					{
					  "value": "Xã Đại Thành"
					},
					{
					  "value": "Xã Thường Thắng"
					},
					{
					  "value": "Xã Hợp Thịnh"
					},
					{
					  "value": "Xã Danh Thắng"
					},
					{
					  "value": "Xã Mai Trung"
					},
					{
					  "value": "Xã Đoan Bái"
					},
					{
					  "value": "Thị trấn Bắc Lý"
					},
					{
					  "value": "Xã Xuân Cẩm"
					},
					{
					  "value": "Xã Hương Lâm"
					},
					{
					  "value": "Xã Đông Lỗ"
					},
					{
					  "value": "Xã Châu Minh"
					},
					{
					  "value": "Xã Mai Đình"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Phú Thọ",
			  "code": 25,
			  "districts": [
				{
				  "value": "Thành phố Việt Trì",
				  "code": 227,
				  "wards": [
					{
					  "value": "Phường Dữu Lâu"
					},
					{
					  "value": "Phường Vân Cơ"
					},
					{
					  "value": "Phường Nông Trang"
					},
					{
					  "value": "Phường Tân Dân"
					},
					{
					  "value": "Phường Gia Cẩm"
					},
					{
					  "value": "Phường Tiên Cát"
					},
					{
					  "value": "Phường Thọ Sơn"
					},
					{
					  "value": "Phường Thanh Miếu"
					},
					{
					  "value": "Phường Bạch Hạc"
					},
					{
					  "value": "Phường Bến Gót"
					},
					{
					  "value": "Phường Vân Phú"
					},
					{
					  "value": "Xã Phượng Lâu"
					},
					{
					  "value": "Xã Thụy Vân"
					},
					{
					  "value": "Phường Minh Phương"
					},
					{
					  "value": "Xã Trưng Vương"
					},
					{
					  "value": "Phường Minh Nông"
					},
					{
					  "value": "Xã Sông Lô"
					},
					{
					  "value": "Xã Kim Đức"
					},
					{
					  "value": "Xã Hùng Lô"
					},
					{
					  "value": "Xã Hy Cương"
					},
					{
					  "value": "Xã Chu Hóa"
					},
					{
					  "value": "Xã Thanh Đình"
					}
				  ]
				},
				{
				  "value": "Thị xã Phú Thọ",
				  "code": 228,
				  "wards": [
					{
					  "value": "Phường Hùng Vương"
					},
					{
					  "value": "Phường Phong Châu"
					},
					{
					  "value": "Phường Âu Cơ"
					},
					{
					  "value": "Xã Hà Lộc"
					},
					{
					  "value": "Xã Phú Hộ"
					},
					{
					  "value": "Xã Văn Lung"
					},
					{
					  "value": "Xã Thanh Minh"
					},
					{
					  "value": "Xã Hà Thạch"
					},
					{
					  "value": "Phường Thanh Vinh"
					}
				  ]
				},
				{
				  "value": "Huyện Đoan Hùng",
				  "code": 230,
				  "wards": [
					{
					  "value": "Thị trấn Đoan Hùng"
					},
					{
					  "value": "Xã Hùng Xuyên"
					},
					{
					  "value": "Xã Bằng Luân"
					},
					{
					  "value": "Xã Vân Du"
					},
					{
					  "value": "Xã Phú Lâm"
					},
					{
					  "value": "Xã Minh Lương"
					},
					{
					  "value": "Xã Bằng Doãn"
					},
					{
					  "value": "Xã Chí Đám"
					},
					{
					  "value": "Xã Phúc Lai"
					},
					{
					  "value": "Xã Ngọc Quan"
					},
					{
					  "value": "Xã Hợp Nhất"
					},
					{
					  "value": "Xã Sóc Đăng"
					},
					{
					  "value": "Xã Tây Cốc"
					},
					{
					  "value": "Xã Yên Kiện"
					},
					{
					  "value": "Xã Hùng Long"
					},
					{
					  "value": "Xã Vụ Quang"
					},
					{
					  "value": "Xã Vân Đồn"
					},
					{
					  "value": "Xã Tiêu Sơn"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Minh Phú"
					},
					{
					  "value": "Xã Chân Mộng"
					},
					{
					  "value": "Xã Ca Đình"
					}
				  ]
				},
				{
				  "value": "Huyện Hạ Hoà",
				  "code": 231,
				  "wards": [
					{
					  "value": "Thị trấn Hạ Hoà"
					},
					{
					  "value": "Xã Đại Phạm"
					},
					{
					  "value": "Xã Đan Thượng"
					},
					{
					  "value": "Xã Hà Lương"
					},
					{
					  "value": "Xã Tứ Hiệp"
					},
					{
					  "value": "Xã Hiền Lương"
					},
					{
					  "value": "Xã Phương Viên"
					},
					{
					  "value": "Xã Gia Điền"
					},
					{
					  "value": "Xã Ấm Hạ"
					},
					{
					  "value": "Xã Hương Xạ"
					},
					{
					  "value": "Xã Xuân Áng"
					},
					{
					  "value": "Xã Yên Kỳ"
					},
					{
					  "value": "Xã Minh Hạc"
					},
					{
					  "value": "Xã Lang Sơn"
					},
					{
					  "value": "Xã Bằng Giã"
					},
					{
					  "value": "Xã Yên Luật"
					},
					{
					  "value": "Xã Vô Tranh"
					},
					{
					  "value": "Xã Văn Lang"
					},
					{
					  "value": "Xã Minh Côi"
					},
					{
					  "value": "Xã Vĩnh Chân"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Ba",
				  "code": 232,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Ba"
					},
					{
					  "value": "Xã Vân Lĩnh"
					},
					{
					  "value": "Xã Đông Lĩnh"
					},
					{
					  "value": "Xã Đại An"
					},
					{
					  "value": "Xã Hanh Cù"
					},
					{
					  "value": "Xã Đồng Xuân"
					},
					{
					  "value": "Xã Quảng Yên"
					},
					{
					  "value": "Xã Ninh Dân"
					},
					{
					  "value": "Xã Võ Lao"
					},
					{
					  "value": "Xã Khải Xuân"
					},
					{
					  "value": "Xã Mạn Lạn"
					},
					{
					  "value": "Xã Hoàng Cương"
					},
					{
					  "value": "Xã Chí Tiên"
					},
					{
					  "value": "Xã Đông Thành"
					},
					{
					  "value": "Xã Sơn Cương"
					},
					{
					  "value": "Xã Thanh Hà"
					},
					{
					  "value": "Xã Đỗ Sơn"
					},
					{
					  "value": "Xã Đỗ Xuyên"
					},
					{
					  "value": "Xã Lương Lỗ"
					}
				  ]
				},
				{
				  "value": "Huyện Phù Ninh",
				  "code": 233,
				  "wards": [
					{
					  "value": "Thị trấn Phong Châu"
					},
					{
					  "value": "Xã Phú Mỹ"
					},
					{
					  "value": "Xã Lệ Mỹ"
					},
					{
					  "value": "Xã Liên Hoa"
					},
					{
					  "value": "Xã Trạm Thản"
					},
					{
					  "value": "Xã Trị Quận"
					},
					{
					  "value": "Xã Trung Giáp"
					},
					{
					  "value": "Xã Tiên Phú"
					},
					{
					  "value": "Xã Hạ Giáp"
					},
					{
					  "value": "Xã Bảo Thanh"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Gia Thanh"
					},
					{
					  "value": "Xã Tiên Du"
					},
					{
					  "value": "Xã Phú Nham"
					},
					{
					  "value": "Xã An Đạo"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Phù Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Lập",
				  "code": 234,
				  "wards": [
					{
					  "value": "Thị trấn Yên Lập"
					},
					{
					  "value": "Xã Mỹ Lung"
					},
					{
					  "value": "Xã Mỹ Lương"
					},
					{
					  "value": "Xã Lương Sơn"
					},
					{
					  "value": "Xã Xuân An"
					},
					{
					  "value": "Xã Xuân Viên"
					},
					{
					  "value": "Xã Xuân Thủy"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Hưng Long"
					},
					{
					  "value": "Xã Nga Hoàng"
					},
					{
					  "value": "Xã Đồng Lạc"
					},
					{
					  "value": "Xã Thượng Long"
					},
					{
					  "value": "Xã Đồng Thịnh"
					},
					{
					  "value": "Xã Phúc Khánh"
					},
					{
					  "value": "Xã Minh Hòa"
					},
					{
					  "value": "Xã Ngọc Lập"
					},
					{
					  "value": "Xã Ngọc Đồng"
					}
				  ]
				},
				{
				  "value": "Huyện Cẩm Khê",
				  "code": 235,
				  "wards": [
					{
					  "value": "Thị trấn Cẩm Khê"
					},
					{
					  "value": "Xã Tiên Lương"
					},
					{
					  "value": "Xã Tuy Lộc"
					},
					{
					  "value": "Xã Ngô Xá"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Phượng Vĩ"
					},
					{
					  "value": "Xã Thụy Liễu"
					},
					{
					  "value": "Xã Tùng Khê"
					},
					{
					  "value": "Xã Tam Sơn"
					},
					{
					  "value": "Xã Văn Bán"
					},
					{
					  "value": "Xã Cấp Dẫn"
					},
					{
					  "value": "Xã Xương Thịnh"
					},
					{
					  "value": "Xã Phú Khê"
					},
					{
					  "value": "Xã Sơn Tình"
					},
					{
					  "value": "Xã Yên Tập"
					},
					{
					  "value": "Xã Hương Lung"
					},
					{
					  "value": "Xã Tạ Xá"
					},
					{
					  "value": "Xã Phú Lạc"
					},
					{
					  "value": "Xã Chương Xá"
					},
					{
					  "value": "Xã Hùng Việt"
					},
					{
					  "value": "Xã Văn Khúc"
					},
					{
					  "value": "Xã Yên Dưỡng"
					},
					{
					  "value": "Xã Điêu Lương"
					},
					{
					  "value": "Xã Đồng Lương"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Nông",
				  "code": 236,
				  "wards": [
					{
					  "value": "Thị trấn Hưng Hoá"
					},
					{
					  "value": "Xã Hiền Quan"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Thanh Uyên"
					},
					{
					  "value": "Xã Lam Sơn"
					},
					{
					  "value": "Xã Vạn Xuân"
					},
					{
					  "value": "Xã Quang Húc"
					},
					{
					  "value": "Xã Hương Nộn"
					},
					{
					  "value": "Xã Tề Lễ"
					},
					{
					  "value": "Xã Thọ Văn"
					},
					{
					  "value": "Xã Dị Nậu"
					},
					{
					  "value": "Xã Dân Quyền"
					}
				  ]
				},
				{
				  "value": "Huyện Lâm Thao",
				  "code": 237,
				  "wards": [
					{
					  "value": "Thị trấn Lâm Thao"
					},
					{
					  "value": "Xã Tiên Kiên"
					},
					{
					  "value": "Thị trấn Hùng Sơn"
					},
					{
					  "value": "Xã Xuân Lũng"
					},
					{
					  "value": "Xã Xuân Huy"
					},
					{
					  "value": "Xã Thạch Sơn"
					},
					{
					  "value": "Xã Sơn Vi"
					},
					{
					  "value": "Xã Phùng Nguyên"
					},
					{
					  "value": "Xã Cao Xá"
					},
					{
					  "value": "Xã Vĩnh Lại"
					},
					{
					  "value": "Xã Tứ Xã"
					},
					{
					  "value": "Xã Bản Nguyên"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Sơn",
				  "code": 238,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Sơn"
					},
					{
					  "value": "Xã Sơn Hùng"
					},
					{
					  "value": "Xã Địch Quả"
					},
					{
					  "value": "Xã Giáp Lai"
					},
					{
					  "value": "Xã Thục Luyện"
					},
					{
					  "value": "Xã Võ Miếu"
					},
					{
					  "value": "Xã Thạch Khoán"
					},
					{
					  "value": "Xã Cự Thắng"
					},
					{
					  "value": "Xã Tất Thắng"
					},
					{
					  "value": "Xã Văn Miếu"
					},
					{
					  "value": "Xã Cự Đồng"
					},
					{
					  "value": "Xã Thắng Sơn"
					},
					{
					  "value": "Xã Tân Minh"
					},
					{
					  "value": "Xã Hương Cần"
					},
					{
					  "value": "Xã Khả Cửu"
					},
					{
					  "value": "Xã Đông Cửu"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Yên Lãng"
					},
					{
					  "value": "Xã Yên Lương"
					},
					{
					  "value": "Xã Thượng Cửu"
					},
					{
					  "value": "Xã Lương Nha"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Tinh Nhuệ"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Thuỷ",
				  "code": 239,
				  "wards": [
					{
					  "value": "Xã Đào Xá"
					},
					{
					  "value": "Xã Thạch Đồng"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Xã Tân Phương"
					},
					{
					  "value": "Thị trấn Thanh Thủy"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Bảo Yên"
					},
					{
					  "value": "Xã Đoan Hạ"
					},
					{
					  "value": "Xã Đồng Trung"
					},
					{
					  "value": "Xã Hoàng Xá"
					},
					{
					  "value": "Xã Tu Vũ"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Sơn",
				  "code": 240,
				  "wards": [
					{
					  "value": "Xã Thu Cúc"
					},
					{
					  "value": "Xã Thạch Kiệt"
					},
					{
					  "value": "Xã Thu Ngạc"
					},
					{
					  "value": "Xã Kiệt Sơn"
					},
					{
					  "value": "Xã Đồng Sơn"
					},
					{
					  "value": "Xã Lai Đồng"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Mỹ Thuận"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Xuân Đài"
					},
					{
					  "value": "Xã Minh Đài"
					},
					{
					  "value": "Xã Văn Luông"
					},
					{
					  "value": "Xã Xuân Sơn"
					},
					{
					  "value": "Xã Long Cốc"
					},
					{
					  "value": "Xã Kim Thượng"
					},
					{
					  "value": "Xã Tam Thanh"
					},
					{
					  "value": "Xã Vinh Tiền"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Vĩnh Phúc",
			  "code": 26,
			  "districts": [
				{
				  "value": "Thành phố Vĩnh Yên",
				  "code": 243,
				  "wards": [
					{
					  "value": "Phường Tích Sơn"
					},
					{
					  "value": "Phường Liên Bảo"
					},
					{
					  "value": "Phường Hội Hợp"
					},
					{
					  "value": "Phường Đống Đa"
					},
					{
					  "value": "Phường Ngô Quyền"
					},
					{
					  "value": "Phường Đồng Tâm"
					},
					{
					  "value": "Phường Định Trung"
					},
					{
					  "value": "Phường Khai Quang"
					},
					{
					  "value": "Xã Thanh Trù"
					}
				  ]
				},
				{
				  "value": "Thành phố Phúc Yên",
				  "code": 244,
				  "wards": [
					{
					  "value": "Phường Trưng Trắc"
					},
					{
					  "value": "Phường Hùng Vương"
					},
					{
					  "value": "Phường Trưng Nhị"
					},
					{
					  "value": "Phường Phúc Thắng"
					},
					{
					  "value": "Phường Xuân Hoà"
					},
					{
					  "value": "Phường Đồng Xuân"
					},
					{
					  "value": "Xã Ngọc Thanh"
					},
					{
					  "value": "Xã Cao Minh"
					},
					{
					  "value": "Phường Nam Viêm"
					},
					{
					  "value": "Phường Tiền Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Lập Thạch",
				  "code": 246,
				  "wards": [
					{
					  "value": "Thị trấn Lập Thạch"
					},
					{
					  "value": "Xã Quang Sơn"
					},
					{
					  "value": "Xã Ngọc Mỹ"
					},
					{
					  "value": "Xã Hợp Lý"
					},
					{
					  "value": "Xã Bắc Bình"
					},
					{
					  "value": "Xã Thái Hòa"
					},
					{
					  "value": "Thị trấn Hoa Sơn"
					},
					{
					  "value": "Xã Liễn Sơn"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Vân Trục"
					},
					{
					  "value": "Xã Liên Hòa"
					},
					{
					  "value": "Xã Tử Du"
					},
					{
					  "value": "Xã Bàn Giản"
					},
					{
					  "value": "Xã Xuân Lôi"
					},
					{
					  "value": "Xã Đồng Ích"
					},
					{
					  "value": "Xã Tiên Lữ"
					},
					{
					  "value": "Xã Văn Quán"
					},
					{
					  "value": "Xã Đình Chu"
					},
					{
					  "value": "Xã Triệu Đề"
					},
					{
					  "value": "Xã Sơn Đông"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Dương",
				  "code": 247,
				  "wards": [
					{
					  "value": "Thị trấn Hợp Hòa"
					},
					{
					  "value": "Xã Hoàng Hoa"
					},
					{
					  "value": "Xã Đồng Tĩnh"
					},
					{
					  "value": "Thị trấn Kim Long"
					},
					{
					  "value": "Xã Hướng Đạo"
					},
					{
					  "value": "Xã Đạo Tú"
					},
					{
					  "value": "Xã An Hòa"
					},
					{
					  "value": "Xã Thanh Vân"
					},
					{
					  "value": "Xã Duy Phiên"
					},
					{
					  "value": "Xã Hoàng Đan"
					},
					{
					  "value": "Xã Hoàng Lâu"
					},
					{
					  "value": "Xã Vân Hội"
					},
					{
					  "value": "Xã Hợp Thịnh"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Đảo",
				  "code": 248,
				  "wards": [
					{
					  "value": "Thị trấn Tam Đảo"
					},
					{
					  "value": "Thị trấn Hợp Châu"
					},
					{
					  "value": "Xã Đạo Trù"
					},
					{
					  "value": "Xã Yên Dương"
					},
					{
					  "value": "Xã Bồ Lý"
					},
					{
					  "value": "Thị trấn Đại Đình"
					},
					{
					  "value": "Xã Tam Quan"
					},
					{
					  "value": "Xã Hồ Sơn"
					},
					{
					  "value": "Xã Minh Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Xuyên",
				  "code": 249,
				  "wards": [
					{
					  "value": "Thị trấn Hương Canh"
					},
					{
					  "value": "Thị trấn Gia Khánh"
					},
					{
					  "value": "Xã Trung Mỹ"
					},
					{
					  "value": "Thị trấn Bá Hiến"
					},
					{
					  "value": "Xã Thiện Kế"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Tam Hợp"
					},
					{
					  "value": "Xã Quất Lưu"
					},
					{
					  "value": "Xã Sơn Lôi"
					},
					{
					  "value": "Thị trấn Đạo Đức"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Thị trấn Thanh Lãng"
					},
					{
					  "value": "Xã Phú Xuân"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Lạc",
				  "code": 251,
				  "wards": [
					{
					  "value": "Thị trấn Yên Lạc"
					},
					{
					  "value": "Xã Đồng Cương"
					},
					{
					  "value": "Xã Đồng Văn"
					},
					{
					  "value": "Xã Bình Định"
					},
					{
					  "value": "Xã Trung Nguyên"
					},
					{
					  "value": "Xã Tề Lỗ"
					},
					{
					  "value": "Thị trấn Tam Hồng"
					},
					{
					  "value": "Xã Yên Đồng"
					},
					{
					  "value": "Xã Văn Tiến"
					},
					{
					  "value": "Xã Nguyệt Đức"
					},
					{
					  "value": "Xã Yên Phương"
					},
					{
					  "value": "Xã Hồng Phương"
					},
					{
					  "value": "Xã Trung Kiên"
					},
					{
					  "value": "Xã Liên Châu"
					},
					{
					  "value": "Xã Đại Tự"
					},
					{
					  "value": "Xã Hồng Châu"
					},
					{
					  "value": "Xã Trung Hà"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Tường",
				  "code": 252,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Tường"
					},
					{
					  "value": "Xã Kim Xá"
					},
					{
					  "value": "Xã Yên Bình"
					},
					{
					  "value": "Xã Chấn Hưng"
					},
					{
					  "value": "Xã Nghĩa Hưng"
					},
					{
					  "value": "Xã Yên Lập"
					},
					{
					  "value": "Xã Việt Xuân"
					},
					{
					  "value": "Xã Bồ Sao"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Lũng Hoà"
					},
					{
					  "value": "Xã Cao Đại"
					},
					{
					  "value": "Thị trấn Thổ Tang"
					},
					{
					  "value": "Xã Vĩnh Sơn"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Thượng Trưng"
					},
					{
					  "value": "Xã Vũ Di"
					},
					{
					  "value": "Xã Lý Nhân"
					},
					{
					  "value": "Xã Tuân Chính"
					},
					{
					  "value": "Xã Vân Xuân"
					},
					{
					  "value": "Xã Tam Phúc"
					},
					{
					  "value": "Thị trấn Tứ Trưng"
					},
					{
					  "value": "Xã Ngũ Kiên"
					},
					{
					  "value": "Xã An Tường"
					},
					{
					  "value": "Xã Vĩnh Thịnh"
					},
					{
					  "value": "Xã Phú Đa"
					},
					{
					  "value": "Xã Vĩnh Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Sông Lô",
				  "code": 253,
				  "wards": [
					{
					  "value": "Xã Lãng Công"
					},
					{
					  "value": "Xã Quang Yên"
					},
					{
					  "value": "Xã Bạch Lưu"
					},
					{
					  "value": "Xã Hải Lựu"
					},
					{
					  "value": "Xã Đồng Quế"
					},
					{
					  "value": "Xã Nhân Đạo"
					},
					{
					  "value": "Xã Đôn Nhân"
					},
					{
					  "value": "Xã Phương Khoan"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Nhạo Sơn"
					},
					{
					  "value": "Thị trấn Tam Sơn"
					},
					{
					  "value": "Xã Như Thụy"
					},
					{
					  "value": "Xã Yên Thạch"
					},
					{
					  "value": "Xã Đồng Thịnh"
					},
					{
					  "value": "Xã Tứ Yên"
					},
					{
					  "value": "Xã Đức Bác"
					},
					{
					  "value": "Xã Cao Phong"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bắc Ninh",
			  "code": 27,
			  "districts": [
				{
				  "value": "Thành phố Bắc Ninh",
				  "code": 256,
				  "wards": [
					{
					  "value": "Phường Vũ Ninh"
					},
					{
					  "value": "Phường Đáp Cầu"
					},
					{
					  "value": "Phường Thị Cầu"
					},
					{
					  "value": "Phường Kinh Bắc"
					},
					{
					  "value": "Phường Vệ An"
					},
					{
					  "value": "Phường Tiền An"
					},
					{
					  "value": "Phường Đại Phúc"
					},
					{
					  "value": "Phường Ninh Xá"
					},
					{
					  "value": "Phường Suối Hoa"
					},
					{
					  "value": "Phường Võ Cường"
					},
					{
					  "value": "Phường Hòa Long"
					},
					{
					  "value": "Phường Vạn An"
					},
					{
					  "value": "Phường Khúc Xuyên"
					},
					{
					  "value": "Phường Phong Khê"
					},
					{
					  "value": "Phường Kim Chân"
					},
					{
					  "value": "Phường Vân Dương"
					},
					{
					  "value": "Phường Nam Sơn"
					},
					{
					  "value": "Phường Khắc Niệm"
					},
					{
					  "value": "Phường Hạp Lĩnh"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Phong",
				  "code": 258,
				  "wards": [
					{
					  "value": "Thị trấn Chờ"
					},
					{
					  "value": "Xã Dũng Liệt"
					},
					{
					  "value": "Xã Tam Đa"
					},
					{
					  "value": "Xã Tam Giang"
					},
					{
					  "value": "Xã Yên Trung"
					},
					{
					  "value": "Xã Thụy Hòa"
					},
					{
					  "value": "Xã Hòa Tiến"
					},
					{
					  "value": "Xã Đông Tiến"
					},
					{
					  "value": "Xã Yên Phụ"
					},
					{
					  "value": "Xã Trung Nghĩa"
					},
					{
					  "value": "Xã Đông Phong"
					},
					{
					  "value": "Xã Long Châu"
					},
					{
					  "value": "Xã Văn Môn"
					},
					{
					  "value": "Xã Đông Thọ"
					}
				  ]
				},
				{
				  "value": "Thị xã Quế Võ",
				  "code": 259,
				  "wards": [
					{
					  "value": "Phường Phố Mới"
					},
					{
					  "value": "Xã Việt Thống"
					},
					{
					  "value": "Phường Đại Xuân"
					},
					{
					  "value": "Phường Nhân Hòa"
					},
					{
					  "value": "Phường Bằng An"
					},
					{
					  "value": "Phường Phương Liễu"
					},
					{
					  "value": "Phường Quế Tân"
					},
					{
					  "value": "Phường Phù Lương"
					},
					{
					  "value": "Xã Phù Lãng"
					},
					{
					  "value": "Phường Phượng Mao"
					},
					{
					  "value": "Phường Việt Hùng"
					},
					{
					  "value": "Xã Ngọc Xá"
					},
					{
					  "value": "Xã Châu Phong"
					},
					{
					  "value": "Phường Bồng Lai"
					},
					{
					  "value": "Phường Cách Bi"
					},
					{
					  "value": "Xã Đào Viên"
					},
					{
					  "value": "Xã Yên Giả"
					},
					{
					  "value": "Xã Mộ Đạo"
					},
					{
					  "value": "Xã Đức Long"
					},
					{
					  "value": "Xã Chi Lăng"
					},
					{
					  "value": "Xã Hán Quảng"
					}
				  ]
				},
				{
				  "value": "Huyện Tiên Du",
				  "code": 260,
				  "wards": [
					{
					  "value": "Thị trấn Lim"
					},
					{
					  "value": "Xã Phú Lâm"
					},
					{
					  "value": "Xã Nội Duệ"
					},
					{
					  "value": "Xã Liên Bão"
					},
					{
					  "value": "Xã Hiên Vân"
					},
					{
					  "value": "Xã Hoàn Sơn"
					},
					{
					  "value": "Xã Lạc Vệ"
					},
					{
					  "value": "Xã Việt Đoàn"
					},
					{
					  "value": "Xã Phật Tích"
					},
					{
					  "value": "Xã Tân Chi"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Tri Phương"
					},
					{
					  "value": "Xã Minh Đạo"
					},
					{
					  "value": "Xã Cảnh Hưng"
					}
				  ]
				},
				{
				  "value": "Thành phố Từ Sơn",
				  "code": 261,
				  "wards": [
					{
					  "value": "Phường Đông Ngàn"
					},
					{
					  "value": "Phường Tam Sơn"
					},
					{
					  "value": "Phường Hương Mạc"
					},
					{
					  "value": "Phường Tương Giang"
					},
					{
					  "value": "Phường Phù Khê"
					},
					{
					  "value": "Phường Đồng Kỵ"
					},
					{
					  "value": "Phường Trang Hạ"
					},
					{
					  "value": "Phường Đồng Nguyên"
					},
					{
					  "value": "Phường Châu Khê"
					},
					{
					  "value": "Phường Tân Hồng"
					},
					{
					  "value": "Phường Đình Bảng"
					},
					{
					  "value": "Phường Phù Chẩn"
					}
				  ]
				},
				{
				  "value": "Thị xã Thuận Thành",
				  "code": 262,
				  "wards": [
					{
					  "value": "Phường Hồ"
					},
					{
					  "value": "Xã Hoài Thượng"
					},
					{
					  "value": "Xã Đại Đồng Thành"
					},
					{
					  "value": "Xã Mão Điền"
					},
					{
					  "value": "Phường Song Hồ"
					},
					{
					  "value": "Xã Đình Tổ"
					},
					{
					  "value": "Phường An Bình"
					},
					{
					  "value": "Phường Trí Quả"
					},
					{
					  "value": "Phường Gia Đông"
					},
					{
					  "value": "Phường Thanh Khương"
					},
					{
					  "value": "Phường Trạm Lộ"
					},
					{
					  "value": "Phường Xuân Lâm"
					},
					{
					  "value": "Phường Hà Mãn"
					},
					{
					  "value": "Xã Ngũ Thái"
					},
					{
					  "value": "Xã Nguyệt Đức"
					},
					{
					  "value": "Phường Ninh Xá"
					},
					{
					  "value": "Xã Nghĩa Đạo"
					},
					{
					  "value": "Xã Song Liễu"
					}
				  ]
				},
				{
				  "value": "Huyện Gia Bình",
				  "code": 263,
				  "wards": [
					{
					  "value": "Thị trấn Gia Bình"
					},
					{
					  "value": "Xã Vạn Ninh"
					},
					{
					  "value": "Xã Thái Bảo"
					},
					{
					  "value": "Xã Giang Sơn"
					},
					{
					  "value": "Xã Cao Đức"
					},
					{
					  "value": "Xã Đại Lai"
					},
					{
					  "value": "Xã Song Giang"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Xã Lãng Ngâm"
					},
					{
					  "value": "Xã Nhân Thắng"
					},
					{
					  "value": "Xã Xuân Lai"
					},
					{
					  "value": "Xã Đông Cứu"
					},
					{
					  "value": "Xã Đại Bái"
					},
					{
					  "value": "Xã Quỳnh Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Lương Tài",
				  "code": 264,
				  "wards": [
					{
					  "value": "Thị trấn Thứa"
					},
					{
					  "value": "Xã An Thịnh"
					},
					{
					  "value": "Xã Trung Kênh"
					},
					{
					  "value": "Xã Phú Hòa"
					},
					{
					  "value": "Xã Mỹ Hương"
					},
					{
					  "value": "Xã Tân Lãng"
					},
					{
					  "value": "Xã Quảng Phú"
					},
					{
					  "value": "Xã Trừng Xá"
					},
					{
					  "value": "Xã Lai Hạ"
					},
					{
					  "value": "Xã Trung Chính"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Bình Định"
					},
					{
					  "value": "Xã Phú Lương"
					},
					{
					  "value": "Xã Lâm Thao"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hải Dương",
			  "code": 30,
			  "districts": [
				{
				  "value": "Thành phố Hải Dương",
				  "code": 288,
				  "wards": [
					{
					  "value": "Phường Cẩm Thượng"
					},
					{
					  "value": "Phường Bình Hàn"
					},
					{
					  "value": "Phường Ngọc Châu"
					},
					{
					  "value": "Phường Nhị Châu"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Nguyễn Trãi"
					},
					{
					  "value": "Phường Phạm Ngũ Lão"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Thanh Bình"
					},
					{
					  "value": "Phường Tân Bình"
					},
					{
					  "value": "Phường Lê Thanh Nghị"
					},
					{
					  "value": "Phường Hải Tân"
					},
					{
					  "value": "Phường Tứ Minh"
					},
					{
					  "value": "Phường Việt Hoà"
					},
					{
					  "value": "Phường Ái Quốc"
					},
					{
					  "value": "Xã An Thượng"
					},
					{
					  "value": "Phường Nam Đồng"
					},
					{
					  "value": "Xã Quyết Thắng"
					},
					{
					  "value": "Xã Tiền Tiến"
					},
					{
					  "value": "Phường Thạch Khôi"
					},
					{
					  "value": "Xã Liên Hồng"
					},
					{
					  "value": "Phường Tân Hưng"
					},
					{
					  "value": "Xã Gia Xuyên"
					},
					{
					  "value": "Xã Ngọc Sơn"
					}
				  ]
				},
				{
				  "value": "Thành phố Chí Linh",
				  "code": 290,
				  "wards": [
					{
					  "value": "Phường Phả Lại"
					},
					{
					  "value": "Phường Sao Đỏ"
					},
					{
					  "value": "Phường Bến Tắm"
					},
					{
					  "value": "Xã Hoàng Hoa Thám"
					},
					{
					  "value": "Xã Bắc An"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Phường Hoàng Tiến"
					},
					{
					  "value": "Phường Cộng Hoà"
					},
					{
					  "value": "Phường Hoàng Tân"
					},
					{
					  "value": "Phường Cổ Thành"
					},
					{
					  "value": "Phường Văn An"
					},
					{
					  "value": "Phường Chí Minh"
					},
					{
					  "value": "Phường Văn Đức"
					},
					{
					  "value": "Phường Thái Học"
					},
					{
					  "value": "Xã Nhân Huệ"
					},
					{
					  "value": "Phường An Lạc"
					},
					{
					  "value": "Phường Đồng Lạc"
					},
					{
					  "value": "Phường Tân Dân"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Sách",
				  "code": 291,
				  "wards": [
					{
					  "value": "Thị trấn Nam Sách"
					},
					{
					  "value": "Xã Nam Hưng"
					},
					{
					  "value": "Xã Nam Tân"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Hiệp Cát"
					},
					{
					  "value": "Xã Thanh Quang"
					},
					{
					  "value": "Xã Quốc Tuấn"
					},
					{
					  "value": "Xã Nam Chính"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Nam Trung"
					},
					{
					  "value": "Xã An Sơn"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Thái Tân"
					},
					{
					  "value": "Xã An Lâm"
					},
					{
					  "value": "Xã Phú Điền"
					},
					{
					  "value": "Xã Nam Hồng"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Đồng Lạc"
					},
					{
					  "value": "Xã Minh Tân"
					}
				  ]
				},
				{
				  "value": "Thị xã Kinh Môn",
				  "code": 292,
				  "wards": [
					{
					  "value": "Phường An Lưu"
					},
					{
					  "value": "Xã Bạch Đằng"
					},
					{
					  "value": "Phường Thất Hùng"
					},
					{
					  "value": "Xã Lê Ninh"
					},
					{
					  "value": "Xã Hoành Sơn"
					},
					{
					  "value": "Phường Phạm Thái"
					},
					{
					  "value": "Phường Duy Tân"
					},
					{
					  "value": "Phường Tân Dân"
					},
					{
					  "value": "Phường Minh Tân"
					},
					{
					  "value": "Xã Quang Thành"
					},
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Phường Phú Thứ"
					},
					{
					  "value": "Xã Thăng Long"
					},
					{
					  "value": "Xã Lạc Long"
					},
					{
					  "value": "Phường An Sinh"
					},
					{
					  "value": "Phường Hiệp Sơn"
					},
					{
					  "value": "Xã Thượng Quận"
					},
					{
					  "value": "Phường An Phụ"
					},
					{
					  "value": "Phường Hiệp An"
					},
					{
					  "value": "Phường Long Xuyên"
					},
					{
					  "value": "Phường Thái Thịnh"
					},
					{
					  "value": "Phường Hiến Thành"
					},
					{
					  "value": "Xã Minh Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Kim Thành",
				  "code": 293,
				  "wards": [
					{
					  "value": "Thị trấn Phú Thái"
					},
					{
					  "value": "Xã Lai Vu"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Thượng Vũ"
					},
					{
					  "value": "Xã Cổ Dũng"
					},
					{
					  "value": "Xã Tuấn Việt"
					},
					{
					  "value": "Xã Kim Xuyên"
					},
					{
					  "value": "Xã Phúc Thành A"
					},
					{
					  "value": "Xã Ngũ Phúc"
					},
					{
					  "value": "Xã Kim Anh"
					},
					{
					  "value": "Xã Kim Liên"
					},
					{
					  "value": "Xã Kim Tân"
					},
					{
					  "value": "Xã Kim Đính"
					},
					{
					  "value": "Xã Bình Dân"
					},
					{
					  "value": "Xã Tam Kỳ"
					},
					{
					  "value": "Xã Đồng Cẩm"
					},
					{
					  "value": "Xã Liên Hòa"
					},
					{
					  "value": "Xã Đại Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Hà",
				  "code": 294,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Hà"
					},
					{
					  "value": "Xã Hồng Lạc"
					},
					{
					  "value": "Xã Việt Hồng"
					},
					{
					  "value": "Xã Tân Việt"
					},
					{
					  "value": "Xã Cẩm Chế"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Thanh Lang"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Liên Mạc"
					},
					{
					  "value": "Xã Thanh Hải"
					},
					{
					  "value": "Xã Thanh Khê"
					},
					{
					  "value": "Xã Thanh Xá"
					},
					{
					  "value": "Xã Thanh Xuân"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã An Phượng"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Thanh Quang"
					},
					{
					  "value": "Xã Thanh Hồng"
					},
					{
					  "value": "Xã Thanh Cường"
					},
					{
					  "value": "Xã Vĩnh Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Cẩm Giàng",
				  "code": 295,
				  "wards": [
					{
					  "value": "Thị trấn Cẩm Giang"
					},
					{
					  "value": "Thị trấn Lai Cách"
					},
					{
					  "value": "Xã Cẩm Hưng"
					},
					{
					  "value": "Xã Cẩm Hoàng"
					},
					{
					  "value": "Xã Cẩm Văn"
					},
					{
					  "value": "Xã Ngọc Liên"
					},
					{
					  "value": "Xã Thạch Lỗi"
					},
					{
					  "value": "Xã Cẩm Vũ"
					},
					{
					  "value": "Xã Đức Chính"
					},
					{
					  "value": "Xã Định Sơn"
					},
					{
					  "value": "Xã Lương Điền"
					},
					{
					  "value": "Xã Cao An"
					},
					{
					  "value": "Xã Tân Trường"
					},
					{
					  "value": "Xã Cẩm Phúc"
					},
					{
					  "value": "Xã Cẩm Điền"
					},
					{
					  "value": "Xã Cẩm Đông"
					},
					{
					  "value": "Xã Cẩm Đoài"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Giang",
				  "code": 296,
				  "wards": [
					{
					  "value": "Thị trấn Kẻ Sặt"
					},
					{
					  "value": "Xã Vĩnh Hưng"
					},
					{
					  "value": "Xã Hùng Thắng"
					},
					{
					  "value": "Xã Vĩnh Hồng"
					},
					{
					  "value": "Xã Long Xuyên"
					},
					{
					  "value": "Xã Tân Việt"
					},
					{
					  "value": "Xã Thúc Kháng"
					},
					{
					  "value": "Xã Tân Hồng"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Hồng Khê"
					},
					{
					  "value": "Xã Thái Học"
					},
					{
					  "value": "Xã Cổ Bì"
					},
					{
					  "value": "Xã Nhân Quyền"
					},
					{
					  "value": "Xã Thái Dương"
					},
					{
					  "value": "Xã Thái Hòa"
					},
					{
					  "value": "Xã Bình Xuyên"
					}
				  ]
				},
				{
				  "value": "Huyện Gia Lộc",
				  "code": 297,
				  "wards": [
					{
					  "value": "Thị trấn Gia Lộc"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Yết Kiêu"
					},
					{
					  "value": "Xã Gia Tân"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Gia Khánh"
					},
					{
					  "value": "Xã Gia Lương"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Toàn Thắng"
					},
					{
					  "value": "Xã Hoàng Diệu"
					},
					{
					  "value": "Xã Hồng Hưng"
					},
					{
					  "value": "Xã Phạm Trấn"
					},
					{
					  "value": "Xã Đoàn Thượng"
					},
					{
					  "value": "Xã Thống Kênh"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Đồng Quang"
					},
					{
					  "value": "Xã Nhật Tân"
					},
					{
					  "value": "Xã Đức Xương"
					}
				  ]
				},
				{
				  "value": "Huyện Tứ Kỳ",
				  "code": 298,
				  "wards": [
					{
					  "value": "Thị trấn Tứ Kỳ"
					},
					{
					  "value": "Xã Đại Sơn"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Ngọc Kỳ"
					},
					{
					  "value": "Xã Bình Lăng"
					},
					{
					  "value": "Xã Chí Minh"
					},
					{
					  "value": "Xã Tái Sơn"
					},
					{
					  "value": "Xã Quang Phục"
					},
					{
					  "value": "Xã Dân Chủ"
					},
					{
					  "value": "Xã Tân Kỳ"
					},
					{
					  "value": "Xã Quang Khải"
					},
					{
					  "value": "Xã Đại Hợp"
					},
					{
					  "value": "Xã Quảng Nghiệp"
					},
					{
					  "value": "Xã An Thanh"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Xã Văn Tố"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Phượng Kỳ"
					},
					{
					  "value": "Xã Cộng Lạc"
					},
					{
					  "value": "Xã Tiên Động"
					},
					{
					  "value": "Xã Nguyên Giáp"
					},
					{
					  "value": "Xã Hà Kỳ"
					},
					{
					  "value": "Xã Hà Thanh"
					}
				  ]
				},
				{
				  "value": "Huyện Ninh Giang",
				  "code": 299,
				  "wards": [
					{
					  "value": "Thị trấn Ninh Giang"
					},
					{
					  "value": "Xã Ứng Hoè"
					},
					{
					  "value": "Xã Nghĩa An"
					},
					{
					  "value": "Xã Hồng Đức"
					},
					{
					  "value": "Xã An Đức"
					},
					{
					  "value": "Xã Vạn Phúc"
					},
					{
					  "value": "Xã Tân Hương"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Đông Xuyên"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Ninh Hải"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Tân Quang"
					},
					{
					  "value": "Xã Kiến Quốc"
					},
					{
					  "value": "Xã Hồng Dụ"
					},
					{
					  "value": "Xã Văn Hội"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Hiệp Lực"
					},
					{
					  "value": "Xã Hồng Phúc"
					},
					{
					  "value": "Xã Hưng Long"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Miện",
				  "code": 300,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Miện"
					},
					{
					  "value": "Xã Thanh Tùng"
					},
					{
					  "value": "Xã Phạm Kha"
					},
					{
					  "value": "Xã Ngô Quyền"
					},
					{
					  "value": "Xã Đoàn Tùng"
					},
					{
					  "value": "Xã Hồng Quang"
					},
					{
					  "value": "Xã Tân Trào"
					},
					{
					  "value": "Xã Lam Sơn"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Lê Hồng"
					},
					{
					  "value": "Xã Tứ Cường"
					},
					{
					  "value": "Xã Ngũ Hùng"
					},
					{
					  "value": "Xã Cao Thắng"
					},
					{
					  "value": "Xã Chi Lăng Bắc"
					},
					{
					  "value": "Xã Chi Lăng Nam"
					},
					{
					  "value": "Xã Thanh Giang"
					},
					{
					  "value": "Xã Hồng Phong"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Thành phố Hải Phòng",
			  "code": 31,
			  "districts": [
				{
				  "value": "Quận Hồng Bàng",
				  "code": 303,
				  "wards": [
					{
					  "value": "Phường Quán Toan"
					},
					{
					  "value": "Phường Hùng Vương"
					},
					{
					  "value": "Phường Sở Dầu"
					},
					{
					  "value": "Phường Thượng Lý"
					},
					{
					  "value": "Phường Hạ Lý"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Phường Trại Chuối"
					},
					{
					  "value": "Phường Hoàng Văn Thụ"
					},
					{
					  "value": "Phường Phan Bội Châu"
					}
				  ]
				},
				{
				  "value": "Quận Ngô Quyền",
				  "code": 304,
				  "wards": [
					{
					  "value": "Phường Máy Chai"
					},
					{
					  "value": "Phường Máy Tơ"
					},
					{
					  "value": "Phường Vạn Mỹ"
					},
					{
					  "value": "Phường Cầu Tre"
					},
					{
					  "value": "Phường Lạc Viên"
					},
					{
					  "value": "Phường Cầu Đất"
					},
					{
					  "value": "Phường Gia Viên"
					},
					{
					  "value": "Phường Đông Khê"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Đằng Giang"
					},
					{
					  "value": "Phường Lạch Tray"
					},
					{
					  "value": "Phường Đổng Quốc Bình"
					}
				  ]
				},
				{
				  "value": "Quận Lê Chân",
				  "code": 305,
				  "wards": [
					{
					  "value": "Phường Cát Dài"
					},
					{
					  "value": "Phường An Biên"
					},
					{
					  "value": "Phường Lam Sơn"
					},
					{
					  "value": "Phường An Dương"
					},
					{
					  "value": "Phường Trần Nguyên Hãn"
					},
					{
					  "value": "Phường Hồ Nam"
					},
					{
					  "value": "Phường Trại Cau"
					},
					{
					  "value": "Phường Dư Hàng"
					},
					{
					  "value": "Phường Hàng Kênh"
					},
					{
					  "value": "Phường Đông Hải"
					},
					{
					  "value": "Phường Niệm Nghĩa"
					},
					{
					  "value": "Phường Nghĩa Xá"
					},
					{
					  "value": "Phường Dư Hàng Kênh"
					},
					{
					  "value": "Phường Kênh Dương"
					},
					{
					  "value": "Phường Vĩnh Niệm"
					}
				  ]
				},
				{
				  "value": "Quận Hải An",
				  "code": 306,
				  "wards": [
					{
					  "value": "Phường Đông Hải 1"
					},
					{
					  "value": "Phường Đông Hải 2"
					},
					{
					  "value": "Phường Đằng Lâm"
					},
					{
					  "value": "Phường Thành Tô"
					},
					{
					  "value": "Phường Đằng Hải"
					},
					{
					  "value": "Phường Nam Hải"
					},
					{
					  "value": "Phường Cát Bi"
					},
					{
					  "value": "Phường Tràng Cát"
					}
				  ]
				},
				{
				  "value": "Quận Kiến An",
				  "code": 307,
				  "wards": [
					{
					  "value": "Phường Quán Trữ"
					},
					{
					  "value": "Phường Lãm Hà"
					},
					{
					  "value": "Phường Đồng Hoà"
					},
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Nam Sơn"
					},
					{
					  "value": "Phường Ngọc Sơn"
					},
					{
					  "value": "Phường Trần Thành Ngọ"
					},
					{
					  "value": "Phường Văn Đẩu"
					},
					{
					  "value": "Phường Phù Liễn"
					},
					{
					  "value": "Phường Tràng Minh"
					}
				  ]
				},
				{
				  "value": "Quận Đồ Sơn",
				  "code": 308,
				  "wards": [
					{
					  "value": "Phường Ngọc Xuyên"
					},
					{
					  "value": "Phường Hải Sơn"
					},
					{
					  "value": "Phường Vạn Hương"
					},
					{
					  "value": "Phường Minh Đức"
					},
					{
					  "value": "Phường Bàng La"
					},
					{
					  "value": "Phường Hợp Đức"
					}
				  ]
				},
				{
				  "value": "Quận Dương Kinh",
				  "code": 309,
				  "wards": [
					{
					  "value": "Phường Đa Phúc"
					},
					{
					  "value": "Phường Hưng Đạo"
					},
					{
					  "value": "Phường Anh Dũng"
					},
					{
					  "value": "Phường Hải Thành"
					},
					{
					  "value": "Phường Hoà Nghĩa"
					},
					{
					  "value": "Phường Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Thuỷ Nguyên",
				  "code": 311,
				  "wards": [
					{
					  "value": "Thị trấn Núi Đèo"
					},
					{
					  "value": "Thị trấn Minh Đức"
					},
					{
					  "value": "Xã Lại Xuân"
					},
					{
					  "value": "Xã An Sơn"
					},
					{
					  "value": "Xã Kỳ Sơn"
					},
					{
					  "value": "Xã Liên Khê"
					},
					{
					  "value": "Xã Lưu Kiếm"
					},
					{
					  "value": "Xã Lưu Kỳ"
					},
					{
					  "value": "Xã Gia Minh"
					},
					{
					  "value": "Xã Gia Đức"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Phù Ninh"
					},
					{
					  "value": "Xã Quảng Thanh"
					},
					{
					  "value": "Xã Chính Mỹ"
					},
					{
					  "value": "Xã Kênh Giang"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Cao Nhân"
					},
					{
					  "value": "Xã Mỹ Đồng"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Hoà Bình"
					},
					{
					  "value": "Xã Trung Hà"
					},
					{
					  "value": "Xã An Lư"
					},
					{
					  "value": "Xã Thuỷ Triều"
					},
					{
					  "value": "Xã Ngũ Lão"
					},
					{
					  "value": "Xã Phục Lễ"
					},
					{
					  "value": "Xã Tam Hưng"
					},
					{
					  "value": "Xã Phả Lễ"
					},
					{
					  "value": "Xã Lập Lễ"
					},
					{
					  "value": "Xã Kiền Bái"
					},
					{
					  "value": "Xã Thiên Hương"
					},
					{
					  "value": "Xã Thuỷ Sơn"
					},
					{
					  "value": "Xã Thuỷ Đường"
					},
					{
					  "value": "Xã Hoàng Động"
					},
					{
					  "value": "Xã Lâm Động"
					},
					{
					  "value": "Xã Hoa Động"
					},
					{
					  "value": "Xã Tân Dương"
					},
					{
					  "value": "Xã Dương Quan"
					}
				  ]
				},
				{
				  "value": "Huyện An Dương",
				  "code": 312,
				  "wards": [
					{
					  "value": "Thị trấn An Dương"
					},
					{
					  "value": "Xã Lê Thiện"
					},
					{
					  "value": "Xã Đại Bản"
					},
					{
					  "value": "Xã An Hoà"
					},
					{
					  "value": "Xã Hồng Phong"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã An Hưng"
					},
					{
					  "value": "Xã An Hồng"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Đặng Cương"
					},
					{
					  "value": "Xã Đồng Thái"
					},
					{
					  "value": "Xã Quốc Tuấn"
					},
					{
					  "value": "Xã An Đồng"
					},
					{
					  "value": "Xã Hồng Thái"
					}
				  ]
				},
				{
				  "value": "Huyện An Lão",
				  "code": 313,
				  "wards": [
					{
					  "value": "Thị trấn An Lão"
					},
					{
					  "value": "Xã Bát Trang"
					},
					{
					  "value": "Xã Trường Thọ"
					},
					{
					  "value": "Xã Trường Thành"
					},
					{
					  "value": "Xã An Tiến"
					},
					{
					  "value": "Xã Quang Hưng"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Quốc Tuấn"
					},
					{
					  "value": "Xã An Thắng"
					},
					{
					  "value": "Thị trấn Trường Sơn"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Thái Sơn"
					},
					{
					  "value": "Xã Tân Viên"
					},
					{
					  "value": "Xã Mỹ Đức"
					},
					{
					  "value": "Xã Chiến Thắng"
					},
					{
					  "value": "Xã An Thọ"
					},
					{
					  "value": "Xã An Thái"
					}
				  ]
				},
				{
				  "value": "Huyện Kiến Thuỵ",
				  "code": 314,
				  "wards": [
					{
					  "value": "Thị trấn Núi Đối"
					},
					{
					  "value": "Xã Đông Phương"
					},
					{
					  "value": "Xã Thuận Thiên"
					},
					{
					  "value": "Xã Hữu Bằng"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Ngũ Phúc"
					},
					{
					  "value": "Xã Kiến Quốc"
					},
					{
					  "value": "Xã Du Lễ"
					},
					{
					  "value": "Xã Thuỵ Hương"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Đại Hà"
					},
					{
					  "value": "Xã Ngũ Đoan"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Tân Trào"
					},
					{
					  "value": "Xã Đoàn Xá"
					},
					{
					  "value": "Xã Tú Sơn"
					},
					{
					  "value": "Xã Đại Hợp"
					}
				  ]
				},
				{
				  "value": "Huyện Tiên Lãng",
				  "code": 315,
				  "wards": [
					{
					  "value": "Thị trấn Tiên Lãng"
					},
					{
					  "value": "Xã Đại Thắng"
					},
					{
					  "value": "Xã Tiên Cường"
					},
					{
					  "value": "Xã Tự Cường"
					},
					{
					  "value": "Xã Quyết Tiến"
					},
					{
					  "value": "Xã Khởi Nghĩa"
					},
					{
					  "value": "Xã Tiên Thanh"
					},
					{
					  "value": "Xã Cấp Tiến"
					},
					{
					  "value": "Xã Kiến Thiết"
					},
					{
					  "value": "Xã Đoàn Lập"
					},
					{
					  "value": "Xã Bạch Đằng"
					},
					{
					  "value": "Xã Quang Phục"
					},
					{
					  "value": "Xã Toàn Thắng"
					},
					{
					  "value": "Xã Tiên Thắng"
					},
					{
					  "value": "Xã Tiên Minh"
					},
					{
					  "value": "Xã Bắc Hưng"
					},
					{
					  "value": "Xã Nam Hưng"
					},
					{
					  "value": "Xã Hùng Thắng"
					},
					{
					  "value": "Xã Tây Hưng"
					},
					{
					  "value": "Xã Đông Hưng"
					},
					{
					  "value": "Xã Vinh Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Bảo",
				  "code": 316,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Bảo"
					},
					{
					  "value": "Xã Dũng Tiến"
					},
					{
					  "value": "Xã Giang Biên"
					},
					{
					  "value": "Xã Thắng Thuỷ"
					},
					{
					  "value": "Xã Trung Lập"
					},
					{
					  "value": "Xã Việt Tiến"
					},
					{
					  "value": "Xã Vĩnh An"
					},
					{
					  "value": "Xã Vĩnh Long"
					},
					{
					  "value": "Xã Hiệp Hoà"
					},
					{
					  "value": "Xã Hùng Tiến"
					},
					{
					  "value": "Xã An Hoà"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Tân Liên"
					},
					{
					  "value": "Xã Nhân Hoà"
					},
					{
					  "value": "Xã Tam Đa"
					},
					{
					  "value": "Xã Hưng Nhân"
					},
					{
					  "value": "Xã Vinh Quang"
					},
					{
					  "value": "Xã Đồng Minh"
					},
					{
					  "value": "Xã Thanh Lương"
					},
					{
					  "value": "Xã Liên Am"
					},
					{
					  "value": "Xã Lý Học"
					},
					{
					  "value": "Xã Tam Cường"
					},
					{
					  "value": "Xã Hoà Bình"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Vĩnh Phong"
					},
					{
					  "value": "Xã Cộng Hiền"
					},
					{
					  "value": "Xã Cao Minh"
					},
					{
					  "value": "Xã Cổ Am"
					},
					{
					  "value": "Xã Vĩnh Tiến"
					},
					{
					  "value": "Xã Trấn Dương"
					}
				  ]
				},
				{
				  "value": "Huyện Cát Hải",
				  "code": 317,
				  "wards": [
					{
					  "value": "Thị trấn Cát Bà"
					},
					{
					  "value": "Thị trấn Cát Hải"
					},
					{
					  "value": "Xã Nghĩa Lộ"
					},
					{
					  "value": "Xã Đồng Bài"
					},
					{
					  "value": "Xã Hoàng Châu"
					},
					{
					  "value": "Xã Văn Phong"
					},
					{
					  "value": "Xã Phù Long"
					},
					{
					  "value": "Xã Gia Luận"
					},
					{
					  "value": "Xã Hiền Hào"
					},
					{
					  "value": "Xã Trân Châu"
					},
					{
					  "value": "Xã Việt Hải"
					},
					{
					  "value": "Xã Xuân Đám"
					}
				  ]
				},
				{
				  "value": "Huyện Bạch Long Vĩ",
				  "code": 318,
				  "wards": []
				}
			  ]
			},
			{
			  "value": "Tỉnh Hưng Yên",
			  "code": 33,
			  "districts": [
				{
				  "value": "Thành phố Hưng Yên",
				  "code": 323,
				  "wards": [
					{
					  "value": "Phường Lam Sơn"
					},
					{
					  "value": "Phường Hiến Nam"
					},
					{
					  "value": "Phường An Tảo"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Hồng Châu"
					},
					{
					  "value": "Xã Trung Nghĩa"
					},
					{
					  "value": "Xã Liên Phương"
					},
					{
					  "value": "Xã Hồng Nam"
					},
					{
					  "value": "Xã Quảng Châu"
					},
					{
					  "value": "Xã Bảo Khê"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Hùng Cường"
					},
					{
					  "value": "Xã Phương Chiểu"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Hoàng Hanh"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Lâm",
				  "code": 325,
				  "wards": [
					{
					  "value": "Thị trấn Như Quỳnh"
					},
					{
					  "value": "Xã Lạc Đạo"
					},
					{
					  "value": "Xã Chỉ Đạo"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Việt Hưng"
					},
					{
					  "value": "Xã Tân Quang"
					},
					{
					  "value": "Xã Đình Dù"
					},
					{
					  "value": "Xã Minh Hải"
					},
					{
					  "value": "Xã Lương Tài"
					},
					{
					  "value": "Xã Trưng Trắc"
					},
					{
					  "value": "Xã Lạc Hồng"
					}
				  ]
				},
				{
				  "value": "Huyện Văn Giang",
				  "code": 326,
				  "wards": [
					{
					  "value": "Thị trấn Văn Giang"
					},
					{
					  "value": "Xã Xuân Quan"
					},
					{
					  "value": "Xã Cửu Cao"
					},
					{
					  "value": "Xã Phụng Công"
					},
					{
					  "value": "Xã Nghĩa Trụ"
					},
					{
					  "value": "Xã Long Hưng"
					},
					{
					  "value": "Xã Vĩnh Khúc"
					},
					{
					  "value": "Xã Liên Nghĩa"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Thắng Lợi"
					},
					{
					  "value": "Xã Mễ Sở"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Mỹ",
				  "code": 327,
				  "wards": [
					{
					  "value": "Thị trấn Yên Mỹ"
					},
					{
					  "value": "Xã Giai Phạm"
					},
					{
					  "value": "Xã Nghĩa Hiệp"
					},
					{
					  "value": "Xã Đồng Than"
					},
					{
					  "value": "Xã Ngọc Long"
					},
					{
					  "value": "Xã Liêu Xá"
					},
					{
					  "value": "Xã Hoàn Long"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Thanh Long"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Xã Việt Cường"
					},
					{
					  "value": "Xã Trung Hòa"
					},
					{
					  "value": "Xã Yên Hòa"
					},
					{
					  "value": "Xã Minh Châu"
					},
					{
					  "value": "Xã Trung Hưng"
					},
					{
					  "value": "Xã Lý Thường Kiệt"
					},
					{
					  "value": "Xã Tân Việt"
					}
				  ]
				},
				{
				  "value": "Thị xã Mỹ Hào",
				  "code": 328,
				  "wards": [
					{
					  "value": "Phường Bần Yên Nhân"
					},
					{
					  "value": "Phường Phan Đình Phùng"
					},
					{
					  "value": "Xã Cẩm Xá"
					},
					{
					  "value": "Xã Dương Quang"
					},
					{
					  "value": "Xã Hòa Phong"
					},
					{
					  "value": "Phường Nhân Hòa"
					},
					{
					  "value": "Phường Dị Sử"
					},
					{
					  "value": "Phường Bạch Sam"
					},
					{
					  "value": "Phường Minh Đức"
					},
					{
					  "value": "Phường Phùng Chí Kiên"
					},
					{
					  "value": "Xã Xuân Dục"
					},
					{
					  "value": "Xã Ngọc Lâm"
					},
					{
					  "value": "Xã Hưng Long"
					}
				  ]
				},
				{
				  "value": "Huyện Ân Thi",
				  "code": 329,
				  "wards": [
					{
					  "value": "Thị trấn Ân Thi"
					},
					{
					  "value": "Xã Phù Ủng"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Bãi Sậy"
					},
					{
					  "value": "Xã Đào Dương"
					},
					{
					  "value": "Xã Tân Phúc"
					},
					{
					  "value": "Xã Vân Du"
					},
					{
					  "value": "Xã Quang Vinh"
					},
					{
					  "value": "Xã Xuân Trúc"
					},
					{
					  "value": "Xã Hoàng Hoa Thám"
					},
					{
					  "value": "Xã Quảng Lãng"
					},
					{
					  "value": "Xã Văn Nhuệ"
					},
					{
					  "value": "Xã Đặng Lễ"
					},
					{
					  "value": "Xã Cẩm Ninh"
					},
					{
					  "value": "Xã Nguyễn Trãi"
					},
					{
					  "value": "Xã Đa Lộc"
					},
					{
					  "value": "Xã Hồ Tùng Mậu"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Hồng Vân"
					},
					{
					  "value": "Xã Hồng Quang"
					},
					{
					  "value": "Xã Hạ Lễ"
					}
				  ]
				},
				{
				  "value": "Huyện Khoái Châu",
				  "code": 330,
				  "wards": [
					{
					  "value": "Thị trấn Khoái Châu"
					},
					{
					  "value": "Xã Đông Tảo"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Dạ Trạch"
					},
					{
					  "value": "Xã Hàm Tử"
					},
					{
					  "value": "Xã Ông Đình"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Tứ Dân"
					},
					{
					  "value": "Xã An Vĩ"
					},
					{
					  "value": "Xã Đông Kết"
					},
					{
					  "value": "Xã Bình Kiều"
					},
					{
					  "value": "Xã Dân Tiến"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Hồng Tiến"
					},
					{
					  "value": "Xã Tân Châu"
					},
					{
					  "value": "Xã Liên Khê"
					},
					{
					  "value": "Xã Phùng Hưng"
					},
					{
					  "value": "Xã Việt Hòa"
					},
					{
					  "value": "Xã Đông Ninh"
					},
					{
					  "value": "Xã Đại Tập"
					},
					{
					  "value": "Xã Chí Tân"
					},
					{
					  "value": "Xã Đại Hưng"
					},
					{
					  "value": "Xã Thuần Hưng"
					},
					{
					  "value": "Xã Thành Công"
					},
					{
					  "value": "Xã Nhuế Dương"
					}
				  ]
				},
				{
				  "value": "Huyện Kim Động",
				  "code": 331,
				  "wards": [
					{
					  "value": "Thị trấn Lương Bằng"
					},
					{
					  "value": "Xã Nghĩa Dân"
					},
					{
					  "value": "Xã Toàn Thắng"
					},
					{
					  "value": "Xã Vĩnh Xá"
					},
					{
					  "value": "Xã Phạm Ngũ Lão"
					},
					{
					  "value": "Xã Thọ Vinh"
					},
					{
					  "value": "Xã Đồng Thanh"
					},
					{
					  "value": "Xã Song Mai"
					},
					{
					  "value": "Xã Chính Nghĩa"
					},
					{
					  "value": "Xã Nhân La"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Mai Động"
					},
					{
					  "value": "Xã Đức Hợp"
					},
					{
					  "value": "Xã Hùng An"
					},
					{
					  "value": "Xã Ngọc Thanh"
					},
					{
					  "value": "Xã Vũ Xá"
					},
					{
					  "value": "Xã Hiệp Cường"
					}
				  ]
				},
				{
				  "value": "Huyện Tiên Lữ",
				  "code": 332,
				  "wards": [
					{
					  "value": "Thị trấn Vương"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Ngô Quyền"
					},
					{
					  "value": "Xã Nhật Tân"
					},
					{
					  "value": "Xã Dị Chế"
					},
					{
					  "value": "Xã Lệ Xá"
					},
					{
					  "value": "Xã An Viên"
					},
					{
					  "value": "Xã Đức Thắng"
					},
					{
					  "value": "Xã Trung Dũng"
					},
					{
					  "value": "Xã Hải Triều"
					},
					{
					  "value": "Xã Thủ Sỹ"
					},
					{
					  "value": "Xã Thiện Phiến"
					},
					{
					  "value": "Xã Thụy Lôi"
					},
					{
					  "value": "Xã Cương Chính"
					},
					{
					  "value": "Xã Minh Phượng"
					}
				  ]
				},
				{
				  "value": "Huyện Phù Cừ",
				  "code": 333,
				  "wards": [
					{
					  "value": "Thị trấn Trần Cao"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Phan Sào Nam"
					},
					{
					  "value": "Xã Quang Hưng"
					},
					{
					  "value": "Xã Minh Hoàng"
					},
					{
					  "value": "Xã Đoàn Đào"
					},
					{
					  "value": "Xã Tống Phan"
					},
					{
					  "value": "Xã Đình Cao"
					},
					{
					  "value": "Xã Nhật Quang"
					},
					{
					  "value": "Xã Tiền Tiến"
					},
					{
					  "value": "Xã Tam Đa"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Nguyên Hòa"
					},
					{
					  "value": "Xã Tống Trân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Thái Bình",
			  "code": 34,
			  "districts": [
				{
				  "value": "Thành phố Thái Bình",
				  "code": 336,
				  "wards": [
					{
					  "value": "Phường Lê Hồng Phong"
					},
					{
					  "value": "Phường Bồ Xuyên"
					},
					{
					  "value": "Phường Đề Thám"
					},
					{
					  "value": "Phường Kỳ Bá"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Phú Khánh"
					},
					{
					  "value": "Phường Tiền Phong"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Trần Lãm"
					},
					{
					  "value": "Xã Đông Hòa"
					},
					{
					  "value": "Phường Hoàng Diệu"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Vũ Phúc"
					},
					{
					  "value": "Xã Vũ Chính"
					},
					{
					  "value": "Xã Đông Mỹ"
					},
					{
					  "value": "Xã Đông Thọ"
					},
					{
					  "value": "Xã Vũ Đông"
					},
					{
					  "value": "Xã Vũ Lạc"
					},
					{
					  "value": "Xã Tân Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Quỳnh Phụ",
				  "code": 338,
				  "wards": [
					{
					  "value": "Thị trấn Quỳnh Côi"
					},
					{
					  "value": "Xã An Khê"
					},
					{
					  "value": "Xã An Đồng"
					},
					{
					  "value": "Xã Quỳnh Hoa"
					},
					{
					  "value": "Xã Quỳnh Lâm"
					},
					{
					  "value": "Xã Quỳnh Thọ"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã Quỳnh Hoàng"
					},
					{
					  "value": "Xã Quỳnh Giao"
					},
					{
					  "value": "Xã An Thái"
					},
					{
					  "value": "Xã An Cầu"
					},
					{
					  "value": "Xã Quỳnh Hồng"
					},
					{
					  "value": "Xã Quỳnh Khê"
					},
					{
					  "value": "Xã Quỳnh Minh"
					},
					{
					  "value": "Xã An Ninh"
					},
					{
					  "value": "Xã Quỳnh Ngọc"
					},
					{
					  "value": "Xã Quỳnh Hải"
					},
					{
					  "value": "Thị trấn An Bài"
					},
					{
					  "value": "Xã An Ấp"
					},
					{
					  "value": "Xã Quỳnh Hội"
					},
					{
					  "value": "Xã Châu Sơn"
					},
					{
					  "value": "Xã Quỳnh Mỹ"
					},
					{
					  "value": "Xã An Quí"
					},
					{
					  "value": "Xã An Thanh"
					},
					{
					  "value": "Xã An Vũ"
					},
					{
					  "value": "Xã An Lễ"
					},
					{
					  "value": "Xã Quỳnh Hưng"
					},
					{
					  "value": "Xã Quỳnh Bảo"
					},
					{
					  "value": "Xã An Mỹ"
					},
					{
					  "value": "Xã Quỳnh Nguyên"
					},
					{
					  "value": "Xã An Vinh"
					},
					{
					  "value": "Xã Quỳnh Xá"
					},
					{
					  "value": "Xã An Dục"
					},
					{
					  "value": "Xã Đông Hải"
					},
					{
					  "value": "Xã Quỳnh Trang"
					},
					{
					  "value": "Xã An Tràng"
					},
					{
					  "value": "Xã Đồng Tiến"
					}
				  ]
				},
				{
				  "value": "Huyện Hưng Hà",
				  "code": 339,
				  "wards": [
					{
					  "value": "Thị trấn Hưng Hà"
					},
					{
					  "value": "Xã Điệp Nông"
					},
					{
					  "value": "Xã Tân Lễ"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Dân Chủ"
					},
					{
					  "value": "Xã Canh Tân"
					},
					{
					  "value": "Xã Hòa Tiến"
					},
					{
					  "value": "Xã Hùng Dũng"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Thị trấn Hưng Nhân"
					},
					{
					  "value": "Xã Đoan Hùng"
					},
					{
					  "value": "Xã Duyên Hải"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Văn Cẩm"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Đông Đô"
					},
					{
					  "value": "Xã Phúc Khánh"
					},
					{
					  "value": "Xã Liên Hiệp"
					},
					{
					  "value": "Xã Tây Đô"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Tiến Đức"
					},
					{
					  "value": "Xã Thái Hưng"
					},
					{
					  "value": "Xã Thái Phương"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Chi Lăng"
					},
					{
					  "value": "Xã Minh Khai"
					},
					{
					  "value": "Xã Hồng An"
					},
					{
					  "value": "Xã Kim Chung"
					},
					{
					  "value": "Xã Hồng Lĩnh"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Văn Lang"
					},
					{
					  "value": "Xã Độc Lập"
					},
					{
					  "value": "Xã Chí Hòa"
					},
					{
					  "value": "Xã Minh Hòa"
					},
					{
					  "value": "Xã Hồng Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Đông Hưng",
				  "code": 340,
				  "wards": [
					{
					  "value": "Thị trấn Đông Hưng"
					},
					{
					  "value": "Xã Đô Lương"
					},
					{
					  "value": "Xã Đông Phương"
					},
					{
					  "value": "Xã Liên Giang"
					},
					{
					  "value": "Xã An Châu"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Đông Cường"
					},
					{
					  "value": "Xã Phú Lương"
					},
					{
					  "value": "Xã Mê Linh"
					},
					{
					  "value": "Xã Lô Giang"
					},
					{
					  "value": "Xã Đông La"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Đông Xá"
					},
					{
					  "value": "Xã Chương Dương"
					},
					{
					  "value": "Xã Nguyên Xá"
					},
					{
					  "value": "Xã Phong Châu"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Hồng Việt"
					},
					{
					  "value": "Xã Hà Giang"
					},
					{
					  "value": "Xã Đông Kinh"
					},
					{
					  "value": "Xã Đông Hợp"
					},
					{
					  "value": "Xã Thăng Long"
					},
					{
					  "value": "Xã Đông Các"
					},
					{
					  "value": "Xã Phú Châu"
					},
					{
					  "value": "Xã Liên Hoa"
					},
					{
					  "value": "Xã Đông Tân"
					},
					{
					  "value": "Xã Đông Vinh"
					},
					{
					  "value": "Xã Đông Động"
					},
					{
					  "value": "Xã Hồng Bạch"
					},
					{
					  "value": "Xã Trọng Quan"
					},
					{
					  "value": "Xã Hồng Giang"
					},
					{
					  "value": "Xã Đông Quan"
					},
					{
					  "value": "Xã Đông Quang"
					},
					{
					  "value": "Xã Đông Xuân"
					},
					{
					  "value": "Xã Đông Á"
					},
					{
					  "value": "Xã Đông Hoàng"
					},
					{
					  "value": "Xã Đông Dương"
					},
					{
					  "value": "Xã Minh Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Thái Thụy",
				  "code": 341,
				  "wards": [
					{
					  "value": "Thị trấn Diêm Điền"
					},
					{
					  "value": "Xã Thụy Trường"
					},
					{
					  "value": "Xã Hồng Dũng"
					},
					{
					  "value": "Xã Thụy Quỳnh"
					},
					{
					  "value": "Xã An Tân"
					},
					{
					  "value": "Xã Thụy Ninh"
					},
					{
					  "value": "Xã Thụy Hưng"
					},
					{
					  "value": "Xã Thụy Việt"
					},
					{
					  "value": "Xã Thụy Văn"
					},
					{
					  "value": "Xã Thụy Xuân"
					},
					{
					  "value": "Xã Dương Phúc"
					},
					{
					  "value": "Xã Thụy Trình"
					},
					{
					  "value": "Xã Thụy Bình"
					},
					{
					  "value": "Xã Thụy Chính"
					},
					{
					  "value": "Xã Thụy Dân"
					},
					{
					  "value": "Xã Thụy Hải"
					},
					{
					  "value": "Xã Thụy Liên"
					},
					{
					  "value": "Xã Thụy Duyên"
					},
					{
					  "value": "Xã Thụy Thanh"
					},
					{
					  "value": "Xã Thụy Sơn"
					},
					{
					  "value": "Xã Thụy Phong"
					},
					{
					  "value": "Xã Thái Thượng"
					},
					{
					  "value": "Xã Thái Nguyên"
					},
					{
					  "value": "Xã Dương Hồng Thủy"
					},
					{
					  "value": "Xã Thái Giang"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Thái Phúc"
					},
					{
					  "value": "Xã Thái Hưng"
					},
					{
					  "value": "Xã Thái Đô"
					},
					{
					  "value": "Xã Thái Xuyên"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Tân Học"
					},
					{
					  "value": "Xã Thái Thịnh"
					},
					{
					  "value": "Xã Thuần Thành"
					},
					{
					  "value": "Xã Thái Thọ"
					}
				  ]
				},
				{
				  "value": "Huyện Tiền Hải",
				  "code": 342,
				  "wards": [
					{
					  "value": "Thị trấn Tiền Hải"
					},
					{
					  "value": "Xã Đông Trà"
					},
					{
					  "value": "Xã Đông Long"
					},
					{
					  "value": "Xã Đông Quí"
					},
					{
					  "value": "Xã Vũ Lăng"
					},
					{
					  "value": "Xã Đông Xuyên"
					},
					{
					  "value": "Xã Tây Lương"
					},
					{
					  "value": "Xã Tây Ninh"
					},
					{
					  "value": "Xã Đông Trung"
					},
					{
					  "value": "Xã Đông Hoàng"
					},
					{
					  "value": "Xã Đông Minh"
					},
					{
					  "value": "Xã Đông Phong"
					},
					{
					  "value": "Xã An Ninh"
					},
					{
					  "value": "Xã Đông Cơ"
					},
					{
					  "value": "Xã Tây Giang"
					},
					{
					  "value": "Xã Đông Lâm"
					},
					{
					  "value": "Xã Phương Công"
					},
					{
					  "value": "Xã Tây Phong"
					},
					{
					  "value": "Xã Tây Tiến"
					},
					{
					  "value": "Xã Nam Cường"
					},
					{
					  "value": "Xã Vân Trường"
					},
					{
					  "value": "Xã Nam Thắng"
					},
					{
					  "value": "Xã Nam Chính"
					},
					{
					  "value": "Xã Bắc Hải"
					},
					{
					  "value": "Xã Nam Thịnh"
					},
					{
					  "value": "Xã Nam Hà"
					},
					{
					  "value": "Xã Nam Thanh"
					},
					{
					  "value": "Xã Nam Trung"
					},
					{
					  "value": "Xã Nam Hồng"
					},
					{
					  "value": "Xã Nam Hưng"
					},
					{
					  "value": "Xã Nam Hải"
					},
					{
					  "value": "Xã Nam Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Kiến Xương",
				  "code": 343,
				  "wards": [
					{
					  "value": "Thị trấn Kiến Xương"
					},
					{
					  "value": "Xã Trà Giang"
					},
					{
					  "value": "Xã Quốc Tuấn"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Tây Sơn"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Bình Nguyên"
					},
					{
					  "value": "Xã Lê Lợi"
					},
					{
					  "value": "Xã Vũ Lễ"
					},
					{
					  "value": "Xã Thanh Tân"
					},
					{
					  "value": "Xã Thượng Hiền"
					},
					{
					  "value": "Xã Nam Cao"
					},
					{
					  "value": "Xã Đình Phùng"
					},
					{
					  "value": "Xã Vũ Ninh"
					},
					{
					  "value": "Xã Vũ An"
					},
					{
					  "value": "Xã Quang Lịch"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Vũ Quí"
					},
					{
					  "value": "Xã Quang Bình"
					},
					{
					  "value": "Xã Vũ Trung"
					},
					{
					  "value": "Xã Vũ Thắng"
					},
					{
					  "value": "Xã Vũ Công"
					},
					{
					  "value": "Xã Vũ Hòa"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Minh Quang"
					},
					{
					  "value": "Xã Vũ Bình"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Nam Bình"
					},
					{
					  "value": "Xã Bình Thanh"
					},
					{
					  "value": "Xã Bình Định"
					},
					{
					  "value": "Xã Hồng Tiến"
					}
				  ]
				},
				{
				  "value": "Huyện Vũ Thư",
				  "code": 344,
				  "wards": [
					{
					  "value": "Thị trấn Vũ Thư"
					},
					{
					  "value": "Xã Hồng Lý"
					},
					{
					  "value": "Xã Đồng Thanh"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Xã Phúc Thành"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Song Lãng"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Việt Hùng"
					},
					{
					  "value": "Xã Minh Lãng"
					},
					{
					  "value": "Xã Minh Khai"
					},
					{
					  "value": "Xã Dũng Nghĩa"
					},
					{
					  "value": "Xã Minh Quang"
					},
					{
					  "value": "Xã Tam Quang"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Bách Thuận"
					},
					{
					  "value": "Xã Tự Tân"
					},
					{
					  "value": "Xã Song An"
					},
					{
					  "value": "Xã Trung An"
					},
					{
					  "value": "Xã Vũ Hội"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Nguyên Xá"
					},
					{
					  "value": "Xã Việt Thuận"
					},
					{
					  "value": "Xã Vũ Vinh"
					},
					{
					  "value": "Xã Vũ Đoài"
					},
					{
					  "value": "Xã Vũ Tiến"
					},
					{
					  "value": "Xã Vũ Vân"
					},
					{
					  "value": "Xã Duy Nhất"
					},
					{
					  "value": "Xã Hồng Phong"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hà Nam",
			  "code": 35,
			  "districts": [
				{
				  "value": "Thành phố Phủ Lý",
				  "code": 347,
				  "wards": [
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Lương Khánh Thiện"
					},
					{
					  "value": "Phường Lê Hồng Phong"
					},
					{
					  "value": "Phường Minh Khai"
					},
					{
					  "value": "Phường Hai Bà Trưng"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Lam Hạ"
					},
					{
					  "value": "Xã Phù Vân"
					},
					{
					  "value": "Phường Liêm Chính"
					},
					{
					  "value": "Xã Liêm Chung"
					},
					{
					  "value": "Phường Thanh Châu"
					},
					{
					  "value": "Phường Châu Sơn"
					},
					{
					  "value": "Xã Tiên Tân"
					},
					{
					  "value": "Xã Tiên Hiệp"
					},
					{
					  "value": "Xã Tiên Hải"
					},
					{
					  "value": "Xã Kim Bình"
					},
					{
					  "value": "Xã Liêm Tuyền"
					},
					{
					  "value": "Xã Liêm Tiết"
					},
					{
					  "value": "Phường Thanh Tuyền"
					},
					{
					  "value": "Xã Đinh Xá"
					},
					{
					  "value": "Xã Trịnh Xá"
					}
				  ]
				},
				{
				  "value": "Thị xã Duy Tiên",
				  "code": 349,
				  "wards": [
					{
					  "value": "Phường Đồng Văn"
					},
					{
					  "value": "Phường Hòa Mạc"
					},
					{
					  "value": "Xã Mộc Bắc"
					},
					{
					  "value": "Phường Châu Giang"
					},
					{
					  "value": "Phường Bạch Thượng"
					},
					{
					  "value": "Phường Duy Minh"
					},
					{
					  "value": "Xã Mộc Nam"
					},
					{
					  "value": "Phường Duy Hải"
					},
					{
					  "value": "Xã Chuyên Ngoại"
					},
					{
					  "value": "Phường Yên Bắc"
					},
					{
					  "value": "Xã Trác Văn"
					},
					{
					  "value": "Phường Tiên Nội"
					},
					{
					  "value": "Phường Hoàng Đông"
					},
					{
					  "value": "Xã Yên Nam"
					},
					{
					  "value": "Xã Tiên Ngoại"
					},
					{
					  "value": "Xã Tiên Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Kim Bảng",
				  "code": 350,
				  "wards": [
					{
					  "value": "Thị trấn Quế"
					},
					{
					  "value": "Xã Nguyễn Úy"
					},
					{
					  "value": "Xã Đại Cương"
					},
					{
					  "value": "Xã Lê Hồ"
					},
					{
					  "value": "Xã Tượng Lĩnh"
					},
					{
					  "value": "Xã Nhật Tựu"
					},
					{
					  "value": "Xã Nhật Tân"
					},
					{
					  "value": "Xã Đồng Hóa"
					},
					{
					  "value": "Xã Hoàng Tây"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Thụy Lôi"
					},
					{
					  "value": "Xã Văn Xá"
					},
					{
					  "value": "Xã Khả Phong"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Thị trấn Ba Sao"
					},
					{
					  "value": "Xã Liên Sơn"
					},
					{
					  "value": "Xã Thi Sơn"
					},
					{
					  "value": "Xã Thanh Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Liêm",
				  "code": 351,
				  "wards": [
					{
					  "value": "Thị trấn Kiện Khê"
					},
					{
					  "value": "Xã Liêm Phong"
					},
					{
					  "value": "Xã Thanh Hà"
					},
					{
					  "value": "Xã Liêm Cần"
					},
					{
					  "value": "Xã Liêm Thuận"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã Thanh Phong"
					},
					{
					  "value": "Thị trấn Tân Thanh"
					},
					{
					  "value": "Xã Thanh Tân"
					},
					{
					  "value": "Xã Liêm Túc"
					},
					{
					  "value": "Xã Liêm Sơn"
					},
					{
					  "value": "Xã Thanh Hương"
					},
					{
					  "value": "Xã Thanh Nghị"
					},
					{
					  "value": "Xã Thanh Tâm"
					},
					{
					  "value": "Xã Thanh Nguyên"
					},
					{
					  "value": "Xã Thanh Hải"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Lục",
				  "code": 352,
				  "wards": [
					{
					  "value": "Thị trấn Bình Mỹ"
					},
					{
					  "value": "Xã Bình Nghĩa"
					},
					{
					  "value": "Xã Tràng An"
					},
					{
					  "value": "Xã Đồng Du"
					},
					{
					  "value": "Xã Ngọc Lũ"
					},
					{
					  "value": "Xã Hưng Công"
					},
					{
					  "value": "Xã Đồn Xá"
					},
					{
					  "value": "Xã An Ninh"
					},
					{
					  "value": "Xã Bồ Đề"
					},
					{
					  "value": "Xã Bối Cầu"
					},
					{
					  "value": "Xã An Nội"
					},
					{
					  "value": "Xã Vũ Bản"
					},
					{
					  "value": "Xã Trung Lương"
					},
					{
					  "value": "Xã An Đổ"
					},
					{
					  "value": "Xã La Sơn"
					},
					{
					  "value": "Xã Tiêu Động"
					},
					{
					  "value": "Xã An Lão"
					}
				  ]
				},
				{
				  "value": "Huyện Lý Nhân",
				  "code": 353,
				  "wards": [
					{
					  "value": "Xã Hợp Lý"
					},
					{
					  "value": "Xã Nguyên Lý"
					},
					{
					  "value": "Xã Chính Lý"
					},
					{
					  "value": "Xã Chân Lý"
					},
					{
					  "value": "Xã Đạo Lý"
					},
					{
					  "value": "Xã Công Lý"
					},
					{
					  "value": "Xã Văn Lý"
					},
					{
					  "value": "Xã Bắc Lý"
					},
					{
					  "value": "Xã Đức Lý"
					},
					{
					  "value": "Xã Trần Hưng Đạo"
					},
					{
					  "value": "Thị trấn Vĩnh Trụ"
					},
					{
					  "value": "Xã Nhân Thịnh"
					},
					{
					  "value": "Xã Nhân Khang"
					},
					{
					  "value": "Xã Nhân Mỹ"
					},
					{
					  "value": "Xã Nhân Nghĩa"
					},
					{
					  "value": "Xã Nhân Chính"
					},
					{
					  "value": "Xã Nhân Bình"
					},
					{
					  "value": "Xã Phú Phúc"
					},
					{
					  "value": "Xã Xuân Khê"
					},
					{
					  "value": "Xã Tiến Thắng"
					},
					{
					  "value": "Xã Hòa Hậu"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Nam Định",
			  "code": 36,
			  "districts": [
				{
				  "value": "Thành phố Nam Định",
				  "code": 356,
				  "wards": [
					{
					  "value": "Phường Hạ Long"
					},
					{
					  "value": "Phường Trần Tế Xương"
					},
					{
					  "value": "Phường Vị Hoàng"
					},
					{
					  "value": "Phường Vị Xuyên"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Cửa Bắc"
					},
					{
					  "value": "Phường Nguyễn Du"
					},
					{
					  "value": "Phường Bà Triệu"
					},
					{
					  "value": "Phường Trường Thi"
					},
					{
					  "value": "Phường Phan Đình Phùng"
					},
					{
					  "value": "Phường Ngô Quyền"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Trần Đăng Ninh"
					},
					{
					  "value": "Phường Năng Tĩnh"
					},
					{
					  "value": "Phường Văn Miếu"
					},
					{
					  "value": "Phường Trần Quang Khải"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Lộc Hạ"
					},
					{
					  "value": "Phường Lộc Vượng"
					},
					{
					  "value": "Phường Cửa Nam"
					},
					{
					  "value": "Phường Lộc Hòa"
					},
					{
					  "value": "Xã Nam Phong"
					},
					{
					  "value": "Phường Mỹ Xá"
					},
					{
					  "value": "Xã Lộc An"
					},
					{
					  "value": "Xã Nam Vân"
					}
				  ]
				},
				{
				  "value": "Huyện Mỹ Lộc",
				  "code": 358,
				  "wards": [
					{
					  "value": "Thị trấn Mỹ Lộc"
					},
					{
					  "value": "Xã Mỹ Hà"
					},
					{
					  "value": "Xã Mỹ Tiến"
					},
					{
					  "value": "Xã Mỹ Thắng"
					},
					{
					  "value": "Xã Mỹ Trung"
					},
					{
					  "value": "Xã Mỹ Tân"
					},
					{
					  "value": "Xã Mỹ Phúc"
					},
					{
					  "value": "Xã Mỹ Hưng"
					},
					{
					  "value": "Xã Mỹ Thuận"
					},
					{
					  "value": "Xã Mỹ Thịnh"
					},
					{
					  "value": "Xã Mỹ Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Vụ Bản",
				  "code": 359,
				  "wards": [
					{
					  "value": "Thị trấn Gôi"
					},
					{
					  "value": "Xã Minh Thuận"
					},
					{
					  "value": "Xã Hiển Khánh"
					},
					{
					  "value": "Xã Tân Khánh"
					},
					{
					  "value": "Xã Hợp Hưng"
					},
					{
					  "value": "Xã Đại An"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Cộng Hòa"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Liên Bảo"
					},
					{
					  "value": "Xã Thành Lợi"
					},
					{
					  "value": "Xã Kim Thái"
					},
					{
					  "value": "Xã Liên Minh"
					},
					{
					  "value": "Xã Đại Thắng"
					},
					{
					  "value": "Xã Tam Thanh"
					},
					{
					  "value": "Xã Vĩnh Hào"
					}
				  ]
				},
				{
				  "value": "Huyện Ý Yên",
				  "code": 360,
				  "wards": [
					{
					  "value": "Thị trấn Lâm"
					},
					{
					  "value": "Xã Yên Trung"
					},
					{
					  "value": "Xã Yên Thành"
					},
					{
					  "value": "Xã Yên Tân"
					},
					{
					  "value": "Xã Yên Lợi"
					},
					{
					  "value": "Xã Yên Thọ"
					},
					{
					  "value": "Xã Yên Nghĩa"
					},
					{
					  "value": "Xã Yên Minh"
					},
					{
					  "value": "Xã Yên Phương"
					},
					{
					  "value": "Xã Yên Chính"
					},
					{
					  "value": "Xã Yên Bình"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Xã Yên Mỹ"
					},
					{
					  "value": "Xã Yên Dương"
					},
					{
					  "value": "Xã Yên Hưng"
					},
					{
					  "value": "Xã Yên Khánh"
					},
					{
					  "value": "Xã Yên Phong"
					},
					{
					  "value": "Xã Yên Ninh"
					},
					{
					  "value": "Xã Yên Lương"
					},
					{
					  "value": "Xã Yên Hồng"
					},
					{
					  "value": "Xã Yên Quang"
					},
					{
					  "value": "Xã Yên Tiến"
					},
					{
					  "value": "Xã Yên Thắng"
					},
					{
					  "value": "Xã Yên Phúc"
					},
					{
					  "value": "Xã Yên Cường"
					},
					{
					  "value": "Xã Yên Lộc"
					},
					{
					  "value": "Xã Yên Bằng"
					},
					{
					  "value": "Xã Yên Đồng"
					},
					{
					  "value": "Xã Yên Khang"
					},
					{
					  "value": "Xã Yên Nhân"
					},
					{
					  "value": "Xã Yên Trị"
					}
				  ]
				},
				{
				  "value": "Huyện Nghĩa Hưng",
				  "code": 361,
				  "wards": [
					{
					  "value": "Thị trấn Liễu Đề"
					},
					{
					  "value": "Thị trấn Rạng Đông"
					},
					{
					  "value": "Xã Nghĩa Đồng"
					},
					{
					  "value": "Xã Nghĩa Thịnh"
					},
					{
					  "value": "Xã Nghĩa Minh"
					},
					{
					  "value": "Xã Nghĩa Thái"
					},
					{
					  "value": "Xã Hoàng Nam"
					},
					{
					  "value": "Xã Nghĩa Châu"
					},
					{
					  "value": "Xã Nghĩa Trung"
					},
					{
					  "value": "Xã Nghĩa Sơn"
					},
					{
					  "value": "Xã Nghĩa Lạc"
					},
					{
					  "value": "Xã Nghĩa Hồng"
					},
					{
					  "value": "Xã Nghĩa Phong"
					},
					{
					  "value": "Xã Nghĩa Phú"
					},
					{
					  "value": "Xã Nghĩa Bình"
					},
					{
					  "value": "Thị trấn Quỹ Nhất"
					},
					{
					  "value": "Xã Nghĩa Tân"
					},
					{
					  "value": "Xã Nghĩa Hùng"
					},
					{
					  "value": "Xã Nghĩa Lâm"
					},
					{
					  "value": "Xã Nghĩa Thành"
					},
					{
					  "value": "Xã Phúc Thắng"
					},
					{
					  "value": "Xã Nghĩa Lợi"
					},
					{
					  "value": "Xã Nghĩa Hải"
					},
					{
					  "value": "Xã Nam Điền"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Trực",
				  "code": 362,
				  "wards": [
					{
					  "value": "Thị trấn Nam Giang"
					},
					{
					  "value": "Xã Nam Mỹ"
					},
					{
					  "value": "Xã Điền Xá"
					},
					{
					  "value": "Xã Nghĩa An"
					},
					{
					  "value": "Xã Nam Thắng"
					},
					{
					  "value": "Xã Nam Toàn"
					},
					{
					  "value": "Xã Hồng Quang"
					},
					{
					  "value": "Xã Tân Thịnh"
					},
					{
					  "value": "Xã Nam Cường"
					},
					{
					  "value": "Xã Nam Hồng"
					},
					{
					  "value": "Xã Nam Hùng"
					},
					{
					  "value": "Xã Nam Hoa"
					},
					{
					  "value": "Xã Nam Dương"
					},
					{
					  "value": "Xã Nam Thanh"
					},
					{
					  "value": "Xã Nam Lợi"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Đồng Sơn"
					},
					{
					  "value": "Xã Nam Tiến"
					},
					{
					  "value": "Xã Nam Hải"
					},
					{
					  "value": "Xã Nam Thái"
					}
				  ]
				},
				{
				  "value": "Huyện Trực Ninh",
				  "code": 363,
				  "wards": [
					{
					  "value": "Thị trấn Cổ Lễ"
					},
					{
					  "value": "Xã Phương Định"
					},
					{
					  "value": "Xã Trực Chính"
					},
					{
					  "value": "Xã Trung Đông"
					},
					{
					  "value": "Xã Liêm Hải"
					},
					{
					  "value": "Xã Trực Tuấn"
					},
					{
					  "value": "Xã Việt Hùng"
					},
					{
					  "value": "Xã Trực Đạo"
					},
					{
					  "value": "Xã Trực Hưng"
					},
					{
					  "value": "Xã Trực Nội"
					},
					{
					  "value": "Thị trấn Cát Thành"
					},
					{
					  "value": "Xã Trực Thanh"
					},
					{
					  "value": "Xã Trực Khang"
					},
					{
					  "value": "Xã Trực Thuận"
					},
					{
					  "value": "Xã Trực Mỹ"
					},
					{
					  "value": "Xã Trực Đại"
					},
					{
					  "value": "Xã Trực Cường"
					},
					{
					  "value": "Thị trấn Ninh Cường"
					},
					{
					  "value": "Xã Trực Thái"
					},
					{
					  "value": "Xã Trực Hùng"
					},
					{
					  "value": "Xã Trực Thắng"
					}
				  ]
				},
				{
				  "value": "Huyện Xuân Trường",
				  "code": 364,
				  "wards": [
					{
					  "value": "Thị trấn Xuân Trường"
					},
					{
					  "value": "Xã Xuân Châu"
					},
					{
					  "value": "Xã Xuân Hồng"
					},
					{
					  "value": "Xã Xuân Thành"
					},
					{
					  "value": "Xã Xuân Thượng"
					},
					{
					  "value": "Xã Xuân Phong"
					},
					{
					  "value": "Xã Xuân Đài"
					},
					{
					  "value": "Xã Xuân Tân"
					},
					{
					  "value": "Xã Xuân Thủy"
					},
					{
					  "value": "Xã Xuân Ngọc"
					},
					{
					  "value": "Xã Xuân Bắc"
					},
					{
					  "value": "Xã Xuân Phương"
					},
					{
					  "value": "Xã Thọ Nghiệp"
					},
					{
					  "value": "Xã Xuân Phú"
					},
					{
					  "value": "Xã Xuân Trung"
					},
					{
					  "value": "Xã Xuân Vinh"
					},
					{
					  "value": "Xã Xuân Kiên"
					},
					{
					  "value": "Xã Xuân Tiến"
					},
					{
					  "value": "Xã Xuân Ninh"
					},
					{
					  "value": "Xã Xuân Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Giao Thủy",
				  "code": 365,
				  "wards": [
					{
					  "value": "Thị trấn Ngô Đồng"
					},
					{
					  "value": "Thị trấn Quất Lâm"
					},
					{
					  "value": "Xã Giao Hương"
					},
					{
					  "value": "Xã Hồng Thuận"
					},
					{
					  "value": "Xã Giao Thiện"
					},
					{
					  "value": "Xã Giao Thanh"
					},
					{
					  "value": "Xã Hoành Sơn"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Giao Tiến"
					},
					{
					  "value": "Xã Giao Hà"
					},
					{
					  "value": "Xã Giao Nhân"
					},
					{
					  "value": "Xã Giao An"
					},
					{
					  "value": "Xã Giao Lạc"
					},
					{
					  "value": "Xã Giao Châu"
					},
					{
					  "value": "Xã Giao Tân"
					},
					{
					  "value": "Xã Giao Yến"
					},
					{
					  "value": "Xã Giao Xuân"
					},
					{
					  "value": "Xã Giao Thịnh"
					},
					{
					  "value": "Xã Giao Hải"
					},
					{
					  "value": "Xã Bạch Long"
					},
					{
					  "value": "Xã Giao Long"
					},
					{
					  "value": "Xã Giao Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Hải Hậu",
				  "code": 366,
				  "wards": [
					{
					  "value": "Thị trấn Yên Định"
					},
					{
					  "value": "Thị trấn Cồn"
					},
					{
					  "value": "Thị trấn Thịnh Long"
					},
					{
					  "value": "Xã Hải Nam"
					},
					{
					  "value": "Xã Hải Trung"
					},
					{
					  "value": "Xã Hải Vân"
					},
					{
					  "value": "Xã Hải Minh"
					},
					{
					  "value": "Xã Hải Anh"
					},
					{
					  "value": "Xã Hải Hưng"
					},
					{
					  "value": "Xã Hải Bắc"
					},
					{
					  "value": "Xã Hải Phúc"
					},
					{
					  "value": "Xã Hải Thanh"
					},
					{
					  "value": "Xã Hải Hà"
					},
					{
					  "value": "Xã Hải Long"
					},
					{
					  "value": "Xã Hải Phương"
					},
					{
					  "value": "Xã Hải Đường"
					},
					{
					  "value": "Xã Hải Lộc"
					},
					{
					  "value": "Xã Hải Quang"
					},
					{
					  "value": "Xã Hải Đông"
					},
					{
					  "value": "Xã Hải Sơn"
					},
					{
					  "value": "Xã Hải Tân"
					},
					{
					  "value": "Xã Hải Phong"
					},
					{
					  "value": "Xã Hải An"
					},
					{
					  "value": "Xã Hải Tây"
					},
					{
					  "value": "Xã Hải Lý"
					},
					{
					  "value": "Xã Hải Phú"
					},
					{
					  "value": "Xã Hải Giang"
					},
					{
					  "value": "Xã Hải Cường"
					},
					{
					  "value": "Xã Hải Ninh"
					},
					{
					  "value": "Xã Hải Chính"
					},
					{
					  "value": "Xã Hải Xuân"
					},
					{
					  "value": "Xã Hải Châu"
					},
					{
					  "value": "Xã Hải Triều"
					},
					{
					  "value": "Xã Hải Hòa"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Ninh Bình",
			  "code": 37,
			  "districts": [
				{
				  "value": "Thành phố Ninh Bình",
				  "code": 369,
				  "wards": [
					{
					  "value": "Phường Đông Thành"
					},
					{
					  "value": "Phường Tân Thành"
					},
					{
					  "value": "Phường Thanh Bình"
					},
					{
					  "value": "Phường Vân Giang"
					},
					{
					  "value": "Phường Bích Đào"
					},
					{
					  "value": "Phường Phúc Thành"
					},
					{
					  "value": "Phường Nam Bình"
					},
					{
					  "value": "Phường Nam Thành"
					},
					{
					  "value": "Phường Ninh Khánh"
					},
					{
					  "value": "Xã Ninh Nhất"
					},
					{
					  "value": "Xã Ninh Tiến"
					},
					{
					  "value": "Xã Ninh Phúc"
					},
					{
					  "value": "Phường Ninh Sơn"
					},
					{
					  "value": "Phường Ninh Phong"
					}
				  ]
				},
				{
				  "value": "Thành phố Tam Điệp",
				  "code": 370,
				  "wards": [
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Trung Sơn"
					},
					{
					  "value": "Phường Nam Sơn"
					},
					{
					  "value": "Phường Tây Sơn"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Phường Yên Bình"
					},
					{
					  "value": "Phường Tân Bình"
					},
					{
					  "value": "Xã Quang Sơn"
					},
					{
					  "value": "Xã Đông Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Nho Quan",
				  "code": 372,
				  "wards": [
					{
					  "value": "Thị trấn Nho Quan"
					},
					{
					  "value": "Xã Xích Thổ"
					},
					{
					  "value": "Xã Gia Lâm"
					},
					{
					  "value": "Xã Gia Sơn"
					},
					{
					  "value": "Xã Thạch Bình"
					},
					{
					  "value": "Xã Gia Thủy"
					},
					{
					  "value": "Xã Gia Tường"
					},
					{
					  "value": "Xã Cúc Phương"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Đức Long"
					},
					{
					  "value": "Xã Lạc Vân"
					},
					{
					  "value": "Xã Đồng Phong"
					},
					{
					  "value": "Xã Yên Quang"
					},
					{
					  "value": "Xã Lạng Phong"
					},
					{
					  "value": "Xã Thượng Hòa"
					},
					{
					  "value": "Xã Văn Phong"
					},
					{
					  "value": "Xã Văn Phương"
					},
					{
					  "value": "Xã Thanh Lạc"
					},
					{
					  "value": "Xã Sơn Lai"
					},
					{
					  "value": "Xã Sơn Thành"
					},
					{
					  "value": "Xã Văn Phú"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Kỳ Phú"
					},
					{
					  "value": "Xã Quỳnh Lưu"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Phú Long"
					},
					{
					  "value": "Xã Quảng Lạc"
					}
				  ]
				},
				{
				  "value": "Huyện Gia Viễn",
				  "code": 373,
				  "wards": [
					{
					  "value": "Thị trấn Me"
					},
					{
					  "value": "Xã Gia Hòa"
					},
					{
					  "value": "Xã Gia Hưng"
					},
					{
					  "value": "Xã Liên Sơn"
					},
					{
					  "value": "Xã Gia Thanh"
					},
					{
					  "value": "Xã Gia Vân"
					},
					{
					  "value": "Xã Gia Phú"
					},
					{
					  "value": "Xã Gia Xuân"
					},
					{
					  "value": "Xã Gia Lập"
					},
					{
					  "value": "Xã Gia Vượng"
					},
					{
					  "value": "Xã Gia Trấn"
					},
					{
					  "value": "Xã Gia Thịnh"
					},
					{
					  "value": "Xã Gia Phương"
					},
					{
					  "value": "Xã Gia Tân"
					},
					{
					  "value": "Xã Gia Thắng"
					},
					{
					  "value": "Xã Gia Trung"
					},
					{
					  "value": "Xã Gia Minh"
					},
					{
					  "value": "Xã Gia Lạc"
					},
					{
					  "value": "Xã Gia Tiến"
					},
					{
					  "value": "Xã Gia Sinh"
					},
					{
					  "value": "Xã Gia Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Hoa Lư",
				  "code": 374,
				  "wards": [
					{
					  "value": "Thị trấn Thiên Tôn"
					},
					{
					  "value": "Xã Ninh Giang"
					},
					{
					  "value": "Xã Trường Yên"
					},
					{
					  "value": "Xã Ninh Khang"
					},
					{
					  "value": "Xã Ninh Mỹ"
					},
					{
					  "value": "Xã Ninh Hòa"
					},
					{
					  "value": "Xã Ninh Xuân"
					},
					{
					  "value": "Xã Ninh Hải"
					},
					{
					  "value": "Xã Ninh Thắng"
					},
					{
					  "value": "Xã Ninh Vân"
					},
					{
					  "value": "Xã Ninh An"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Khánh",
				  "code": 375,
				  "wards": [
					{
					  "value": "Thị trấn Yên Ninh"
					},
					{
					  "value": "Xã Khánh Tiên"
					},
					{
					  "value": "Xã Khánh Phú"
					},
					{
					  "value": "Xã Khánh Hòa"
					},
					{
					  "value": "Xã Khánh Lợi"
					},
					{
					  "value": "Xã Khánh An"
					},
					{
					  "value": "Xã Khánh Cường"
					},
					{
					  "value": "Xã Khánh Cư"
					},
					{
					  "value": "Xã Khánh Thiện"
					},
					{
					  "value": "Xã Khánh Hải"
					},
					{
					  "value": "Xã Khánh Trung"
					},
					{
					  "value": "Xã Khánh Mậu"
					},
					{
					  "value": "Xã Khánh Vân"
					},
					{
					  "value": "Xã Khánh Hội"
					},
					{
					  "value": "Xã Khánh Công"
					},
					{
					  "value": "Xã Khánh Thành"
					},
					{
					  "value": "Xã Khánh Nhạc"
					},
					{
					  "value": "Xã Khánh Thủy"
					},
					{
					  "value": "Xã Khánh Hồng"
					}
				  ]
				},
				{
				  "value": "Huyện Kim Sơn",
				  "code": 376,
				  "wards": [
					{
					  "value": "Thị trấn Phát Diệm"
					},
					{
					  "value": "Thị trấn Bình Minh"
					},
					{
					  "value": "Xã Hồi Ninh"
					},
					{
					  "value": "Xã Xuân Chính"
					},
					{
					  "value": "Xã Kim Định"
					},
					{
					  "value": "Xã Ân Hòa"
					},
					{
					  "value": "Xã Hùng Tiến"
					},
					{
					  "value": "Xã Quang Thiện"
					},
					{
					  "value": "Xã Như Hòa"
					},
					{
					  "value": "Xã Chất Bình"
					},
					{
					  "value": "Xã Đồng Hướng"
					},
					{
					  "value": "Xã Kim Chính"
					},
					{
					  "value": "Xã Thượng Kiệm"
					},
					{
					  "value": "Xã Lưu Phương"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Yên Lộc"
					},
					{
					  "value": "Xã Lai Thành"
					},
					{
					  "value": "Xã Định Hóa"
					},
					{
					  "value": "Xã Văn Hải"
					},
					{
					  "value": "Xã Kim Tân"
					},
					{
					  "value": "Xã Kim Mỹ"
					},
					{
					  "value": "Xã Cồn Thoi"
					},
					{
					  "value": "Xã Kim Hải"
					},
					{
					  "value": "Xã Kim Trung"
					},
					{
					  "value": "Xã Kim Đông"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Mô",
				  "code": 377,
				  "wards": [
					{
					  "value": "Thị trấn Yên Thịnh"
					},
					{
					  "value": "Xã Khánh Thượng"
					},
					{
					  "value": "Xã Khánh Dương"
					},
					{
					  "value": "Xã Mai Sơn"
					},
					{
					  "value": "Xã Khánh Thịnh"
					},
					{
					  "value": "Xã Yên Phong"
					},
					{
					  "value": "Xã Yên Hòa"
					},
					{
					  "value": "Xã Yên Thắng"
					},
					{
					  "value": "Xã Yên Từ"
					},
					{
					  "value": "Xã Yên Hưng"
					},
					{
					  "value": "Xã Yên Thành"
					},
					{
					  "value": "Xã Yên Nhân"
					},
					{
					  "value": "Xã Yên Mỹ"
					},
					{
					  "value": "Xã Yên Mạc"
					},
					{
					  "value": "Xã Yên Đồng"
					},
					{
					  "value": "Xã Yên Thái"
					},
					{
					  "value": "Xã Yên Lâm"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Thanh Hóa",
			  "code": 38,
			  "districts": [
				{
				  "value": "Thành phố Thanh Hóa",
				  "code": 380,
				  "wards": [
					{
					  "value": "Phường Hàm Rồng"
					},
					{
					  "value": "Phường Đông Thọ"
					},
					{
					  "value": "Phường Nam Ngạn"
					},
					{
					  "value": "Phường Trường Thi"
					},
					{
					  "value": "Phường Điện Biên"
					},
					{
					  "value": "Phường Phú Sơn"
					},
					{
					  "value": "Phường Lam Sơn"
					},
					{
					  "value": "Phường Ba Đình"
					},
					{
					  "value": "Phường Ngọc Trạo"
					},
					{
					  "value": "Phường Đông Vệ"
					},
					{
					  "value": "Phường Đông Sơn"
					},
					{
					  "value": "Phường Tân Sơn"
					},
					{
					  "value": "Phường Đông Cương"
					},
					{
					  "value": "Phường Đông Hương"
					},
					{
					  "value": "Phường Đông Hải"
					},
					{
					  "value": "Phường Quảng Hưng"
					},
					{
					  "value": "Phường Quảng Thắng"
					},
					{
					  "value": "Phường Quảng Thành"
					},
					{
					  "value": "Xã Thiệu Vân"
					},
					{
					  "value": "Phường Thiệu Khánh"
					},
					{
					  "value": "Phường Thiệu Dương"
					},
					{
					  "value": "Phường Tào Xuyên"
					},
					{
					  "value": "Phường Long Anh"
					},
					{
					  "value": "Xã Hoằng Quang"
					},
					{
					  "value": "Xã Hoằng Đại"
					},
					{
					  "value": "Phường Đông Lĩnh"
					},
					{
					  "value": "Xã Đông Vinh"
					},
					{
					  "value": "Phường Đông Tân"
					},
					{
					  "value": "Phường An Hưng"
					},
					{
					  "value": "Phường Quảng Thịnh"
					},
					{
					  "value": "Phường Quảng Đông"
					},
					{
					  "value": "Phường Quảng Cát"
					},
					{
					  "value": "Phường Quảng Phú"
					},
					{
					  "value": "Phường Quảng Tâm"
					}
				  ]
				},
				{
				  "value": "Thị xã Bỉm Sơn",
				  "code": 381,
				  "wards": [
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Ba Đình"
					},
					{
					  "value": "Phường Lam Sơn"
					},
					{
					  "value": "Phường Ngọc Trạo"
					},
					{
					  "value": "Phường Đông Sơn"
					},
					{
					  "value": "Phường Phú Sơn"
					},
					{
					  "value": "Xã Quang Trung"
					}
				  ]
				},
				{
				  "value": "Thành phố Sầm Sơn",
				  "code": 382,
				  "wards": [
					{
					  "value": "Phường Trung Sơn"
					},
					{
					  "value": "Phường Bắc Sơn"
					},
					{
					  "value": "Phường Trường Sơn"
					},
					{
					  "value": "Phường Quảng Cư"
					},
					{
					  "value": "Phường Quảng Tiến"
					},
					{
					  "value": "Xã Quảng Minh"
					},
					{
					  "value": "Xã Quảng Hùng"
					},
					{
					  "value": "Phường Quảng Thọ"
					},
					{
					  "value": "Phường Quảng Châu"
					},
					{
					  "value": "Phường Quảng Vinh"
					},
					{
					  "value": "Xã Quảng Đại"
					}
				  ]
				},
				{
				  "value": "Huyện Mường Lát",
				  "code": 384,
				  "wards": [
					{
					  "value": "Thị trấn Mường Lát"
					},
					{
					  "value": "Xã Tam Chung"
					},
					{
					  "value": "Xã Mường Lý"
					},
					{
					  "value": "Xã Trung Lý"
					},
					{
					  "value": "Xã Quang Chiểu"
					},
					{
					  "value": "Xã Pù Nhi"
					},
					{
					  "value": "Xã Nhi Sơn"
					},
					{
					  "value": "Xã Mường Chanh"
					}
				  ]
				},
				{
				  "value": "Huyện Quan Hóa",
				  "code": 385,
				  "wards": [
					{
					  "value": "Thị trấn Hồi Xuân"
					},
					{
					  "value": "Xã Thành Sơn"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Phú Thanh"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Phú Lệ"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Hiền Chung"
					},
					{
					  "value": "Xã Hiền Kiệt"
					},
					{
					  "value": "Xã Nam Tiến"
					},
					{
					  "value": "Xã Thiên Phủ"
					},
					{
					  "value": "Xã Phú Nghiêm"
					},
					{
					  "value": "Xã Nam Xuân"
					},
					{
					  "value": "Xã Nam Động"
					}
				  ]
				},
				{
				  "value": "Huyện Bá Thước",
				  "code": 386,
				  "wards": [
					{
					  "value": "Thị trấn Cành Nàng"
					},
					{
					  "value": "Xã Điền Thượng"
					},
					{
					  "value": "Xã Điền Hạ"
					},
					{
					  "value": "Xã Điền Quang"
					},
					{
					  "value": "Xã Điền Trung"
					},
					{
					  "value": "Xã Thành Sơn"
					},
					{
					  "value": "Xã Lương Ngoại"
					},
					{
					  "value": "Xã Ái Thượng"
					},
					{
					  "value": "Xã Lương Nội"
					},
					{
					  "value": "Xã Điền Lư"
					},
					{
					  "value": "Xã Lương Trung"
					},
					{
					  "value": "Xã Lũng Niêm"
					},
					{
					  "value": "Xã Lũng Cao"
					},
					{
					  "value": "Xã Hạ Trung"
					},
					{
					  "value": "Xã Cổ Lũng"
					},
					{
					  "value": "Xã Thành Lâm"
					},
					{
					  "value": "Xã Ban Công"
					},
					{
					  "value": "Xã Kỳ Tân"
					},
					{
					  "value": "Xã Văn Nho"
					},
					{
					  "value": "Xã Thiết Ống"
					},
					{
					  "value": "Xã Thiết Kế"
					}
				  ]
				},
				{
				  "value": "Huyện Quan Sơn",
				  "code": 387,
				  "wards": [
					{
					  "value": "Xã Trung Xuân"
					},
					{
					  "value": "Xã Trung Thượng"
					},
					{
					  "value": "Xã Trung Tiến"
					},
					{
					  "value": "Xã Trung Hạ"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Tam Thanh"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Na Mèo"
					},
					{
					  "value": "Thị trấn Sơn Lư"
					},
					{
					  "value": "Xã Tam Lư"
					},
					{
					  "value": "Xã Sơn Điện"
					},
					{
					  "value": "Xã Mường Mìn"
					}
				  ]
				},
				{
				  "value": "Huyện Lang Chánh",
				  "code": 388,
				  "wards": [
					{
					  "value": "Xã Yên Khương"
					},
					{
					  "value": "Xã Yên Thắng"
					},
					{
					  "value": "Xã Trí Nang"
					},
					{
					  "value": "Xã Giao An"
					},
					{
					  "value": "Xã Giao Thiện"
					},
					{
					  "value": "Xã Tân Phúc"
					},
					{
					  "value": "Xã Tam Văn"
					},
					{
					  "value": "Xã Lâm Phú"
					},
					{
					  "value": "Thị trấn Lang Chánh"
					},
					{
					  "value": "Xã Đồng Lương"
					}
				  ]
				},
				{
				  "value": "Huyện Ngọc Lặc",
				  "code": 389,
				  "wards": [
					{
					  "value": "Thị trấn Ngọc Lặc"
					},
					{
					  "value": "Xã Lam Sơn"
					},
					{
					  "value": "Xã Mỹ Tân"
					},
					{
					  "value": "Xã Thúy Sơn"
					},
					{
					  "value": "Xã Thạch Lập"
					},
					{
					  "value": "Xã Vân Âm"
					},
					{
					  "value": "Xã Cao Ngọc"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Đồng Thịnh"
					},
					{
					  "value": "Xã Ngọc Liên"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Lộc Thịnh"
					},
					{
					  "value": "Xã Cao Thịnh"
					},
					{
					  "value": "Xã Ngọc Trung"
					},
					{
					  "value": "Xã Phùng Giáo"
					},
					{
					  "value": "Xã Phùng Minh"
					},
					{
					  "value": "Xã Phúc Thịnh"
					},
					{
					  "value": "Xã Nguyệt Ấn"
					},
					{
					  "value": "Xã Kiên Thọ"
					},
					{
					  "value": "Xã Minh Tiến"
					},
					{
					  "value": "Xã Minh Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Cẩm Thủy",
				  "code": 390,
				  "wards": [
					{
					  "value": "Thị trấn Phong Sơn"
					},
					{
					  "value": "Xã Cẩm Thành"
					},
					{
					  "value": "Xã Cẩm Quý"
					},
					{
					  "value": "Xã Cẩm Lương"
					},
					{
					  "value": "Xã Cẩm Thạch"
					},
					{
					  "value": "Xã Cẩm Liên"
					},
					{
					  "value": "Xã Cẩm Giang"
					},
					{
					  "value": "Xã Cẩm Bình"
					},
					{
					  "value": "Xã Cẩm Tú"
					},
					{
					  "value": "Xã Cẩm Châu"
					},
					{
					  "value": "Xã Cẩm Tâm"
					},
					{
					  "value": "Xã Cẩm Ngọc"
					},
					{
					  "value": "Xã Cẩm Long"
					},
					{
					  "value": "Xã Cẩm Yên"
					},
					{
					  "value": "Xã Cẩm Tân"
					},
					{
					  "value": "Xã Cẩm Phú"
					},
					{
					  "value": "Xã Cẩm Vân"
					}
				  ]
				},
				{
				  "value": "Huyện Thạch Thành",
				  "code": 391,
				  "wards": [
					{
					  "value": "Thị trấn Kim Tân"
					},
					{
					  "value": "Thị trấn Vân Du"
					},
					{
					  "value": "Xã Thạch Lâm"
					},
					{
					  "value": "Xã Thạch Quảng"
					},
					{
					  "value": "Xã Thạch Tượng"
					},
					{
					  "value": "Xã Thạch Cẩm"
					},
					{
					  "value": "Xã Thạch Sơn"
					},
					{
					  "value": "Xã Thạch Bình"
					},
					{
					  "value": "Xã Thạch Định"
					},
					{
					  "value": "Xã Thạch Đồng"
					},
					{
					  "value": "Xã Thạch Long"
					},
					{
					  "value": "Xã Thành Mỹ"
					},
					{
					  "value": "Xã Thành Yên"
					},
					{
					  "value": "Xã Thành Vinh"
					},
					{
					  "value": "Xã Thành Minh"
					},
					{
					  "value": "Xã Thành Công"
					},
					{
					  "value": "Xã Thành Tân"
					},
					{
					  "value": "Xã Thành Trực"
					},
					{
					  "value": "Xã Thành Tâm"
					},
					{
					  "value": "Xã Thành An"
					},
					{
					  "value": "Xã Thành Thọ"
					},
					{
					  "value": "Xã Thành Tiến"
					},
					{
					  "value": "Xã Thành Long"
					},
					{
					  "value": "Xã Thành Hưng"
					},
					{
					  "value": "Xã Ngọc Trạo"
					}
				  ]
				},
				{
				  "value": "Huyện Hà Trung",
				  "code": 392,
				  "wards": [
					{
					  "value": "Thị trấn Hà Trung"
					},
					{
					  "value": "Xã Hà Long"
					},
					{
					  "value": "Xã Hà Vinh"
					},
					{
					  "value": "Xã Hà Bắc"
					},
					{
					  "value": "Xã Hoạt Giang"
					},
					{
					  "value": "Xã Yên Dương"
					},
					{
					  "value": "Xã Hà Giang"
					},
					{
					  "value": "Xã Lĩnh Toại"
					},
					{
					  "value": "Xã Hà Ngọc"
					},
					{
					  "value": "Xã Yến Sơn"
					},
					{
					  "value": "Xã Hà Sơn"
					},
					{
					  "value": "Xã Hà Lĩnh"
					},
					{
					  "value": "Xã Hà Đông"
					},
					{
					  "value": "Xã Hà Tân"
					},
					{
					  "value": "Xã Hà Tiến"
					},
					{
					  "value": "Xã Hà Bình"
					},
					{
					  "value": "Xã Hà Lai"
					},
					{
					  "value": "Xã Hà Châu"
					},
					{
					  "value": "Xã Hà Thái"
					},
					{
					  "value": "Xã Hà Hải"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Lộc",
				  "code": 393,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Lộc"
					},
					{
					  "value": "Xã Vĩnh Quang"
					},
					{
					  "value": "Xã Vĩnh Yên"
					},
					{
					  "value": "Xã Vĩnh Tiến"
					},
					{
					  "value": "Xã Vĩnh Long"
					},
					{
					  "value": "Xã Vĩnh Phúc"
					},
					{
					  "value": "Xã Vĩnh Hưng"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Vĩnh Hùng"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Ninh Khang"
					},
					{
					  "value": "Xã Vĩnh Thịnh"
					},
					{
					  "value": "Xã Vĩnh An"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Định",
				  "code": 394,
				  "wards": [
					{
					  "value": "Thị trấn Thống Nhất"
					},
					{
					  "value": "Thị trấn Yên Lâm"
					},
					{
					  "value": "Xã Yên Tâm"
					},
					{
					  "value": "Xã Yên Phú"
					},
					{
					  "value": "Thị trấn Quý Lộc"
					},
					{
					  "value": "Xã Yên Thọ"
					},
					{
					  "value": "Xã Yên Trung"
					},
					{
					  "value": "Xã Yên Trường"
					},
					{
					  "value": "Xã Yên Phong"
					},
					{
					  "value": "Xã Yên Thái"
					},
					{
					  "value": "Xã Yên Hùng"
					},
					{
					  "value": "Xã Yên Thịnh"
					},
					{
					  "value": "Xã Yên Ninh"
					},
					{
					  "value": "Xã Yên Lạc"
					},
					{
					  "value": "Xã Định Tăng"
					},
					{
					  "value": "Xã Định Hòa"
					},
					{
					  "value": "Xã Định Thành"
					},
					{
					  "value": "Xã Định Công"
					},
					{
					  "value": "Xã Định Tân"
					},
					{
					  "value": "Xã Định Tiến"
					},
					{
					  "value": "Xã Định Long"
					},
					{
					  "value": "Xã Định Liên"
					},
					{
					  "value": "Thị trấn Quán Lào"
					},
					{
					  "value": "Xã Định Hưng"
					},
					{
					  "value": "Xã Định Hải"
					},
					{
					  "value": "Xã Định Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Thọ Xuân",
				  "code": 395,
				  "wards": [
					{
					  "value": "Xã Xuân Hồng"
					},
					{
					  "value": "Thị trấn Thọ Xuân"
					},
					{
					  "value": "Xã Bắc Lương"
					},
					{
					  "value": "Xã Nam Giang"
					},
					{
					  "value": "Xã Xuân Phong"
					},
					{
					  "value": "Xã Thọ Lộc"
					},
					{
					  "value": "Xã Xuân Trường"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Thọ Hải"
					},
					{
					  "value": "Xã Tây Hồ"
					},
					{
					  "value": "Xã Xuân Giang"
					},
					{
					  "value": "Xã Xuân Sinh"
					},
					{
					  "value": "Xã Xuân Hưng"
					},
					{
					  "value": "Xã Thọ Diên"
					},
					{
					  "value": "Xã Thọ Lâm"
					},
					{
					  "value": "Xã Thọ Xương"
					},
					{
					  "value": "Xã Xuân Bái"
					},
					{
					  "value": "Xã Xuân Phú"
					},
					{
					  "value": "Thị trấn Sao Vàng"
					},
					{
					  "value": "Thị trấn Lam Sơn"
					},
					{
					  "value": "Xã Xuân Thiên"
					},
					{
					  "value": "Xã Thuận Minh"
					},
					{
					  "value": "Xã Thọ Lập"
					},
					{
					  "value": "Xã Quảng Phú"
					},
					{
					  "value": "Xã Xuân Tín"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Xuân Lai"
					},
					{
					  "value": "Xã Xuân Lập"
					},
					{
					  "value": "Xã Xuân Minh"
					},
					{
					  "value": "Xã Trường Xuân"
					}
				  ]
				},
				{
				  "value": "Huyện Thường Xuân",
				  "code": 396,
				  "wards": [
					{
					  "value": "Xã Bát Mọt"
					},
					{
					  "value": "Xã Yên Nhân"
					},
					{
					  "value": "Xã Xuân Lẹ"
					},
					{
					  "value": "Xã Vạn Xuân"
					},
					{
					  "value": "Xã Lương Sơn"
					},
					{
					  "value": "Xã Xuân Cao"
					},
					{
					  "value": "Xã Luận Thành"
					},
					{
					  "value": "Xã Luận Khê"
					},
					{
					  "value": "Xã Xuân Thắng"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Thị trấn Thường Xuân"
					},
					{
					  "value": "Xã Xuân Dương"
					},
					{
					  "value": "Xã Thọ Thanh"
					},
					{
					  "value": "Xã Ngọc Phụng"
					},
					{
					  "value": "Xã Xuân Chinh"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Triệu Sơn",
				  "code": 397,
				  "wards": [
					{
					  "value": "Thị trấn Triệu Sơn"
					},
					{
					  "value": "Xã Thọ Sơn"
					},
					{
					  "value": "Xã Thọ Bình"
					},
					{
					  "value": "Xã Thọ Tiến"
					},
					{
					  "value": "Xã Hợp Lý"
					},
					{
					  "value": "Xã Hợp Tiến"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Triệu Thành"
					},
					{
					  "value": "Xã Hợp Thắng"
					},
					{
					  "value": "Xã Minh Sơn"
					},
					{
					  "value": "Xã Dân Lực"
					},
					{
					  "value": "Xã Dân Lý"
					},
					{
					  "value": "Xã Dân Quyền"
					},
					{
					  "value": "Xã An Nông"
					},
					{
					  "value": "Xã Văn Sơn"
					},
					{
					  "value": "Xã Thái Hòa"
					},
					{
					  "value": "Thị trấn Nưa"
					},
					{
					  "value": "Xã Đồng Lợi"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Đồng Thắng"
					},
					{
					  "value": "Xã Tiến Nông"
					},
					{
					  "value": "Xã Khuyến Nông"
					},
					{
					  "value": "Xã Xuân Thịnh"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Xã Thọ Dân"
					},
					{
					  "value": "Xã Xuân Thọ"
					},
					{
					  "value": "Xã Thọ Tân"
					},
					{
					  "value": "Xã Thọ Ngọc"
					},
					{
					  "value": "Xã Thọ Cường"
					},
					{
					  "value": "Xã Thọ Phú"
					},
					{
					  "value": "Xã Thọ Vực"
					},
					{
					  "value": "Xã Thọ Thế"
					},
					{
					  "value": "Xã Nông Trường"
					},
					{
					  "value": "Xã Bình Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Thiệu Hóa",
				  "code": 398,
				  "wards": [
					{
					  "value": "Thị trấn Thiệu Hóa"
					},
					{
					  "value": "Xã Thiệu Ngọc"
					},
					{
					  "value": "Xã Thiệu Vũ"
					},
					{
					  "value": "Xã Thiệu Phúc"
					},
					{
					  "value": "Xã Thiệu Tiến"
					},
					{
					  "value": "Xã Thiệu Công"
					},
					{
					  "value": "Xã Thiệu Phú"
					},
					{
					  "value": "Xã Thiệu Long"
					},
					{
					  "value": "Xã Thiệu Giang"
					},
					{
					  "value": "Xã Thiệu Duy"
					},
					{
					  "value": "Xã Thiệu Nguyên"
					},
					{
					  "value": "Xã Thiệu Hợp"
					},
					{
					  "value": "Xã Thiệu Thịnh"
					},
					{
					  "value": "Xã Thiệu Quang"
					},
					{
					  "value": "Xã Thiệu Thành"
					},
					{
					  "value": "Xã Thiệu Toán"
					},
					{
					  "value": "Xã Thiệu Chính"
					},
					{
					  "value": "Xã Thiệu Hòa"
					},
					{
					  "value": "Xã Minh Tâm"
					},
					{
					  "value": "Xã Thiệu Viên"
					},
					{
					  "value": "Xã Thiệu Lý"
					},
					{
					  "value": "Xã Thiệu Vận"
					},
					{
					  "value": "Xã Thiệu Trung"
					},
					{
					  "value": "Xã Tân Châu"
					},
					{
					  "value": "Xã Thiệu Giao"
					}
				  ]
				},
				{
				  "value": "Huyện Hoằng Hóa",
				  "code": 399,
				  "wards": [
					{
					  "value": "Thị trấn Bút Sơn"
					},
					{
					  "value": "Xã Hoằng Giang"
					},
					{
					  "value": "Xã Hoằng Xuân"
					},
					{
					  "value": "Xã Hoằng Phượng"
					},
					{
					  "value": "Xã Hoằng Phú"
					},
					{
					  "value": "Xã Hoằng Quỳ"
					},
					{
					  "value": "Xã Hoằng Kim"
					},
					{
					  "value": "Xã Hoằng Trung"
					},
					{
					  "value": "Xã Hoằng Trinh"
					},
					{
					  "value": "Xã Hoằng Sơn"
					},
					{
					  "value": "Xã Hoằng Cát"
					},
					{
					  "value": "Xã Hoằng Xuyên"
					},
					{
					  "value": "Xã Hoằng Quý"
					},
					{
					  "value": "Xã Hoằng Hợp"
					},
					{
					  "value": "Xã Hoằng Đức"
					},
					{
					  "value": "Xã Hoằng Hà"
					},
					{
					  "value": "Xã Hoằng Đạt"
					},
					{
					  "value": "Xã Hoằng Đạo"
					},
					{
					  "value": "Xã Hoằng Thắng"
					},
					{
					  "value": "Xã Hoằng Đồng"
					},
					{
					  "value": "Xã Hoằng Thái"
					},
					{
					  "value": "Xã Hoằng Thịnh"
					},
					{
					  "value": "Xã Hoằng Thành"
					},
					{
					  "value": "Xã Hoằng Lộc"
					},
					{
					  "value": "Xã Hoằng Trạch"
					},
					{
					  "value": "Xã Hoằng Phong"
					},
					{
					  "value": "Xã Hoằng Lưu"
					},
					{
					  "value": "Xã Hoằng Châu"
					},
					{
					  "value": "Xã Hoằng Tân"
					},
					{
					  "value": "Xã Hoằng Yến"
					},
					{
					  "value": "Xã Hoằng Tiến"
					},
					{
					  "value": "Xã Hoằng Hải"
					},
					{
					  "value": "Xã Hoằng Ngọc"
					},
					{
					  "value": "Xã Hoằng Đông"
					},
					{
					  "value": "Xã Hoằng Thanh"
					},
					{
					  "value": "Xã Hoằng Phụ"
					},
					{
					  "value": "Xã Hoằng Trường"
					}
				  ]
				},
				{
				  "value": "Huyện Hậu Lộc",
				  "code": 400,
				  "wards": [
					{
					  "value": "Thị trấn Hậu Lộc"
					},
					{
					  "value": "Xã Đồng Lộc"
					},
					{
					  "value": "Xã Đại Lộc"
					},
					{
					  "value": "Xã Triệu Lộc"
					},
					{
					  "value": "Xã Tiến Lộc"
					},
					{
					  "value": "Xã Lộc Sơn"
					},
					{
					  "value": "Xã Cầu Lộc"
					},
					{
					  "value": "Xã Thành Lộc"
					},
					{
					  "value": "Xã Tuy Lộc"
					},
					{
					  "value": "Xã Phong Lộc"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Thuần Lộc"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Xã Hoa Lộc"
					},
					{
					  "value": "Xã Liên Lộc"
					},
					{
					  "value": "Xã Quang Lộc"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Hòa Lộc"
					},
					{
					  "value": "Xã Minh Lộc"
					},
					{
					  "value": "Xã Hưng Lộc"
					},
					{
					  "value": "Xã Hải Lộc"
					},
					{
					  "value": "Xã Đa Lộc"
					},
					{
					  "value": "Xã Ngư Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Nga Sơn",
				  "code": 401,
				  "wards": [
					{
					  "value": "Thị trấn Nga Sơn"
					},
					{
					  "value": "Xã Ba Đình"
					},
					{
					  "value": "Xã Nga Vịnh"
					},
					{
					  "value": "Xã Nga Văn"
					},
					{
					  "value": "Xã Nga Thiện"
					},
					{
					  "value": "Xã Nga Tiến"
					},
					{
					  "value": "Xã Nga Phượng"
					},
					{
					  "value": "Xã Nga Trung"
					},
					{
					  "value": "Xã Nga Bạch"
					},
					{
					  "value": "Xã Nga Thanh"
					},
					{
					  "value": "Xã Nga Yên"
					},
					{
					  "value": "Xã Nga Giáp"
					},
					{
					  "value": "Xã Nga Hải"
					},
					{
					  "value": "Xã Nga Thành"
					},
					{
					  "value": "Xã Nga An"
					},
					{
					  "value": "Xã Nga Phú"
					},
					{
					  "value": "Xã Nga Điền"
					},
					{
					  "value": "Xã Nga Tân"
					},
					{
					  "value": "Xã Nga Thủy"
					},
					{
					  "value": "Xã Nga Liên"
					},
					{
					  "value": "Xã Nga Thái"
					},
					{
					  "value": "Xã Nga Thạch"
					},
					{
					  "value": "Xã Nga Thắng"
					},
					{
					  "value": "Xã Nga Trường"
					}
				  ]
				},
				{
				  "value": "Huyện Như Xuân",
				  "code": 402,
				  "wards": [
					{
					  "value": "Thị trấn Yên Cát"
					},
					{
					  "value": "Xã Bãi Trành"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Xuân Bình"
					},
					{
					  "value": "Xã Hóa Quỳ"
					},
					{
					  "value": "Xã Cát Vân"
					},
					{
					  "value": "Xã Cát Tân"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Bình Lương"
					},
					{
					  "value": "Xã Thanh Quân"
					},
					{
					  "value": "Xã Thanh Xuân"
					},
					{
					  "value": "Xã Thanh Hòa"
					},
					{
					  "value": "Xã Thanh Phong"
					},
					{
					  "value": "Xã Thanh Lâm"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Thượng Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Như Thanh",
				  "code": 403,
				  "wards": [
					{
					  "value": "Thị trấn Bến Sung"
					},
					{
					  "value": "Xã Cán Khê"
					},
					{
					  "value": "Xã Xuân Du"
					},
					{
					  "value": "Xã Phượng Nghi"
					},
					{
					  "value": "Xã Mậu Lâm"
					},
					{
					  "value": "Xã Xuân Khang"
					},
					{
					  "value": "Xã Phú Nhuận"
					},
					{
					  "value": "Xã Hải Long"
					},
					{
					  "value": "Xã Xuân Thái"
					},
					{
					  "value": "Xã Xuân Phúc"
					},
					{
					  "value": "Xã Yên Thọ"
					},
					{
					  "value": "Xã Yên Lạc"
					},
					{
					  "value": "Xã Thanh Tân"
					},
					{
					  "value": "Xã Thanh Kỳ"
					}
				  ]
				},
				{
				  "value": "Huyện Nông Cống",
				  "code": 404,
				  "wards": [
					{
					  "value": "Thị trấn Nông Cống"
					},
					{
					  "value": "Xã Tân Phúc"
					},
					{
					  "value": "Xã Tân Thọ"
					},
					{
					  "value": "Xã Hoàng Sơn"
					},
					{
					  "value": "Xã Tân Khang"
					},
					{
					  "value": "Xã Hoàng Giang"
					},
					{
					  "value": "Xã Trung Chính"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Tế Thắng"
					},
					{
					  "value": "Xã Tế Lợi"
					},
					{
					  "value": "Xã Tế Nông"
					},
					{
					  "value": "Xã Minh Nghĩa"
					},
					{
					  "value": "Xã Minh Khôi"
					},
					{
					  "value": "Xã Vạn Hòa"
					},
					{
					  "value": "Xã Trường Trung"
					},
					{
					  "value": "Xã Vạn Thắng"
					},
					{
					  "value": "Xã Trường Giang"
					},
					{
					  "value": "Xã Vạn Thiện"
					},
					{
					  "value": "Xã Thăng Long"
					},
					{
					  "value": "Xã Trường Minh"
					},
					{
					  "value": "Xã Trường Sơn"
					},
					{
					  "value": "Xã Thăng Bình"
					},
					{
					  "value": "Xã Công Liêm"
					},
					{
					  "value": "Xã Tượng Văn"
					},
					{
					  "value": "Xã Thăng Thọ"
					},
					{
					  "value": "Xã Tượng Lĩnh"
					},
					{
					  "value": "Xã Tượng Sơn"
					},
					{
					  "value": "Xã Công Chính"
					},
					{
					  "value": "Xã Yên Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Đông Sơn",
				  "code": 405,
				  "wards": [
					{
					  "value": "Thị trấn Rừng Thông"
					},
					{
					  "value": "Xã Đông Hoàng"
					},
					{
					  "value": "Xã Đông Ninh"
					},
					{
					  "value": "Xã Đông Hòa"
					},
					{
					  "value": "Xã Đông Yên"
					},
					{
					  "value": "Xã Đông Minh"
					},
					{
					  "value": "Xã Đông Thanh"
					},
					{
					  "value": "Xã Đông Tiến"
					},
					{
					  "value": "Xã Đông Khê"
					},
					{
					  "value": "Xã Đông Thịnh"
					},
					{
					  "value": "Xã Đông Văn"
					},
					{
					  "value": "Xã Đông Phú"
					},
					{
					  "value": "Xã Đông Nam"
					},
					{
					  "value": "Xã Đông Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Quảng Xương",
				  "code": 406,
				  "wards": [
					{
					  "value": "Thị trấn Tân Phong"
					},
					{
					  "value": "Xã Quảng Trạch"
					},
					{
					  "value": "Xã Quảng Đức"
					},
					{
					  "value": "Xã Quảng Định"
					},
					{
					  "value": "Xã Quảng Nhân"
					},
					{
					  "value": "Xã Quảng Ninh"
					},
					{
					  "value": "Xã Quảng Bình"
					},
					{
					  "value": "Xã Quảng Hợp"
					},
					{
					  "value": "Xã Quảng Văn"
					},
					{
					  "value": "Xã Quảng Long"
					},
					{
					  "value": "Xã Quảng Yên"
					},
					{
					  "value": "Xã Quảng Hòa"
					},
					{
					  "value": "Xã Quảng Khê"
					},
					{
					  "value": "Xã Quảng Trung"
					},
					{
					  "value": "Xã Quảng Chính"
					},
					{
					  "value": "Xã Quảng Ngọc"
					},
					{
					  "value": "Xã Quảng Trường"
					},
					{
					  "value": "Xã Quảng Phúc"
					},
					{
					  "value": "Xã Quảng Giao"
					},
					{
					  "value": "Xã Quảng Hải"
					},
					{
					  "value": "Xã Quảng Lưu"
					},
					{
					  "value": "Xã Quảng Lộc"
					},
					{
					  "value": "Xã Tiên Trang"
					},
					{
					  "value": "Xã Quảng Nham"
					},
					{
					  "value": "Xã Quảng Thạch"
					},
					{
					  "value": "Xã Quảng Thái"
					}
				  ]
				},
				{
				  "value": "Thị xã Nghi Sơn",
				  "code": 407,
				  "wards": [
					{
					  "value": "Phường Hải Hòa"
					},
					{
					  "value": "Phường Hải Châu"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Phường Hải Ninh"
					},
					{
					  "value": "Xã Anh Sơn"
					},
					{
					  "value": "Xã Ngọc Lĩnh"
					},
					{
					  "value": "Phường Hải An"
					},
					{
					  "value": "Xã Các Sơn"
					},
					{
					  "value": "Phường Tân Dân"
					},
					{
					  "value": "Phường Hải Lĩnh"
					},
					{
					  "value": "Xã Định Hải"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Phường Ninh Hải"
					},
					{
					  "value": "Phường Nguyên Bình"
					},
					{
					  "value": "Xã Hải Nhân"
					},
					{
					  "value": "Phường Bình Minh"
					},
					{
					  "value": "Phường Hải Thanh"
					},
					{
					  "value": "Xã Phú Lâm"
					},
					{
					  "value": "Phường Xuân Lâm"
					},
					{
					  "value": "Phường Trúc Lâm"
					},
					{
					  "value": "Phường Hải Bình"
					},
					{
					  "value": "Xã Tân Trường"
					},
					{
					  "value": "Xã Tùng Lâm"
					},
					{
					  "value": "Phường Tĩnh Hải"
					},
					{
					  "value": "Phường Mai Lâm"
					},
					{
					  "value": "Xã Trường Lâm"
					},
					{
					  "value": "Xã Hải Yến"
					},
					{
					  "value": "Phường Hải Thượng"
					},
					{
					  "value": "Xã Nghi Sơn"
					},
					{
					  "value": "Xã Hải Hà"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Nghệ An",
			  "code": 40,
			  "districts": [
				{
				  "value": "Thành phố Vinh",
				  "code": 412,
				  "wards": [
					{
					  "value": "Phường Đông Vĩnh"
					},
					{
					  "value": "Phường Hà Huy Tập"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Quán Bàu"
					},
					{
					  "value": "Phường Hưng Bình"
					},
					{
					  "value": "Phường Hưng Phúc"
					},
					{
					  "value": "Phường Hưng Dũng"
					},
					{
					  "value": "Phường Cửa Nam"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Đội Cung"
					},
					{
					  "value": "Phường Lê Mao"
					},
					{
					  "value": "Phường Trường Thi"
					},
					{
					  "value": "Phường Bến Thủy"
					},
					{
					  "value": "Phường Hồng Sơn"
					},
					{
					  "value": "Phường Trung Đô"
					},
					{
					  "value": "Xã Nghi Phú"
					},
					{
					  "value": "Xã Hưng Đông"
					},
					{
					  "value": "Xã Hưng Lộc"
					},
					{
					  "value": "Xã Hưng Hòa"
					},
					{
					  "value": "Phường Vinh Tân"
					},
					{
					  "value": "Xã Nghi Liên"
					},
					{
					  "value": "Xã Nghi Ân"
					},
					{
					  "value": "Xã Nghi Kim"
					},
					{
					  "value": "Xã Nghi Đức"
					},
					{
					  "value": "Xã Hưng Chính"
					}
				  ]
				},
				{
				  "value": "Thị xã Cửa Lò",
				  "code": 413,
				  "wards": [
					{
					  "value": "Phường Nghi Thuỷ"
					},
					{
					  "value": "Phường Nghi Tân"
					},
					{
					  "value": "Phường Thu Thuỷ"
					},
					{
					  "value": "Phường Nghi Hòa"
					},
					{
					  "value": "Phường Nghi Hải"
					},
					{
					  "value": "Phường Nghi Hương"
					},
					{
					  "value": "Phường Nghi Thu"
					}
				  ]
				},
				{
				  "value": "Thị xã Thái Hoà",
				  "code": 414,
				  "wards": [
					{
					  "value": "Phường Hoà Hiếu"
					},
					{
					  "value": "Phường Quang Phong"
					},
					{
					  "value": "Phường Quang Tiến"
					},
					{
					  "value": "Phường Long Sơn"
					},
					{
					  "value": "Xã Nghĩa Tiến"
					},
					{
					  "value": "Xã Nghĩa Mỹ"
					},
					{
					  "value": "Xã Tây Hiếu"
					},
					{
					  "value": "Xã Nghĩa Thuận"
					},
					{
					  "value": "Xã Đông Hiếu"
					}
				  ]
				},
				{
				  "value": "Huyện Quế Phong",
				  "code": 415,
				  "wards": [
					{
					  "value": "Thị trấn Kim Sơn"
					},
					{
					  "value": "Xã Thông Thụ"
					},
					{
					  "value": "Xã Đồng Văn"
					},
					{
					  "value": "Xã Hạnh Dịch"
					},
					{
					  "value": "Xã Tiền Phong"
					},
					{
					  "value": "Xã Nậm Giải"
					},
					{
					  "value": "Xã Tri Lễ"
					},
					{
					  "value": "Xã Châu Kim"
					},
					{
					  "value": "Xã Mường Nọc"
					},
					{
					  "value": "Xã Châu Thôn"
					},
					{
					  "value": "Xã Nậm Nhoóng"
					},
					{
					  "value": "Xã Quang Phong"
					},
					{
					  "value": "Xã Căm Muộn"
					}
				  ]
				},
				{
				  "value": "Huyện Quỳ Châu",
				  "code": 416,
				  "wards": [
					{
					  "value": "Thị trấn Tân Lạc"
					},
					{
					  "value": "Xã Châu Bính"
					},
					{
					  "value": "Xã Châu Thuận"
					},
					{
					  "value": "Xã Châu Hội"
					},
					{
					  "value": "Xã Châu Nga"
					},
					{
					  "value": "Xã Châu Tiến"
					},
					{
					  "value": "Xã Châu Hạnh"
					},
					{
					  "value": "Xã Châu Thắng"
					},
					{
					  "value": "Xã Châu Phong"
					},
					{
					  "value": "Xã Châu Bình"
					},
					{
					  "value": "Xã Châu Hoàn"
					},
					{
					  "value": "Xã Diên Lãm"
					}
				  ]
				},
				{
				  "value": "Huyện Kỳ Sơn",
				  "code": 417,
				  "wards": [
					{
					  "value": "Thị trấn Mường Xén"
					},
					{
					  "value": "Xã Mỹ Lý"
					},
					{
					  "value": "Xã Bắc Lý"
					},
					{
					  "value": "Xã Keng Đu"
					},
					{
					  "value": "Xã Đoọc Mạy"
					},
					{
					  "value": "Xã Huồi Tụ"
					},
					{
					  "value": "Xã Mường Lống"
					},
					{
					  "value": "Xã Na Loi"
					},
					{
					  "value": "Xã Nậm Cắn"
					},
					{
					  "value": "Xã Bảo Nam"
					},
					{
					  "value": "Xã Phà Đánh"
					},
					{
					  "value": "Xã Bảo Thắng"
					},
					{
					  "value": "Xã Hữu Lập"
					},
					{
					  "value": "Xã Tà Cạ"
					},
					{
					  "value": "Xã Chiêu Lưu"
					},
					{
					  "value": "Xã Mường Típ"
					},
					{
					  "value": "Xã Hữu Kiệm"
					},
					{
					  "value": "Xã Tây Sơn"
					},
					{
					  "value": "Xã Mường Ải"
					},
					{
					  "value": "Xã Na Ngoi"
					},
					{
					  "value": "Xã Nậm Càn"
					}
				  ]
				},
				{
				  "value": "Huyện Tương Dương",
				  "code": 418,
				  "wards": [
					{
					  "value": "Thị trấn Thạch Giám"
					},
					{
					  "value": "Xã Mai Sơn"
					},
					{
					  "value": "Xã Nhôn Mai"
					},
					{
					  "value": "Xã Hữu Khuông"
					},
					{
					  "value": "Xã Yên Tĩnh"
					},
					{
					  "value": "Xã Nga My"
					},
					{
					  "value": "Xã Xiêng My"
					},
					{
					  "value": "Xã Lưỡng Minh"
					},
					{
					  "value": "Xã Yên Hòa"
					},
					{
					  "value": "Xã Yên Na"
					},
					{
					  "value": "Xã Lưu Kiền"
					},
					{
					  "value": "Xã Xá Lượng"
					},
					{
					  "value": "Xã Tam Thái"
					},
					{
					  "value": "Xã Tam Đình"
					},
					{
					  "value": "Xã Yên Thắng"
					},
					{
					  "value": "Xã Tam Quang"
					},
					{
					  "value": "Xã Tam Hợp"
					}
				  ]
				},
				{
				  "value": "Huyện Nghĩa Đàn",
				  "code": 419,
				  "wards": [
					{
					  "value": "Thị trấn Nghĩa Đàn"
					},
					{
					  "value": "Xã Nghĩa Mai"
					},
					{
					  "value": "Xã Nghĩa Yên"
					},
					{
					  "value": "Xã Nghĩa Lạc"
					},
					{
					  "value": "Xã Nghĩa Lâm"
					},
					{
					  "value": "Xã Nghĩa Sơn"
					},
					{
					  "value": "Xã Nghĩa Lợi"
					},
					{
					  "value": "Xã Nghĩa Bình"
					},
					{
					  "value": "Xã Nghĩa Thọ"
					},
					{
					  "value": "Xã Nghĩa Minh"
					},
					{
					  "value": "Xã Nghĩa Phú"
					},
					{
					  "value": "Xã Nghĩa Hưng"
					},
					{
					  "value": "Xã Nghĩa Hồng"
					},
					{
					  "value": "Xã Nghĩa Thịnh"
					},
					{
					  "value": "Xã Nghĩa Trung"
					},
					{
					  "value": "Xã Nghĩa Hội"
					},
					{
					  "value": "Xã Nghĩa Thành"
					},
					{
					  "value": "Xã Nghĩa Hiếu"
					},
					{
					  "value": "Xã Nghĩa Đức"
					},
					{
					  "value": "Xã Nghĩa An"
					},
					{
					  "value": "Xã Nghĩa Long"
					},
					{
					  "value": "Xã Nghĩa Lộc"
					},
					{
					  "value": "Xã Nghĩa Khánh"
					}
				  ]
				},
				{
				  "value": "Huyện Quỳ Hợp",
				  "code": 420,
				  "wards": [
					{
					  "value": "Thị trấn Quỳ Hợp"
					},
					{
					  "value": "Xã Yên Hợp"
					},
					{
					  "value": "Xã Châu Tiến"
					},
					{
					  "value": "Xã Châu Hồng"
					},
					{
					  "value": "Xã Đồng Hợp"
					},
					{
					  "value": "Xã Châu Thành"
					},
					{
					  "value": "Xã Liên Hợp"
					},
					{
					  "value": "Xã Châu Lộc"
					},
					{
					  "value": "Xã Tam Hợp"
					},
					{
					  "value": "Xã Châu Cường"
					},
					{
					  "value": "Xã Châu Quang"
					},
					{
					  "value": "Xã Thọ Hợp"
					},
					{
					  "value": "Xã Minh Hợp"
					},
					{
					  "value": "Xã Nghĩa Xuân"
					},
					{
					  "value": "Xã Châu Thái"
					},
					{
					  "value": "Xã Châu Đình"
					},
					{
					  "value": "Xã Văn Lợi"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Châu Lý"
					},
					{
					  "value": "Xã Hạ Sơn"
					},
					{
					  "value": "Xã Bắc Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Quỳnh Lưu",
				  "code": 421,
				  "wards": [
					{
					  "value": "Thị trấn Cầu Giát"
					},
					{
					  "value": "Xã Quỳnh Thắng"
					},
					{
					  "value": "Xã Quỳnh Tân"
					},
					{
					  "value": "Xã Quỳnh Châu"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Quỳnh Văn"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Quỳnh Tam"
					},
					{
					  "value": "Xã Quỳnh Hoa"
					},
					{
					  "value": "Xã Quỳnh Thạch"
					},
					{
					  "value": "Xã Quỳnh Bảng"
					},
					{
					  "value": "Xã Quỳnh Mỹ"
					},
					{
					  "value": "Xã Quỳnh Thanh"
					},
					{
					  "value": "Xã Quỳnh Hậu"
					},
					{
					  "value": "Xã Quỳnh Lâm"
					},
					{
					  "value": "Xã Quỳnh Đôi"
					},
					{
					  "value": "Xã Quỳnh Lương"
					},
					{
					  "value": "Xã Quỳnh Hồng"
					},
					{
					  "value": "Xã Quỳnh Yên"
					},
					{
					  "value": "Xã Quỳnh Bá"
					},
					{
					  "value": "Xã Quỳnh Minh"
					},
					{
					  "value": "Xã Quỳnh Diễn"
					},
					{
					  "value": "Xã Quỳnh Hưng"
					},
					{
					  "value": "Xã Quỳnh Giang"
					},
					{
					  "value": "Xã Quỳnh Ngọc"
					},
					{
					  "value": "Xã Quỳnh Nghĩa"
					},
					{
					  "value": "Xã An Hòa"
					},
					{
					  "value": "Xã Tiến Thủy"
					},
					{
					  "value": "Xã Sơn Hải"
					},
					{
					  "value": "Xã Quỳnh Thọ"
					},
					{
					  "value": "Xã Quỳnh Thuận"
					},
					{
					  "value": "Xã Quỳnh Long"
					},
					{
					  "value": "Xã Tân Thắng"
					}
				  ]
				},
				{
				  "value": "Huyện Con Cuông",
				  "code": 422,
				  "wards": [
					{
					  "value": "Thị trấn Con Cuông"
					},
					{
					  "value": "Xã Bình Chuẩn"
					},
					{
					  "value": "Xã Lạng Khê"
					},
					{
					  "value": "Xã Cam Lâm"
					},
					{
					  "value": "Xã Thạch Ngàn"
					},
					{
					  "value": "Xã Đôn Phục"
					},
					{
					  "value": "Xã Mậu Đức"
					},
					{
					  "value": "Xã Châu Khê"
					},
					{
					  "value": "Xã Chi Khê"
					},
					{
					  "value": "Xã Bồng Khê"
					},
					{
					  "value": "Xã Yên Khê"
					},
					{
					  "value": "Xã Lục Dạ"
					},
					{
					  "value": "Xã Môn Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Kỳ",
				  "code": 423,
				  "wards": [
					{
					  "value": "Thị trấn Tân Kỳ"
					},
					{
					  "value": "Xã Tân Hợp"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Tân Xuân"
					},
					{
					  "value": "Xã Giai Xuân"
					},
					{
					  "value": "Xã Nghĩa Bình"
					},
					{
					  "value": "Xã Nghĩa Đồng"
					},
					{
					  "value": "Xã Đồng Văn"
					},
					{
					  "value": "Xã Nghĩa Thái"
					},
					{
					  "value": "Xã Nghĩa Hợp"
					},
					{
					  "value": "Xã Nghĩa Hoàn"
					},
					{
					  "value": "Xã Nghĩa Phúc"
					},
					{
					  "value": "Xã Tiên Kỳ"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Nghĩa Dũng"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Kỳ Sơn"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Kỳ Tân"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Tân Hương"
					},
					{
					  "value": "Xã Nghĩa Hành"
					}
				  ]
				},
				{
				  "value": "Huyện Anh Sơn",
				  "code": 424,
				  "wards": [
					{
					  "value": "Thị trấn Anh Sơn"
					},
					{
					  "value": "Xã Thọ Sơn"
					},
					{
					  "value": "Xã Thành Sơn"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Tam Sơn"
					},
					{
					  "value": "Xã Đỉnh Sơn"
					},
					{
					  "value": "Xã Hùng Sơn"
					},
					{
					  "value": "Xã Cẩm Sơn"
					},
					{
					  "value": "Xã Đức Sơn"
					},
					{
					  "value": "Xã Tường Sơn"
					},
					{
					  "value": "Xã Hoa Sơn"
					},
					{
					  "value": "Xã Tào Sơn"
					},
					{
					  "value": "Xã Vĩnh Sơn"
					},
					{
					  "value": "Xã Lạng Sơn"
					},
					{
					  "value": "Xã Hội Sơn"
					},
					{
					  "value": "Xã Thạch Sơn"
					},
					{
					  "value": "Xã Phúc Sơn"
					},
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Khai Sơn"
					},
					{
					  "value": "Xã Lĩnh Sơn"
					},
					{
					  "value": "Xã Cao Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Diễn Châu",
				  "code": 425,
				  "wards": [
					{
					  "value": "Thị trấn Diễn Châu"
					},
					{
					  "value": "Xã Diễn Lâm"
					},
					{
					  "value": "Xã Diễn Đoài"
					},
					{
					  "value": "Xã Diễn Trường"
					},
					{
					  "value": "Xã Diễn Yên"
					},
					{
					  "value": "Xã Diễn Hoàng"
					},
					{
					  "value": "Xã Diễn Hùng"
					},
					{
					  "value": "Xã Diễn Mỹ"
					},
					{
					  "value": "Xã Diễn Hồng"
					},
					{
					  "value": "Xã Diễn Phong"
					},
					{
					  "value": "Xã Diễn Hải"
					},
					{
					  "value": "Xã Diễn Tháp"
					},
					{
					  "value": "Xã Diễn Liên"
					},
					{
					  "value": "Xã Diễn Vạn"
					},
					{
					  "value": "Xã Diễn Kim"
					},
					{
					  "value": "Xã Diễn Kỷ"
					},
					{
					  "value": "Xã Diễn Xuân"
					},
					{
					  "value": "Xã Diễn Thái"
					},
					{
					  "value": "Xã Diễn Đồng"
					},
					{
					  "value": "Xã Diễn Bích"
					},
					{
					  "value": "Xã Diễn Hạnh"
					},
					{
					  "value": "Xã Diễn Ngọc"
					},
					{
					  "value": "Xã Diễn Quảng"
					},
					{
					  "value": "Xã Diễn Nguyên"
					},
					{
					  "value": "Xã Diễn Hoa"
					},
					{
					  "value": "Xã Diễn Thành"
					},
					{
					  "value": "Xã Diễn Phúc"
					},
					{
					  "value": "Xã Diễn Cát"
					},
					{
					  "value": "Xã Diễn Thịnh"
					},
					{
					  "value": "Xã Diễn Tân"
					},
					{
					  "value": "Xã Minh Châu"
					},
					{
					  "value": "Xã Diễn Thọ"
					},
					{
					  "value": "Xã Diễn Lợi"
					},
					{
					  "value": "Xã Diễn Lộc"
					},
					{
					  "value": "Xã Diễn Trung"
					},
					{
					  "value": "Xã Diễn An"
					},
					{
					  "value": "Xã Diễn Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Yên Thành",
				  "code": 426,
				  "wards": [
					{
					  "value": "Thị trấn Yên Thành"
					},
					{
					  "value": "Xã Mã Thành"
					},
					{
					  "value": "Xã Tiến Thành"
					},
					{
					  "value": "Xã Lăng Thành"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Đức Thành"
					},
					{
					  "value": "Xã Kim Thành"
					},
					{
					  "value": "Xã Hậu Thành"
					},
					{
					  "value": "Xã Hùng Thành"
					},
					{
					  "value": "Xã Đô Thành"
					},
					{
					  "value": "Xã Thọ Thành"
					},
					{
					  "value": "Xã Quang Thành"
					},
					{
					  "value": "Xã Tây Thành"
					},
					{
					  "value": "Xã Phúc Thành"
					},
					{
					  "value": "Xã Hồng Thành"
					},
					{
					  "value": "Xã Đồng Thành"
					},
					{
					  "value": "Xã Phú Thành"
					},
					{
					  "value": "Xã Hoa Thành"
					},
					{
					  "value": "Xã Tăng Thành"
					},
					{
					  "value": "Xã Văn Thành"
					},
					{
					  "value": "Xã Thịnh Thành"
					},
					{
					  "value": "Xã Hợp Thành"
					},
					{
					  "value": "Xã Xuân Thành"
					},
					{
					  "value": "Xã Bắc Thành"
					},
					{
					  "value": "Xã Nhân Thành"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Long Thành"
					},
					{
					  "value": "Xã Minh Thành"
					},
					{
					  "value": "Xã Nam Thành"
					},
					{
					  "value": "Xã Vĩnh Thành"
					},
					{
					  "value": "Xã Lý Thành"
					},
					{
					  "value": "Xã Khánh Thành"
					},
					{
					  "value": "Xã Viên Thành"
					},
					{
					  "value": "Xã Đại Thành"
					},
					{
					  "value": "Xã Liên Thành"
					},
					{
					  "value": "Xã Bảo Thành"
					},
					{
					  "value": "Xã Mỹ Thành"
					},
					{
					  "value": "Xã Công Thành"
					},
					{
					  "value": "Xã Sơn Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Đô Lương",
				  "code": 427,
				  "wards": [
					{
					  "value": "Thị trấn Đô Lương"
					},
					{
					  "value": "Xã Giang Sơn Đông"
					},
					{
					  "value": "Xã Giang Sơn Tây"
					},
					{
					  "value": "Xã Lam Sơn"
					},
					{
					  "value": "Xã Bồi Sơn"
					},
					{
					  "value": "Xã Hồng Sơn"
					},
					{
					  "value": "Xã Bài Sơn"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Tràng Sơn"
					},
					{
					  "value": "Xã Thượng Sơn"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Đặng Sơn"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Nam Sơn"
					},
					{
					  "value": "Xã Lưu Sơn"
					},
					{
					  "value": "Xã Yên Sơn"
					},
					{
					  "value": "Xã Văn Sơn"
					},
					{
					  "value": "Xã Đà Sơn"
					},
					{
					  "value": "Xã Lạc Sơn"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Thái Sơn"
					},
					{
					  "value": "Xã Quang Sơn"
					},
					{
					  "value": "Xã Thịnh Sơn"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Xuân Sơn"
					},
					{
					  "value": "Xã Minh Sơn"
					},
					{
					  "value": "Xã Thuận Sơn"
					},
					{
					  "value": "Xã Nhân Sơn"
					},
					{
					  "value": "Xã Hiến Sơn"
					},
					{
					  "value": "Xã Mỹ Sơn"
					},
					{
					  "value": "Xã Trù Sơn"
					},
					{
					  "value": "Xã Đại Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Chương",
				  "code": 428,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Chương"
					},
					{
					  "value": "Xã Cát Văn"
					},
					{
					  "value": "Xã Thanh Nho"
					},
					{
					  "value": "Xã Hạnh Lâm"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Thanh Hòa"
					},
					{
					  "value": "Xã Phong Thịnh"
					},
					{
					  "value": "Xã Thanh Phong"
					},
					{
					  "value": "Xã Thanh Mỹ"
					},
					{
					  "value": "Xã Thanh Tiên"
					},
					{
					  "value": "Xã Thanh Liên"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Thanh Đồng"
					},
					{
					  "value": "Xã Thanh Ngọc"
					},
					{
					  "value": "Xã Thanh Hương"
					},
					{
					  "value": "Xã Ngọc Lâm"
					},
					{
					  "value": "Xã Thanh Lĩnh"
					},
					{
					  "value": "Xã Đồng Văn"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Thanh Thịnh"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Thanh Chi"
					},
					{
					  "value": "Xã Xuân Tường"
					},
					{
					  "value": "Xã Thanh Dương"
					},
					{
					  "value": "Xã Thanh Lương"
					},
					{
					  "value": "Xã Thanh Khê"
					},
					{
					  "value": "Xã Võ Liệt"
					},
					{
					  "value": "Xã Thanh Long"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã Thanh Khai"
					},
					{
					  "value": "Xã Thanh Yên"
					},
					{
					  "value": "Xã Thanh Hà"
					},
					{
					  "value": "Xã Thanh Giang"
					},
					{
					  "value": "Xã Thanh Tùng"
					},
					{
					  "value": "Xã Thanh Lâm"
					},
					{
					  "value": "Xã Thanh Mai"
					},
					{
					  "value": "Xã Thanh Xuân"
					},
					{
					  "value": "Xã Thanh Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Nghi Lộc",
				  "code": 429,
				  "wards": [
					{
					  "value": "Thị trấn Quán Hành"
					},
					{
					  "value": "Xã Nghi Văn"
					},
					{
					  "value": "Xã Nghi Yên"
					},
					{
					  "value": "Xã Nghi Tiến"
					},
					{
					  "value": "Xã Nghi Hưng"
					},
					{
					  "value": "Xã Nghi Đồng"
					},
					{
					  "value": "Xã Nghi Thiết"
					},
					{
					  "value": "Xã Nghi Lâm"
					},
					{
					  "value": "Xã Nghi Quang"
					},
					{
					  "value": "Xã Nghi Kiều"
					},
					{
					  "value": "Xã Nghi Mỹ"
					},
					{
					  "value": "Xã Nghi Phương"
					},
					{
					  "value": "Xã Nghi Thuận"
					},
					{
					  "value": "Xã Nghi Long"
					},
					{
					  "value": "Xã Nghi Xá"
					},
					{
					  "value": "Xã Nghi Hoa"
					},
					{
					  "value": "Xã Khánh Hợp"
					},
					{
					  "value": "Xã Nghi Thịnh"
					},
					{
					  "value": "Xã Nghi Công Bắc"
					},
					{
					  "value": "Xã Nghi Công Nam"
					},
					{
					  "value": "Xã Nghi Thạch"
					},
					{
					  "value": "Xã Nghi Trung"
					},
					{
					  "value": "Xã Nghi Trường"
					},
					{
					  "value": "Xã Nghi Diên"
					},
					{
					  "value": "Xã Nghi Phong"
					},
					{
					  "value": "Xã Nghi Xuân"
					},
					{
					  "value": "Xã Nghi Vạn"
					},
					{
					  "value": "Xã Phúc Thọ"
					},
					{
					  "value": "Xã Nghi Thái"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Đàn",
				  "code": 430,
				  "wards": [
					{
					  "value": "Xã Nam Hưng"
					},
					{
					  "value": "Xã Nam Nghĩa"
					},
					{
					  "value": "Xã Nam Thanh"
					},
					{
					  "value": "Xã Nam Anh"
					},
					{
					  "value": "Xã Nam Xuân"
					},
					{
					  "value": "Xã Nam Thái"
					},
					{
					  "value": "Thị trấn Nam Đàn"
					},
					{
					  "value": "Xã Nam Lĩnh"
					},
					{
					  "value": "Xã Nam Giang"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Hùng Tiến"
					},
					{
					  "value": "Xã Thượng Tân Lộc"
					},
					{
					  "value": "Xã Kim Liên"
					},
					{
					  "value": "Xã Hồng Long"
					},
					{
					  "value": "Xã Xuân Lâm"
					},
					{
					  "value": "Xã Nam Cát"
					},
					{
					  "value": "Xã Khánh Sơn"
					},
					{
					  "value": "Xã Trung Phúc Cường"
					},
					{
					  "value": "Xã Nam Kim"
					}
				  ]
				},
				{
				  "value": "Huyện Hưng Nguyên",
				  "code": 431,
				  "wards": [
					{
					  "value": "Thị trấn Hưng Nguyên"
					},
					{
					  "value": "Xã Hưng Trung"
					},
					{
					  "value": "Xã Hưng Yên"
					},
					{
					  "value": "Xã Hưng Yên Bắc"
					},
					{
					  "value": "Xã Hưng Tây"
					},
					{
					  "value": "Xã Hưng Đạo"
					},
					{
					  "value": "Xã Hưng Mỹ"
					},
					{
					  "value": "Xã Hưng Thịnh"
					},
					{
					  "value": "Xã Hưng Lĩnh"
					},
					{
					  "value": "Xã Hưng Thông"
					},
					{
					  "value": "Xã Hưng Tân"
					},
					{
					  "value": "Xã Hưng Lợi"
					},
					{
					  "value": "Xã Hưng Nghĩa"
					},
					{
					  "value": "Xã Hưng Phúc"
					},
					{
					  "value": "Xã Long Xá"
					},
					{
					  "value": "Xã Châu Nhân"
					},
					{
					  "value": "Xã Xuân Lam"
					},
					{
					  "value": "Xã Hưng Thành"
					}
				  ]
				},
				{
				  "value": "Thị xã Hoàng Mai",
				  "code": 432,
				  "wards": [
					{
					  "value": "Xã Quỳnh Vinh"
					},
					{
					  "value": "Xã Quỳnh Lộc"
					},
					{
					  "value": "Phường Quỳnh Thiện"
					},
					{
					  "value": "Xã Quỳnh Lập"
					},
					{
					  "value": "Xã Quỳnh Trang"
					},
					{
					  "value": "Phường Mai Hùng"
					},
					{
					  "value": "Phường Quỳnh Dị"
					},
					{
					  "value": "Phường Quỳnh Xuân"
					},
					{
					  "value": "Phường Quỳnh Phương"
					},
					{
					  "value": "Xã Quỳnh Liên"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hà Tĩnh",
			  "code": 42,
			  "districts": [
				{
				  "value": "Thành phố Hà Tĩnh",
				  "code": 436,
				  "wards": [
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Nam Hà"
					},
					{
					  "value": "Phường Bắc Hà"
					},
					{
					  "value": "Phường Nguyễn Du"
					},
					{
					  "value": "Phường Tân Giang"
					},
					{
					  "value": "Phường Đại Nài"
					},
					{
					  "value": "Phường Hà Huy Tập"
					},
					{
					  "value": "Xã Thạch Trung"
					},
					{
					  "value": "Phường Thạch Quý"
					},
					{
					  "value": "Phường Thạch Linh"
					},
					{
					  "value": "Phường Văn Yên"
					},
					{
					  "value": "Xã Thạch Hạ"
					},
					{
					  "value": "Xã Đồng Môn"
					},
					{
					  "value": "Xã Thạch Hưng"
					},
					{
					  "value": "Xã Thạch Bình"
					}
				  ]
				},
				{
				  "value": "Thị xã Hồng Lĩnh",
				  "code": 437,
				  "wards": [
					{
					  "value": "Phường Bắc Hồng"
					},
					{
					  "value": "Phường Nam Hồng"
					},
					{
					  "value": "Phường Trung Lương"
					},
					{
					  "value": "Phường Đức Thuận"
					},
					{
					  "value": "Phường Đậu Liêu"
					},
					{
					  "value": "Xã Thuận Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Hương Sơn",
				  "code": 439,
				  "wards": [
					{
					  "value": "Thị trấn Phố Châu"
					},
					{
					  "value": "Thị trấn Tây Sơn"
					},
					{
					  "value": "Xã Sơn Hồng"
					},
					{
					  "value": "Xã Sơn Tiến"
					},
					{
					  "value": "Xã Sơn Lâm"
					},
					{
					  "value": "Xã Sơn Lễ"
					},
					{
					  "value": "Xã Sơn Giang"
					},
					{
					  "value": "Xã Sơn Lĩnh"
					},
					{
					  "value": "Xã An Hòa Thịnh"
					},
					{
					  "value": "Xã Sơn Tây"
					},
					{
					  "value": "Xã Sơn Ninh"
					},
					{
					  "value": "Xã Sơn Châu"
					},
					{
					  "value": "Xã Tân Mỹ Hà"
					},
					{
					  "value": "Xã Quang Diệm"
					},
					{
					  "value": "Xã Sơn Trung"
					},
					{
					  "value": "Xã Sơn Bằng"
					},
					{
					  "value": "Xã Sơn Bình"
					},
					{
					  "value": "Xã Sơn Kim 1"
					},
					{
					  "value": "Xã Sơn Kim 2"
					},
					{
					  "value": "Xã Sơn Trà"
					},
					{
					  "value": "Xã Sơn Long"
					},
					{
					  "value": "Xã Kim Hoa"
					},
					{
					  "value": "Xã Sơn Hàm"
					},
					{
					  "value": "Xã Sơn Phú"
					},
					{
					  "value": "Xã Sơn Trường"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Thọ",
				  "code": 440,
				  "wards": [
					{
					  "value": "Thị trấn Đức Thọ"
					},
					{
					  "value": "Xã Quang Vĩnh"
					},
					{
					  "value": "Xã Tùng Châu"
					},
					{
					  "value": "Xã Trường Sơn"
					},
					{
					  "value": "Xã Liên Minh"
					},
					{
					  "value": "Xã Yên Hồ"
					},
					{
					  "value": "Xã Tùng Ảnh"
					},
					{
					  "value": "Xã Bùi La Nhân"
					},
					{
					  "value": "Xã Thanh Bình Thịnh"
					},
					{
					  "value": "Xã Lâm Trung Thủy"
					},
					{
					  "value": "Xã Hòa Lạc"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã An Dũng"
					},
					{
					  "value": "Xã Đức Đồng"
					},
					{
					  "value": "Xã Đức Lạng"
					},
					{
					  "value": "Xã Tân Hương"
					}
				  ]
				},
				{
				  "value": "Huyện Vũ Quang",
				  "code": 441,
				  "wards": [
					{
					  "value": "Thị trấn Vũ Quang"
					},
					{
					  "value": "Xã Ân Phú"
					},
					{
					  "value": "Xã Đức Giang"
					},
					{
					  "value": "Xã Đức Lĩnh"
					},
					{
					  "value": "Xã Thọ Điền"
					},
					{
					  "value": "Xã Đức Hương"
					},
					{
					  "value": "Xã Đức Bồng"
					},
					{
					  "value": "Xã Đức Liên"
					},
					{
					  "value": "Xã Hương Minh"
					},
					{
					  "value": "Xã Quang Thọ"
					}
				  ]
				},
				{
				  "value": "Huyện Nghi Xuân",
				  "code": 442,
				  "wards": [
					{
					  "value": "Thị trấn Xuân An"
					},
					{
					  "value": "Xã Xuân Hội"
					},
					{
					  "value": "Xã Đan Trường"
					},
					{
					  "value": "Xã Xuân Phổ"
					},
					{
					  "value": "Xã Xuân Hải"
					},
					{
					  "value": "Xã Xuân Giang"
					},
					{
					  "value": "Thị trấn Tiên Điền"
					},
					{
					  "value": "Xã Xuân Yên"
					},
					{
					  "value": "Xã Xuân Mỹ"
					},
					{
					  "value": "Xã Xuân Thành"
					},
					{
					  "value": "Xã Xuân Viên"
					},
					{
					  "value": "Xã Xuân Hồng"
					},
					{
					  "value": "Xã Cỗ Đạm"
					},
					{
					  "value": "Xã Xuân Liên"
					},
					{
					  "value": "Xã Xuân Lĩnh"
					},
					{
					  "value": "Xã Xuân Lam"
					},
					{
					  "value": "Xã Cương Gián"
					}
				  ]
				},
				{
				  "value": "Huyện Can Lộc",
				  "code": 443,
				  "wards": [
					{
					  "value": "Thị trấn Nghèn"
					},
					{
					  "value": "Xã Thiên Lộc"
					},
					{
					  "value": "Xã Thuần Thiện"
					},
					{
					  "value": "Xã Vượng Lộc"
					},
					{
					  "value": "Xã Thanh Lộc"
					},
					{
					  "value": "Xã Kim Song Trường"
					},
					{
					  "value": "Xã Thường Nga"
					},
					{
					  "value": "Xã Tùng Lộc"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Gia Hanh"
					},
					{
					  "value": "Xã Khánh Vĩnh Yên"
					},
					{
					  "value": "Xã Trung Lộc"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Xã Thượng Lộc"
					},
					{
					  "value": "Xã Quang Lộc"
					},
					{
					  "value": "Thị trấn Đồng Lộc"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Sơn Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Hương Khê",
				  "code": 444,
				  "wards": [
					{
					  "value": "Thị trấn Hương Khê"
					},
					{
					  "value": "Xã Điền Mỹ"
					},
					{
					  "value": "Xã Hà Linh"
					},
					{
					  "value": "Xã Hương Thủy"
					},
					{
					  "value": "Xã Hòa Hải"
					},
					{
					  "value": "Xã Phúc Đồng"
					},
					{
					  "value": "Xã Hương Giang"
					},
					{
					  "value": "Xã Lộc Yên"
					},
					{
					  "value": "Xã Hương Bình"
					},
					{
					  "value": "Xã Hương Long"
					},
					{
					  "value": "Xã Phú Gia"
					},
					{
					  "value": "Xã Gia Phố"
					},
					{
					  "value": "Xã Phú Phong"
					},
					{
					  "value": "Xã Hương Đô"
					},
					{
					  "value": "Xã Hương Vĩnh"
					},
					{
					  "value": "Xã Hương Xuân"
					},
					{
					  "value": "Xã Phúc Trạch"
					},
					{
					  "value": "Xã Hương Trà"
					},
					{
					  "value": "Xã Hương Trạch"
					},
					{
					  "value": "Xã Hương Lâm"
					},
					{
					  "value": "Xã Hương Liên"
					}
				  ]
				},
				{
				  "value": "Huyện Thạch Hà",
				  "code": 445,
				  "wards": [
					{
					  "value": "Thị trấn Thạch Hà"
					},
					{
					  "value": "Xã Ngọc Sơn"
					},
					{
					  "value": "Xã Thạch Hải"
					},
					{
					  "value": "Xã Thạch Kênh"
					},
					{
					  "value": "Xã Thạch Sơn"
					},
					{
					  "value": "Xã Thạch Liên"
					},
					{
					  "value": "Xã Đỉnh Bàn"
					},
					{
					  "value": "Xã Việt Tiến"
					},
					{
					  "value": "Xã Thạch Khê"
					},
					{
					  "value": "Xã Thạch Long"
					},
					{
					  "value": "Xã Thạch Trị"
					},
					{
					  "value": "Xã Thạch Lạc"
					},
					{
					  "value": "Xã Thạch Ngọc"
					},
					{
					  "value": "Xã Tượng Sơn"
					},
					{
					  "value": "Xã Thạch Văn"
					},
					{
					  "value": "Xã Lưu Vĩnh Sơn"
					},
					{
					  "value": "Xã Thạch Thắng"
					},
					{
					  "value": "Xã Thạch Đài"
					},
					{
					  "value": "Xã Thạch Hội"
					},
					{
					  "value": "Xã Tân Lâm Hương"
					},
					{
					  "value": "Xã Thạch Xuân"
					},
					{
					  "value": "Xã Nam Điền"
					}
				  ]
				},
				{
				  "value": "Huyện Cẩm Xuyên",
				  "code": 446,
				  "wards": [
					{
					  "value": "Thị trấn Cẩm Xuyên"
					},
					{
					  "value": "Thị trấn Thiên Cầm"
					},
					{
					  "value": "Xã Yên Hòa"
					},
					{
					  "value": "Xã Cẩm Dương"
					},
					{
					  "value": "Xã Cẩm Bình"
					},
					{
					  "value": "Xã Cẩm Vĩnh"
					},
					{
					  "value": "Xã Cẩm Thành"
					},
					{
					  "value": "Xã Cẩm Quang"
					},
					{
					  "value": "Xã Cẩm Thạch"
					},
					{
					  "value": "Xã Cẩm Nhượng"
					},
					{
					  "value": "Xã Nam Phúc Thăng"
					},
					{
					  "value": "Xã Cẩm Duệ"
					},
					{
					  "value": "Xã Cẩm Lĩnh"
					},
					{
					  "value": "Xã Cẩm Quan"
					},
					{
					  "value": "Xã Cẩm Hà"
					},
					{
					  "value": "Xã Cẩm Lộc"
					},
					{
					  "value": "Xã Cẩm Hưng"
					},
					{
					  "value": "Xã Cẩm Thịnh"
					},
					{
					  "value": "Xã Cẩm Mỹ"
					},
					{
					  "value": "Xã Cẩm Trung"
					},
					{
					  "value": "Xã Cẩm Sơn"
					},
					{
					  "value": "Xã Cẩm Lạc"
					},
					{
					  "value": "Xã Cẩm Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Kỳ Anh",
				  "code": 447,
				  "wards": [
					{
					  "value": "Xã Kỳ Xuân"
					},
					{
					  "value": "Xã Kỳ Bắc"
					},
					{
					  "value": "Xã Kỳ Phú"
					},
					{
					  "value": "Xã Kỳ Phong"
					},
					{
					  "value": "Xã Kỳ Tiến"
					},
					{
					  "value": "Xã Kỳ Giang"
					},
					{
					  "value": "Xã Kỳ Đồng"
					},
					{
					  "value": "Xã Kỳ Khang"
					},
					{
					  "value": "Xã Kỳ Văn"
					},
					{
					  "value": "Xã Kỳ Trung"
					},
					{
					  "value": "Xã Kỳ Thọ"
					},
					{
					  "value": "Xã Kỳ Tây"
					},
					{
					  "value": "Xã Kỳ Thượng"
					},
					{
					  "value": "Xã Kỳ Hải"
					},
					{
					  "value": "Xã Kỳ Thư"
					},
					{
					  "value": "Xã Kỳ Châu"
					},
					{
					  "value": "Xã Kỳ Tân"
					},
					{
					  "value": "Xã Lâm Hợp"
					},
					{
					  "value": "Xã Kỳ Sơn"
					},
					{
					  "value": "Xã Kỳ Lạc"
					}
				  ]
				},
				{
				  "value": "Huyện Lộc Hà",
				  "code": 448,
				  "wards": [
					{
					  "value": "Xã Tân Lộc"
					},
					{
					  "value": "Xã Hồng Lộc"
					},
					{
					  "value": "Xã Thịnh Lộc"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Ích Hậu"
					},
					{
					  "value": "Xã Phù Lưu"
					},
					{
					  "value": "Thị trấn Lộc Hà"
					},
					{
					  "value": "Xã Thạch Mỹ"
					},
					{
					  "value": "Xã Thạch Kim"
					},
					{
					  "value": "Xã Thạch Châu"
					},
					{
					  "value": "Xã Hộ Độ"
					},
					{
					  "value": "Xã Mai Phụ"
					}
				  ]
				},
				{
				  "value": "Thị xã Kỳ Anh",
				  "code": 449,
				  "wards": [
					{
					  "value": "Phường Hưng Trí"
					},
					{
					  "value": "Xã Kỳ Ninh"
					},
					{
					  "value": "Xã Kỳ Lợi"
					},
					{
					  "value": "Xã Kỳ Hà"
					},
					{
					  "value": "Phường Kỳ Trinh"
					},
					{
					  "value": "Phường Kỳ Thịnh"
					},
					{
					  "value": "Xã Kỳ Hoa"
					},
					{
					  "value": "Phường Kỳ Phương"
					},
					{
					  "value": "Phường Kỳ Long"
					},
					{
					  "value": "Phường Kỳ Liên"
					},
					{
					  "value": "Xã Kỳ Nam"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Quảng Bình",
			  "code": 44,
			  "districts": [
				{
				  "value": "Thành Phố Đồng Hới",
				  "code": 450,
				  "wards": [
					{
					  "value": "Phường Hải Thành"
					},
					{
					  "value": "Phường Đồng Phú"
					},
					{
					  "value": "Phường Bắc Lý"
					},
					{
					  "value": "Phường Nam Lý"
					},
					{
					  "value": "Phường Đồng Hải"
					},
					{
					  "value": "Phường Đồng Sơn"
					},
					{
					  "value": "Phường Phú Hải"
					},
					{
					  "value": "Phường Bắc Nghĩa"
					},
					{
					  "value": "Phường Đức Ninh Đông"
					},
					{
					  "value": "Xã Quang Phú"
					},
					{
					  "value": "Xã Lộc Ninh"
					},
					{
					  "value": "Xã Bảo Ninh"
					},
					{
					  "value": "Xã Nghĩa Ninh"
					},
					{
					  "value": "Xã Thuận Đức"
					},
					{
					  "value": "Xã Đức Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Minh Hóa",
				  "code": 452,
				  "wards": [
					{
					  "value": "Thị trấn Quy Đạt"
					},
					{
					  "value": "Xã Dân Hóa"
					},
					{
					  "value": "Xã Trọng Hóa"
					},
					{
					  "value": "Xã Hóa Phúc"
					},
					{
					  "value": "Xã Hồng Hóa"
					},
					{
					  "value": "Xã Hóa Thanh"
					},
					{
					  "value": "Xã Hóa Tiến"
					},
					{
					  "value": "Xã Hóa Hợp"
					},
					{
					  "value": "Xã Xuân Hóa"
					},
					{
					  "value": "Xã Yên Hóa"
					},
					{
					  "value": "Xã Minh Hóa"
					},
					{
					  "value": "Xã Tân Hóa"
					},
					{
					  "value": "Xã Hóa Sơn"
					},
					{
					  "value": "Xã Trung Hóa"
					},
					{
					  "value": "Xã Thượng Hóa"
					}
				  ]
				},
				{
				  "value": "Huyện Tuyên Hóa",
				  "code": 453,
				  "wards": [
					{
					  "value": "Thị trấn Đồng Lê"
					},
					{
					  "value": "Xã Hương Hóa"
					},
					{
					  "value": "Xã Kim Hóa"
					},
					{
					  "value": "Xã Thanh Hóa"
					},
					{
					  "value": "Xã Thanh Thạch"
					},
					{
					  "value": "Xã Thuận Hóa"
					},
					{
					  "value": "Xã Lâm Hóa"
					},
					{
					  "value": "Xã Lê Hóa"
					},
					{
					  "value": "Xã Sơn Hóa"
					},
					{
					  "value": "Xã Đồng Hóa"
					},
					{
					  "value": "Xã Ngư Hóa"
					},
					{
					  "value": "Xã Thạch Hóa"
					},
					{
					  "value": "Xã Đức Hóa"
					},
					{
					  "value": "Xã Phong Hóa"
					},
					{
					  "value": "Xã Mai Hóa"
					},
					{
					  "value": "Xã Tiến Hóa"
					},
					{
					  "value": "Xã Châu Hóa"
					},
					{
					  "value": "Xã Cao Quảng"
					},
					{
					  "value": "Xã Văn Hóa"
					}
				  ]
				},
				{
				  "value": "Huyện Quảng Trạch",
				  "code": 454,
				  "wards": [
					{
					  "value": "Xã Quảng Hợp"
					},
					{
					  "value": "Xã Quảng Kim"
					},
					{
					  "value": "Xã Quảng Đông"
					},
					{
					  "value": "Xã Quảng Phú"
					},
					{
					  "value": "Xã Quảng Châu"
					},
					{
					  "value": "Xã Quảng Thạch"
					},
					{
					  "value": "Xã Quảng Lưu"
					},
					{
					  "value": "Xã Quảng Tùng"
					},
					{
					  "value": "Xã Cảnh Dương"
					},
					{
					  "value": "Xã Quảng Tiến"
					},
					{
					  "value": "Xã Quảng Hưng"
					},
					{
					  "value": "Xã Quảng Xuân"
					},
					{
					  "value": "Xã Cảnh Hóa"
					},
					{
					  "value": "Xã Liên Trường"
					},
					{
					  "value": "Xã Quảng Phương"
					},
					{
					  "value": "Xã Phù Hóa"
					},
					{
					  "value": "Xã Quảng Thanh"
					}
				  ]
				},
				{
				  "value": "Huyện Bố Trạch",
				  "code": 455,
				  "wards": [
					{
					  "value": "Thị trấn Hoàn Lão"
					},
					{
					  "value": "Thị trấn NT Việt Trung"
					},
					{
					  "value": "Xã Xuân Trạch"
					},
					{
					  "value": "Xã Mỹ Trạch"
					},
					{
					  "value": "Xã Hạ Trạch"
					},
					{
					  "value": "Xã Bắc Trạch"
					},
					{
					  "value": "Xã Lâm Trạch"
					},
					{
					  "value": "Xã Thanh Trạch"
					},
					{
					  "value": "Xã Liên Trạch"
					},
					{
					  "value": "Xã Phúc Trạch"
					},
					{
					  "value": "Xã Cự Nẫm"
					},
					{
					  "value": "Xã Hải Phú"
					},
					{
					  "value": "Xã Thượng Trạch"
					},
					{
					  "value": "Xã Sơn Lộc"
					},
					{
					  "value": "Xã Hưng Trạch"
					},
					{
					  "value": "Xã Đồng Trạch"
					},
					{
					  "value": "Xã Đức Trạch"
					},
					{
					  "value": "Thị trấn Phong Nha"
					},
					{
					  "value": "Xã Vạn Trạch"
					},
					{
					  "value": "Xã Phú Định"
					},
					{
					  "value": "Xã Trung Trạch"
					},
					{
					  "value": "Xã Tây Trạch"
					},
					{
					  "value": "Xã Hòa Trạch"
					},
					{
					  "value": "Xã Đại Trạch"
					},
					{
					  "value": "Xã Nhân Trạch"
					},
					{
					  "value": "Xã Tân Trạch"
					},
					{
					  "value": "Xã Nam Trạch"
					},
					{
					  "value": "Xã Lý Trạch"
					}
				  ]
				},
				{
				  "value": "Huyện Quảng Ninh",
				  "code": 456,
				  "wards": [
					{
					  "value": "Thị trấn Quán Hàu"
					},
					{
					  "value": "Xã Trường Sơn"
					},
					{
					  "value": "Xã Lương Ninh"
					},
					{
					  "value": "Xã Vĩnh Ninh"
					},
					{
					  "value": "Xã Võ Ninh"
					},
					{
					  "value": "Xã Hải Ninh"
					},
					{
					  "value": "Xã Hàm Ninh"
					},
					{
					  "value": "Xã Duy Ninh"
					},
					{
					  "value": "Xã Gia Ninh"
					},
					{
					  "value": "Xã Trường Xuân"
					},
					{
					  "value": "Xã Hiền Ninh"
					},
					{
					  "value": "Xã Tân Ninh"
					},
					{
					  "value": "Xã Xuân Ninh"
					},
					{
					  "value": "Xã An Ninh"
					},
					{
					  "value": "Xã Vạn Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Lệ Thủy",
				  "code": 457,
				  "wards": [
					{
					  "value": "Thị trấn NT Lệ Ninh"
					},
					{
					  "value": "Thị trấn Kiến Giang"
					},
					{
					  "value": "Xã Hồng Thủy"
					},
					{
					  "value": "Xã Ngư Thủy Bắc"
					},
					{
					  "value": "Xã Hoa Thủy"
					},
					{
					  "value": "Xã Thanh Thủy"
					},
					{
					  "value": "Xã An Thủy"
					},
					{
					  "value": "Xã Phong Thủy"
					},
					{
					  "value": "Xã Cam Thủy"
					},
					{
					  "value": "Xã Ngân Thủy"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Lộc Thủy"
					},
					{
					  "value": "Xã Liên Thủy"
					},
					{
					  "value": "Xã Hưng Thủy"
					},
					{
					  "value": "Xã Dương Thủy"
					},
					{
					  "value": "Xã Tân Thủy"
					},
					{
					  "value": "Xã Phú Thủy"
					},
					{
					  "value": "Xã Xuân Thủy"
					},
					{
					  "value": "Xã Mỹ Thủy"
					},
					{
					  "value": "Xã Ngư Thủy"
					},
					{
					  "value": "Xã Mai Thủy"
					},
					{
					  "value": "Xã Sen Thủy"
					},
					{
					  "value": "Xã Thái Thủy"
					},
					{
					  "value": "Xã Kim Thủy"
					},
					{
					  "value": "Xã Trường Thủy"
					},
					{
					  "value": "Xã Lâm Thủy"
					}
				  ]
				},
				{
				  "value": "Thị xã Ba Đồn",
				  "code": 458,
				  "wards": [
					{
					  "value": "Phường Ba Đồn"
					},
					{
					  "value": "Phường Quảng Long"
					},
					{
					  "value": "Phường Quảng Thọ"
					},
					{
					  "value": "Xã Quảng Tiên"
					},
					{
					  "value": "Xã Quảng Trung"
					},
					{
					  "value": "Phường Quảng Phong"
					},
					{
					  "value": "Phường Quảng Thuận"
					},
					{
					  "value": "Xã Quảng Tân"
					},
					{
					  "value": "Xã Quảng Hải"
					},
					{
					  "value": "Xã Quảng Sơn"
					},
					{
					  "value": "Xã Quảng Lộc"
					},
					{
					  "value": "Xã Quảng Thủy"
					},
					{
					  "value": "Xã Quảng Văn"
					},
					{
					  "value": "Phường Quảng Phúc"
					},
					{
					  "value": "Xã Quảng Hòa"
					},
					{
					  "value": "Xã Quảng Minh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Quảng Trị",
			  "code": 45,
			  "districts": [
				{
				  "value": "Thành phố Đông Hà",
				  "code": 461,
				  "wards": [
					{
					  "value": "Phường Đông Giang"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường Đông Lễ"
					},
					{
					  "value": "Phường Đông Thanh"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường Đông Lương"
					},
					{
					  "value": "Phường 3"
					}
				  ]
				},
				{
				  "value": "Thị xã Quảng Trị",
				  "code": 462,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường An Đôn"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Xã Hải Lệ"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Linh",
				  "code": 464,
				  "wards": [
					{
					  "value": "Thị trấn Hồ Xá"
					},
					{
					  "value": "Thị trấn Bến Quan"
					},
					{
					  "value": "Xã Vĩnh Thái"
					},
					{
					  "value": "Xã Vĩnh Tú"
					},
					{
					  "value": "Xã Vĩnh Chấp"
					},
					{
					  "value": "Xã Trung Nam"
					},
					{
					  "value": "Xã Kim Thạch"
					},
					{
					  "value": "Xã Vĩnh Long"
					},
					{
					  "value": "Xã Vĩnh Khê"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Vĩnh Thủy"
					},
					{
					  "value": "Xã Vĩnh Lâm"
					},
					{
					  "value": "Xã Hiền Thành"
					},
					{
					  "value": "Thị trấn Cửa Tùng"
					},
					{
					  "value": "Xã Vĩnh Hà"
					},
					{
					  "value": "Xã Vĩnh Sơn"
					},
					{
					  "value": "Xã Vĩnh Giang"
					},
					{
					  "value": "Xã Vĩnh Ô"
					}
				  ]
				},
				{
				  "value": "Huyện Hướng Hóa",
				  "code": 465,
				  "wards": [
					{
					  "value": "Thị trấn Khe Sanh"
					},
					{
					  "value": "Thị trấn Lao Bảo"
					},
					{
					  "value": "Xã Hướng Lập"
					},
					{
					  "value": "Xã Hướng Việt"
					},
					{
					  "value": "Xã Hướng Phùng"
					},
					{
					  "value": "Xã Hướng Sơn"
					},
					{
					  "value": "Xã Hướng Linh"
					},
					{
					  "value": "Xã Tân Hợp"
					},
					{
					  "value": "Xã Hướng Tân"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Tân Liên"
					},
					{
					  "value": "Xã Húc"
					},
					{
					  "value": "Xã Thuận"
					},
					{
					  "value": "Xã Hướng Lộc"
					},
					{
					  "value": "Xã Ba Tầng"
					},
					{
					  "value": "Xã Thanh"
					},
					{
					  "value": "Xã A Dơi"
					},
					{
					  "value": "Xã Lìa"
					},
					{
					  "value": "Xã Xy"
					}
				  ]
				},
				{
				  "value": "Huyện Gio Linh",
				  "code": 466,
				  "wards": [
					{
					  "value": "Thị trấn Gio Linh"
					},
					{
					  "value": "Thị trấn Cửa Việt"
					},
					{
					  "value": "Xã Trung Giang"
					},
					{
					  "value": "Xã Trung Hải"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Phong Bình"
					},
					{
					  "value": "Xã Gio Mỹ"
					},
					{
					  "value": "Xã Gio Hải"
					},
					{
					  "value": "Xã Gio An"
					},
					{
					  "value": "Xã Gio Châu"
					},
					{
					  "value": "Xã Gio Việt"
					},
					{
					  "value": "Xã Linh Trường"
					},
					{
					  "value": "Xã Gio Sơn"
					},
					{
					  "value": "Xã Gio Mai"
					},
					{
					  "value": "Xã Hải Thái"
					},
					{
					  "value": "Xã Linh Hải"
					},
					{
					  "value": "Xã Gio Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Đa Krông",
				  "code": 467,
				  "wards": [
					{
					  "value": "Thị trấn Krông Klang"
					},
					{
					  "value": "Xã Mò Ó"
					},
					{
					  "value": "Xã Hướng Hiệp"
					},
					{
					  "value": "Xã Đa Krông"
					},
					{
					  "value": "Xã Triệu Nguyên"
					},
					{
					  "value": "Xã Ba Lòng"
					},
					{
					  "value": "Xã Ba Nang"
					},
					{
					  "value": "Xã Tà Long"
					},
					{
					  "value": "Xã Húc Nghì"
					},
					{
					  "value": "Xã A Vao"
					},
					{
					  "value": "Xã Tà Rụt"
					},
					{
					  "value": "Xã A Bung"
					},
					{
					  "value": "Xã A Ngo"
					}
				  ]
				},
				{
				  "value": "Huyện Cam Lộ",
				  "code": 468,
				  "wards": [
					{
					  "value": "Thị trấn Cam Lộ"
					},
					{
					  "value": "Xã Cam Tuyền"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Cam Thủy"
					},
					{
					  "value": "Xã Cam Thành"
					},
					{
					  "value": "Xã Cam Hiếu"
					},
					{
					  "value": "Xã Cam Chính"
					},
					{
					  "value": "Xã Cam Nghĩa"
					}
				  ]
				},
				{
				  "value": "Huyện Triệu Phong",
				  "code": 469,
				  "wards": [
					{
					  "value": "Thị trấn Ái Tử"
					},
					{
					  "value": "Xã Triệu An"
					},
					{
					  "value": "Xã Triệu Vân"
					},
					{
					  "value": "Xã Triệu Phước"
					},
					{
					  "value": "Xã Triệu Độ"
					},
					{
					  "value": "Xã Triệu Trạch"
					},
					{
					  "value": "Xã Triệu Thuận"
					},
					{
					  "value": "Xã Triệu Đại"
					},
					{
					  "value": "Xã Triệu Hòa"
					},
					{
					  "value": "Xã Triệu Lăng"
					},
					{
					  "value": "Xã Triệu Sơn"
					},
					{
					  "value": "Xã Triệu Long"
					},
					{
					  "value": "Xã Triệu Tài"
					},
					{
					  "value": "Xã Triệu Trung"
					},
					{
					  "value": "Xã Triệu Ái"
					},
					{
					  "value": "Xã Triệu Thượng"
					},
					{
					  "value": "Xã Triệu Giang"
					},
					{
					  "value": "Xã Triệu Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Hải Lăng",
				  "code": 470,
				  "wards": [
					{
					  "value": "Thị trấn Diên Sanh"
					},
					{
					  "value": "Xã Hải An"
					},
					{
					  "value": "Xã Hải Ba"
					},
					{
					  "value": "Xã Hải Quy"
					},
					{
					  "value": "Xã Hải Quế"
					},
					{
					  "value": "Xã Hải Hưng"
					},
					{
					  "value": "Xã Hải Phú"
					},
					{
					  "value": "Xã Hải Thượng"
					},
					{
					  "value": "Xã Hải Dương"
					},
					{
					  "value": "Xã Hải Định"
					},
					{
					  "value": "Xã Hải Lâm"
					},
					{
					  "value": "Xã Hải Phong"
					},
					{
					  "value": "Xã Hải Trường"
					},
					{
					  "value": "Xã Hải Sơn"
					},
					{
					  "value": "Xã Hải Chánh"
					},
					{
					  "value": "Xã Hải Khê"
					}
				  ]
				},
				{
				  "value": "Huyện Cồn Cỏ",
				  "code": 471,
				  "wards": []
				}
			  ]
			},
			{
			  "value": "Tỉnh Thừa Thiên Huế",
			  "code": 46,
			  "districts": [
				{
				  "value": "Thành phố Huế",
				  "code": 474,
				  "wards": [
					{
					  "value": "Phường Tây Lộc"
					},
					{
					  "value": "Phường Thuận Lộc"
					},
					{
					  "value": "Phường Gia Hội"
					},
					{
					  "value": "Phường Phú Hậu"
					},
					{
					  "value": "Phường Thuận Hòa"
					},
					{
					  "value": "Phường Đông Ba"
					},
					{
					  "value": "Phường Kim Long"
					},
					{
					  "value": "Phường Vỹ Dạ"
					},
					{
					  "value": "Phường Phường Đúc"
					},
					{
					  "value": "Phường Vĩnh Ninh"
					},
					{
					  "value": "Phường Phú Hội"
					},
					{
					  "value": "Phường Phú Nhuận"
					},
					{
					  "value": "Phường Xuân Phú"
					},
					{
					  "value": "Phường Trường An"
					},
					{
					  "value": "Phường Phước Vĩnh"
					},
					{
					  "value": "Phường An Cựu"
					},
					{
					  "value": "Phường An Hòa"
					},
					{
					  "value": "Phường Hương Sơ"
					},
					{
					  "value": "Phường Thuỷ Biều"
					},
					{
					  "value": "Phường Hương Long"
					},
					{
					  "value": "Phường Thuỷ Xuân"
					},
					{
					  "value": "Phường An Đông"
					},
					{
					  "value": "Phường An Tây"
					},
					{
					  "value": "Phường Thuận An"
					},
					{
					  "value": "Xã Phú Dương"
					},
					{
					  "value": "Xã Phú Mậu"
					},
					{
					  "value": "Xã Phú Thanh"
					},
					{
					  "value": "Phường Phú Thượng"
					},
					{
					  "value": "Phường Thủy Vân"
					},
					{
					  "value": "Xã Thủy Bằng"
					},
					{
					  "value": "Xã Hải Dương"
					},
					{
					  "value": "Xã Hương Phong"
					},
					{
					  "value": "Phường Hương Vinh"
					},
					{
					  "value": "Phường Hương An"
					},
					{
					  "value": "Phường Hương Hồ"
					},
					{
					  "value": "Xã Hương Thọ"
					}
				  ]
				},
				{
				  "value": "Huyện Phong Điền",
				  "code": 476,
				  "wards": [
					{
					  "value": "Thị trấn Phong Điền"
					},
					{
					  "value": "Xã Điền Hương"
					},
					{
					  "value": "Xã Điền Môn"
					},
					{
					  "value": "Xã Điền Lộc"
					},
					{
					  "value": "Xã Phong Bình"
					},
					{
					  "value": "Xã Điền Hòa"
					},
					{
					  "value": "Xã Phong Chương"
					},
					{
					  "value": "Xã Phong Hải"
					},
					{
					  "value": "Xã Điền Hải"
					},
					{
					  "value": "Xã Phong Hòa"
					},
					{
					  "value": "Xã Phong Thu"
					},
					{
					  "value": "Xã Phong Hiền"
					},
					{
					  "value": "Xã Phong Mỹ"
					},
					{
					  "value": "Xã Phong An"
					},
					{
					  "value": "Xã Phong Xuân"
					},
					{
					  "value": "Xã Phong Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Quảng Điền",
				  "code": 477,
				  "wards": [
					{
					  "value": "Thị trấn Sịa"
					},
					{
					  "value": "Xã Quảng Thái"
					},
					{
					  "value": "Xã Quảng Ngạn"
					},
					{
					  "value": "Xã Quảng Lợi"
					},
					{
					  "value": "Xã Quảng Công"
					},
					{
					  "value": "Xã Quảng Phước"
					},
					{
					  "value": "Xã Quảng Vinh"
					},
					{
					  "value": "Xã Quảng An"
					},
					{
					  "value": "Xã Quảng Thành"
					},
					{
					  "value": "Xã Quảng Thọ"
					},
					{
					  "value": "Xã Quảng Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Vang",
				  "code": 478,
				  "wards": [
					{
					  "value": "Xã Phú Thuận"
					},
					{
					  "value": "Xã Phú An"
					},
					{
					  "value": "Xã Phú Hải"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Phú Diên"
					},
					{
					  "value": "Xã Phú Mỹ"
					},
					{
					  "value": "Xã Phú Hồ"
					},
					{
					  "value": "Xã Vinh Xuân"
					},
					{
					  "value": "Xã Phú Lương"
					},
					{
					  "value": "Thị trấn Phú Đa"
					},
					{
					  "value": "Xã Vinh Thanh"
					},
					{
					  "value": "Xã Vinh An"
					},
					{
					  "value": "Xã Phú Gia"
					},
					{
					  "value": "Xã Vinh Hà"
					}
				  ]
				},
				{
				  "value": "Thị xã Hương Thủy",
				  "code": 479,
				  "wards": [
					{
					  "value": "Phường Phú Bài"
					},
					{
					  "value": "Xã Thủy Thanh"
					},
					{
					  "value": "Phường Thủy Dương"
					},
					{
					  "value": "Phường Thủy Phương"
					},
					{
					  "value": "Phường Thủy Châu"
					},
					{
					  "value": "Phường Thủy Lương"
					},
					{
					  "value": "Xã Thủy Tân"
					},
					{
					  "value": "Xã Thủy Phù"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Dương Hòa"
					}
				  ]
				},
				{
				  "value": "Thị xã Hương Trà",
				  "code": 480,
				  "wards": [
					{
					  "value": "Phường Tứ Hạ"
					},
					{
					  "value": "Xã Hương Toàn"
					},
					{
					  "value": "Phường Hương Vân"
					},
					{
					  "value": "Phường Hương Văn"
					},
					{
					  "value": "Phường Hương Xuân"
					},
					{
					  "value": "Phường Hương Chữ"
					},
					{
					  "value": "Xã Hương Bình"
					},
					{
					  "value": "Xã Bình Tiến"
					},
					{
					  "value": "Xã Bình Thành"
					}
				  ]
				},
				{
				  "value": "Huyện A Lưới",
				  "code": 481,
				  "wards": [
					{
					  "value": "Thị trấn A Lưới"
					},
					{
					  "value": "Xã Hồng Vân"
					},
					{
					  "value": "Xã Hồng Hạ"
					},
					{
					  "value": "Xã Hồng Kim"
					},
					{
					  "value": "Xã Trung Sơn"
					},
					{
					  "value": "Xã Hương Nguyên"
					},
					{
					  "value": "Xã Hồng Bắc"
					},
					{
					  "value": "Xã A Ngo"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Phú Vinh"
					},
					{
					  "value": "Xã Hương Phong"
					},
					{
					  "value": "Xã Quảng Nhâm"
					},
					{
					  "value": "Xã Hồng Thượng"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã A Roàng"
					},
					{
					  "value": "Xã Đông Sơn"
					},
					{
					  "value": "Xã Lâm Đớt"
					},
					{
					  "value": "Xã Hồng Thủy"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Lộc",
				  "code": 482,
				  "wards": [
					{
					  "value": "Thị trấn Phú Lộc"
					},
					{
					  "value": "Thị trấn Lăng Cô"
					},
					{
					  "value": "Xã Vinh Mỹ"
					},
					{
					  "value": "Xã Vinh Hưng"
					},
					{
					  "value": "Xã Giang Hải"
					},
					{
					  "value": "Xã Vinh Hiền"
					},
					{
					  "value": "Xã Lộc Bổn"
					},
					{
					  "value": "Xã Lộc Sơn"
					},
					{
					  "value": "Xã Lộc Bình"
					},
					{
					  "value": "Xã Lộc Vĩnh"
					},
					{
					  "value": "Xã Lộc An"
					},
					{
					  "value": "Xã Lộc Điền"
					},
					{
					  "value": "Xã Lộc Thủy"
					},
					{
					  "value": "Xã Lộc Trì"
					},
					{
					  "value": "Xã Lộc Tiến"
					},
					{
					  "value": "Xã Lộc Hòa"
					},
					{
					  "value": "Xã Xuân Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Đông",
				  "code": 483,
				  "wards": [
					{
					  "value": "Thị trấn Khe Tre"
					},
					{
					  "value": "Xã Hương Phú"
					},
					{
					  "value": "Xã Hương Sơn"
					},
					{
					  "value": "Xã Hương Lộc"
					},
					{
					  "value": "Xã Thượng Quảng"
					},
					{
					  "value": "Xã Hương Xuân"
					},
					{
					  "value": "Xã Hương Hữu"
					},
					{
					  "value": "Xã Thượng Lộ"
					},
					{
					  "value": "Xã Thượng Long"
					},
					{
					  "value": "Xã Thượng Nhật"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Thành phố Đà Nẵng",
			  "code": 48,
			  "districts": [
				{
				  "value": "Quận Liên Chiểu",
				  "code": 490,
				  "wards": [
					{
					  "value": "Phường Hòa Hiệp Bắc"
					},
					{
					  "value": "Phường Hòa Hiệp Nam"
					},
					{
					  "value": "Phường Hòa Khánh Bắc"
					},
					{
					  "value": "Phường Hòa Khánh Nam"
					},
					{
					  "value": "Phường Hòa Minh"
					}
				  ]
				},
				{
				  "value": "Quận Thanh Khê",
				  "code": 491,
				  "wards": [
					{
					  "value": "Phường Tam Thuận"
					},
					{
					  "value": "Phường Thanh Khê Tây"
					},
					{
					  "value": "Phường Thanh Khê Đông"
					},
					{
					  "value": "Phường Xuân Hà"
					},
					{
					  "value": "Phường Tân Chính"
					},
					{
					  "value": "Phường Chính Gián"
					},
					{
					  "value": "Phường Vĩnh Trung"
					},
					{
					  "value": "Phường Thạc Gián"
					},
					{
					  "value": "Phường An Khê"
					},
					{
					  "value": "Phường Hòa Khê"
					}
				  ]
				},
				{
				  "value": "Quận Hải Châu",
				  "code": 492,
				  "wards": [
					{
					  "value": "Phường Thanh Bình"
					},
					{
					  "value": "Phường Thuận Phước"
					},
					{
					  "value": "Phường Thạch Thang"
					},
					{
					  "value": "Phường Hải Châu I"
					},
					{
					  "value": "Phường Hải Châu II"
					},
					{
					  "value": "Phường Phước Ninh"
					},
					{
					  "value": "Phường Hòa Thuận Tây"
					},
					{
					  "value": "Phường Hòa Thuận Đông"
					},
					{
					  "value": "Phường Nam Dương"
					},
					{
					  "value": "Phường Bình Hiên"
					},
					{
					  "value": "Phường Bình Thuận"
					},
					{
					  "value": "Phường Hòa Cường Bắc"
					},
					{
					  "value": "Phường Hòa Cường Nam"
					}
				  ]
				},
				{
				  "value": "Quận Sơn Trà",
				  "code": 493,
				  "wards": [
					{
					  "value": "Phường Thọ Quang"
					},
					{
					  "value": "Phường Nại Hiên Đông"
					},
					{
					  "value": "Phường Mân Thái"
					},
					{
					  "value": "Phường An Hải Bắc"
					},
					{
					  "value": "Phường Phước Mỹ"
					},
					{
					  "value": "Phường An Hải Tây"
					},
					{
					  "value": "Phường An Hải Đông"
					}
				  ]
				},
				{
				  "value": "Quận Ngũ Hành Sơn",
				  "code": 494,
				  "wards": [
					{
					  "value": "Phường Mỹ An"
					},
					{
					  "value": "Phường Khuê Mỹ"
					},
					{
					  "value": "Phường Hoà Quý"
					},
					{
					  "value": "Phường Hoà Hải"
					}
				  ]
				},
				{
				  "value": "Quận Cẩm Lệ",
				  "code": 495,
				  "wards": [
					{
					  "value": "Phường Khuê Trung"
					},
					{
					  "value": "Phường Hòa Phát"
					},
					{
					  "value": "Phường Hòa An"
					},
					{
					  "value": "Phường Hòa Thọ Tây"
					},
					{
					  "value": "Phường Hòa Thọ Đông"
					},
					{
					  "value": "Phường Hòa Xuân"
					}
				  ]
				},
				{
				  "value": "Huyện Hòa Vang",
				  "code": 497,
				  "wards": [
					{
					  "value": "Xã Hòa Bắc"
					},
					{
					  "value": "Xã Hòa Liên"
					},
					{
					  "value": "Xã Hòa Ninh"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Hòa Nhơn"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Hòa Phong"
					},
					{
					  "value": "Xã Hòa Châu"
					},
					{
					  "value": "Xã Hòa Tiến"
					},
					{
					  "value": "Xã Hòa Phước"
					},
					{
					  "value": "Xã Hòa Khương"
					}
				  ]
				},
				{
				  "value": "Huyện Hoàng Sa",
				  "code": 498,
				  "wards": []
				}
			  ]
			},
			{
			  "value": "Tỉnh Quảng Nam",
			  "code": 49,
			  "districts": [
				{
				  "value": "Thành phố Tam Kỳ",
				  "code": 502,
				  "wards": [
					{
					  "value": "Phường Tân Thạnh"
					},
					{
					  "value": "Phường Phước Hòa"
					},
					{
					  "value": "Phường An Mỹ"
					},
					{
					  "value": "Phường Hòa Hương"
					},
					{
					  "value": "Phường An Xuân"
					},
					{
					  "value": "Phường An Sơn"
					},
					{
					  "value": "Phường Trường Xuân"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Xã Tam Thanh"
					},
					{
					  "value": "Xã Tam Thăng"
					},
					{
					  "value": "Xã Tam Phú"
					},
					{
					  "value": "Phường Hoà Thuận"
					},
					{
					  "value": "Xã Tam Ngọc"
					}
				  ]
				},
				{
				  "value": "Thành phố Hội An",
				  "code": 503,
				  "wards": [
					{
					  "value": "Phường Minh An"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Cẩm Phô"
					},
					{
					  "value": "Phường Thanh Hà"
					},
					{
					  "value": "Phường Sơn Phong"
					},
					{
					  "value": "Phường Cẩm Châu"
					},
					{
					  "value": "Phường Cửa Đại"
					},
					{
					  "value": "Phường Cẩm An"
					},
					{
					  "value": "Xã Cẩm Hà"
					},
					{
					  "value": "Xã Cẩm Kim"
					},
					{
					  "value": "Phường Cẩm Nam"
					},
					{
					  "value": "Xã Cẩm Thanh"
					},
					{
					  "value": "Xã Tân Hiệp"
					}
				  ]
				},
				{
				  "value": "Huyện Tây Giang",
				  "code": 504,
				  "wards": [
					{
					  "value": "Xã Ch'ơm"
					},
					{
					  "value": "Xã Ga Ri"
					},
					{
					  "value": "Xã A Xan"
					},
					{
					  "value": "Xã Tr'Hy"
					},
					{
					  "value": "Xã Lăng"
					},
					{
					  "value": "Xã A Nông"
					},
					{
					  "value": "Xã A Tiêng"
					},
					{
					  "value": "Xã Bha Lê"
					},
					{
					  "value": "Xã A Vương"
					},
					{
					  "value": "Xã Dang"
					}
				  ]
				},
				{
				  "value": "Huyện Đông Giang",
				  "code": 505,
				  "wards": [
					{
					  "value": "Thị trấn P Rao"
					},
					{
					  "value": "Xã Tà Lu"
					},
					{
					  "value": "Xã Sông Kôn"
					},
					{
					  "value": "Xã Jơ Ngây"
					},
					{
					  "value": "Xã A Ting"
					},
					{
					  "value": "Xã Tư"
					},
					{
					  "value": "Xã Ba"
					},
					{
					  "value": "Xã A Rooi"
					},
					{
					  "value": "Xã Za Hung"
					},
					{
					  "value": "Xã Mà Cooi"
					},
					{
					  "value": "Xã Ka Dăng"
					}
				  ]
				},
				{
				  "value": "Huyện Đại Lộc",
				  "code": 506,
				  "wards": [
					{
					  "value": "Thị trấn Ái Nghĩa"
					},
					{
					  "value": "Xã Đại Sơn"
					},
					{
					  "value": "Xã Đại Lãnh"
					},
					{
					  "value": "Xã Đại Hưng"
					},
					{
					  "value": "Xã Đại Hồng"
					},
					{
					  "value": "Xã Đại Đồng"
					},
					{
					  "value": "Xã Đại Quang"
					},
					{
					  "value": "Xã Đại Nghĩa"
					},
					{
					  "value": "Xã Đại Hiệp"
					},
					{
					  "value": "Xã Đại Thạnh"
					},
					{
					  "value": "Xã Đại Chánh"
					},
					{
					  "value": "Xã Đại Tân"
					},
					{
					  "value": "Xã Đại Phong"
					},
					{
					  "value": "Xã Đại Minh"
					},
					{
					  "value": "Xã Đại Thắng"
					},
					{
					  "value": "Xã Đại Cường"
					},
					{
					  "value": "Xã Đại An"
					},
					{
					  "value": "Xã Đại Hòa"
					}
				  ]
				},
				{
				  "value": "Thị xã Điện Bàn",
				  "code": 507,
				  "wards": [
					{
					  "value": "Phường Vĩnh Điện"
					},
					{
					  "value": "Xã Điện Tiến"
					},
					{
					  "value": "Xã Điện Hòa"
					},
					{
					  "value": "Phường Điện Thắng Bắc"
					},
					{
					  "value": "Phường Điện Thắng Trung"
					},
					{
					  "value": "Phường Điện Thắng Nam"
					},
					{
					  "value": "Phường Điện Ngọc"
					},
					{
					  "value": "Xã Điện Hồng"
					},
					{
					  "value": "Xã Điện Thọ"
					},
					{
					  "value": "Xã Điện Phước"
					},
					{
					  "value": "Phường Điện An"
					},
					{
					  "value": "Phường Điện Nam Bắc"
					},
					{
					  "value": "Phường Điện Nam Trung"
					},
					{
					  "value": "Phường Điện Nam Đông"
					},
					{
					  "value": "Phường Điện Dương"
					},
					{
					  "value": "Xã Điện Quang"
					},
					{
					  "value": "Xã Điện Trung"
					},
					{
					  "value": "Xã Điện Phong"
					},
					{
					  "value": "Phường Điện Minh"
					},
					{
					  "value": "Phường Điện Phương"
					}
				  ]
				},
				{
				  "value": "Huyện Duy Xuyên",
				  "code": 508,
				  "wards": [
					{
					  "value": "Thị trấn Nam Phước"
					},
					{
					  "value": "Xã Duy Thu"
					},
					{
					  "value": "Xã Duy Phú"
					},
					{
					  "value": "Xã Duy Tân"
					},
					{
					  "value": "Xã Duy Hòa"
					},
					{
					  "value": "Xã Duy Châu"
					},
					{
					  "value": "Xã Duy Trinh"
					},
					{
					  "value": "Xã Duy Sơn"
					},
					{
					  "value": "Xã Duy Trung"
					},
					{
					  "value": "Xã Duy Phước"
					},
					{
					  "value": "Xã Duy Thành"
					},
					{
					  "value": "Xã Duy Vinh"
					},
					{
					  "value": "Xã Duy Nghĩa"
					},
					{
					  "value": "Xã Duy Hải"
					}
				  ]
				},
				{
				  "value": "Huyện Quế Sơn",
				  "code": 509,
				  "wards": [
					{
					  "value": "Thị trấn Đông Phú"
					},
					{
					  "value": "Xã Quế Xuân 1"
					},
					{
					  "value": "Xã Quế Xuân 2"
					},
					{
					  "value": "Xã Quế Phú"
					},
					{
					  "value": "Thị trấn Hương An"
					},
					{
					  "value": "Xã Quế Hiệp"
					},
					{
					  "value": "Xã Quế Thuận"
					},
					{
					  "value": "Xã Quế Mỹ"
					},
					{
					  "value": "Xã Quế Long"
					},
					{
					  "value": "Xã Quế Châu"
					},
					{
					  "value": "Xã Quế Phong"
					},
					{
					  "value": "Xã Quế An"
					},
					{
					  "value": "Xã Quế Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Giang",
				  "code": 510,
				  "wards": [
					{
					  "value": "Thị trấn Thạnh Mỹ"
					},
					{
					  "value": "Xã Laêê"
					},
					{
					  "value": "Xã Chơ Chun"
					},
					{
					  "value": "Xã Zuôich"
					},
					{
					  "value": "Xã Tà Pơơ"
					},
					{
					  "value": "Xã La Dêê"
					},
					{
					  "value": "Xã Đắc Tôi"
					},
					{
					  "value": "Xã Chà Vàl"
					},
					{
					  "value": "Xã Tà Bhinh"
					},
					{
					  "value": "Xã Cà Dy"
					},
					{
					  "value": "Xã Đắc Pre"
					},
					{
					  "value": "Xã Đắc Pring"
					}
				  ]
				},
				{
				  "value": "Huyện Phước Sơn",
				  "code": 511,
				  "wards": [
					{
					  "value": "Thị trấn Khâm Đức"
					},
					{
					  "value": "Xã Phước Xuân"
					},
					{
					  "value": "Xã Phước Hiệp"
					},
					{
					  "value": "Xã Phước Hoà"
					},
					{
					  "value": "Xã Phước Đức"
					},
					{
					  "value": "Xã Phước Năng"
					},
					{
					  "value": "Xã Phước Mỹ"
					},
					{
					  "value": "Xã Phước Chánh"
					},
					{
					  "value": "Xã Phước Công"
					},
					{
					  "value": "Xã Phước Kim"
					},
					{
					  "value": "Xã Phước Lộc"
					},
					{
					  "value": "Xã Phước Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Hiệp Đức",
				  "code": 512,
				  "wards": [
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Xã Hiệp Thuận"
					},
					{
					  "value": "Xã Quế Thọ"
					},
					{
					  "value": "Xã Bình Lâm"
					},
					{
					  "value": "Xã Sông Trà"
					},
					{
					  "value": "Xã Phước Trà"
					},
					{
					  "value": "Xã Phước Gia"
					},
					{
					  "value": "Thị trấn Tân Bình"
					},
					{
					  "value": "Xã Quế Lưu"
					},
					{
					  "value": "Xã Thăng Phước"
					},
					{
					  "value": "Xã Bình Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Thăng Bình",
				  "code": 513,
				  "wards": [
					{
					  "value": "Thị trấn Hà Lam"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Xã Bình Giang"
					},
					{
					  "value": "Xã Bình Nguyên"
					},
					{
					  "value": "Xã Bình Phục"
					},
					{
					  "value": "Xã Bình Triều"
					},
					{
					  "value": "Xã Bình Đào"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Bình Lãnh"
					},
					{
					  "value": "Xã Bình Trị"
					},
					{
					  "value": "Xã Bình Định Bắc"
					},
					{
					  "value": "Xã Bình Định Nam"
					},
					{
					  "value": "Xã Bình Quý"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Bình Chánh"
					},
					{
					  "value": "Xã Bình Tú"
					},
					{
					  "value": "Xã Bình Sa"
					},
					{
					  "value": "Xã Bình Hải"
					},
					{
					  "value": "Xã Bình Quế"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Bình Trung"
					},
					{
					  "value": "Xã Bình Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Tiên Phước",
				  "code": 514,
				  "wards": [
					{
					  "value": "Thị trấn Tiên Kỳ"
					},
					{
					  "value": "Xã Tiên Sơn"
					},
					{
					  "value": "Xã Tiên Hà"
					},
					{
					  "value": "Xã Tiên Cẩm"
					},
					{
					  "value": "Xã Tiên Châu"
					},
					{
					  "value": "Xã Tiên Lãnh"
					},
					{
					  "value": "Xã Tiên Ngọc"
					},
					{
					  "value": "Xã Tiên Hiệp"
					},
					{
					  "value": "Xã Tiên Cảnh"
					},
					{
					  "value": "Xã Tiên Mỹ"
					},
					{
					  "value": "Xã Tiên Phong"
					},
					{
					  "value": "Xã Tiên Thọ"
					},
					{
					  "value": "Xã Tiên An"
					},
					{
					  "value": "Xã Tiên Lộc"
					},
					{
					  "value": "Xã Tiên Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Trà My",
				  "code": 515,
				  "wards": [
					{
					  "value": "Thị trấn Trà My"
					},
					{
					  "value": "Xã Trà Sơn"
					},
					{
					  "value": "Xã Trà Kót"
					},
					{
					  "value": "Xã Trà Nú"
					},
					{
					  "value": "Xã Trà Đông"
					},
					{
					  "value": "Xã Trà Dương"
					},
					{
					  "value": "Xã Trà Giang"
					},
					{
					  "value": "Xã Trà Bui"
					},
					{
					  "value": "Xã Trà Đốc"
					},
					{
					  "value": "Xã Trà Tân"
					},
					{
					  "value": "Xã Trà Giác"
					},
					{
					  "value": "Xã Trà Giáp"
					},
					{
					  "value": "Xã Trà Ka"
					}
				  ]
				},
				{
				  "value": "Huyện Nam Trà My",
				  "code": 516,
				  "wards": [
					{
					  "value": "Xã Trà Leng"
					},
					{
					  "value": "Xã Trà Dơn"
					},
					{
					  "value": "Xã Trà Tập"
					},
					{
					  "value": "Xã Trà Mai"
					},
					{
					  "value": "Xã Trà Cang"
					},
					{
					  "value": "Xã Trà Linh"
					},
					{
					  "value": "Xã Trà Nam"
					},
					{
					  "value": "Xã Trà Don"
					},
					{
					  "value": "Xã Trà Vân"
					},
					{
					  "value": "Xã Trà Vinh"
					}
				  ]
				},
				{
				  "value": "Huyện Núi Thành",
				  "code": 517,
				  "wards": [
					{
					  "value": "Thị trấn Núi Thành"
					},
					{
					  "value": "Xã Tam Xuân I"
					},
					{
					  "value": "Xã Tam Xuân II"
					},
					{
					  "value": "Xã Tam Tiến"
					},
					{
					  "value": "Xã Tam Sơn"
					},
					{
					  "value": "Xã Tam Thạnh"
					},
					{
					  "value": "Xã Tam Anh Bắc"
					},
					{
					  "value": "Xã Tam Anh Nam"
					},
					{
					  "value": "Xã Tam Hòa"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Tam Hải"
					},
					{
					  "value": "Xã Tam Giang"
					},
					{
					  "value": "Xã Tam Quang"
					},
					{
					  "value": "Xã Tam Nghĩa"
					},
					{
					  "value": "Xã Tam Mỹ Tây"
					},
					{
					  "value": "Xã Tam Mỹ Đông"
					},
					{
					  "value": "Xã Tam Trà"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Ninh",
				  "code": 518,
				  "wards": [
					{
					  "value": "Thị trấn Phú Thịnh"
					},
					{
					  "value": "Xã Tam Thành"
					},
					{
					  "value": "Xã Tam An"
					},
					{
					  "value": "Xã Tam Đàn"
					},
					{
					  "value": "Xã Tam Lộc"
					},
					{
					  "value": "Xã Tam Phước"
					},
					{
					  "value": "Xã Tam Vinh"
					},
					{
					  "value": "Xã Tam Thái"
					},
					{
					  "value": "Xã Tam Đại"
					},
					{
					  "value": "Xã Tam Dân"
					},
					{
					  "value": "Xã Tam Lãnh"
					}
				  ]
				},
				{
				  "value": "Huyện Nông Sơn",
				  "code": 519,
				  "wards": [
					{
					  "value": "Thị trấn Trung Phước"
					},
					{
					  "value": "Xã Ninh Phước"
					},
					{
					  "value": "Xã Phước Ninh"
					},
					{
					  "value": "Xã Quế Lộc"
					},
					{
					  "value": "Xã Sơn Viên"
					},
					{
					  "value": "Xã Quế Lâm"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Quảng Ngãi",
			  "code": 51,
			  "districts": [
				{
				  "value": "Thành phố Quảng Ngãi",
				  "code": 522,
				  "wards": [
					{
					  "value": "Phường Lê Hồng Phong"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Quảng Phú"
					},
					{
					  "value": "Phường Nghĩa Chánh"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Nguyễn Nghiêm"
					},
					{
					  "value": "Phường Nghĩa Lộ"
					},
					{
					  "value": "Phường Chánh Lộ"
					},
					{
					  "value": "Xã Nghĩa Dũng"
					},
					{
					  "value": "Xã Nghĩa Dõng"
					},
					{
					  "value": "Phường Trương Quang Trọng"
					},
					{
					  "value": "Xã Tịnh Hòa"
					},
					{
					  "value": "Xã Tịnh Kỳ"
					},
					{
					  "value": "Xã Tịnh Thiện"
					},
					{
					  "value": "Xã Tịnh Ấn Đông"
					},
					{
					  "value": "Xã Tịnh Châu"
					},
					{
					  "value": "Xã Tịnh Khê"
					},
					{
					  "value": "Xã Tịnh Long"
					},
					{
					  "value": "Xã Tịnh Ấn Tây"
					},
					{
					  "value": "Xã Tịnh An"
					},
					{
					  "value": "Xã Nghĩa Phú"
					},
					{
					  "value": "Xã Nghĩa Hà"
					},
					{
					  "value": "Xã Nghĩa An"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Sơn",
				  "code": 524,
				  "wards": [
					{
					  "value": "Thị trấn Châu Ổ"
					},
					{
					  "value": "Xã Bình Thuận"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã Bình Đông"
					},
					{
					  "value": "Xã Bình Chánh"
					},
					{
					  "value": "Xã Bình Nguyên"
					},
					{
					  "value": "Xã Bình Khương"
					},
					{
					  "value": "Xã Bình Trị"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Bình Hải"
					},
					{
					  "value": "Xã Bình Dương"
					},
					{
					  "value": "Xã Bình Phước"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Bình Trung"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Bình Long"
					},
					{
					  "value": "Xã Bình Thanh"
					},
					{
					  "value": "Xã Bình Chương"
					},
					{
					  "value": "Xã Bình Hiệp"
					},
					{
					  "value": "Xã Bình Mỹ"
					},
					{
					  "value": "Xã Bình Tân Phú"
					},
					{
					  "value": "Xã Bình Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Trà Bồng",
				  "code": 525,
				  "wards": [
					{
					  "value": "Thị trấn Trà Xuân"
					},
					{
					  "value": "Xã Trà Giang"
					},
					{
					  "value": "Xã Trà Thủy"
					},
					{
					  "value": "Xã Trà Hiệp"
					},
					{
					  "value": "Xã Trà Bình"
					},
					{
					  "value": "Xã Trà Phú"
					},
					{
					  "value": "Xã Trà Lâm"
					},
					{
					  "value": "Xã Trà Tân"
					},
					{
					  "value": "Xã Trà Sơn"
					},
					{
					  "value": "Xã Trà Bùi"
					},
					{
					  "value": "Xã Trà Thanh"
					},
					{
					  "value": "Xã Sơn Trà"
					},
					{
					  "value": "Xã Trà Phong"
					},
					{
					  "value": "Xã Hương Trà"
					},
					{
					  "value": "Xã Trà Xinh"
					},
					{
					  "value": "Xã Trà Tây"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Tịnh",
				  "code": 527,
				  "wards": [
					{
					  "value": "Xã Tịnh Thọ"
					},
					{
					  "value": "Xã Tịnh Trà"
					},
					{
					  "value": "Xã Tịnh Phong"
					},
					{
					  "value": "Xã Tịnh Hiệp"
					},
					{
					  "value": "Xã Tịnh Bình"
					},
					{
					  "value": "Xã Tịnh Đông"
					},
					{
					  "value": "Xã Tịnh Bắc"
					},
					{
					  "value": "Xã Tịnh Sơn"
					},
					{
					  "value": "Xã Tịnh Hà"
					},
					{
					  "value": "Xã Tịnh Giang"
					},
					{
					  "value": "Xã Tịnh Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Tư Nghĩa",
				  "code": 528,
				  "wards": [
					{
					  "value": "Thị trấn La Hà"
					},
					{
					  "value": "Thị trấn Sông Vệ"
					},
					{
					  "value": "Xã Nghĩa Lâm"
					},
					{
					  "value": "Xã Nghĩa Thắng"
					},
					{
					  "value": "Xã Nghĩa Thuận"
					},
					{
					  "value": "Xã Nghĩa Kỳ"
					},
					{
					  "value": "Xã Nghĩa Sơn"
					},
					{
					  "value": "Xã Nghĩa Hòa"
					},
					{
					  "value": "Xã Nghĩa Điền"
					},
					{
					  "value": "Xã Nghĩa Thương"
					},
					{
					  "value": "Xã Nghĩa Trung"
					},
					{
					  "value": "Xã Nghĩa Hiệp"
					},
					{
					  "value": "Xã Nghĩa Phương"
					},
					{
					  "value": "Xã Nghĩa Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Hà",
				  "code": 529,
				  "wards": [
					{
					  "value": "Thị trấn Di Lăng"
					},
					{
					  "value": "Xã Sơn Hạ"
					},
					{
					  "value": "Xã Sơn Thành"
					},
					{
					  "value": "Xã Sơn Nham"
					},
					{
					  "value": "Xã Sơn Bao"
					},
					{
					  "value": "Xã Sơn Linh"
					},
					{
					  "value": "Xã Sơn Giang"
					},
					{
					  "value": "Xã Sơn Trung"
					},
					{
					  "value": "Xã Sơn Thượng"
					},
					{
					  "value": "Xã Sơn Cao"
					},
					{
					  "value": "Xã Sơn Hải"
					},
					{
					  "value": "Xã Sơn Thủy"
					},
					{
					  "value": "Xã Sơn Kỳ"
					},
					{
					  "value": "Xã Sơn Ba"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Tây",
				  "code": 530,
				  "wards": [
					{
					  "value": "Xã Sơn Bua"
					},
					{
					  "value": "Xã Sơn Mùa"
					},
					{
					  "value": "Xã Sơn Liên"
					},
					{
					  "value": "Xã Sơn Tân"
					},
					{
					  "value": "Xã Sơn Màu"
					},
					{
					  "value": "Xã Sơn Dung"
					},
					{
					  "value": "Xã Sơn Long"
					},
					{
					  "value": "Xã Sơn Tinh"
					},
					{
					  "value": "Xã Sơn Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Minh Long",
				  "code": 531,
				  "wards": [
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Long Mai"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Long Môn"
					},
					{
					  "value": "Xã Long Hiệp"
					}
				  ]
				},
				{
				  "value": "Huyện Nghĩa Hành",
				  "code": 532,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Chùa"
					},
					{
					  "value": "Xã Hành Thuận"
					},
					{
					  "value": "Xã Hành Dũng"
					},
					{
					  "value": "Xã Hành Trung"
					},
					{
					  "value": "Xã Hành Nhân"
					},
					{
					  "value": "Xã Hành Đức"
					},
					{
					  "value": "Xã Hành Minh"
					},
					{
					  "value": "Xã Hành Phước"
					},
					{
					  "value": "Xã Hành Thiện"
					},
					{
					  "value": "Xã Hành Thịnh"
					},
					{
					  "value": "Xã Hành Tín Tây"
					},
					{
					  "value": "Xã Hành Tín Đông"
					}
				  ]
				},
				{
				  "value": "Huyện Mộ Đức",
				  "code": 533,
				  "wards": [
					{
					  "value": "Thị trấn Mộ Đức"
					},
					{
					  "value": "Xã Đức Lợi"
					},
					{
					  "value": "Xã Đức Thắng"
					},
					{
					  "value": "Xã Đức Nhuận"
					},
					{
					  "value": "Xã Đức Chánh"
					},
					{
					  "value": "Xã Đức Hiệp"
					},
					{
					  "value": "Xã Đức Minh"
					},
					{
					  "value": "Xã Đức Thạnh"
					},
					{
					  "value": "Xã Đức Hòa"
					},
					{
					  "value": "Xã Đức Tân"
					},
					{
					  "value": "Xã Đức Phú"
					},
					{
					  "value": "Xã Đức Phong"
					},
					{
					  "value": "Xã Đức Lân"
					}
				  ]
				},
				{
				  "value": "Thị xã Đức Phổ",
				  "code": 534,
				  "wards": [
					{
					  "value": "Phường Nguyễn Nghiêm"
					},
					{
					  "value": "Xã Phổ An"
					},
					{
					  "value": "Xã Phổ Phong"
					},
					{
					  "value": "Xã Phổ Thuận"
					},
					{
					  "value": "Phường Phổ Văn"
					},
					{
					  "value": "Phường Phổ Quang"
					},
					{
					  "value": "Xã Phổ Nhơn"
					},
					{
					  "value": "Phường Phổ Ninh"
					},
					{
					  "value": "Phường Phổ Minh"
					},
					{
					  "value": "Phường Phổ Vinh"
					},
					{
					  "value": "Phường Phổ Hòa"
					},
					{
					  "value": "Xã Phổ Cường"
					},
					{
					  "value": "Xã Phổ Khánh"
					},
					{
					  "value": "Phường Phổ Thạnh"
					},
					{
					  "value": "Xã Phổ Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Ba Tơ",
				  "code": 535,
				  "wards": [
					{
					  "value": "Thị trấn Ba Tơ"
					},
					{
					  "value": "Xã Ba Điền"
					},
					{
					  "value": "Xã Ba Vinh"
					},
					{
					  "value": "Xã Ba Thành"
					},
					{
					  "value": "Xã Ba Động"
					},
					{
					  "value": "Xã Ba Dinh"
					},
					{
					  "value": "Xã Ba Giang"
					},
					{
					  "value": "Xã Ba Liên"
					},
					{
					  "value": "Xã Ba Ngạc"
					},
					{
					  "value": "Xã Ba Khâm"
					},
					{
					  "value": "Xã Ba Cung"
					},
					{
					  "value": "Xã Ba Tiêu"
					},
					{
					  "value": "Xã Ba Trang"
					},
					{
					  "value": "Xã Ba Tô"
					},
					{
					  "value": "Xã Ba Bích"
					},
					{
					  "value": "Xã Ba Vì"
					},
					{
					  "value": "Xã Ba Lế"
					},
					{
					  "value": "Xã Ba Nam"
					},
					{
					  "value": "Xã Ba Xa"
					}
				  ]
				},
				{
				  "value": "Huyện Lý Sơn",
				  "code": 536,
				  "wards": []
				}
			  ]
			},
			{
			  "value": "Tỉnh Bình Định",
			  "code": 52,
			  "districts": [
				{
				  "value": "Thành phố Quy Nhơn",
				  "code": 540,
				  "wards": [
					{
					  "value": "Phường Nhơn Bình"
					},
					{
					  "value": "Phường Nhơn Phú"
					},
					{
					  "value": "Phường Đống Đa"
					},
					{
					  "value": "Phường Trần Quang Diệu"
					},
					{
					  "value": "Phường Hải Cảng"
					},
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Thị Nại"
					},
					{
					  "value": "Phường Lê Hồng Phong"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Phường Ngô Mây"
					},
					{
					  "value": "Phường Lý Thường Kiệt"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Trần Phú"
					},
					{
					  "value": "Phường Bùi Thị Xuân"
					},
					{
					  "value": "Phường Nguyễn Văn Cừ"
					},
					{
					  "value": "Phường Ghềnh Ráng"
					},
					{
					  "value": "Xã Nhơn Lý"
					},
					{
					  "value": "Xã Nhơn Hội"
					},
					{
					  "value": "Xã Nhơn Hải"
					},
					{
					  "value": "Xã Nhơn Châu"
					},
					{
					  "value": "Xã Phước Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện An Lão",
				  "code": 542,
				  "wards": [
					{
					  "value": "Thị trấn An Lão"
					},
					{
					  "value": "Xã An Hưng"
					},
					{
					  "value": "Xã An Trung"
					},
					{
					  "value": "Xã An Dũng"
					},
					{
					  "value": "Xã An Vinh"
					},
					{
					  "value": "Xã An Toàn"
					},
					{
					  "value": "Xã An Tân"
					},
					{
					  "value": "Xã An Hòa"
					},
					{
					  "value": "Xã An Quang"
					},
					{
					  "value": "Xã An Nghĩa"
					}
				  ]
				},
				{
				  "value": "Thị xã Hoài Nhơn",
				  "code": 543,
				  "wards": [
					{
					  "value": "Phường Tam Quan"
					},
					{
					  "value": "Phường Bồng Sơn"
					},
					{
					  "value": "Xã Hoài Sơn"
					},
					{
					  "value": "Xã Hoài Châu Bắc"
					},
					{
					  "value": "Xã Hoài Châu"
					},
					{
					  "value": "Xã Hoài Phú"
					},
					{
					  "value": "Phường Tam Quan Bắc"
					},
					{
					  "value": "Phường Tam Quan Nam"
					},
					{
					  "value": "Phường Hoài Hảo"
					},
					{
					  "value": "Phường Hoài Thanh Tây"
					},
					{
					  "value": "Phường Hoài Thanh"
					},
					{
					  "value": "Phường Hoài Hương"
					},
					{
					  "value": "Phường Hoài Tân"
					},
					{
					  "value": "Xã Hoài Hải"
					},
					{
					  "value": "Phường Hoài Xuân"
					},
					{
					  "value": "Xã Hoài Mỹ"
					},
					{
					  "value": "Phường Hoài Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Hoài Ân",
				  "code": 544,
				  "wards": [
					{
					  "value": "Thị trấn Tăng Bạt Hổ"
					},
					{
					  "value": "Xã Ân Hảo Tây"
					},
					{
					  "value": "Xã Ân Hảo Đông"
					},
					{
					  "value": "Xã Ân Sơn"
					},
					{
					  "value": "Xã Ân Mỹ"
					},
					{
					  "value": "Xã Đak Mang"
					},
					{
					  "value": "Xã Ân Tín"
					},
					{
					  "value": "Xã Ân Thạnh"
					},
					{
					  "value": "Xã Ân Phong"
					},
					{
					  "value": "Xã Ân Đức"
					},
					{
					  "value": "Xã Ân Hữu"
					},
					{
					  "value": "Xã Bok Tới"
					},
					{
					  "value": "Xã Ân Tường Tây"
					},
					{
					  "value": "Xã Ân Tường Đông"
					},
					{
					  "value": "Xã Ân Nghĩa"
					}
				  ]
				},
				{
				  "value": "Huyện Phù Mỹ",
				  "code": 545,
				  "wards": [
					{
					  "value": "Thị trấn Phù Mỹ"
					},
					{
					  "value": "Thị trấn Bình Dương"
					},
					{
					  "value": "Xã Mỹ Đức"
					},
					{
					  "value": "Xã Mỹ Châu"
					},
					{
					  "value": "Xã Mỹ Thắng"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Mỹ Lợi"
					},
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Mỹ Phong"
					},
					{
					  "value": "Xã Mỹ Trinh"
					},
					{
					  "value": "Xã Mỹ Thọ"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Mỹ Thành"
					},
					{
					  "value": "Xã Mỹ Chánh"
					},
					{
					  "value": "Xã Mỹ Quang"
					},
					{
					  "value": "Xã Mỹ Hiệp"
					},
					{
					  "value": "Xã Mỹ Tài"
					},
					{
					  "value": "Xã Mỹ Cát"
					},
					{
					  "value": "Xã Mỹ Chánh Tây"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Thạnh",
				  "code": 546,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Thạnh"
					},
					{
					  "value": "Xã Vĩnh Sơn"
					},
					{
					  "value": "Xã Vĩnh Kim"
					},
					{
					  "value": "Xã Vĩnh Hiệp"
					},
					{
					  "value": "Xã Vĩnh Hảo"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Vĩnh Thịnh"
					},
					{
					  "value": "Xã Vĩnh Thuận"
					},
					{
					  "value": "Xã Vĩnh Quang"
					}
				  ]
				},
				{
				  "value": "Huyện Tây Sơn",
				  "code": 547,
				  "wards": [
					{
					  "value": "Thị trấn Phú Phong"
					},
					{
					  "value": "Xã Bình Tân"
					},
					{
					  "value": "Xã Tây Thuận"
					},
					{
					  "value": "Xã Bình Thuận"
					},
					{
					  "value": "Xã Tây Giang"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Tây An"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Tây Bình"
					},
					{
					  "value": "Xã Bình Tường"
					},
					{
					  "value": "Xã Tây Vinh"
					},
					{
					  "value": "Xã Vĩnh An"
					},
					{
					  "value": "Xã Tây Xuân"
					},
					{
					  "value": "Xã Bình Nghi"
					},
					{
					  "value": "Xã Tây Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Phù Cát",
				  "code": 548,
				  "wards": [
					{
					  "value": "Thị trấn Ngô Mây"
					},
					{
					  "value": "Xã Cát Sơn"
					},
					{
					  "value": "Xã Cát Minh"
					},
					{
					  "value": "Xã Cát Khánh"
					},
					{
					  "value": "Xã Cát Tài"
					},
					{
					  "value": "Xã Cát Lâm"
					},
					{
					  "value": "Xã Cát Hanh"
					},
					{
					  "value": "Xã Cát Thành"
					},
					{
					  "value": "Xã Cát Trinh"
					},
					{
					  "value": "Xã Cát Hải"
					},
					{
					  "value": "Xã Cát Hiệp"
					},
					{
					  "value": "Xã Cát Nhơn"
					},
					{
					  "value": "Xã Cát Hưng"
					},
					{
					  "value": "Xã Cát Tường"
					},
					{
					  "value": "Xã Cát Tân"
					},
					{
					  "value": "Thị trấn Cát Tiến"
					},
					{
					  "value": "Xã Cát Thắng"
					},
					{
					  "value": "Xã Cát Chánh"
					}
				  ]
				},
				{
				  "value": "Thị xã An Nhơn",
				  "code": 549,
				  "wards": [
					{
					  "value": "Phường Bình Định"
					},
					{
					  "value": "Phường Đập Đá"
					},
					{
					  "value": "Xã Nhơn Mỹ"
					},
					{
					  "value": "Phường Nhơn Thành"
					},
					{
					  "value": "Xã Nhơn Hạnh"
					},
					{
					  "value": "Xã Nhơn Hậu"
					},
					{
					  "value": "Xã Nhơn Phong"
					},
					{
					  "value": "Xã Nhơn An"
					},
					{
					  "value": "Xã Nhơn Phúc"
					},
					{
					  "value": "Phường Nhơn Hưng"
					},
					{
					  "value": "Xã Nhơn Khánh"
					},
					{
					  "value": "Xã Nhơn Lộc"
					},
					{
					  "value": "Phường Nhơn Hoà"
					},
					{
					  "value": "Xã Nhơn Tân"
					},
					{
					  "value": "Xã Nhơn Thọ"
					}
				  ]
				},
				{
				  "value": "Huyện Tuy Phước",
				  "code": 550,
				  "wards": [
					{
					  "value": "Thị trấn Tuy Phước"
					},
					{
					  "value": "Thị trấn Diêu Trì"
					},
					{
					  "value": "Xã Phước Thắng"
					},
					{
					  "value": "Xã Phước Hưng"
					},
					{
					  "value": "Xã Phước Quang"
					},
					{
					  "value": "Xã Phước Hòa"
					},
					{
					  "value": "Xã Phước Sơn"
					},
					{
					  "value": "Xã Phước Hiệp"
					},
					{
					  "value": "Xã Phước Lộc"
					},
					{
					  "value": "Xã Phước Nghĩa"
					},
					{
					  "value": "Xã Phước Thuận"
					},
					{
					  "value": "Xã Phước An"
					},
					{
					  "value": "Xã Phước Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Vân Canh",
				  "code": 551,
				  "wards": [
					{
					  "value": "Thị trấn Vân Canh"
					},
					{
					  "value": "Xã Canh Liên"
					},
					{
					  "value": "Xã Canh Hiệp"
					},
					{
					  "value": "Xã Canh Vinh"
					},
					{
					  "value": "Xã Canh Hiển"
					},
					{
					  "value": "Xã Canh Thuận"
					},
					{
					  "value": "Xã Canh Hòa"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Phú Yên",
			  "code": 54,
			  "districts": [
				{
				  "value": "Thành phố Tuy Hoà",
				  "code": 555,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường Phú Thạnh"
					},
					{
					  "value": "Phường Phú Đông"
					},
					{
					  "value": "Xã Hòa Kiến"
					},
					{
					  "value": "Xã Bình Kiến"
					},
					{
					  "value": "Xã Bình Ngọc"
					},
					{
					  "value": "Xã An Phú"
					},
					{
					  "value": "Phường Phú Lâm"
					}
				  ]
				},
				{
				  "value": "Thị xã Sông Cầu",
				  "code": 557,
				  "wards": [
					{
					  "value": "Phường Xuân Phú"
					},
					{
					  "value": "Xã Xuân Lâm"
					},
					{
					  "value": "Phường Xuân Thành"
					},
					{
					  "value": "Xã Xuân Hải"
					},
					{
					  "value": "Xã Xuân Lộc"
					},
					{
					  "value": "Xã Xuân Bình"
					},
					{
					  "value": "Xã Xuân Cảnh"
					},
					{
					  "value": "Xã Xuân Thịnh"
					},
					{
					  "value": "Xã Xuân Phương"
					},
					{
					  "value": "Phường Xuân Yên"
					},
					{
					  "value": "Xã Xuân Thọ 1"
					},
					{
					  "value": "Phường Xuân Đài"
					},
					{
					  "value": "Xã Xuân Thọ 2"
					}
				  ]
				},
				{
				  "value": "Huyện Đồng Xuân",
				  "code": 558,
				  "wards": [
					{
					  "value": "Thị trấn La Hai"
					},
					{
					  "value": "Xã Đa Lộc"
					},
					{
					  "value": "Xã Phú Mỡ"
					},
					{
					  "value": "Xã Xuân Lãnh"
					},
					{
					  "value": "Xã Xuân Long"
					},
					{
					  "value": "Xã Xuân Quang 1"
					},
					{
					  "value": "Xã Xuân Sơn Bắc"
					},
					{
					  "value": "Xã Xuân Quang 2"
					},
					{
					  "value": "Xã Xuân Sơn Nam"
					},
					{
					  "value": "Xã Xuân Quang 3"
					},
					{
					  "value": "Xã Xuân Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Tuy An",
				  "code": 559,
				  "wards": [
					{
					  "value": "Thị trấn Chí Thạnh"
					},
					{
					  "value": "Xã An Dân"
					},
					{
					  "value": "Xã An Ninh Tây"
					},
					{
					  "value": "Xã An Ninh Đông"
					},
					{
					  "value": "Xã An Thạch"
					},
					{
					  "value": "Xã An Định"
					},
					{
					  "value": "Xã An Nghiệp"
					},
					{
					  "value": "Xã An Cư"
					},
					{
					  "value": "Xã An Xuân"
					},
					{
					  "value": "Xã An Lĩnh"
					},
					{
					  "value": "Xã An Hòa Hải"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã An Mỹ"
					},
					{
					  "value": "Xã An Chấn"
					},
					{
					  "value": "Xã An Thọ"
					}
				  ]
				},
				{
				  "value": "Huyện Sơn Hòa",
				  "code": 560,
				  "wards": [
					{
					  "value": "Thị trấn Củng Sơn"
					},
					{
					  "value": "Xã Phước Tân"
					},
					{
					  "value": "Xã Sơn Hội"
					},
					{
					  "value": "Xã Sơn Định"
					},
					{
					  "value": "Xã Sơn Long"
					},
					{
					  "value": "Xã Cà Lúi"
					},
					{
					  "value": "Xã Sơn Phước"
					},
					{
					  "value": "Xã Sơn Xuân"
					},
					{
					  "value": "Xã Sơn Nguyên"
					},
					{
					  "value": "Xã Eachà Rang"
					},
					{
					  "value": "Xã Krông Pa"
					},
					{
					  "value": "Xã Suối Bạc"
					},
					{
					  "value": "Xã Sơn Hà"
					},
					{
					  "value": "Xã Suối Trai"
					}
				  ]
				},
				{
				  "value": "Huyện Sông Hinh",
				  "code": 561,
				  "wards": [
					{
					  "value": "Thị trấn Hai Riêng"
					},
					{
					  "value": "Xã Ea Lâm"
					},
					{
					  "value": "Xã Đức Bình Tây"
					},
					{
					  "value": "Xã Ea Bá"
					},
					{
					  "value": "Xã Sơn Giang"
					},
					{
					  "value": "Xã Đức Bình Đông"
					},
					{
					  "value": "Xã EaBar"
					},
					{
					  "value": "Xã EaBia"
					},
					{
					  "value": "Xã EaTrol"
					},
					{
					  "value": "Xã Sông Hinh"
					},
					{
					  "value": "Xã Ealy"
					}
				  ]
				},
				{
				  "value": "Huyện Tây Hoà",
				  "code": 562,
				  "wards": [
					{
					  "value": "Xã Sơn Thành Tây"
					},
					{
					  "value": "Xã Sơn Thành Đông"
					},
					{
					  "value": "Xã Hòa Bình 1"
					},
					{
					  "value": "Thị trấn Phú Thứ"
					},
					{
					  "value": "Xã Hòa Phong"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Hòa Tân Tây"
					},
					{
					  "value": "Xã Hòa Đồng"
					},
					{
					  "value": "Xã Hòa Mỹ Đông"
					},
					{
					  "value": "Xã Hòa Mỹ Tây"
					},
					{
					  "value": "Xã Hòa Thịnh"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Hoà",
				  "code": 563,
				  "wards": [
					{
					  "value": "Xã Hòa Quang Bắc"
					},
					{
					  "value": "Xã Hòa Quang Nam"
					},
					{
					  "value": "Xã Hòa Hội"
					},
					{
					  "value": "Xã Hòa Trị"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Hòa Định Đông"
					},
					{
					  "value": "Thị trấn Phú Hoà"
					},
					{
					  "value": "Xã Hòa Định Tây"
					},
					{
					  "value": "Xã Hòa Thắng"
					}
				  ]
				},
				{
				  "value": "Thị xã Đông Hòa",
				  "code": 564,
				  "wards": [
					{
					  "value": "Xã Hòa Thành"
					},
					{
					  "value": "Phường Hòa Hiệp Bắc"
					},
					{
					  "value": "Phường Hoà Vinh"
					},
					{
					  "value": "Phường Hoà Hiệp Trung"
					},
					{
					  "value": "Xã Hòa Tân Đông"
					},
					{
					  "value": "Phường Hòa Xuân Tây"
					},
					{
					  "value": "Phường Hòa Hiệp Nam"
					},
					{
					  "value": "Xã Hòa Xuân Đông"
					},
					{
					  "value": "Xã Hòa Tâm"
					},
					{
					  "value": "Xã Hòa Xuân Nam"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Khánh Hòa",
			  "code": 56,
			  "districts": [
				{
				  "value": "Thành phố Nha Trang",
				  "code": 568,
				  "wards": [
					{
					  "value": "Phường Vĩnh Hòa"
					},
					{
					  "value": "Phường Vĩnh Hải"
					},
					{
					  "value": "Phường Vĩnh Phước"
					},
					{
					  "value": "Phường Ngọc Hiệp"
					},
					{
					  "value": "Phường Vĩnh Thọ"
					},
					{
					  "value": "Phường Xương Huân"
					},
					{
					  "value": "Phường Vạn Thắng"
					},
					{
					  "value": "Phường Vạn Thạnh"
					},
					{
					  "value": "Phường Phương Sài"
					},
					{
					  "value": "Phường Phương Sơn"
					},
					{
					  "value": "Phường Phước Hải"
					},
					{
					  "value": "Phường Phước Tân"
					},
					{
					  "value": "Phường Lộc Thọ"
					},
					{
					  "value": "Phường Phước Tiến"
					},
					{
					  "value": "Phường Tân Lập"
					},
					{
					  "value": "Phường Phước Hòa"
					},
					{
					  "value": "Phường Vĩnh Nguyên"
					},
					{
					  "value": "Phường Phước Long"
					},
					{
					  "value": "Phường Vĩnh Trường"
					},
					{
					  "value": "Xã Vĩnh Lương"
					},
					{
					  "value": "Xã Vĩnh Phương"
					},
					{
					  "value": "Xã Vĩnh Ngọc"
					},
					{
					  "value": "Xã Vĩnh Thạnh"
					},
					{
					  "value": "Xã Vĩnh Trung"
					},
					{
					  "value": "Xã Vĩnh Hiệp"
					},
					{
					  "value": "Xã Vĩnh Thái"
					},
					{
					  "value": "Xã Phước Đồng"
					}
				  ]
				},
				{
				  "value": "Thành phố Cam Ranh",
				  "code": 569,
				  "wards": [
					{
					  "value": "Phường Cam Nghĩa"
					},
					{
					  "value": "Phường Cam Phúc Bắc"
					},
					{
					  "value": "Phường Cam Phúc Nam"
					},
					{
					  "value": "Phường Cam Lộc"
					},
					{
					  "value": "Phường Cam Phú"
					},
					{
					  "value": "Phường Ba Ngòi"
					},
					{
					  "value": "Phường Cam Thuận"
					},
					{
					  "value": "Phường Cam Lợi"
					},
					{
					  "value": "Phường Cam Linh"
					},
					{
					  "value": "Xã Cam Thành Nam"
					},
					{
					  "value": "Xã Cam Phước Đông"
					},
					{
					  "value": "Xã Cam Thịnh Tây"
					},
					{
					  "value": "Xã Cam Thịnh Đông"
					},
					{
					  "value": "Xã Cam Lập"
					},
					{
					  "value": "Xã Cam Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Cam Lâm",
				  "code": 570,
				  "wards": [
					{
					  "value": "Xã Cam Tân"
					},
					{
					  "value": "Xã Cam Hòa"
					},
					{
					  "value": "Xã Cam Hải Đông"
					},
					{
					  "value": "Xã Cam Hải Tây"
					},
					{
					  "value": "Xã Sơn Tân"
					},
					{
					  "value": "Xã Cam Hiệp Bắc"
					},
					{
					  "value": "Thị trấn Cam Đức"
					},
					{
					  "value": "Xã Cam Hiệp Nam"
					},
					{
					  "value": "Xã Cam Phước Tây"
					},
					{
					  "value": "Xã Cam Thành Bắc"
					},
					{
					  "value": "Xã Cam An Bắc"
					},
					{
					  "value": "Xã Cam An Nam"
					},
					{
					  "value": "Xã Suối Cát"
					},
					{
					  "value": "Xã Suối Tân"
					}
				  ]
				},
				{
				  "value": "Huyện Vạn Ninh",
				  "code": 571,
				  "wards": [
					{
					  "value": "Thị trấn Vạn Giã"
					},
					{
					  "value": "Xã Đại Lãnh"
					},
					{
					  "value": "Xã Vạn Phước"
					},
					{
					  "value": "Xã Vạn Long"
					},
					{
					  "value": "Xã Vạn Bình"
					},
					{
					  "value": "Xã Vạn Thọ"
					},
					{
					  "value": "Xã Vạn Khánh"
					},
					{
					  "value": "Xã Vạn Phú"
					},
					{
					  "value": "Xã Vạn Lương"
					},
					{
					  "value": "Xã Vạn Thắng"
					},
					{
					  "value": "Xã Vạn Thạnh"
					},
					{
					  "value": "Xã Xuân Sơn"
					},
					{
					  "value": "Xã Vạn Hưng"
					}
				  ]
				},
				{
				  "value": "Thị xã Ninh Hòa",
				  "code": 572,
				  "wards": [
					{
					  "value": "Phường Ninh Hiệp"
					},
					{
					  "value": "Xã Ninh Sơn"
					},
					{
					  "value": "Xã Ninh Tây"
					},
					{
					  "value": "Xã Ninh Thượng"
					},
					{
					  "value": "Xã Ninh An"
					},
					{
					  "value": "Phường Ninh Hải"
					},
					{
					  "value": "Xã Ninh Thọ"
					},
					{
					  "value": "Xã Ninh Trung"
					},
					{
					  "value": "Xã Ninh Sim"
					},
					{
					  "value": "Xã Ninh Xuân"
					},
					{
					  "value": "Xã Ninh Thân"
					},
					{
					  "value": "Phường Ninh Diêm"
					},
					{
					  "value": "Xã Ninh Đông"
					},
					{
					  "value": "Phường Ninh Thủy"
					},
					{
					  "value": "Phường Ninh Đa"
					},
					{
					  "value": "Xã Ninh Phụng"
					},
					{
					  "value": "Xã Ninh Bình"
					},
					{
					  "value": "Xã Ninh Phước"
					},
					{
					  "value": "Xã Ninh Phú"
					},
					{
					  "value": "Xã Ninh Tân"
					},
					{
					  "value": "Xã Ninh Quang"
					},
					{
					  "value": "Phường Ninh Giang"
					},
					{
					  "value": "Phường Ninh Hà"
					},
					{
					  "value": "Xã Ninh Hưng"
					},
					{
					  "value": "Xã Ninh Lộc"
					},
					{
					  "value": "Xã Ninh Ích"
					},
					{
					  "value": "Xã Ninh Vân"
					}
				  ]
				},
				{
				  "value": "Huyện Khánh Vĩnh",
				  "code": 573,
				  "wards": [
					{
					  "value": "Thị trấn Khánh Vĩnh"
					},
					{
					  "value": "Xã Khánh Hiệp"
					},
					{
					  "value": "Xã Khánh Bình"
					},
					{
					  "value": "Xã Khánh Trung"
					},
					{
					  "value": "Xã Khánh Đông"
					},
					{
					  "value": "Xã Khánh Thượng"
					},
					{
					  "value": "Xã Khánh Nam"
					},
					{
					  "value": "Xã Sông Cầu"
					},
					{
					  "value": "Xã Giang Ly"
					},
					{
					  "value": "Xã Cầu Bà"
					},
					{
					  "value": "Xã Liên Sang"
					},
					{
					  "value": "Xã Khánh Thành"
					},
					{
					  "value": "Xã Khánh Phú"
					},
					{
					  "value": "Xã Sơn Thái"
					}
				  ]
				},
				{
				  "value": "Huyện Diên Khánh",
				  "code": 574,
				  "wards": [
					{
					  "value": "Thị trấn Diên Khánh"
					},
					{
					  "value": "Xã Diên Lâm"
					},
					{
					  "value": "Xã Diên Điền"
					},
					{
					  "value": "Xã Diên Xuân"
					},
					{
					  "value": "Xã Diên Sơn"
					},
					{
					  "value": "Xã Diên Đồng"
					},
					{
					  "value": "Xã Diên Phú"
					},
					{
					  "value": "Xã Diên Thọ"
					},
					{
					  "value": "Xã Diên Phước"
					},
					{
					  "value": "Xã Diên Lạc"
					},
					{
					  "value": "Xã Diên Tân"
					},
					{
					  "value": "Xã Diên Hòa"
					},
					{
					  "value": "Xã Diên Thạnh"
					},
					{
					  "value": "Xã Diên Toàn"
					},
					{
					  "value": "Xã Diên An"
					},
					{
					  "value": "Xã Bình Lộc"
					},
					{
					  "value": "Xã Suối Hiệp"
					},
					{
					  "value": "Xã Suối Tiên"
					}
				  ]
				},
				{
				  "value": "Huyện Khánh Sơn",
				  "code": 575,
				  "wards": [
					{
					  "value": "Thị trấn Tô Hạp"
					},
					{
					  "value": "Xã Thành Sơn"
					},
					{
					  "value": "Xã Sơn Lâm"
					},
					{
					  "value": "Xã Sơn Hiệp"
					},
					{
					  "value": "Xã Sơn Bình"
					},
					{
					  "value": "Xã Sơn Trung"
					},
					{
					  "value": "Xã Ba Cụm Bắc"
					},
					{
					  "value": "Xã Ba Cụm Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Trường Sa",
				  "code": 576,
				  "wards": [
					{
					  "value": "Thị trấn Trường Sa"
					},
					{
					  "value": "Xã Song Tử Tây"
					},
					{
					  "value": "Xã Sinh Tồn"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Ninh Thuận",
			  "code": 58,
			  "districts": [
				{
				  "value": "Thành phố Phan Rang-Tháp Chàm",
				  "code": 582,
				  "wards": [
					{
					  "value": "Phường Đô Vinh"
					},
					{
					  "value": "Phường Phước Mỹ"
					},
					{
					  "value": "Phường Bảo An"
					},
					{
					  "value": "Phường Phủ Hà"
					},
					{
					  "value": "Phường Thanh Sơn"
					},
					{
					  "value": "Phường Mỹ Hương"
					},
					{
					  "value": "Phường Tấn Tài"
					},
					{
					  "value": "Phường Kinh Dinh"
					},
					{
					  "value": "Phường Đạo Long"
					},
					{
					  "value": "Phường Đài Sơn"
					},
					{
					  "value": "Phường Đông Hải"
					},
					{
					  "value": "Phường Mỹ Đông"
					},
					{
					  "value": "Xã Thành Hải"
					},
					{
					  "value": "Phường Văn Hải"
					},
					{
					  "value": "Phường Mỹ Bình"
					},
					{
					  "value": "Phường Mỹ Hải"
					}
				  ]
				},
				{
				  "value": "Huyện Bác Ái",
				  "code": 584,
				  "wards": [
					{
					  "value": "Xã Phước Bình"
					},
					{
					  "value": "Xã Phước Hòa"
					},
					{
					  "value": "Xã Phước Tân"
					},
					{
					  "value": "Xã Phước Tiến"
					},
					{
					  "value": "Xã Phước Thắng"
					},
					{
					  "value": "Xã Phước Thành"
					},
					{
					  "value": "Xã Phước Đại"
					},
					{
					  "value": "Xã Phước Chính"
					},
					{
					  "value": "Xã Phước Trung"
					}
				  ]
				},
				{
				  "value": "Huyện Ninh Sơn",
				  "code": 585,
				  "wards": [
					{
					  "value": "Thị trấn Tân Sơn"
					},
					{
					  "value": "Xã Lâm Sơn"
					},
					{
					  "value": "Xã Lương Sơn"
					},
					{
					  "value": "Xã Quảng Sơn"
					},
					{
					  "value": "Xã Mỹ Sơn"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Ma Nới"
					},
					{
					  "value": "Xã Nhơn Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Ninh Hải",
				  "code": 586,
				  "wards": [
					{
					  "value": "Thị trấn Khánh Hải"
					},
					{
					  "value": "Xã Vĩnh Hải"
					},
					{
					  "value": "Xã Phương Hải"
					},
					{
					  "value": "Xã Tân Hải"
					},
					{
					  "value": "Xã Xuân Hải"
					},
					{
					  "value": "Xã Hộ Hải"
					},
					{
					  "value": "Xã Tri Hải"
					},
					{
					  "value": "Xã Nhơn Hải"
					},
					{
					  "value": "Xã Thanh Hải"
					}
				  ]
				},
				{
				  "value": "Huyện Ninh Phước",
				  "code": 587,
				  "wards": [
					{
					  "value": "Thị trấn Phước Dân"
					},
					{
					  "value": "Xã Phước Sơn"
					},
					{
					  "value": "Xã Phước Thái"
					},
					{
					  "value": "Xã Phước Hậu"
					},
					{
					  "value": "Xã Phước Thuận"
					},
					{
					  "value": "Xã An Hải"
					},
					{
					  "value": "Xã Phước Hữu"
					},
					{
					  "value": "Xã Phước Hải"
					},
					{
					  "value": "Xã Phước Vinh"
					}
				  ]
				},
				{
				  "value": "Huyện Thuận Bắc",
				  "code": 588,
				  "wards": [
					{
					  "value": "Xã Phước Chiến"
					},
					{
					  "value": "Xã Công Hải"
					},
					{
					  "value": "Xã Phước Kháng"
					},
					{
					  "value": "Xã Lợi Hải"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Bắc Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Thuận Nam",
				  "code": 589,
				  "wards": [
					{
					  "value": "Xã Phước Hà"
					},
					{
					  "value": "Xã Phước Nam"
					},
					{
					  "value": "Xã Phước Ninh"
					},
					{
					  "value": "Xã Nhị Hà"
					},
					{
					  "value": "Xã Phước Dinh"
					},
					{
					  "value": "Xã Phước Minh"
					},
					{
					  "value": "Xã Phước Diêm"
					},
					{
					  "value": "Xã Cà Ná"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bình Thuận",
			  "code": 60,
			  "districts": [
				{
				  "value": "Thành phố Phan Thiết",
				  "code": 593,
				  "wards": [
					{
					  "value": "Phường Mũi Né"
					},
					{
					  "value": "Phường Hàm Tiến"
					},
					{
					  "value": "Phường Phú Hài"
					},
					{
					  "value": "Phường Phú Thủy"
					},
					{
					  "value": "Phường Phú Tài"
					},
					{
					  "value": "Phường Phú Trinh"
					},
					{
					  "value": "Phường Xuân An"
					},
					{
					  "value": "Phường Thanh Hải"
					},
					{
					  "value": "Phường Bình Hưng"
					},
					{
					  "value": "Phường Đức Nghĩa"
					},
					{
					  "value": "Phường Lạc Đạo"
					},
					{
					  "value": "Phường Đức Thắng"
					},
					{
					  "value": "Phường Hưng Long"
					},
					{
					  "value": "Phường Đức Long"
					},
					{
					  "value": "Xã Thiện Nghiệp"
					},
					{
					  "value": "Xã Phong Nẫm"
					},
					{
					  "value": "Xã Tiến Lợi"
					},
					{
					  "value": "Xã Tiến Thành"
					}
				  ]
				},
				{
				  "value": "Thị xã La Gi",
				  "code": 594,
				  "wards": [
					{
					  "value": "Phường Phước Hội"
					},
					{
					  "value": "Phường Phước Lộc"
					},
					{
					  "value": "Phường Tân Thiện"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Bình Tân"
					},
					{
					  "value": "Xã Tân Hải"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Tân Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Tuy Phong",
				  "code": 595,
				  "wards": [
					{
					  "value": "Thị trấn Liên Hương"
					},
					{
					  "value": "Thị trấn Phan Rí Cửa"
					},
					{
					  "value": "Xã Phan Dũng"
					},
					{
					  "value": "Xã Phong Phú"
					},
					{
					  "value": "Xã Vĩnh Hảo"
					},
					{
					  "value": "Xã Vĩnh Tân"
					},
					{
					  "value": "Xã Phú Lạc"
					},
					{
					  "value": "Xã Phước Thể"
					},
					{
					  "value": "Xã Hòa Minh"
					},
					{
					  "value": "Xã Chí Công"
					},
					{
					  "value": "Xã Bình Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Bình",
				  "code": 596,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Lầu"
					},
					{
					  "value": "Xã Phan Sơn"
					},
					{
					  "value": "Xã Phan Lâm"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Phan Điền"
					},
					{
					  "value": "Xã Hải Ninh"
					},
					{
					  "value": "Xã Sông Lũy"
					},
					{
					  "value": "Xã Phan Tiến"
					},
					{
					  "value": "Xã Sông Bình"
					},
					{
					  "value": "Thị trấn Lương Sơn"
					},
					{
					  "value": "Xã Phan Hòa"
					},
					{
					  "value": "Xã Phan Thanh"
					},
					{
					  "value": "Xã Hồng Thái"
					},
					{
					  "value": "Xã Phan Hiệp"
					},
					{
					  "value": "Xã Bình Tân"
					},
					{
					  "value": "Xã Phan Rí Thành"
					},
					{
					  "value": "Xã Hòa Thắng"
					},
					{
					  "value": "Xã Hồng Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Hàm Thuận Bắc",
				  "code": 597,
				  "wards": [
					{
					  "value": "Thị trấn Ma Lâm"
					},
					{
					  "value": "Thị trấn Phú Long"
					},
					{
					  "value": "Xã La Dạ"
					},
					{
					  "value": "Xã Đông Tiến"
					},
					{
					  "value": "Xã Thuận Hòa"
					},
					{
					  "value": "Xã Đông Giang"
					},
					{
					  "value": "Xã Hàm Phú"
					},
					{
					  "value": "Xã Hồng Liêm"
					},
					{
					  "value": "Xã Thuận Minh"
					},
					{
					  "value": "Xã Hồng Sơn"
					},
					{
					  "value": "Xã Hàm Trí"
					},
					{
					  "value": "Xã Hàm Đức"
					},
					{
					  "value": "Xã Hàm Liêm"
					},
					{
					  "value": "Xã Hàm Chính"
					},
					{
					  "value": "Xã Hàm Hiệp"
					},
					{
					  "value": "Xã Hàm Thắng"
					},
					{
					  "value": "Xã Đa Mi"
					}
				  ]
				},
				{
				  "value": "Huyện Hàm Thuận Nam",
				  "code": 598,
				  "wards": [
					{
					  "value": "Thị trấn Thuận Nam"
					},
					{
					  "value": "Xã Mỹ Thạnh"
					},
					{
					  "value": "Xã Hàm Cần"
					},
					{
					  "value": "Xã Mương Mán"
					},
					{
					  "value": "Xã Hàm Thạnh"
					},
					{
					  "value": "Xã Hàm Kiệm"
					},
					{
					  "value": "Xã Hàm Cường"
					},
					{
					  "value": "Xã Hàm Mỹ"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Hàm Minh"
					},
					{
					  "value": "Xã Thuận Quí"
					},
					{
					  "value": "Xã Tân Thuận"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Tánh Linh",
				  "code": 599,
				  "wards": [
					{
					  "value": "Thị trấn Lạc Tánh"
					},
					{
					  "value": "Xã Bắc Ruộng"
					},
					{
					  "value": "Xã Nghị Đức"
					},
					{
					  "value": "Xã La Ngâu"
					},
					{
					  "value": "Xã Huy Khiêm"
					},
					{
					  "value": "Xã Măng Tố"
					},
					{
					  "value": "Xã Đức Phú"
					},
					{
					  "value": "Xã Đồng Kho"
					},
					{
					  "value": "Xã Gia An"
					},
					{
					  "value": "Xã Đức Bình"
					},
					{
					  "value": "Xã Gia Huynh"
					},
					{
					  "value": "Xã Đức Thuận"
					},
					{
					  "value": "Xã Suối Kiết"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Linh",
				  "code": 600,
				  "wards": [
					{
					  "value": "Thị trấn Võ Xu"
					},
					{
					  "value": "Thị trấn Đức Tài"
					},
					{
					  "value": "Xã Đa Kai"
					},
					{
					  "value": "Xã Sùng Nhơn"
					},
					{
					  "value": "Xã Mê Pu"
					},
					{
					  "value": "Xã Nam Chính"
					},
					{
					  "value": "Xã Đức Hạnh"
					},
					{
					  "value": "Xã Đức Tín"
					},
					{
					  "value": "Xã Vũ Hoà"
					},
					{
					  "value": "Xã Tân Hà"
					},
					{
					  "value": "Xã Đông Hà"
					},
					{
					  "value": "Xã Trà Tân"
					}
				  ]
				},
				{
				  "value": "Huyện Hàm Tân",
				  "code": 601,
				  "wards": [
					{
					  "value": "Thị trấn Tân Minh"
					},
					{
					  "value": "Thị trấn Tân Nghĩa"
					},
					{
					  "value": "Xã Sông Phan"
					},
					{
					  "value": "Xã Tân Phúc"
					},
					{
					  "value": "Xã Tân Đức"
					},
					{
					  "value": "Xã Tân Thắng"
					},
					{
					  "value": "Xã Thắng Hải"
					},
					{
					  "value": "Xã Tân Hà"
					},
					{
					  "value": "Xã Tân Xuân"
					},
					{
					  "value": "Xã Sơn Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Quí",
				  "code": 602,
				  "wards": [
					{
					  "value": "Xã Ngũ Phụng"
					},
					{
					  "value": "Xã Long Hải"
					},
					{
					  "value": "Xã Tam Thanh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Kon Tum",
			  "code": 62,
			  "districts": [
				{
				  "value": "Thành phố Kon Tum",
				  "code": 608,
				  "wards": [
					{
					  "value": "Phường Quang Trung"
					},
					{
					  "value": "Phường Duy Tân"
					},
					{
					  "value": "Phường Quyết Thắng"
					},
					{
					  "value": "Phường Trường Chinh"
					},
					{
					  "value": "Phường Thắng Lợi"
					},
					{
					  "value": "Phường Ngô Mây"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Lê Lợi"
					},
					{
					  "value": "Phường Nguyễn Trãi"
					},
					{
					  "value": "Phường Trần Hưng Đạo"
					},
					{
					  "value": "Xã Đắk Cấm"
					},
					{
					  "value": "Xã Kroong"
					},
					{
					  "value": "Xã Ngọk Bay"
					},
					{
					  "value": "Xã Vinh Quang"
					},
					{
					  "value": "Xã Đắk Blà"
					},
					{
					  "value": "Xã Ia Chim"
					},
					{
					  "value": "Xã Đăk Năng"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Chư Hreng"
					},
					{
					  "value": "Xã Đắk Rơ Wa"
					},
					{
					  "value": "Xã Hòa Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk Glei",
				  "code": 610,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Glei"
					},
					{
					  "value": "Xã Đắk Blô"
					},
					{
					  "value": "Xã Đắk Man"
					},
					{
					  "value": "Xã Đắk Nhoong"
					},
					{
					  "value": "Xã Đắk Pék"
					},
					{
					  "value": "Xã Đắk Choong"
					},
					{
					  "value": "Xã Xốp"
					},
					{
					  "value": "Xã Mường Hoong"
					},
					{
					  "value": "Xã Ngọc Linh"
					},
					{
					  "value": "Xã Đắk Long"
					},
					{
					  "value": "Xã Đắk KRoong"
					},
					{
					  "value": "Xã Đắk Môn"
					}
				  ]
				},
				{
				  "value": "Huyện Ngọc Hồi",
				  "code": 611,
				  "wards": [
					{
					  "value": "Thị trấn Plei Kần"
					},
					{
					  "value": "Xã Đắk Ang"
					},
					{
					  "value": "Xã Đắk Dục"
					},
					{
					  "value": "Xã Đắk Nông"
					},
					{
					  "value": "Xã Đắk Xú"
					},
					{
					  "value": "Xã Đắk Kan"
					},
					{
					  "value": "Xã Bờ Y"
					},
					{
					  "value": "Xã Sa Loong"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk Tô",
				  "code": 612,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Tô"
					},
					{
					  "value": "Xã Đắk Rơ Nga"
					},
					{
					  "value": "Xã Ngọk Tụ"
					},
					{
					  "value": "Xã Đắk Trăm"
					},
					{
					  "value": "Xã Văn Lem"
					},
					{
					  "value": "Xã Kon Đào"
					},
					{
					  "value": "Xã Tân Cảnh"
					},
					{
					  "value": "Xã Diên Bình"
					},
					{
					  "value": "Xã Pô Kô"
					}
				  ]
				},
				{
				  "value": "Huyện Kon Plông",
				  "code": 613,
				  "wards": [
					{
					  "value": "Xã Đắk Nên"
					},
					{
					  "value": "Xã Đắk Ring"
					},
					{
					  "value": "Xã Măng Buk"
					},
					{
					  "value": "Xã Đắk Tăng"
					},
					{
					  "value": "Xã Ngok Tem"
					},
					{
					  "value": "Xã Pờ Ê"
					},
					{
					  "value": "Xã Măng Cành"
					},
					{
					  "value": "Thị trấn Măng Đen"
					},
					{
					  "value": "Xã Hiếu"
					}
				  ]
				},
				{
				  "value": "Huyện Kon Rẫy",
				  "code": 614,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Rve"
					},
					{
					  "value": "Xã Đắk Kôi"
					},
					{
					  "value": "Xã Đắk Tơ Lung"
					},
					{
					  "value": "Xã Đắk Ruồng"
					},
					{
					  "value": "Xã Đắk Pne"
					},
					{
					  "value": "Xã Đắk Tờ Re"
					},
					{
					  "value": "Xã Tân Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk Hà",
				  "code": 615,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Hà"
					},
					{
					  "value": "Xã Đắk PXi"
					},
					{
					  "value": "Xã Đăk Long"
					},
					{
					  "value": "Xã Đắk HRing"
					},
					{
					  "value": "Xã Đắk Ui"
					},
					{
					  "value": "Xã Đăk Ngọk"
					},
					{
					  "value": "Xã Đắk Mar"
					},
					{
					  "value": "Xã Ngok Wang"
					},
					{
					  "value": "Xã Ngok Réo"
					},
					{
					  "value": "Xã Hà Mòn"
					},
					{
					  "value": "Xã Đắk La"
					}
				  ]
				},
				{
				  "value": "Huyện Sa Thầy",
				  "code": 616,
				  "wards": [
					{
					  "value": "Thị trấn Sa Thầy"
					},
					{
					  "value": "Xã Rơ Kơi"
					},
					{
					  "value": "Xã Sa Nhơn"
					},
					{
					  "value": "Xã Hơ Moong"
					},
					{
					  "value": "Xã Mô Rai"
					},
					{
					  "value": "Xã Sa Sơn"
					},
					{
					  "value": "Xã Sa Nghĩa"
					},
					{
					  "value": "Xã Sa Bình"
					},
					{
					  "value": "Xã Ya Xiêr"
					},
					{
					  "value": "Xã Ya Tăng"
					},
					{
					  "value": "Xã Ya ly"
					}
				  ]
				},
				{
				  "value": "Huyện Tu Mơ Rông",
				  "code": 617,
				  "wards": [
					{
					  "value": "Xã Ngọc Lây"
					},
					{
					  "value": "Xã Đắk Na"
					},
					{
					  "value": "Xã Măng Ri"
					},
					{
					  "value": "Xã Ngọc Yêu"
					},
					{
					  "value": "Xã Đắk Sao"
					},
					{
					  "value": "Xã Đắk Rơ Ông"
					},
					{
					  "value": "Xã Đắk Tờ Kan"
					},
					{
					  "value": "Xã Tu Mơ Rông"
					},
					{
					  "value": "Xã Đắk Hà"
					},
					{
					  "value": "Xã Tê Xăng"
					},
					{
					  "value": "Xã Văn Xuôi"
					}
				  ]
				},
				{
				  "value": "Huyện Ia H' Drai",
				  "code": 618,
				  "wards": [
					{
					  "value": "Xã Ia Đal"
					},
					{
					  "value": "Xã Ia Dom"
					},
					{
					  "value": "Xã Ia Tơi"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Gia Lai",
			  "code": 64,
			  "districts": [
				{
				  "value": "Thành phố Pleiku",
				  "code": 622,
				  "wards": [
					{
					  "value": "Phường Yên Đỗ"
					},
					{
					  "value": "Phường Diên Hồng"
					},
					{
					  "value": "Phường Ia Kring"
					},
					{
					  "value": "Phường Hội Thương"
					},
					{
					  "value": "Phường Hội Phú"
					},
					{
					  "value": "Phường Phù Đổng"
					},
					{
					  "value": "Phường Hoa Lư"
					},
					{
					  "value": "Phường Tây Sơn"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Đống Đa"
					},
					{
					  "value": "Phường Trà Bá"
					},
					{
					  "value": "Phường Thắng Lợi"
					},
					{
					  "value": "Phường Yên Thế"
					},
					{
					  "value": "Phường Chi Lăng"
					},
					{
					  "value": "Xã Biển Hồ"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã Trà Đa"
					},
					{
					  "value": "Xã Chư Á"
					},
					{
					  "value": "Xã An Phú"
					},
					{
					  "value": "Xã Diên Phú"
					},
					{
					  "value": "Xã Ia Kênh"
					},
					{
					  "value": "Xã Gào"
					}
				  ]
				},
				{
				  "value": "Thị xã An Khê",
				  "code": 623,
				  "wards": [
					{
					  "value": "Phường An Bình"
					},
					{
					  "value": "Phường Tây Sơn"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Phường An Tân"
					},
					{
					  "value": "Xã Tú An"
					},
					{
					  "value": "Xã Xuân An"
					},
					{
					  "value": "Xã Cửu An"
					},
					{
					  "value": "Phường An Phước"
					},
					{
					  "value": "Xã Song An"
					},
					{
					  "value": "Phường Ngô Mây"
					},
					{
					  "value": "Xã Thành An"
					}
				  ]
				},
				{
				  "value": "Thị xã Ayun Pa",
				  "code": 624,
				  "wards": [
					{
					  "value": "Phường Cheo Reo"
					},
					{
					  "value": "Phường Hòa Bình"
					},
					{
					  "value": "Phường Đoàn Kết"
					},
					{
					  "value": "Phường Sông Bờ"
					},
					{
					  "value": "Xã Ia RBol"
					},
					{
					  "value": "Xã Chư Băh"
					},
					{
					  "value": "Xã Ia RTô"
					},
					{
					  "value": "Xã Ia Sao"
					}
				  ]
				},
				{
				  "value": "Huyện KBang",
				  "code": 625,
				  "wards": [
					{
					  "value": "Thị trấn KBang"
					},
					{
					  "value": "Xã Kon Pne"
					},
					{
					  "value": "Xã Đăk Roong"
					},
					{
					  "value": "Xã Sơn Lang"
					},
					{
					  "value": "Xã KRong"
					},
					{
					  "value": "Xã Sơ Pai"
					},
					{
					  "value": "Xã Lơ Ku"
					},
					{
					  "value": "Xã Đông"
					},
					{
					  "value": "Xã Đak SMar"
					},
					{
					  "value": "Xã Nghĩa An"
					},
					{
					  "value": "Xã Tơ Tung"
					},
					{
					  "value": "Xã Kông Lơng Khơng"
					},
					{
					  "value": "Xã Kông Pla"
					},
					{
					  "value": "Xã Đăk HLơ"
					}
				  ]
				},
				{
				  "value": "Huyện Đăk Đoa",
				  "code": 626,
				  "wards": [
					{
					  "value": "Thị trấn Đăk Đoa"
					},
					{
					  "value": "Xã Hà Đông"
					},
					{
					  "value": "Xã Đăk Sơmei"
					},
					{
					  "value": "Xã Đăk Krong"
					},
					{
					  "value": "Xã Hải Yang"
					},
					{
					  "value": "Xã Kon Gang"
					},
					{
					  "value": "Xã Hà Bầu"
					},
					{
					  "value": "Xã Nam Yang"
					},
					{
					  "value": "Xã K' Dang"
					},
					{
					  "value": "Xã H' Neng"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Glar"
					},
					{
					  "value": "Xã A Dơk"
					},
					{
					  "value": "Xã Trang"
					},
					{
					  "value": "Xã HNol"
					},
					{
					  "value": "Xã Ia Pết"
					},
					{
					  "value": "Xã Ia Băng"
					}
				  ]
				},
				{
				  "value": "Huyện Chư Păh",
				  "code": 627,
				  "wards": [
					{
					  "value": "Thị trấn Phú Hòa"
					},
					{
					  "value": "Xã Hà Tây"
					},
					{
					  "value": "Xã Ia Khươl"
					},
					{
					  "value": "Xã Ia Phí"
					},
					{
					  "value": "Thị trấn Ia Ly"
					},
					{
					  "value": "Xã Ia Mơ Nông"
					},
					{
					  "value": "Xã Ia Kreng"
					},
					{
					  "value": "Xã Đăk Tơ Ver"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Chư Đăng Ya"
					},
					{
					  "value": "Xã Ia Ka"
					},
					{
					  "value": "Xã Ia Nhin"
					},
					{
					  "value": "Xã Nghĩa Hòa"
					},
					{
					  "value": "Xã Nghĩa Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Ia Grai",
				  "code": 628,
				  "wards": [
					{
					  "value": "Thị trấn Ia Kha"
					},
					{
					  "value": "Xã Ia Sao"
					},
					{
					  "value": "Xã Ia Yok"
					},
					{
					  "value": "Xã Ia Hrung"
					},
					{
					  "value": "Xã Ia Bă"
					},
					{
					  "value": "Xã Ia Khai"
					},
					{
					  "value": "Xã Ia KRai"
					},
					{
					  "value": "Xã Ia Grăng"
					},
					{
					  "value": "Xã Ia Tô"
					},
					{
					  "value": "Xã Ia O"
					},
					{
					  "value": "Xã Ia Dêr"
					},
					{
					  "value": "Xã Ia Chia"
					},
					{
					  "value": "Xã Ia Pếch"
					}
				  ]
				},
				{
				  "value": "Huyện Mang Yang",
				  "code": 629,
				  "wards": [
					{
					  "value": "Thị trấn Kon Dơng"
					},
					{
					  "value": "Xã Ayun"
					},
					{
					  "value": "Xã Đak Jơ Ta"
					},
					{
					  "value": "Xã Đak Ta Ley"
					},
					{
					  "value": "Xã Hra"
					},
					{
					  "value": "Xã Đăk Yă"
					},
					{
					  "value": "Xã Đăk Djrăng"
					},
					{
					  "value": "Xã Lơ Pang"
					},
					{
					  "value": "Xã Kon Thụp"
					},
					{
					  "value": "Xã Đê Ar"
					},
					{
					  "value": "Xã Kon Chiêng"
					},
					{
					  "value": "Xã Đăk Trôi"
					}
				  ]
				},
				{
				  "value": "Huyện Kông Chro",
				  "code": 630,
				  "wards": [
					{
					  "value": "Thị trấn Kông Chro"
					},
					{
					  "value": "Xã Chư Krêy"
					},
					{
					  "value": "Xã An Trung"
					},
					{
					  "value": "Xã Kông Yang"
					},
					{
					  "value": "Xã Đăk Tơ Pang"
					},
					{
					  "value": "Xã SRó"
					},
					{
					  "value": "Xã Đắk Kơ Ning"
					},
					{
					  "value": "Xã Đăk Song"
					},
					{
					  "value": "Xã Đăk Pling"
					},
					{
					  "value": "Xã Yang Trung"
					},
					{
					  "value": "Xã Đăk Pơ Pho"
					},
					{
					  "value": "Xã Ya Ma"
					},
					{
					  "value": "Xã Chơ Long"
					},
					{
					  "value": "Xã Yang Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Cơ",
				  "code": 631,
				  "wards": [
					{
					  "value": "Thị trấn Chư Ty"
					},
					{
					  "value": "Xã Ia Dơk"
					},
					{
					  "value": "Xã Ia Krêl"
					},
					{
					  "value": "Xã Ia Din"
					},
					{
					  "value": "Xã Ia Kla"
					},
					{
					  "value": "Xã Ia Dom"
					},
					{
					  "value": "Xã Ia Lang"
					},
					{
					  "value": "Xã Ia Kriêng"
					},
					{
					  "value": "Xã Ia Pnôn"
					},
					{
					  "value": "Xã Ia Nan"
					}
				  ]
				},
				{
				  "value": "Huyện Chư Prông",
				  "code": 632,
				  "wards": [
					{
					  "value": "Thị trấn Chư Prông"
					},
					{
					  "value": "Xã Ia Kly"
					},
					{
					  "value": "Xã Bình Giáo"
					},
					{
					  "value": "Xã Ia Drăng"
					},
					{
					  "value": "Xã Thăng Hưng"
					},
					{
					  "value": "Xã Bàu Cạn"
					},
					{
					  "value": "Xã Ia Phìn"
					},
					{
					  "value": "Xã Ia Băng"
					},
					{
					  "value": "Xã Ia Tôr"
					},
					{
					  "value": "Xã Ia Boòng"
					},
					{
					  "value": "Xã Ia O"
					},
					{
					  "value": "Xã Ia Púch"
					},
					{
					  "value": "Xã Ia Me"
					},
					{
					  "value": "Xã Ia Vê"
					},
					{
					  "value": "Xã Ia Bang"
					},
					{
					  "value": "Xã Ia Pia"
					},
					{
					  "value": "Xã Ia Ga"
					},
					{
					  "value": "Xã Ia Lâu"
					},
					{
					  "value": "Xã Ia Piơr"
					},
					{
					  "value": "Xã Ia Mơ"
					}
				  ]
				},
				{
				  "value": "Huyện Chư Sê",
				  "code": 633,
				  "wards": [
					{
					  "value": "Thị trấn Chư Sê"
					},
					{
					  "value": "Xã Ia Tiêm"
					},
					{
					  "value": "Xã Chư Pơng"
					},
					{
					  "value": "Xã Bar Măih"
					},
					{
					  "value": "Xã Bờ Ngoong"
					},
					{
					  "value": "Xã Ia Glai"
					},
					{
					  "value": "Xã AL Bá"
					},
					{
					  "value": "Xã Kông HTok"
					},
					{
					  "value": "Xã AYun"
					},
					{
					  "value": "Xã Ia HLốp"
					},
					{
					  "value": "Xã Ia Blang"
					},
					{
					  "value": "Xã Dun"
					},
					{
					  "value": "Xã Ia Pal"
					},
					{
					  "value": "Xã H Bông"
					},
					{
					  "value": "Xã Ia Ko"
					}
				  ]
				},
				{
				  "value": "Huyện Đăk Pơ",
				  "code": 634,
				  "wards": [
					{
					  "value": "Xã Hà Tam"
					},
					{
					  "value": "Xã An Thành"
					},
					{
					  "value": "Thị trấn Đak Pơ"
					},
					{
					  "value": "Xã Yang Bắc"
					},
					{
					  "value": "Xã Cư An"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Phú An"
					},
					{
					  "value": "Xã Ya Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Ia Pa",
				  "code": 635,
				  "wards": [
					{
					  "value": "Xã Pờ Tó"
					},
					{
					  "value": "Xã Chư Răng"
					},
					{
					  "value": "Xã Ia KDăm"
					},
					{
					  "value": "Xã Kim Tân"
					},
					{
					  "value": "Xã Chư Mố"
					},
					{
					  "value": "Xã Ia Tul"
					},
					{
					  "value": "Xã Ia Ma Rơn"
					},
					{
					  "value": "Xã Ia Broăi"
					},
					{
					  "value": "Xã Ia Trok"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Pa",
				  "code": 637,
				  "wards": [
					{
					  "value": "Thị trấn Phú Túc"
					},
					{
					  "value": "Xã Ia RSai"
					},
					{
					  "value": "Xã Ia RSươm"
					},
					{
					  "value": "Xã Chư Gu"
					},
					{
					  "value": "Xã Đất Bằng"
					},
					{
					  "value": "Xã Ia Mláh"
					},
					{
					  "value": "Xã Chư Drăng"
					},
					{
					  "value": "Xã Phú Cần"
					},
					{
					  "value": "Xã Ia HDreh"
					},
					{
					  "value": "Xã Ia RMok"
					},
					{
					  "value": "Xã Chư Ngọc"
					},
					{
					  "value": "Xã Uar"
					},
					{
					  "value": "Xã Chư Rcăm"
					},
					{
					  "value": "Xã Krông Năng"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Thiện",
				  "code": 638,
				  "wards": [
					{
					  "value": "Thị trấn Phú Thiện"
					},
					{
					  "value": "Xã Chư A Thai"
					},
					{
					  "value": "Xã Ayun Hạ"
					},
					{
					  "value": "Xã Ia Ake"
					},
					{
					  "value": "Xã Ia Sol"
					},
					{
					  "value": "Xã Ia Piar"
					},
					{
					  "value": "Xã Ia Peng"
					},
					{
					  "value": "Xã Chrôh Pơnan"
					},
					{
					  "value": "Xã Ia Hiao"
					},
					{
					  "value": "Xã Ia Yeng"
					}
				  ]
				},
				{
				  "value": "Huyện Chư Pưh",
				  "code": 639,
				  "wards": [
					{
					  "value": "Thị trấn Nhơn Hoà"
					},
					{
					  "value": "Xã Ia Hrú"
					},
					{
					  "value": "Xã Ia Rong"
					},
					{
					  "value": "Xã Ia Dreng"
					},
					{
					  "value": "Xã Ia Hla"
					},
					{
					  "value": "Xã Chư Don"
					},
					{
					  "value": "Xã Ia Phang"
					},
					{
					  "value": "Xã Ia Le"
					},
					{
					  "value": "Xã Ia BLứ"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Đắk Lắk",
			  "code": 66,
			  "districts": [
				{
				  "value": "Thành phố Buôn Ma Thuột",
				  "code": 643,
				  "wards": [
					{
					  "value": "Phường Tân Lập"
					},
					{
					  "value": "Phường Tân Hòa"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Thành Nhất"
					},
					{
					  "value": "Phường Thắng Lợi"
					},
					{
					  "value": "Phường Tân Lợi"
					},
					{
					  "value": "Phường Thành Công"
					},
					{
					  "value": "Phường Tân Thành"
					},
					{
					  "value": "Phường Tân Tiến"
					},
					{
					  "value": "Phường Tự An"
					},
					{
					  "value": "Phường Ea Tam"
					},
					{
					  "value": "Phường Khánh Xuân"
					},
					{
					  "value": "Xã Hòa Thuận"
					},
					{
					  "value": "Xã Cư ÊBur"
					},
					{
					  "value": "Xã Ea Tu"
					},
					{
					  "value": "Xã Hòa Thắng"
					},
					{
					  "value": "Xã Ea Kao"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Hòa Khánh"
					},
					{
					  "value": "Xã Hòa Xuân"
					}
				  ]
				},
				{
				  "value": "Thị xã Buôn Hồ",
				  "code": 644,
				  "wards": [
					{
					  "value": "Phường An Lạc"
					},
					{
					  "value": "Phường An Bình"
					},
					{
					  "value": "Phường Thiện An"
					},
					{
					  "value": "Phường Đạt Hiếu"
					},
					{
					  "value": "Phường Đoàn Kết"
					},
					{
					  "value": "Xã Ea Blang"
					},
					{
					  "value": "Xã Ea Drông"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Bình Tân"
					},
					{
					  "value": "Xã Ea Siên"
					},
					{
					  "value": "Xã Bình Thuận"
					},
					{
					  "value": "Xã Cư Bao"
					}
				  ]
				},
				{
				  "value": "Huyện Ea H'leo",
				  "code": 645,
				  "wards": [
					{
					  "value": "Thị trấn Ea Drăng"
					},
					{
					  "value": "Xã Ea H'leo"
					},
					{
					  "value": "Xã Ea Sol"
					},
					{
					  "value": "Xã Ea Ral"
					},
					{
					  "value": "Xã Ea Wy"
					},
					{
					  "value": "Xã Cư A Mung"
					},
					{
					  "value": "Xã Cư Mốt"
					},
					{
					  "value": "Xã Ea Hiao"
					},
					{
					  "value": "Xã Ea Khal"
					},
					{
					  "value": "Xã Dliê Yang"
					},
					{
					  "value": "Xã Ea Tir"
					},
					{
					  "value": "Xã Ea Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Ea Súp",
				  "code": 646,
				  "wards": [
					{
					  "value": "Thị trấn Ea Súp"
					},
					{
					  "value": "Xã Ia Lốp"
					},
					{
					  "value": "Xã Ia JLơi"
					},
					{
					  "value": "Xã Ea Rốk"
					},
					{
					  "value": "Xã Ya Tờ Mốt"
					},
					{
					  "value": "Xã Ia RVê"
					},
					{
					  "value": "Xã Ea Lê"
					},
					{
					  "value": "Xã Cư KBang"
					},
					{
					  "value": "Xã Ea Bung"
					},
					{
					  "value": "Xã Cư M'Lan"
					}
				  ]
				},
				{
				  "value": "Huyện Buôn Đôn",
				  "code": 647,
				  "wards": [
					{
					  "value": "Xã Krông Na"
					},
					{
					  "value": "Xã Ea Huar"
					},
					{
					  "value": "Xã Ea Wer"
					},
					{
					  "value": "Xã Tân Hoà"
					},
					{
					  "value": "Xã Cuôr KNia"
					},
					{
					  "value": "Xã Ea Bar"
					},
					{
					  "value": "Xã Ea Nuôl"
					}
				  ]
				},
				{
				  "value": "Huyện Cư M'gar",
				  "code": 648,
				  "wards": [
					{
					  "value": "Thị trấn Ea Pốk"
					},
					{
					  "value": "Thị trấn Quảng Phú"
					},
					{
					  "value": "Xã Quảng Tiến"
					},
					{
					  "value": "Xã Ea Kuêh"
					},
					{
					  "value": "Xã Ea Kiết"
					},
					{
					  "value": "Xã Ea Tar"
					},
					{
					  "value": "Xã Cư Dliê M'nông"
					},
					{
					  "value": "Xã Ea H'đinh"
					},
					{
					  "value": "Xã Ea Tul"
					},
					{
					  "value": "Xã Ea KPam"
					},
					{
					  "value": "Xã Ea M'DRóh"
					},
					{
					  "value": "Xã Quảng Hiệp"
					},
					{
					  "value": "Xã Cư M'gar"
					},
					{
					  "value": "Xã Ea D'Rơng"
					},
					{
					  "value": "Xã Ea M'nang"
					},
					{
					  "value": "Xã Cư Suê"
					},
					{
					  "value": "Xã Cuor Đăng"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Búk",
				  "code": 649,
				  "wards": [
					{
					  "value": "Xã Cư Né"
					},
					{
					  "value": "Xã Chư KBô"
					},
					{
					  "value": "Xã Cư Pơng"
					},
					{
					  "value": "Xã Ea Sin"
					},
					{
					  "value": "Thị trấn Pơng Drang"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Ea Ngai"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Năng",
				  "code": 650,
				  "wards": [
					{
					  "value": "Thị trấn Krông Năng"
					},
					{
					  "value": "Xã ĐLiê Ya"
					},
					{
					  "value": "Xã Ea Tóh"
					},
					{
					  "value": "Xã Ea Tam"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Tam Giang"
					},
					{
					  "value": "Xã Ea Puk"
					},
					{
					  "value": "Xã Ea Dăh"
					},
					{
					  "value": "Xã Ea Hồ"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Cư Klông"
					},
					{
					  "value": "Xã Ea Tân"
					}
				  ]
				},
				{
				  "value": "Huyện Ea Kar",
				  "code": 651,
				  "wards": [
					{
					  "value": "Thị trấn Ea Kar"
					},
					{
					  "value": "Thị trấn Ea Knốp"
					},
					{
					  "value": "Xã Ea Sô"
					},
					{
					  "value": "Xã Ea Sar"
					},
					{
					  "value": "Xã Xuân Phú"
					},
					{
					  "value": "Xã Cư Huê"
					},
					{
					  "value": "Xã Ea Tih"
					},
					{
					  "value": "Xã Ea Đar"
					},
					{
					  "value": "Xã Ea Kmút"
					},
					{
					  "value": "Xã Cư Ni"
					},
					{
					  "value": "Xã Ea Păl"
					},
					{
					  "value": "Xã Cư Prông"
					},
					{
					  "value": "Xã Ea Ô"
					},
					{
					  "value": "Xã Cư ELang"
					},
					{
					  "value": "Xã Cư Bông"
					},
					{
					  "value": "Xã Cư Jang"
					}
				  ]
				},
				{
				  "value": "Huyện M'Đrắk",
				  "code": 652,
				  "wards": [
					{
					  "value": "Thị trấn M'Đrắk"
					},
					{
					  "value": "Xã Cư Prao"
					},
					{
					  "value": "Xã Ea Pil"
					},
					{
					  "value": "Xã Ea Lai"
					},
					{
					  "value": "Xã Ea H'MLay"
					},
					{
					  "value": "Xã Krông Jing"
					},
					{
					  "value": "Xã Ea M' Doal"
					},
					{
					  "value": "Xã Ea Riêng"
					},
					{
					  "value": "Xã Cư M'ta"
					},
					{
					  "value": "Xã Cư K Róa"
					},
					{
					  "value": "Xã Krông Á"
					},
					{
					  "value": "Xã Cư San"
					},
					{
					  "value": "Xã Ea Trang"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Bông",
				  "code": 653,
				  "wards": [
					{
					  "value": "Thị trấn Krông Kmar"
					},
					{
					  "value": "Xã Dang Kang"
					},
					{
					  "value": "Xã Cư KTy"
					},
					{
					  "value": "Xã Hòa Thành"
					},
					{
					  "value": "Xã Hòa Tân"
					},
					{
					  "value": "Xã Hòa Phong"
					},
					{
					  "value": "Xã Hòa Lễ"
					},
					{
					  "value": "Xã Yang Reh"
					},
					{
					  "value": "Xã Ea Trul"
					},
					{
					  "value": "Xã Khuê Ngọc Điền"
					},
					{
					  "value": "Xã Cư Pui"
					},
					{
					  "value": "Xã Hòa Sơn"
					},
					{
					  "value": "Xã Cư Drăm"
					},
					{
					  "value": "Xã Yang Mao"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Pắc",
				  "code": 654,
				  "wards": [
					{
					  "value": "Thị trấn Phước An"
					},
					{
					  "value": "Xã KRông Búk"
					},
					{
					  "value": "Xã Ea Kly"
					},
					{
					  "value": "Xã Ea Kênh"
					},
					{
					  "value": "Xã Ea Phê"
					},
					{
					  "value": "Xã Ea KNuec"
					},
					{
					  "value": "Xã Ea Yông"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Ea Kuăng"
					},
					{
					  "value": "Xã Hòa Đông"
					},
					{
					  "value": "Xã Ea Hiu"
					},
					{
					  "value": "Xã Hòa Tiến"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Vụ Bổn"
					},
					{
					  "value": "Xã Ea Uy"
					},
					{
					  "value": "Xã Ea Yiêng"
					}
				  ]
				},
				{
				  "value": "Huyện Krông A Na",
				  "code": 655,
				  "wards": [
					{
					  "value": "Thị trấn Buôn Trấp"
					},
					{
					  "value": "Xã Dray Sáp"
					},
					{
					  "value": "Xã Ea Na"
					},
					{
					  "value": "Xã Ea Bông"
					},
					{
					  "value": "Xã Băng A Drênh"
					},
					{
					  "value": "Xã Dur KMăl"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Quảng Điền"
					}
				  ]
				},
				{
				  "value": "Huyện Lắk",
				  "code": 656,
				  "wards": [
					{
					  "value": "Thị trấn Liên Sơn"
					},
					{
					  "value": "Xã Yang Tao"
					},
					{
					  "value": "Xã Bông Krang"
					},
					{
					  "value": "Xã Đắk Liêng"
					},
					{
					  "value": "Xã Buôn Triết"
					},
					{
					  "value": "Xã Buôn Tría"
					},
					{
					  "value": "Xã Đắk Phơi"
					},
					{
					  "value": "Xã Đắk Nuê"
					},
					{
					  "value": "Xã Krông Nô"
					},
					{
					  "value": "Xã Nam Ka"
					},
					{
					  "value": "Xã Ea R'Bin"
					}
				  ]
				},
				{
				  "value": "Huyện Cư Kuin",
				  "code": 657,
				  "wards": [
					{
					  "value": "Xã Ea Ning"
					},
					{
					  "value": "Xã Cư Ê Wi"
					},
					{
					  "value": "Xã Ea Ktur"
					},
					{
					  "value": "Xã Ea Tiêu"
					},
					{
					  "value": "Xã Ea BHốk"
					},
					{
					  "value": "Xã Ea Hu"
					},
					{
					  "value": "Xã Dray Bhăng"
					},
					{
					  "value": "Xã Hòa Hiệp"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Đắk Nông",
			  "code": 67,
			  "districts": [
				{
				  "value": "Thành phố Gia Nghĩa",
				  "code": 660,
				  "wards": [
					{
					  "value": "Phường Nghĩa Đức"
					},
					{
					  "value": "Phường Nghĩa Thành"
					},
					{
					  "value": "Phường Nghĩa Phú"
					},
					{
					  "value": "Phường Nghĩa Tân"
					},
					{
					  "value": "Phường Nghĩa Trung"
					},
					{
					  "value": "Xã Đăk R'Moan"
					},
					{
					  "value": "Phường Quảng Thành"
					},
					{
					  "value": "Xã Đắk Nia"
					}
				  ]
				},
				{
				  "value": "Huyện Đăk Glong",
				  "code": 661,
				  "wards": [
					{
					  "value": "Xã Quảng Sơn"
					},
					{
					  "value": "Xã Quảng Hoà"
					},
					{
					  "value": "Xã Đắk Ha"
					},
					{
					  "value": "Xã Đắk R'Măng"
					},
					{
					  "value": "Xã Quảng Khê"
					},
					{
					  "value": "Xã Đắk Plao"
					},
					{
					  "value": "Xã Đắk Som"
					}
				  ]
				},
				{
				  "value": "Huyện Cư Jút",
				  "code": 662,
				  "wards": [
					{
					  "value": "Thị trấn Ea T'Ling"
					},
					{
					  "value": "Xã Đắk Wil"
					},
					{
					  "value": "Xã Ea Pô"
					},
					{
					  "value": "Xã Nam Dong"
					},
					{
					  "value": "Xã Đắk DRông"
					},
					{
					  "value": "Xã Tâm Thắng"
					},
					{
					  "value": "Xã Cư Knia"
					},
					{
					  "value": "Xã Trúc Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk Mil",
				  "code": 663,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Mil"
					},
					{
					  "value": "Xã Đắk Lao"
					},
					{
					  "value": "Xã Đắk R'La"
					},
					{
					  "value": "Xã Đắk Gằn"
					},
					{
					  "value": "Xã Đức Mạnh"
					},
					{
					  "value": "Xã Đắk N'Drót"
					},
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Đắk Sắk"
					},
					{
					  "value": "Xã Thuận An"
					},
					{
					  "value": "Xã Đức Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Krông Nô",
				  "code": 664,
				  "wards": [
					{
					  "value": "Thị trấn Đắk Mâm"
					},
					{
					  "value": "Xã Đắk Sôr"
					},
					{
					  "value": "Xã Nam Xuân"
					},
					{
					  "value": "Xã Buôn Choah"
					},
					{
					  "value": "Xã Nam Đà"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Đắk Drô"
					},
					{
					  "value": "Xã Nâm Nung"
					},
					{
					  "value": "Xã Đức Xuyên"
					},
					{
					  "value": "Xã Đắk Nang"
					},
					{
					  "value": "Xã Quảng Phú"
					},
					{
					  "value": "Xã Nâm N'Đir"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk Song",
				  "code": 665,
				  "wards": [
					{
					  "value": "Thị trấn Đức An"
					},
					{
					  "value": "Xã Đắk Môl"
					},
					{
					  "value": "Xã Đắk Hòa"
					},
					{
					  "value": "Xã Nam Bình"
					},
					{
					  "value": "Xã Thuận Hà"
					},
					{
					  "value": "Xã Thuận Hạnh"
					},
					{
					  "value": "Xã Đắk N'Dung"
					},
					{
					  "value": "Xã Nâm N'Jang"
					},
					{
					  "value": "Xã Trường Xuân"
					}
				  ]
				},
				{
				  "value": "Huyện Đắk R'Lấp",
				  "code": 666,
				  "wards": [
					{
					  "value": "Thị trấn Kiến Đức"
					},
					{
					  "value": "Xã Quảng Tín"
					},
					{
					  "value": "Xã Đắk Wer"
					},
					{
					  "value": "Xã Nhân Cơ"
					},
					{
					  "value": "Xã Kiến Thành"
					},
					{
					  "value": "Xã Nghĩa Thắng"
					},
					{
					  "value": "Xã Đạo Nghĩa"
					},
					{
					  "value": "Xã Đắk Sin"
					},
					{
					  "value": "Xã Hưng Bình"
					},
					{
					  "value": "Xã Đắk Ru"
					},
					{
					  "value": "Xã Nhân Đạo"
					}
				  ]
				},
				{
				  "value": "Huyện Tuy Đức",
				  "code": 667,
				  "wards": [
					{
					  "value": "Xã Quảng Trực"
					},
					{
					  "value": "Xã Đắk Búk So"
					},
					{
					  "value": "Xã Quảng Tâm"
					},
					{
					  "value": "Xã Đắk R'Tíh"
					},
					{
					  "value": "Xã Đắk Ngo"
					},
					{
					  "value": "Xã Quảng Tân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Lâm Đồng",
			  "code": 68,
			  "districts": [
				{
				  "value": "Thành phố Đà Lạt",
				  "code": 672,
				  "wards": [
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Xã Xuân Thọ"
					},
					{
					  "value": "Xã Tà Nung"
					},
					{
					  "value": "Xã Trạm Hành"
					},
					{
					  "value": "Xã Xuân Trường"
					}
				  ]
				},
				{
				  "value": "Thành phố Bảo Lộc",
				  "code": 673,
				  "wards": [
					{
					  "value": "Phường Lộc Phát"
					},
					{
					  "value": "Phường Lộc Tiến"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường B'lao"
					},
					{
					  "value": "Phường Lộc Sơn"
					},
					{
					  "value": "Xã Đạm Bri"
					},
					{
					  "value": "Xã Lộc Thanh"
					},
					{
					  "value": "Xã Lộc Nga"
					},
					{
					  "value": "Xã Lộc Châu"
					},
					{
					  "value": "Xã Đại Lào"
					}
				  ]
				},
				{
				  "value": "Huyện Đam Rông",
				  "code": 674,
				  "wards": [
					{
					  "value": "Xã Đạ Tông"
					},
					{
					  "value": "Xã Đạ Long"
					},
					{
					  "value": "Xã Đạ M' Rong"
					},
					{
					  "value": "Xã Liêng Srônh"
					},
					{
					  "value": "Xã Đạ Rsal"
					},
					{
					  "value": "Xã Rô Men"
					},
					{
					  "value": "Xã Phi Liêng"
					},
					{
					  "value": "Xã Đạ K' Nàng"
					}
				  ]
				},
				{
				  "value": "Huyện Lạc Dương",
				  "code": 675,
				  "wards": [
					{
					  "value": "Thị trấn Lạc Dương"
					},
					{
					  "value": "Xã Đạ Chais"
					},
					{
					  "value": "Xã Đạ Nhim"
					},
					{
					  "value": "Xã Đưng KNớ"
					},
					{
					  "value": "Xã Lát"
					},
					{
					  "value": "Xã Đạ Sar"
					}
				  ]
				},
				{
				  "value": "Huyện Lâm Hà",
				  "code": 676,
				  "wards": [
					{
					  "value": "Thị trấn Nam Ban"
					},
					{
					  "value": "Thị trấn Đinh Văn"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Phi Tô"
					},
					{
					  "value": "Xã Mê Linh"
					},
					{
					  "value": "Xã Đạ Đờn"
					},
					{
					  "value": "Xã Phúc Thọ"
					},
					{
					  "value": "Xã Đông Thanh"
					},
					{
					  "value": "Xã Gia Lâm"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã Tân Văn"
					},
					{
					  "value": "Xã Hoài Đức"
					},
					{
					  "value": "Xã Tân Hà"
					},
					{
					  "value": "Xã Liên Hà"
					},
					{
					  "value": "Xã Đan Phượng"
					},
					{
					  "value": "Xã Nam Hà"
					}
				  ]
				},
				{
				  "value": "Huyện Đơn Dương",
				  "code": 677,
				  "wards": [
					{
					  "value": "Thị trấn D'Ran"
					},
					{
					  "value": "Thị trấn Thạnh Mỹ"
					},
					{
					  "value": "Xã Lạc Xuân"
					},
					{
					  "value": "Xã Đạ Ròn"
					},
					{
					  "value": "Xã Lạc Lâm"
					},
					{
					  "value": "Xã Ka Đô"
					},
					{
					  "value": "Xã Quảng Lập"
					},
					{
					  "value": "Xã Ka Đơn"
					},
					{
					  "value": "Xã Tu Tra"
					},
					{
					  "value": "Xã Pró"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Trọng",
				  "code": 678,
				  "wards": [
					{
					  "value": "Thị trấn Liên Nghĩa"
					},
					{
					  "value": "Xã Hiệp An"
					},
					{
					  "value": "Xã Liên Hiệp"
					},
					{
					  "value": "Xã Hiệp Thạnh"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã N'Thol Hạ"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Phú Hội"
					},
					{
					  "value": "Xã Ninh Gia"
					},
					{
					  "value": "Xã Tà Năng"
					},
					{
					  "value": "Xã Đa Quyn"
					},
					{
					  "value": "Xã Tà Hine"
					},
					{
					  "value": "Xã Đà Loan"
					},
					{
					  "value": "Xã Ninh Loan"
					}
				  ]
				},
				{
				  "value": "Huyện Di Linh",
				  "code": 679,
				  "wards": [
					{
					  "value": "Thị trấn Di Linh"
					},
					{
					  "value": "Xã Đinh Trang Thượng"
					},
					{
					  "value": "Xã Tân Thượng"
					},
					{
					  "value": "Xã Tân Lâm"
					},
					{
					  "value": "Xã Tân Châu"
					},
					{
					  "value": "Xã Tân Nghĩa"
					},
					{
					  "value": "Xã Gia Hiệp"
					},
					{
					  "value": "Xã Đinh Lạc"
					},
					{
					  "value": "Xã Tam Bố"
					},
					{
					  "value": "Xã Đinh Trang Hòa"
					},
					{
					  "value": "Xã Liên Đầm"
					},
					{
					  "value": "Xã Gung Ré"
					},
					{
					  "value": "Xã Bảo Thuận"
					},
					{
					  "value": "Xã Hòa Ninh"
					},
					{
					  "value": "Xã Hòa Trung"
					},
					{
					  "value": "Xã Hòa Nam"
					},
					{
					  "value": "Xã Hòa Bắc"
					},
					{
					  "value": "Xã Sơn Điền"
					},
					{
					  "value": "Xã Gia Bắc"
					}
				  ]
				},
				{
				  "value": "Huyện Bảo Lâm",
				  "code": 680,
				  "wards": [
					{
					  "value": "Thị trấn Lộc Thắng"
					},
					{
					  "value": "Xã Lộc Bảo"
					},
					{
					  "value": "Xã Lộc Lâm"
					},
					{
					  "value": "Xã Lộc Phú"
					},
					{
					  "value": "Xã Lộc Bắc"
					},
					{
					  "value": "Xã B' Lá"
					},
					{
					  "value": "Xã Lộc Ngãi"
					},
					{
					  "value": "Xã Lộc Quảng"
					},
					{
					  "value": "Xã Lộc Tân"
					},
					{
					  "value": "Xã Lộc Đức"
					},
					{
					  "value": "Xã Lộc An"
					},
					{
					  "value": "Xã Tân Lạc"
					},
					{
					  "value": "Xã Lộc Thành"
					},
					{
					  "value": "Xã Lộc Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Đạ Huoai",
				  "code": 681,
				  "wards": [
					{
					  "value": "Thị trấn Đạ M'ri"
					},
					{
					  "value": "Thị trấn Ma Đa Guôi"
					},
					{
					  "value": "Xã Hà Lâm"
					},
					{
					  "value": "Xã Đạ Tồn"
					},
					{
					  "value": "Xã Đạ Oai"
					},
					{
					  "value": "Xã Đạ Ploa"
					},
					{
					  "value": "Xã Ma Đa Guôi"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Phước Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Đạ Tẻh",
				  "code": 682,
				  "wards": [
					{
					  "value": "Thị trấn Đạ Tẻh"
					},
					{
					  "value": "Xã An Nhơn"
					},
					{
					  "value": "Xã Quốc Oai"
					},
					{
					  "value": "Xã Mỹ Đức"
					},
					{
					  "value": "Xã Quảng Trị"
					},
					{
					  "value": "Xã Đạ Lây"
					},
					{
					  "value": "Xã Triệu Hải"
					},
					{
					  "value": "Xã Đạ Kho"
					},
					{
					  "value": "Xã Đạ Pal"
					}
				  ]
				},
				{
				  "value": "Huyện Cát Tiên",
				  "code": 683,
				  "wards": [
					{
					  "value": "Thị trấn Cát Tiên"
					},
					{
					  "value": "Xã Tiên Hoàng"
					},
					{
					  "value": "Xã Phước Cát 2"
					},
					{
					  "value": "Xã Gia Viễn"
					},
					{
					  "value": "Xã Nam Ninh"
					},
					{
					  "value": "Thị trấn Phước Cát"
					},
					{
					  "value": "Xã Đức Phổ"
					},
					{
					  "value": "Xã Quảng Ngãi"
					},
					{
					  "value": "Xã Đồng Nai Thượng"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bình Phước",
			  "code": 70,
			  "districts": [
				{
				  "value": "Thị xã Phước Long",
				  "code": 688,
				  "wards": [
					{
					  "value": "Phường Thác Mơ"
					},
					{
					  "value": "Phường Long Thủy"
					},
					{
					  "value": "Phường Phước Bình"
					},
					{
					  "value": "Phường Long Phước"
					},
					{
					  "value": "Phường Sơn Giang"
					},
					{
					  "value": "Xã Long Giang"
					},
					{
					  "value": "Xã Phước Tín"
					}
				  ]
				},
				{
				  "value": "Thành phố Đồng Xoài",
				  "code": 689,
				  "wards": [
					{
					  "value": "Phường Tân Phú"
					},
					{
					  "value": "Phường Tân Đồng"
					},
					{
					  "value": "Phường Tân Bình"
					},
					{
					  "value": "Phường Tân Xuân"
					},
					{
					  "value": "Phường Tân Thiện"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Phường Tiến Thành"
					},
					{
					  "value": "Xã Tiến Hưng"
					}
				  ]
				},
				{
				  "value": "Thị xã Bình Long",
				  "code": 690,
				  "wards": [
					{
					  "value": "Phường Hưng Chiến"
					},
					{
					  "value": "Phường An Lộc"
					},
					{
					  "value": "Phường Phú Thịnh"
					},
					{
					  "value": "Phường Phú Đức"
					},
					{
					  "value": "Xã Thanh Lương"
					},
					{
					  "value": "Xã Thanh Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Bù Gia Mập",
				  "code": 691,
				  "wards": [
					{
					  "value": "Xã Bù Gia Mập"
					},
					{
					  "value": "Xã Đak Ơ"
					},
					{
					  "value": "Xã Đức Hạnh"
					},
					{
					  "value": "Xã Phú Văn"
					},
					{
					  "value": "Xã Đa Kia"
					},
					{
					  "value": "Xã Phước Minh"
					},
					{
					  "value": "Xã Bình Thắng"
					},
					{
					  "value": "Xã Phú Nghĩa"
					}
				  ]
				},
				{
				  "value": "Huyện Lộc Ninh",
				  "code": 692,
				  "wards": [
					{
					  "value": "Thị trấn Lộc Ninh"
					},
					{
					  "value": "Xã Lộc Hòa"
					},
					{
					  "value": "Xã Lộc An"
					},
					{
					  "value": "Xã Lộc Tấn"
					},
					{
					  "value": "Xã Lộc Thạnh"
					},
					{
					  "value": "Xã Lộc Hiệp"
					},
					{
					  "value": "Xã Lộc Thiện"
					},
					{
					  "value": "Xã Lộc Thuận"
					},
					{
					  "value": "Xã Lộc Quang"
					},
					{
					  "value": "Xã Lộc Phú"
					},
					{
					  "value": "Xã Lộc Thành"
					},
					{
					  "value": "Xã Lộc Thái"
					},
					{
					  "value": "Xã Lộc Điền"
					},
					{
					  "value": "Xã Lộc Hưng"
					},
					{
					  "value": "Xã Lộc Thịnh"
					},
					{
					  "value": "Xã Lộc Khánh"
					}
				  ]
				},
				{
				  "value": "Huyện Bù Đốp",
				  "code": 693,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Bình"
					},
					{
					  "value": "Xã Hưng Phước"
					},
					{
					  "value": "Xã Phước Thiện"
					},
					{
					  "value": "Xã Thiện Hưng"
					},
					{
					  "value": "Xã Thanh Hòa"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tân Tiến"
					}
				  ]
				},
				{
				  "value": "Huyện Hớn Quản",
				  "code": 694,
				  "wards": [
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã An Khương"
					},
					{
					  "value": "Xã An Phú"
					},
					{
					  "value": "Xã Tân Lợi"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Xã Minh Tâm"
					},
					{
					  "value": "Xã Phước An"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Thị trấn Tân Khai"
					},
					{
					  "value": "Xã Đồng Nơ"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Tân Quan"
					}
				  ]
				},
				{
				  "value": "Huyện Đồng Phú",
				  "code": 695,
				  "wards": [
					{
					  "value": "Thị trấn Tân Phú"
					},
					{
					  "value": "Xã Thuận Lợi"
					},
					{
					  "value": "Xã Đồng Tâm"
					},
					{
					  "value": "Xã Tân Phước"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Tân Lợi"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Thuận Phú"
					},
					{
					  "value": "Xã Đồng Tiến"
					},
					{
					  "value": "Xã Tân Tiến"
					}
				  ]
				},
				{
				  "value": "Huyện Bù Đăng",
				  "code": 696,
				  "wards": [
					{
					  "value": "Thị trấn Đức Phong"
					},
					{
					  "value": "Xã Đường 10"
					},
					{
					  "value": "Xã Đak Nhau"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Thọ Sơn"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Bom Bo"
					},
					{
					  "value": "Xã Minh Hưng"
					},
					{
					  "value": "Xã Đoàn Kết"
					},
					{
					  "value": "Xã Đồng Nai"
					},
					{
					  "value": "Xã Đức Liễu"
					},
					{
					  "value": "Xã Thống Nhất"
					},
					{
					  "value": "Xã Nghĩa Trung"
					},
					{
					  "value": "Xã Nghĩa Bình"
					},
					{
					  "value": "Xã Đăng Hà"
					},
					{
					  "value": "Xã Phước Sơn"
					}
				  ]
				},
				{
				  "value": "Thị xã Chơn Thành",
				  "code": 697,
				  "wards": [
					{
					  "value": "Phường Hưng Long"
					},
					{
					  "value": "Phường Thành Tâm"
					},
					{
					  "value": "Xã Minh Lập"
					},
					{
					  "value": "Xã Quang Minh"
					},
					{
					  "value": "Phường Minh Hưng"
					},
					{
					  "value": "Phường Minh Long"
					},
					{
					  "value": "Phường Minh Thành"
					},
					{
					  "value": "Xã Nha Bích"
					},
					{
					  "value": "Xã Minh Thắng"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Riềng",
				  "code": 698,
				  "wards": [
					{
					  "value": "Xã Long Bình"
					},
					{
					  "value": "Xã Bình Tân"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Long Hưng"
					},
					{
					  "value": "Xã Phước Tân"
					},
					{
					  "value": "Xã Bù Nho"
					},
					{
					  "value": "Xã Long Hà"
					},
					{
					  "value": "Xã Long Tân"
					},
					{
					  "value": "Xã Phú Trung"
					},
					{
					  "value": "Xã Phú Riềng"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Tây Ninh",
			  "code": 72,
			  "districts": [
				{
				  "value": "Thành phố Tây Ninh",
				  "code": 703,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường Hiệp Ninh"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Xã Thạnh Tân"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Phường Ninh Sơn"
					},
					{
					  "value": "Phường Ninh Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Biên",
				  "code": 705,
				  "wards": [
					{
					  "value": "Thị trấn Tân Biên"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Thạnh Bắc"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Thạnh Bình"
					},
					{
					  "value": "Xã Thạnh Tây"
					},
					{
					  "value": "Xã Hòa Hiệp"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Mỏ Công"
					},
					{
					  "value": "Xã Trà Vong"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Châu",
				  "code": 706,
				  "wards": [
					{
					  "value": "Thị trấn Tân Châu"
					},
					{
					  "value": "Xã Tân Hà"
					},
					{
					  "value": "Xã Tân Đông"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Suối Ngô"
					},
					{
					  "value": "Xã Suối Dây"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Thạnh Đông"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Tân Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Dương Minh Châu",
				  "code": 707,
				  "wards": [
					{
					  "value": "Thị trấn Dương Minh Châu"
					},
					{
					  "value": "Xã Suối Đá"
					},
					{
					  "value": "Xã Phan"
					},
					{
					  "value": "Xã Phước Ninh"
					},
					{
					  "value": "Xã Phước Minh"
					},
					{
					  "value": "Xã Bàu Năng"
					},
					{
					  "value": "Xã Chà Là"
					},
					{
					  "value": "Xã Cầu Khởi"
					},
					{
					  "value": "Xã Bến Củi"
					},
					{
					  "value": "Xã Lộc Ninh"
					},
					{
					  "value": "Xã Truông Mít"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 708,
				  "wards": [
					{
					  "value": "Thị trấn Châu Thành"
					},
					{
					  "value": "Xã Hảo Đước"
					},
					{
					  "value": "Xã Phước Vinh"
					},
					{
					  "value": "Xã Đồng Khởi"
					},
					{
					  "value": "Xã Thái Bình"
					},
					{
					  "value": "Xã An Cơ"
					},
					{
					  "value": "Xã Biên Giới"
					},
					{
					  "value": "Xã Hòa Thạnh"
					},
					{
					  "value": "Xã Trí Bình"
					},
					{
					  "value": "Xã Hòa Hội"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Thanh Điền"
					},
					{
					  "value": "Xã Thành Long"
					},
					{
					  "value": "Xã Ninh Điền"
					},
					{
					  "value": "Xã Long Vĩnh"
					}
				  ]
				},
				{
				  "value": "Thị xã Hòa Thành",
				  "code": 709,
				  "wards": [
					{
					  "value": "Phường Long Hoa"
					},
					{
					  "value": "Phường Hiệp Tân"
					},
					{
					  "value": "Phường Long Thành Bắc"
					},
					{
					  "value": "Xã Trường Hòa"
					},
					{
					  "value": "Xã Trường Đông"
					},
					{
					  "value": "Phường Long Thành Trung"
					},
					{
					  "value": "Xã Trường Tây"
					},
					{
					  "value": "Xã Long Thành Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Gò Dầu",
				  "code": 710,
				  "wards": [
					{
					  "value": "Thị trấn Gò Dầu"
					},
					{
					  "value": "Xã Thạnh Đức"
					},
					{
					  "value": "Xã Cẩm Giang"
					},
					{
					  "value": "Xã Hiệp Thạnh"
					},
					{
					  "value": "Xã Bàu Đồn"
					},
					{
					  "value": "Xã Phước Thạnh"
					},
					{
					  "value": "Xã Phước Đông"
					},
					{
					  "value": "Xã Phước Trạch"
					},
					{
					  "value": "Xã Thanh Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Bến Cầu",
				  "code": 711,
				  "wards": [
					{
					  "value": "Thị trấn Bến Cầu"
					},
					{
					  "value": "Xã Long Chữ"
					},
					{
					  "value": "Xã Long Phước"
					},
					{
					  "value": "Xã Long Giang"
					},
					{
					  "value": "Xã Tiên Thuận"
					},
					{
					  "value": "Xã Long Khánh"
					},
					{
					  "value": "Xã Lợi Thuận"
					},
					{
					  "value": "Xã Long Thuận"
					},
					{
					  "value": "Xã An Thạnh"
					}
				  ]
				},
				{
				  "value": "Thị xã Trảng Bàng",
				  "code": 712,
				  "wards": [
					{
					  "value": "Phường Trảng Bàng"
					},
					{
					  "value": "Xã Đôn Thuận"
					},
					{
					  "value": "Xã Hưng Thuận"
					},
					{
					  "value": "Phường Lộc Hưng"
					},
					{
					  "value": "Phường Gia Lộc"
					},
					{
					  "value": "Phường Gia Bình"
					},
					{
					  "value": "Xã Phước Bình"
					},
					{
					  "value": "Phường An Tịnh"
					},
					{
					  "value": "Phường An Hòa"
					},
					{
					  "value": "Xã Phước Chỉ"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bình Dương",
			  "code": 74,
			  "districts": [
				{
				  "value": "Thành phố Thủ Dầu Một",
				  "code": 718,
				  "wards": [
					{
					  "value": "Phường Hiệp Thành"
					},
					{
					  "value": "Phường Phú Lợi"
					},
					{
					  "value": "Phường Phú Cường"
					},
					{
					  "value": "Phường Phú Hòa"
					},
					{
					  "value": "Phường Phú Thọ"
					},
					{
					  "value": "Phường Chánh Nghĩa"
					},
					{
					  "value": "Phường Định Hoà"
					},
					{
					  "value": "Phường Hoà Phú"
					},
					{
					  "value": "Phường Phú Mỹ"
					},
					{
					  "value": "Phường Phú Tân"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường Hiệp An"
					},
					{
					  "value": "Phường Tương Bình Hiệp"
					},
					{
					  "value": "Phường Chánh Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Bàu Bàng",
				  "code": 719,
				  "wards": [
					{
					  "value": "Xã Trừ Văn Thố"
					},
					{
					  "value": "Xã Cây Trường II"
					},
					{
					  "value": "Thị trấn Lai Uyên"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Long Nguyên"
					},
					{
					  "value": "Xã Hưng Hòa"
					},
					{
					  "value": "Xã Lai Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Dầu Tiếng",
				  "code": 720,
				  "wards": [
					{
					  "value": "Thị trấn Dầu Tiếng"
					},
					{
					  "value": "Xã Minh Hoà"
					},
					{
					  "value": "Xã Minh Thạnh"
					},
					{
					  "value": "Xã Minh Tân"
					},
					{
					  "value": "Xã Định An"
					},
					{
					  "value": "Xã Long Hoà"
					},
					{
					  "value": "Xã Định Thành"
					},
					{
					  "value": "Xã Định Hiệp"
					},
					{
					  "value": "Xã An Lập"
					},
					{
					  "value": "Xã Long Tân"
					},
					{
					  "value": "Xã Thanh An"
					},
					{
					  "value": "Xã Thanh Tuyền"
					}
				  ]
				},
				{
				  "value": "Thị xã Bến Cát",
				  "code": 721,
				  "wards": [
					{
					  "value": "Phường Mỹ Phước"
					},
					{
					  "value": "Phường Chánh Phú Hòa"
					},
					{
					  "value": "Xã An Điền"
					},
					{
					  "value": "Xã An Tây"
					},
					{
					  "value": "Phường Thới Hòa"
					},
					{
					  "value": "Phường Hòa Lợi"
					},
					{
					  "value": "Phường Tân Định"
					},
					{
					  "value": "Xã Phú An"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Giáo",
				  "code": 722,
				  "wards": [
					{
					  "value": "Thị trấn Phước Vĩnh"
					},
					{
					  "value": "Xã An Linh"
					},
					{
					  "value": "Xã Phước Sang"
					},
					{
					  "value": "Xã An Thái"
					},
					{
					  "value": "Xã An Long"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Tam Lập"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Vĩnh Hoà"
					},
					{
					  "value": "Xã Phước Hoà"
					}
				  ]
				},
				{
				  "value": "Thành phố Tân Uyên",
				  "code": 723,
				  "wards": [
					{
					  "value": "Phường Uyên Hưng"
					},
					{
					  "value": "Phường Tân Phước Khánh"
					},
					{
					  "value": "Phường Vĩnh Tân"
					},
					{
					  "value": "Phường Hội Nghĩa"
					},
					{
					  "value": "Phường Tân Hiệp"
					},
					{
					  "value": "Phường Khánh Bình"
					},
					{
					  "value": "Phường Phú Chánh"
					},
					{
					  "value": "Xã Bạch Đằng"
					},
					{
					  "value": "Phường Tân Vĩnh Hiệp"
					},
					{
					  "value": "Phường Thạnh Phước"
					},
					{
					  "value": "Xã Thạnh Hội"
					},
					{
					  "value": "Phường Thái Hòa"
					}
				  ]
				},
				{
				  "value": "Thành phố Dĩ An",
				  "code": 724,
				  "wards": [
					{
					  "value": "Phường Dĩ An"
					},
					{
					  "value": "Phường Tân Bình"
					},
					{
					  "value": "Phường Tân Đông Hiệp"
					},
					{
					  "value": "Phường Bình An"
					},
					{
					  "value": "Phường Bình Thắng"
					},
					{
					  "value": "Phường Đông Hòa"
					},
					{
					  "value": "Phường An Bình"
					}
				  ]
				},
				{
				  "value": "Thành phố Thuận An",
				  "code": 725,
				  "wards": [
					{
					  "value": "Phường An Thạnh"
					},
					{
					  "value": "Phường Lái Thiêu"
					},
					{
					  "value": "Phường Bình Chuẩn"
					},
					{
					  "value": "Phường Thuận Giao"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Phường Hưng Định"
					},
					{
					  "value": "Xã An Sơn"
					},
					{
					  "value": "Phường Bình Nhâm"
					},
					{
					  "value": "Phường Bình Hòa"
					},
					{
					  "value": "Phường Vĩnh Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Bắc Tân Uyên",
				  "code": 726,
				  "wards": [
					{
					  "value": "Xã Tân Định"
					},
					{
					  "value": "Xã Bình Mỹ"
					},
					{
					  "value": "Thị trấn Tân Bình"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Thị trấn Tân Thành"
					},
					{
					  "value": "Xã Đất Cuốc"
					},
					{
					  "value": "Xã Hiếu Liêm"
					},
					{
					  "value": "Xã Lạc An"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Thường Tân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Đồng Nai",
			  "code": 75,
			  "districts": [
				{
				  "value": "Thành phố Biên Hòa",
				  "code": 731,
				  "wards": [
					{
					  "value": "Phường Trảng Dài"
					},
					{
					  "value": "Phường Tân Phong"
					},
					{
					  "value": "Phường Tân Biên"
					},
					{
					  "value": "Phường Hố Nai"
					},
					{
					  "value": "Phường Tân Hòa"
					},
					{
					  "value": "Phường Tân Hiệp"
					},
					{
					  "value": "Phường Bửu Long"
					},
					{
					  "value": "Phường Tân Tiến"
					},
					{
					  "value": "Phường Tam Hiệp"
					},
					{
					  "value": "Phường Long Bình"
					},
					{
					  "value": "Phường Quang Vinh"
					},
					{
					  "value": "Phường Tân Mai"
					},
					{
					  "value": "Phường Thống Nhất"
					},
					{
					  "value": "Phường Trung Dũng"
					},
					{
					  "value": "Phường Tam Hòa"
					},
					{
					  "value": "Phường Hòa Bình"
					},
					{
					  "value": "Phường Quyết Thắng"
					},
					{
					  "value": "Phường Thanh Bình"
					},
					{
					  "value": "Phường Bình Đa"
					},
					{
					  "value": "Phường An Bình"
					},
					{
					  "value": "Phường Bửu Hòa"
					},
					{
					  "value": "Phường Long Bình Tân"
					},
					{
					  "value": "Phường Tân Vạn"
					},
					{
					  "value": "Phường Tân Hạnh"
					},
					{
					  "value": "Phường Hiệp Hòa"
					},
					{
					  "value": "Phường Hóa An"
					},
					{
					  "value": "Phường An Hòa"
					},
					{
					  "value": "Phường Tam Phước"
					},
					{
					  "value": "Phường Phước Tân"
					},
					{
					  "value": "Xã Long Hưng"
					}
				  ]
				},
				{
				  "value": "Thành phố Long Khánh",
				  "code": 732,
				  "wards": [
					{
					  "value": "Phường Xuân Trung"
					},
					{
					  "value": "Phường Xuân Thanh"
					},
					{
					  "value": "Phường Xuân Bình"
					},
					{
					  "value": "Phường Xuân An"
					},
					{
					  "value": "Phường Xuân Hoà"
					},
					{
					  "value": "Phường Phú Bình"
					},
					{
					  "value": "Xã Bình Lộc"
					},
					{
					  "value": "Xã Bảo Quang"
					},
					{
					  "value": "Phường Suối Tre"
					},
					{
					  "value": "Phường Bảo Vinh"
					},
					{
					  "value": "Phường Xuân Lập"
					},
					{
					  "value": "Phường Bàu Sen"
					},
					{
					  "value": "Xã Bàu Trâm"
					},
					{
					  "value": "Phường Xuân Tân"
					},
					{
					  "value": "Xã Hàng Gòn"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Phú",
				  "code": 734,
				  "wards": [
					{
					  "value": "Thị trấn Tân Phú"
					},
					{
					  "value": "Xã Dak Lua"
					},
					{
					  "value": "Xã Nam Cát Tiên"
					},
					{
					  "value": "Xã Phú An"
					},
					{
					  "value": "Xã Núi Tượng"
					},
					{
					  "value": "Xã Tà Lài"
					},
					{
					  "value": "Xã Phú Lập"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Phú Trung"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Phú Lâm"
					},
					{
					  "value": "Xã Phú Bình"
					},
					{
					  "value": "Xã Phú Thanh"
					},
					{
					  "value": "Xã Trà Cổ"
					},
					{
					  "value": "Xã Phú Điền"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Cửu",
				  "code": 735,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh An"
					},
					{
					  "value": "Xã Phú Lý"
					},
					{
					  "value": "Xã Trị An"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Vĩnh Tân"
					},
					{
					  "value": "Xã Bình Lợi"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Thiện Tân"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Mã Đà"
					},
					{
					  "value": "Xã Hiếu Liêm"
					}
				  ]
				},
				{
				  "value": "Huyện Định Quán",
				  "code": 736,
				  "wards": [
					{
					  "value": "Thị trấn Định Quán"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Phú Tân"
					},
					{
					  "value": "Xã Phú Vinh"
					},
					{
					  "value": "Xã Phú Lợi"
					},
					{
					  "value": "Xã Phú Hòa"
					},
					{
					  "value": "Xã Ngọc Định"
					},
					{
					  "value": "Xã La Ngà"
					},
					{
					  "value": "Xã Gia Canh"
					},
					{
					  "value": "Xã Phú Ngọc"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Túc Trưng"
					},
					{
					  "value": "Xã Phú Túc"
					},
					{
					  "value": "Xã Suối Nho"
					}
				  ]
				},
				{
				  "value": "Huyện Trảng Bom",
				  "code": 737,
				  "wards": [
					{
					  "value": "Thị trấn Trảng Bom"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Xã Cây Gáo"
					},
					{
					  "value": "Xã Bàu Hàm"
					},
					{
					  "value": "Xã Sông Thao"
					},
					{
					  "value": "Xã Sông Trầu"
					},
					{
					  "value": "Xã Đông Hoà"
					},
					{
					  "value": "Xã Bắc Sơn"
					},
					{
					  "value": "Xã Hố Nai 3"
					},
					{
					  "value": "Xã Tây Hoà"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Trung Hoà"
					},
					{
					  "value": "Xã Đồi 61"
					},
					{
					  "value": "Xã Hưng Thịnh"
					},
					{
					  "value": "Xã Quảng Tiến"
					},
					{
					  "value": "Xã Giang Điền"
					},
					{
					  "value": "Xã An Viễn"
					}
				  ]
				},
				{
				  "value": "Huyện Thống Nhất",
				  "code": 738,
				  "wards": [
					{
					  "value": "Xã Gia Tân 1"
					},
					{
					  "value": "Xã Gia Tân 2"
					},
					{
					  "value": "Xã Gia Tân 3"
					},
					{
					  "value": "Xã Gia Kiệm"
					},
					{
					  "value": "Xã Quang Trung"
					},
					{
					  "value": "Xã Bàu Hàm 2"
					},
					{
					  "value": "Xã Hưng Lộc"
					},
					{
					  "value": "Xã Lộ 25"
					},
					{
					  "value": "Xã Xuân Thiện"
					},
					{
					  "value": "Thị trấn Dầu Giây"
					}
				  ]
				},
				{
				  "value": "Huyện Cẩm Mỹ",
				  "code": 739,
				  "wards": [
					{
					  "value": "Xã Sông Nhạn"
					},
					{
					  "value": "Xã Xuân Quế"
					},
					{
					  "value": "Xã Nhân Nghĩa"
					},
					{
					  "value": "Xã Xuân Đường"
					},
					{
					  "value": "Thị trấn Long Giao"
					},
					{
					  "value": "Xã Xuân Mỹ"
					},
					{
					  "value": "Xã Thừa Đức"
					},
					{
					  "value": "Xã Bảo Bình"
					},
					{
					  "value": "Xã Xuân Bảo"
					},
					{
					  "value": "Xã Xuân Tây"
					},
					{
					  "value": "Xã Xuân Đông"
					},
					{
					  "value": "Xã Sông Ray"
					},
					{
					  "value": "Xã Lâm San"
					}
				  ]
				},
				{
				  "value": "Huyện Long Thành",
				  "code": 740,
				  "wards": [
					{
					  "value": "Thị trấn Long Thành"
					},
					{
					  "value": "Xã An Phước"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Long Đức"
					},
					{
					  "value": "Xã Lộc An"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Tam An"
					},
					{
					  "value": "Xã Cẩm Đường"
					},
					{
					  "value": "Xã Long An"
					},
					{
					  "value": "Xã Bàu Cạn"
					},
					{
					  "value": "Xã Long Phước"
					},
					{
					  "value": "Xã Phước Bình"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Phước Thái"
					}
				  ]
				},
				{
				  "value": "Huyện Xuân Lộc",
				  "code": 741,
				  "wards": [
					{
					  "value": "Thị trấn Gia Ray"
					},
					{
					  "value": "Xã Xuân Bắc"
					},
					{
					  "value": "Xã Suối Cao"
					},
					{
					  "value": "Xã Xuân Thành"
					},
					{
					  "value": "Xã Xuân Thọ"
					},
					{
					  "value": "Xã Xuân Trường"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Xuân Hưng"
					},
					{
					  "value": "Xã Xuân Tâm"
					},
					{
					  "value": "Xã Suối Cát"
					},
					{
					  "value": "Xã Xuân Hiệp"
					},
					{
					  "value": "Xã Xuân Phú"
					},
					{
					  "value": "Xã Xuân Định"
					},
					{
					  "value": "Xã Bảo Hoà"
					},
					{
					  "value": "Xã Lang Minh"
					}
				  ]
				},
				{
				  "value": "Huyện Nhơn Trạch",
				  "code": 742,
				  "wards": [
					{
					  "value": "Xã Phước Thiền"
					},
					{
					  "value": "Xã Long Tân"
					},
					{
					  "value": "Xã Đại Phước"
					},
					{
					  "value": "Thị trấn Hiệp Phước"
					},
					{
					  "value": "Xã Phú Hữu"
					},
					{
					  "value": "Xã Phú Hội"
					},
					{
					  "value": "Xã Phú Thạnh"
					},
					{
					  "value": "Xã Phú Đông"
					},
					{
					  "value": "Xã Long Thọ"
					},
					{
					  "value": "Xã Vĩnh Thanh"
					},
					{
					  "value": "Xã Phước Khánh"
					},
					{
					  "value": "Xã Phước An"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bà Rịa - Vũng Tàu",
			  "code": 77,
			  "districts": [
				{
				  "value": "Thành phố Vũng Tàu",
				  "code": 747,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường Thắng Tam"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường Thắng Nhì"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường Nguyễn An Ninh"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường Thắng Nhất"
					},
					{
					  "value": "Phường Rạch Dừa"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Xã Long Sơn"
					}
				  ]
				},
				{
				  "value": "Thành phố Bà Rịa",
				  "code": 748,
				  "wards": [
					{
					  "value": "Phường Phước Hưng"
					},
					{
					  "value": "Phường Phước Hiệp"
					},
					{
					  "value": "Phường Phước Nguyên"
					},
					{
					  "value": "Phường Long Toàn"
					},
					{
					  "value": "Phường Long Tâm"
					},
					{
					  "value": "Phường Phước Trung"
					},
					{
					  "value": "Phường Long Hương"
					},
					{
					  "value": "Phường Kim Dinh"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Long Phước"
					},
					{
					  "value": "Xã Hoà Long"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Đức",
				  "code": 750,
				  "wards": [
					{
					  "value": "Xã Bàu Chinh"
					},
					{
					  "value": "Thị trấn Ngãi Giao"
					},
					{
					  "value": "Xã Bình Ba"
					},
					{
					  "value": "Xã Suối Nghệ"
					},
					{
					  "value": "Xã Xuân Sơn"
					},
					{
					  "value": "Xã Sơn Bình"
					},
					{
					  "value": "Xã Bình Giã"
					},
					{
					  "value": "Xã Bình Trung"
					},
					{
					  "value": "Xã Xà Bang"
					},
					{
					  "value": "Xã Cù Bị"
					},
					{
					  "value": "Xã Láng Lớn"
					},
					{
					  "value": "Xã Quảng Thành"
					},
					{
					  "value": "Xã Kim Long"
					},
					{
					  "value": "Xã Suối Rao"
					},
					{
					  "value": "Xã Đá Bạc"
					},
					{
					  "value": "Xã Nghĩa Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Xuyên Mộc",
				  "code": 751,
				  "wards": [
					{
					  "value": "Thị trấn Phước Bửu"
					},
					{
					  "value": "Xã Phước Thuận"
					},
					{
					  "value": "Xã Phước Tân"
					},
					{
					  "value": "Xã Xuyên Mộc"
					},
					{
					  "value": "Xã Bông Trang"
					},
					{
					  "value": "Xã Tân Lâm"
					},
					{
					  "value": "Xã Bàu Lâm"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Hòa Hưng"
					},
					{
					  "value": "Xã Hòa Hiệp"
					},
					{
					  "value": "Xã Hòa Hội"
					},
					{
					  "value": "Xã Bưng Riềng"
					},
					{
					  "value": "Xã Bình Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Long Điền",
				  "code": 752,
				  "wards": [
					{
					  "value": "Thị trấn Long Điền"
					},
					{
					  "value": "Thị trấn Long Hải"
					},
					{
					  "value": "Xã An Ngãi"
					},
					{
					  "value": "Xã Tam Phước"
					},
					{
					  "value": "Xã An Nhứt"
					},
					{
					  "value": "Xã Phước Tỉnh"
					},
					{
					  "value": "Xã Phước Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Đất Đỏ",
				  "code": 753,
				  "wards": [
					{
					  "value": "Thị trấn Đất Đỏ"
					},
					{
					  "value": "Xã Phước Long Thọ"
					},
					{
					  "value": "Xã Phước Hội"
					},
					{
					  "value": "Xã Long Mỹ"
					},
					{
					  "value": "Thị trấn Phước Hải"
					},
					{
					  "value": "Xã Long Tân"
					},
					{
					  "value": "Xã Láng Dài"
					},
					{
					  "value": "Xã Lộc An"
					}
				  ]
				},
				{
				  "value": "Thị xã Phú Mỹ",
				  "code": 754,
				  "wards": [
					{
					  "value": "Phường Phú Mỹ"
					},
					{
					  "value": "Xã Tân Hoà"
					},
					{
					  "value": "Xã Tân Hải"
					},
					{
					  "value": "Phường Phước Hoà"
					},
					{
					  "value": "Phường Tân Phước"
					},
					{
					  "value": "Phường Mỹ Xuân"
					},
					{
					  "value": "Xã Sông Xoài"
					},
					{
					  "value": "Phường Hắc Dịch"
					},
					{
					  "value": "Xã Châu Pha"
					},
					{
					  "value": "Xã Tóc Tiên"
					}
				  ]
				},
				{
				  "value": "Huyện Côn Đảo",
				  "code": 755,
				  "wards": []
				}
			  ]
			},
			{
			  "value": "Thành phố Hồ Chí Minh",
			  "code": 79,
			  "districts": [
				{
				  "value": "Quận 1",
				  "code": 760,
				  "wards": [
					{
					  "value": "Phường Tân Định"
					},
					{
					  "value": "Phường Đa Kao"
					},
					{
					  "value": "Phường Bến Nghé"
					},
					{
					  "value": "Phường Bến Thành"
					},
					{
					  "value": "Phường Nguyễn Thái Bình"
					},
					{
					  "value": "Phường Phạm Ngũ Lão"
					},
					{
					  "value": "Phường Cầu Ông Lãnh"
					},
					{
					  "value": "Phường Cô Giang"
					},
					{
					  "value": "Phường Nguyễn Cư Trinh"
					},
					{
					  "value": "Phường Cầu Kho"
					}
				  ]
				},
				{
				  "value": "Quận 12",
				  "code": 761,
				  "wards": [
					{
					  "value": "Phường Thạnh Xuân"
					},
					{
					  "value": "Phường Thạnh Lộc"
					},
					{
					  "value": "Phường Hiệp Thành"
					},
					{
					  "value": "Phường Thới An"
					},
					{
					  "value": "Phường Tân Chánh Hiệp"
					},
					{
					  "value": "Phường An Phú Đông"
					},
					{
					  "value": "Phường Tân Thới Hiệp"
					},
					{
					  "value": "Phường Trung Mỹ Tây"
					},
					{
					  "value": "Phường Tân Hưng Thuận"
					},
					{
					  "value": "Phường Đông Hưng Thuận"
					},
					{
					  "value": "Phường Tân Thới Nhất"
					}
				  ]
				},
				{
				  "value": "Quận Gò Vấp",
				  "code": 764,
				  "wards": [
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 17"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 16"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 03"
					}
				  ]
				},
				{
				  "value": "Quận Bình Thạnh",
				  "code": 765,
				  "wards": [
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 27"
					},
					{
					  "value": "Phường 26"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 25"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 24"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 17"
					},
					{
					  "value": "Phường 21"
					},
					{
					  "value": "Phường 22"
					},
					{
					  "value": "Phường 19"
					},
					{
					  "value": "Phường 28"
					}
				  ]
				},
				{
				  "value": "Quận Tân Bình",
				  "code": 766,
				  "wards": [
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 15"
					}
				  ]
				},
				{
				  "value": "Quận Tân Phú",
				  "code": 767,
				  "wards": [
					{
					  "value": "Phường Tân Sơn Nhì"
					},
					{
					  "value": "Phường Tây Thạnh"
					},
					{
					  "value": "Phường Sơn Kỳ"
					},
					{
					  "value": "Phường Tân Quý"
					},
					{
					  "value": "Phường Tân Thành"
					},
					{
					  "value": "Phường Phú Thọ Hòa"
					},
					{
					  "value": "Phường Phú Thạnh"
					},
					{
					  "value": "Phường Phú Trung"
					},
					{
					  "value": "Phường Hòa Thạnh"
					},
					{
					  "value": "Phường Hiệp Tân"
					},
					{
					  "value": "Phường Tân Thới Hòa"
					}
				  ]
				},
				{
				  "value": "Quận Phú Nhuận",
				  "code": 768,
				  "wards": [
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 17"
					},
					{
					  "value": "Phường 13"
					}
				  ]
				},
				{
				  "value": "Thành phố Thủ Đức",
				  "code": 769,
				  "wards": [
					{
					  "value": "Phường Linh Xuân"
					},
					{
					  "value": "Phường Bình Chiểu"
					},
					{
					  "value": "Phường Linh Trung"
					},
					{
					  "value": "Phường Tam Bình"
					},
					{
					  "value": "Phường Tam Phú"
					},
					{
					  "value": "Phường Hiệp Bình Phước"
					},
					{
					  "value": "Phường Hiệp Bình Chánh"
					},
					{
					  "value": "Phường Linh Chiểu"
					},
					{
					  "value": "Phường Linh Tây"
					},
					{
					  "value": "Phường Linh Đông"
					},
					{
					  "value": "Phường Bình Thọ"
					},
					{
					  "value": "Phường Trường Thọ"
					},
					{
					  "value": "Phường Long Bình"
					},
					{
					  "value": "Phường Long Thạnh Mỹ"
					},
					{
					  "value": "Phường Tân Phú"
					},
					{
					  "value": "Phường Hiệp Phú"
					},
					{
					  "value": "Phường Tăng Nhơn Phú A"
					},
					{
					  "value": "Phường Tăng Nhơn Phú B"
					},
					{
					  "value": "Phường Phước Long B"
					},
					{
					  "value": "Phường Phước Long A"
					},
					{
					  "value": "Phường Trường Thạnh"
					},
					{
					  "value": "Phường Long Phước"
					},
					{
					  "value": "Phường Long Trường"
					},
					{
					  "value": "Phường Phước Bình"
					},
					{
					  "value": "Phường Phú Hữu"
					},
					{
					  "value": "Phường Thảo Điền"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Phường An Khánh"
					},
					{
					  "value": "Phường Bình Trưng Đông"
					},
					{
					  "value": "Phường Bình Trưng Tây"
					},
					{
					  "value": "Phường Cát Lái"
					},
					{
					  "value": "Phường Thạnh Mỹ Lợi"
					},
					{
					  "value": "Phường An Lợi Đông"
					},
					{
					  "value": "Phường Thủ Thiêm"
					}
				  ]
				},
				{
				  "value": "Quận 3",
				  "code": 770,
				  "wards": [
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường Võ Thị Sáu"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 01"
					}
				  ]
				},
				{
				  "value": "Quận 10",
				  "code": 771,
				  "wards": [
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 06"
					}
				  ]
				},
				{
				  "value": "Quận 11",
				  "code": 772,
				  "wards": [
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 16"
					}
				  ]
				},
				{
				  "value": "Quận 4",
				  "code": 773,
				  "wards": [
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 18"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 16"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 01"
					}
				  ]
				},
				{
				  "value": "Quận 5",
				  "code": 774,
				  "wards": [
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 13"
					}
				  ]
				},
				{
				  "value": "Quận 6",
				  "code": 775,
				  "wards": [
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 07"
					},
					{
					  "value": "Phường 10"
					}
				  ]
				},
				{
				  "value": "Quận 8",
				  "code": 776,
				  "wards": [
					{
					  "value": "Phường 08"
					},
					{
					  "value": "Phường 02"
					},
					{
					  "value": "Phường 01"
					},
					{
					  "value": "Phường 03"
					},
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 09"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường 04"
					},
					{
					  "value": "Phường 13"
					},
					{
					  "value": "Phường 12"
					},
					{
					  "value": "Phường 05"
					},
					{
					  "value": "Phường 14"
					},
					{
					  "value": "Phường 06"
					},
					{
					  "value": "Phường 15"
					},
					{
					  "value": "Phường 16"
					},
					{
					  "value": "Phường 07"
					}
				  ]
				},
				{
				  "value": "Quận Bình Tân",
				  "code": 777,
				  "wards": [
					{
					  "value": "Phường Bình Hưng Hòa"
					},
					{
					  "value": "Phường Bình Hưng Hoà A"
					},
					{
					  "value": "Phường Bình Hưng Hoà B"
					},
					{
					  "value": "Phường Bình Trị Đông"
					},
					{
					  "value": "Phường Bình Trị Đông A"
					},
					{
					  "value": "Phường Bình Trị Đông B"
					},
					{
					  "value": "Phường Tân Tạo"
					},
					{
					  "value": "Phường Tân Tạo A"
					},
					{
					  "value": "Phường An Lạc"
					},
					{
					  "value": "Phường An Lạc A"
					}
				  ]
				},
				{
				  "value": "Quận 7",
				  "code": 778,
				  "wards": [
					{
					  "value": "Phường Tân Thuận Đông"
					},
					{
					  "value": "Phường Tân Thuận Tây"
					},
					{
					  "value": "Phường Tân Kiểng"
					},
					{
					  "value": "Phường Tân Hưng"
					},
					{
					  "value": "Phường Bình Thuận"
					},
					{
					  "value": "Phường Tân Quy"
					},
					{
					  "value": "Phường Phú Thuận"
					},
					{
					  "value": "Phường Tân Phú"
					},
					{
					  "value": "Phường Tân Phong"
					},
					{
					  "value": "Phường Phú Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Củ Chi",
				  "code": 783,
				  "wards": [
					{
					  "value": "Thị trấn Củ Chi"
					},
					{
					  "value": "Xã Phú Mỹ Hưng"
					},
					{
					  "value": "Xã An Phú"
					},
					{
					  "value": "Xã Trung Lập Thượng"
					},
					{
					  "value": "Xã An Nhơn Tây"
					},
					{
					  "value": "Xã Nhuận Đức"
					},
					{
					  "value": "Xã Phạm Văn Cội"
					},
					{
					  "value": "Xã Phú Hòa Đông"
					},
					{
					  "value": "Xã Trung Lập Hạ"
					},
					{
					  "value": "Xã Trung An"
					},
					{
					  "value": "Xã Phước Thạnh"
					},
					{
					  "value": "Xã Phước Hiệp"
					},
					{
					  "value": "Xã Tân An Hội"
					},
					{
					  "value": "Xã Phước Vĩnh An"
					},
					{
					  "value": "Xã Thái Mỹ"
					},
					{
					  "value": "Xã Tân Thạnh Tây"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Tân Thạnh Đông"
					},
					{
					  "value": "Xã Bình Mỹ"
					},
					{
					  "value": "Xã Tân Phú Trung"
					},
					{
					  "value": "Xã Tân Thông Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Hóc Môn",
				  "code": 784,
				  "wards": [
					{
					  "value": "Thị trấn Hóc Môn"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Nhị Bình"
					},
					{
					  "value": "Xã Đông Thạnh"
					},
					{
					  "value": "Xã Tân Thới Nhì"
					},
					{
					  "value": "Xã Thới Tam Thôn"
					},
					{
					  "value": "Xã Xuân Thới Sơn"
					},
					{
					  "value": "Xã Tân Xuân"
					},
					{
					  "value": "Xã Xuân Thới Đông"
					},
					{
					  "value": "Xã Trung Chánh"
					},
					{
					  "value": "Xã Xuân Thới Thượng"
					},
					{
					  "value": "Xã Bà Điểm"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Chánh",
				  "code": 785,
				  "wards": [
					{
					  "value": "Thị trấn Tân Túc"
					},
					{
					  "value": "Xã Phạm Văn Hai"
					},
					{
					  "value": "Xã Vĩnh Lộc A"
					},
					{
					  "value": "Xã Vĩnh Lộc B"
					},
					{
					  "value": "Xã Bình Lợi"
					},
					{
					  "value": "Xã Lê Minh Xuân"
					},
					{
					  "value": "Xã Tân Nhựt"
					},
					{
					  "value": "Xã Tân Kiên"
					},
					{
					  "value": "Xã Bình Hưng"
					},
					{
					  "value": "Xã Phong Phú"
					},
					{
					  "value": "Xã An Phú Tây"
					},
					{
					  "value": "Xã Hưng Long"
					},
					{
					  "value": "Xã Đa Phước"
					},
					{
					  "value": "Xã Tân Quý Tây"
					},
					{
					  "value": "Xã Bình Chánh"
					},
					{
					  "value": "Xã Quy Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Nhà Bè",
				  "code": 786,
				  "wards": [
					{
					  "value": "Thị trấn Nhà Bè"
					},
					{
					  "value": "Xã Phước Kiển"
					},
					{
					  "value": "Xã Phước Lộc"
					},
					{
					  "value": "Xã Nhơn Đức"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Long Thới"
					},
					{
					  "value": "Xã Hiệp Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Cần Giờ",
				  "code": 787,
				  "wards": [
					{
					  "value": "Thị trấn Cần Thạnh"
					},
					{
					  "value": "Xã Bình Khánh"
					},
					{
					  "value": "Xã Tam Thôn Hiệp"
					},
					{
					  "value": "Xã An Thới Đông"
					},
					{
					  "value": "Xã Thạnh An"
					},
					{
					  "value": "Xã Long Hòa"
					},
					{
					  "value": "Xã Lý Nhơn"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Long An",
			  "code": 80,
			  "districts": [
				{
				  "value": "Thành phố Tân An",
				  "code": 794,
				  "wards": [
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường Tân Khánh"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Xã Hướng Thọ Phú"
					},
					{
					  "value": "Xã Nhơn Thạnh Trung"
					},
					{
					  "value": "Xã Lợi Bình Nhơn"
					},
					{
					  "value": "Xã Bình Tâm"
					},
					{
					  "value": "Phường Khánh Hậu"
					},
					{
					  "value": "Xã An Vĩnh Ngãi"
					}
				  ]
				},
				{
				  "value": "Thị xã Kiến Tường",
				  "code": 795,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Xã Thạnh Trị"
					},
					{
					  "value": "Xã Bình Hiệp"
					},
					{
					  "value": "Xã Bình Tân"
					},
					{
					  "value": "Xã Tuyên Thạnh"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Xã Thạnh Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Hưng",
				  "code": 796,
				  "wards": [
					{
					  "value": "Thị trấn Tân Hưng"
					},
					{
					  "value": "Xã Hưng Hà"
					},
					{
					  "value": "Xã Hưng Điền B"
					},
					{
					  "value": "Xã Hưng Điền"
					},
					{
					  "value": "Xã Thạnh Hưng"
					},
					{
					  "value": "Xã Hưng Thạnh"
					},
					{
					  "value": "Xã Vĩnh Thạnh"
					},
					{
					  "value": "Xã Vĩnh Châu B"
					},
					{
					  "value": "Xã Vĩnh Lợi"
					},
					{
					  "value": "Xã Vĩnh Đại"
					},
					{
					  "value": "Xã Vĩnh Châu A"
					},
					{
					  "value": "Xã Vĩnh Bửu"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Hưng",
				  "code": 797,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Hưng"
					},
					{
					  "value": "Xã Hưng Điền A"
					},
					{
					  "value": "Xã Khánh Hưng"
					},
					{
					  "value": "Xã Thái Trị"
					},
					{
					  "value": "Xã Vĩnh Trị"
					},
					{
					  "value": "Xã Thái Bình Trung"
					},
					{
					  "value": "Xã Vĩnh Bình"
					},
					{
					  "value": "Xã Vĩnh Thuận"
					},
					{
					  "value": "Xã Tuyên Bình"
					},
					{
					  "value": "Xã Tuyên Bình Tây"
					}
				  ]
				},
				{
				  "value": "Huyện Mộc Hóa",
				  "code": 798,
				  "wards": [
					{
					  "value": "Xã Bình Hòa Tây"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã Bình Hòa Trung"
					},
					{
					  "value": "Xã Bình Hòa Đông"
					},
					{
					  "value": "Thị trấn Bình Phong Thạnh"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Thạnh",
				  "code": 799,
				  "wards": [
					{
					  "value": "Thị trấn Tân Thạnh"
					},
					{
					  "value": "Xã Bắc Hòa"
					},
					{
					  "value": "Xã Hậu Thạnh Tây"
					},
					{
					  "value": "Xã Nhơn Hòa Lập"
					},
					{
					  "value": "Xã Tân Lập"
					},
					{
					  "value": "Xã Hậu Thạnh Đông"
					},
					{
					  "value": "Xã Nhơn Hoà"
					},
					{
					  "value": "Xã Kiến Bình"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Tân Ninh"
					},
					{
					  "value": "Xã Nhơn Ninh"
					},
					{
					  "value": "Xã Tân Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Thạnh Hóa",
				  "code": 800,
				  "wards": [
					{
					  "value": "Thị trấn Thạnh Hóa"
					},
					{
					  "value": "Xã Tân Hiệp"
					},
					{
					  "value": "Xã Thuận Bình"
					},
					{
					  "value": "Xã Thạnh Phước"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Thuận Nghĩa Hòa"
					},
					{
					  "value": "Xã Thủy Đông"
					},
					{
					  "value": "Xã Thủy Tây"
					},
					{
					  "value": "Xã Tân Tây"
					},
					{
					  "value": "Xã Tân Đông"
					},
					{
					  "value": "Xã Thạnh An"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Huệ",
				  "code": 801,
				  "wards": [
					{
					  "value": "Thị trấn Đông Thành"
					},
					{
					  "value": "Xã Mỹ Quý Đông"
					},
					{
					  "value": "Xã Mỹ Thạnh Bắc"
					},
					{
					  "value": "Xã Mỹ Quý Tây"
					},
					{
					  "value": "Xã Mỹ Thạnh Tây"
					},
					{
					  "value": "Xã Mỹ Thạnh Đông"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Bình Hòa Bắc"
					},
					{
					  "value": "Xã Bình Hòa Hưng"
					},
					{
					  "value": "Xã Bình Hòa Nam"
					},
					{
					  "value": "Xã Mỹ Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Đức Hòa",
				  "code": 802,
				  "wards": [
					{
					  "value": "Thị trấn Hậu Nghĩa"
					},
					{
					  "value": "Thị trấn Hiệp Hòa"
					},
					{
					  "value": "Thị trấn Đức Hòa"
					},
					{
					  "value": "Xã Lộc Giang"
					},
					{
					  "value": "Xã An Ninh Đông"
					},
					{
					  "value": "Xã An Ninh Tây"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Xã Đức Lập Thượng"
					},
					{
					  "value": "Xã Đức Lập Hạ"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Mỹ Hạnh Bắc"
					},
					{
					  "value": "Xã Đức Hòa Thượng"
					},
					{
					  "value": "Xã Hòa Khánh Tây"
					},
					{
					  "value": "Xã Hòa Khánh Đông"
					},
					{
					  "value": "Xã Mỹ Hạnh Nam"
					},
					{
					  "value": "Xã Hòa Khánh Nam"
					},
					{
					  "value": "Xã Đức Hòa Đông"
					},
					{
					  "value": "Xã Đức Hòa Hạ"
					},
					{
					  "value": "Xã Hựu Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Bến Lức",
				  "code": 803,
				  "wards": [
					{
					  "value": "Thị trấn Bến Lức"
					},
					{
					  "value": "Xã Thạnh Lợi"
					},
					{
					  "value": "Xã Lương Bình"
					},
					{
					  "value": "Xã Thạnh Hòa"
					},
					{
					  "value": "Xã Lương Hòa"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Tân Bửu"
					},
					{
					  "value": "Xã An Thạnh"
					},
					{
					  "value": "Xã Bình Đức"
					},
					{
					  "value": "Xã Mỹ Yên"
					},
					{
					  "value": "Xã Thanh Phú"
					},
					{
					  "value": "Xã Long Hiệp"
					},
					{
					  "value": "Xã Thạnh Đức"
					},
					{
					  "value": "Xã Phước Lợi"
					},
					{
					  "value": "Xã Nhựt Chánh"
					}
				  ]
				},
				{
				  "value": "Huyện Thủ Thừa",
				  "code": 804,
				  "wards": [
					{
					  "value": "Thị trấn Thủ Thừa"
					},
					{
					  "value": "Xã Long Thạnh"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Long Thuận"
					},
					{
					  "value": "Xã Mỹ Lạc"
					},
					{
					  "value": "Xã Mỹ Thạnh"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Nhị Thành"
					},
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã Mỹ Phú"
					},
					{
					  "value": "Xã Tân Long"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Trụ",
				  "code": 805,
				  "wards": [
					{
					  "value": "Thị trấn Tân Trụ"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Quê Mỹ Thạnh"
					},
					{
					  "value": "Xã Lạc Tấn"
					},
					{
					  "value": "Xã Bình Trinh Đông"
					},
					{
					  "value": "Xã Tân Phước Tây"
					},
					{
					  "value": "Xã Bình Lãng"
					},
					{
					  "value": "Xã Bình Tịnh"
					},
					{
					  "value": "Xã Đức Tân"
					},
					{
					  "value": "Xã Nhựt Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Cần Đước",
				  "code": 806,
				  "wards": [
					{
					  "value": "Thị trấn Cần Đước"
					},
					{
					  "value": "Xã Long Trạch"
					},
					{
					  "value": "Xã Long Khê"
					},
					{
					  "value": "Xã Long Định"
					},
					{
					  "value": "Xã Phước Vân"
					},
					{
					  "value": "Xã Long Hòa"
					},
					{
					  "value": "Xã Long Cang"
					},
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Tân Trạch"
					},
					{
					  "value": "Xã Mỹ Lệ"
					},
					{
					  "value": "Xã Tân Lân"
					},
					{
					  "value": "Xã Phước Tuy"
					},
					{
					  "value": "Xã Long Hựu Đông"
					},
					{
					  "value": "Xã Tân Ân"
					},
					{
					  "value": "Xã Phước Đông"
					},
					{
					  "value": "Xã Long Hựu Tây"
					},
					{
					  "value": "Xã Tân Chánh"
					}
				  ]
				},
				{
				  "value": "Huyện Cần Giuộc",
				  "code": 807,
				  "wards": [
					{
					  "value": "Thị trấn Cần Giuộc"
					},
					{
					  "value": "Xã Phước Lý"
					},
					{
					  "value": "Xã Long Thượng"
					},
					{
					  "value": "Xã Long Hậu"
					},
					{
					  "value": "Xã Phước Hậu"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Phước Lại"
					},
					{
					  "value": "Xã Phước Lâm"
					},
					{
					  "value": "Xã Thuận Thành"
					},
					{
					  "value": "Xã Phước Vĩnh Tây"
					},
					{
					  "value": "Xã Phước Vĩnh Đông"
					},
					{
					  "value": "Xã Long An"
					},
					{
					  "value": "Xã Long Phụng"
					},
					{
					  "value": "Xã Đông Thạnh"
					},
					{
					  "value": "Xã Tân Tập"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 808,
				  "wards": [
					{
					  "value": "Thị trấn Tầm Vu"
					},
					{
					  "value": "Xã Bình Quới"
					},
					{
					  "value": "Xã Hòa Phú"
					},
					{
					  "value": "Xã Phú Ngãi Trị"
					},
					{
					  "value": "Xã Vĩnh Công"
					},
					{
					  "value": "Xã Thuận Mỹ"
					},
					{
					  "value": "Xã Hiệp Thạnh"
					},
					{
					  "value": "Xã Phước Tân Hưng"
					},
					{
					  "value": "Xã Thanh Phú Long"
					},
					{
					  "value": "Xã Dương Xuân Hội"
					},
					{
					  "value": "Xã An Lục Long"
					},
					{
					  "value": "Xã Long Trì"
					},
					{
					  "value": "Xã Thanh Vĩnh Đông"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Tiền Giang",
			  "code": 82,
			  "districts": [
				{
				  "value": "Thành phố Mỹ Tho",
				  "code": 815,
				  "wards": [
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 10"
					},
					{
					  "value": "Phường Tân Long"
					},
					{
					  "value": "Xã Đạo Thạnh"
					},
					{
					  "value": "Xã Trung An"
					},
					{
					  "value": "Xã Mỹ Phong"
					},
					{
					  "value": "Xã Tân Mỹ Chánh"
					},
					{
					  "value": "Xã Phước Thạnh"
					},
					{
					  "value": "Xã Thới Sơn"
					}
				  ]
				},
				{
				  "value": "Thị xã Gò Công",
				  "code": 816,
				  "wards": [
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Xã Long Hưng"
					},
					{
					  "value": "Xã Long Thuận"
					},
					{
					  "value": "Xã Long Chánh"
					},
					{
					  "value": "Xã Long Hòa"
					},
					{
					  "value": "Xã Bình Đông"
					},
					{
					  "value": "Xã Bình Xuân"
					},
					{
					  "value": "Xã Tân Trung"
					}
				  ]
				},
				{
				  "value": "Thị xã Cai Lậy",
				  "code": 817,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Xã Mỹ Phước Tây"
					},
					{
					  "value": "Xã Mỹ Hạnh Đông"
					},
					{
					  "value": "Xã Mỹ Hạnh Trung"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Phường Nhị Mỹ"
					},
					{
					  "value": "Xã Nhị Quý"
					},
					{
					  "value": "Xã Thanh Hòa"
					},
					{
					  "value": "Xã Phú Quý"
					},
					{
					  "value": "Xã Long Khánh"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Phước",
				  "code": 818,
				  "wards": [
					{
					  "value": "Thị trấn Mỹ Phước"
					},
					{
					  "value": "Xã Tân Hòa Đông"
					},
					{
					  "value": "Xã Thạnh Tân"
					},
					{
					  "value": "Xã Thạnh Mỹ"
					},
					{
					  "value": "Xã Thạnh Hoà"
					},
					{
					  "value": "Xã Phú Mỹ"
					},
					{
					  "value": "Xã Tân Hòa Thành"
					},
					{
					  "value": "Xã Hưng Thạnh"
					},
					{
					  "value": "Xã Tân Lập 1"
					},
					{
					  "value": "Xã Tân Hòa Tây"
					},
					{
					  "value": "Xã Tân Lập 2"
					},
					{
					  "value": "Xã Phước Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Cái Bè",
				  "code": 819,
				  "wards": [
					{
					  "value": "Thị trấn Cái Bè"
					},
					{
					  "value": "Xã Hậu Mỹ Bắc B"
					},
					{
					  "value": "Xã Hậu Mỹ Bắc A"
					},
					{
					  "value": "Xã Mỹ Trung"
					},
					{
					  "value": "Xã Hậu Mỹ Trinh"
					},
					{
					  "value": "Xã Hậu Mỹ Phú"
					},
					{
					  "value": "Xã Mỹ Tân"
					},
					{
					  "value": "Xã Mỹ Lợi B"
					},
					{
					  "value": "Xã Thiện Trung"
					},
					{
					  "value": "Xã Mỹ Hội"
					},
					{
					  "value": "Xã An Cư"
					},
					{
					  "value": "Xã Hậu Thành"
					},
					{
					  "value": "Xã Mỹ Lợi A"
					},
					{
					  "value": "Xã Hòa Khánh"
					},
					{
					  "value": "Xã Thiện Trí"
					},
					{
					  "value": "Xã Mỹ Đức Đông"
					},
					{
					  "value": "Xã Mỹ Đức Tây"
					},
					{
					  "value": "Xã Đông Hòa Hiệp"
					},
					{
					  "value": "Xã An Thái Đông"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Mỹ Lương"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã An Thái Trung"
					},
					{
					  "value": "Xã An Hữu"
					},
					{
					  "value": "Xã Hòa Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Cai Lậy",
				  "code": 820,
				  "wards": [
					{
					  "value": "Xã Thạnh Lộc"
					},
					{
					  "value": "Xã Mỹ Thành Bắc"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Mỹ Thành Nam"
					},
					{
					  "value": "Xã Phú Nhuận"
					},
					{
					  "value": "Thị trấn Bình Phú"
					},
					{
					  "value": "Xã Cẩm Sơn"
					},
					{
					  "value": "Xã Phú An"
					},
					{
					  "value": "Xã Mỹ Long"
					},
					{
					  "value": "Xã Long Tiên"
					},
					{
					  "value": "Xã Hiệp Đức"
					},
					{
					  "value": "Xã Long Trung"
					},
					{
					  "value": "Xã Hội Xuân"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Tam Bình"
					},
					{
					  "value": "Xã Ngũ Hiệp"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 821,
				  "wards": [
					{
					  "value": "Thị trấn Tân Hiệp"
					},
					{
					  "value": "Xã Tân Hội Đông"
					},
					{
					  "value": "Xã Tân Hương"
					},
					{
					  "value": "Xã Tân Lý Đông"
					},
					{
					  "value": "Xã Tân Lý Tây"
					},
					{
					  "value": "Xã Thân Cửu Nghĩa"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Điềm Hy"
					},
					{
					  "value": "Xã Nhị Bình"
					},
					{
					  "value": "Xã Dưỡng Điềm"
					},
					{
					  "value": "Xã Đông Hòa"
					},
					{
					  "value": "Xã Long Định"
					},
					{
					  "value": "Xã Hữu Đạo"
					},
					{
					  "value": "Xã Long An"
					},
					{
					  "value": "Xã Long Hưng"
					},
					{
					  "value": "Xã Bình Trưng"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Bàn Long"
					},
					{
					  "value": "Xã Vĩnh Kim"
					},
					{
					  "value": "Xã Bình Đức"
					},
					{
					  "value": "Xã Song Thuận"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Xã Phú Phong"
					}
				  ]
				},
				{
				  "value": "Huyện Chợ Gạo",
				  "code": 822,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Gạo"
					},
					{
					  "value": "Xã Trung Hòa"
					},
					{
					  "value": "Xã Hòa Tịnh"
					},
					{
					  "value": "Xã Mỹ Tịnh An"
					},
					{
					  "value": "Xã Tân Bình Thạnh"
					},
					{
					  "value": "Xã Phú Kiết"
					},
					{
					  "value": "Xã Lương Hòa Lạc"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Xã Quơn Long"
					},
					{
					  "value": "Xã Bình Phục Nhứt"
					},
					{
					  "value": "Xã Đăng Hưng Phước"
					},
					{
					  "value": "Xã Tân Thuận Bình"
					},
					{
					  "value": "Xã Song Bình"
					},
					{
					  "value": "Xã Bình Phan"
					},
					{
					  "value": "Xã Long Bình Điền"
					},
					{
					  "value": "Xã An Thạnh Thủy"
					},
					{
					  "value": "Xã Xuân Đông"
					},
					{
					  "value": "Xã Hòa Định"
					},
					{
					  "value": "Xã Bình Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Gò Công Tây",
				  "code": 823,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Bình"
					},
					{
					  "value": "Xã Đồng Sơn"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Đồng Thạnh"
					},
					{
					  "value": "Xã Thành Công"
					},
					{
					  "value": "Xã Bình Nhì"
					},
					{
					  "value": "Xã Yên Luông"
					},
					{
					  "value": "Xã Thạnh Trị"
					},
					{
					  "value": "Xã Thạnh Nhựt"
					},
					{
					  "value": "Xã Long Vĩnh"
					},
					{
					  "value": "Xã Bình Tân"
					},
					{
					  "value": "Xã Vĩnh Hựu"
					},
					{
					  "value": "Xã Long Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Gò Công Đông",
				  "code": 824,
				  "wards": [
					{
					  "value": "Thị trấn Tân Hòa"
					},
					{
					  "value": "Xã Tăng Hoà"
					},
					{
					  "value": "Xã Tân Phước"
					},
					{
					  "value": "Xã Gia Thuận"
					},
					{
					  "value": "Thị trấn Vàm Láng"
					},
					{
					  "value": "Xã Tân Tây"
					},
					{
					  "value": "Xã Kiểng Phước"
					},
					{
					  "value": "Xã Tân Đông"
					},
					{
					  "value": "Xã Bình Ân"
					},
					{
					  "value": "Xã Tân Điền"
					},
					{
					  "value": "Xã Bình Nghị"
					},
					{
					  "value": "Xã Phước Trung"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Phú Đông",
				  "code": 825,
				  "wards": [
					{
					  "value": "Xã Tân Thới"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Phú Thạnh"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Phú Đông"
					},
					{
					  "value": "Xã Phú Tân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bến Tre",
			  "code": 83,
			  "districts": [
				{
				  "value": "Thành phố Bến Tre",
				  "code": 829,
				  "wards": [
					{
					  "value": "Phường Phú Khương"
					},
					{
					  "value": "Phường Phú Tân"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường An Hội"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Xã Sơn Đông"
					},
					{
					  "value": "Xã Phú Hưng"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Mỹ Thạnh An"
					},
					{
					  "value": "Xã Nhơn Thạnh"
					},
					{
					  "value": "Xã Phú Nhuận"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 831,
				  "wards": [
					{
					  "value": "Thị trấn Châu Thành"
					},
					{
					  "value": "Xã Tân Thạch"
					},
					{
					  "value": "Xã Qưới Sơn"
					},
					{
					  "value": "Xã An Khánh"
					},
					{
					  "value": "Xã Giao Long"
					},
					{
					  "value": "Xã Phú Túc"
					},
					{
					  "value": "Xã Phú Đức"
					},
					{
					  "value": "Xã Phú An Hòa"
					},
					{
					  "value": "Xã An Phước"
					},
					{
					  "value": "Xã Tam Phước"
					},
					{
					  "value": "Xã Thành Triệu"
					},
					{
					  "value": "Xã Tường Đa"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Quới Thành"
					},
					{
					  "value": "Xã Phước Thạnh"
					},
					{
					  "value": "Xã An Hóa"
					},
					{
					  "value": "Xã Tiên Long"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã Hữu Định"
					},
					{
					  "value": "Thị trấn Tiên Thủy"
					},
					{
					  "value": "Xã Sơn Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Chợ Lách",
				  "code": 832,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Lách"
					},
					{
					  "value": "Xã Phú Phụng"
					},
					{
					  "value": "Xã Sơn Định"
					},
					{
					  "value": "Xã Vĩnh Bình"
					},
					{
					  "value": "Xã Hòa Nghĩa"
					},
					{
					  "value": "Xã Long Thới"
					},
					{
					  "value": "Xã Phú Sơn"
					},
					{
					  "value": "Xã Tân Thiềng"
					},
					{
					  "value": "Xã Vĩnh Thành"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Hưng Khánh Trung B"
					}
				  ]
				},
				{
				  "value": "Huyện Mỏ Cày Nam",
				  "code": 833,
				  "wards": [
					{
					  "value": "Thị trấn Mỏ Cày"
					},
					{
					  "value": "Xã Định Thủy"
					},
					{
					  "value": "Xã Đa Phước Hội"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Xã Phước Hiệp"
					},
					{
					  "value": "Xã Bình Khánh"
					},
					{
					  "value": "Xã An Thạnh"
					},
					{
					  "value": "Xã An Định"
					},
					{
					  "value": "Xã Thành Thới B"
					},
					{
					  "value": "Xã Tân Trung"
					},
					{
					  "value": "Xã An Thới"
					},
					{
					  "value": "Xã Thành Thới A"
					},
					{
					  "value": "Xã Minh Đức"
					},
					{
					  "value": "Xã Ngãi Đăng"
					},
					{
					  "value": "Xã Cẩm Sơn"
					},
					{
					  "value": "Xã Hương Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Giồng Trôm",
				  "code": 834,
				  "wards": [
					{
					  "value": "Thị trấn Giồng Trôm"
					},
					{
					  "value": "Xã Phong Nẫm"
					},
					{
					  "value": "Xã Mỹ Thạnh"
					},
					{
					  "value": "Xã Châu Hòa"
					},
					{
					  "value": "Xã Lương Hòa"
					},
					{
					  "value": "Xã Lương Quới"
					},
					{
					  "value": "Xã Lương Phú"
					},
					{
					  "value": "Xã Châu Bình"
					},
					{
					  "value": "Xã Thuận Điền"
					},
					{
					  "value": "Xã Sơn Phú"
					},
					{
					  "value": "Xã Bình Hoà"
					},
					{
					  "value": "Xã Phước Long"
					},
					{
					  "value": "Xã Hưng Phong"
					},
					{
					  "value": "Xã Long Mỹ"
					},
					{
					  "value": "Xã Tân Hào"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Tân Thanh"
					},
					{
					  "value": "Xã Tân Lợi Thạnh"
					},
					{
					  "value": "Xã Thạnh Phú Đông"
					},
					{
					  "value": "Xã Hưng Nhượng"
					},
					{
					  "value": "Xã Hưng Lễ"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Đại",
				  "code": 835,
				  "wards": [
					{
					  "value": "Thị trấn Bình Đại"
					},
					{
					  "value": "Xã Tam Hiệp"
					},
					{
					  "value": "Xã Long Định"
					},
					{
					  "value": "Xã Long Hòa"
					},
					{
					  "value": "Xã Phú Thuận"
					},
					{
					  "value": "Xã Vang Quới Tây"
					},
					{
					  "value": "Xã Vang Quới Đông"
					},
					{
					  "value": "Xã Châu Hưng"
					},
					{
					  "value": "Xã Phú Vang"
					},
					{
					  "value": "Xã Lộc Thuận"
					},
					{
					  "value": "Xã Định Trung"
					},
					{
					  "value": "Xã Thới Lai"
					},
					{
					  "value": "Xã Bình Thới"
					},
					{
					  "value": "Xã Phú Long"
					},
					{
					  "value": "Xã Bình Thắng"
					},
					{
					  "value": "Xã Thạnh Trị"
					},
					{
					  "value": "Xã Đại Hòa Lộc"
					},
					{
					  "value": "Xã Thừa Đức"
					},
					{
					  "value": "Xã Thạnh Phước"
					},
					{
					  "value": "Xã Thới Thuận"
					}
				  ]
				},
				{
				  "value": "Huyện Ba Tri",
				  "code": 836,
				  "wards": [
					{
					  "value": "Thị trấn Ba Tri"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Tân Xuân"
					},
					{
					  "value": "Xã Mỹ Chánh"
					},
					{
					  "value": "Xã Bảo Thạnh"
					},
					{
					  "value": "Xã An Phú Trung"
					},
					{
					  "value": "Xã Mỹ Thạnh"
					},
					{
					  "value": "Xã Mỹ Nhơn"
					},
					{
					  "value": "Xã Phước Ngãi"
					},
					{
					  "value": "Xã An Ngãi Trung"
					},
					{
					  "value": "Xã Phú Lễ"
					},
					{
					  "value": "Xã An Bình Tây"
					},
					{
					  "value": "Xã Bảo Thuận"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã An Ngãi Tây"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Tân Thủy"
					},
					{
					  "value": "Xã Vĩnh An"
					},
					{
					  "value": "Xã An Đức"
					},
					{
					  "value": "Xã An Hòa Tây"
					},
					{
					  "value": "Thị trấn Tiệm Tôm"
					}
				  ]
				},
				{
				  "value": "Huyện Thạnh Phú",
				  "code": 837,
				  "wards": [
					{
					  "value": "Thị trấn Thạnh Phú"
					},
					{
					  "value": "Xã Phú Khánh"
					},
					{
					  "value": "Xã Đại Điền"
					},
					{
					  "value": "Xã Quới Điền"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Mỹ Hưng"
					},
					{
					  "value": "Xã An Thạnh"
					},
					{
					  "value": "Xã Thới Thạnh"
					},
					{
					  "value": "Xã Hòa Lợi"
					},
					{
					  "value": "Xã An Điền"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã An Thuận"
					},
					{
					  "value": "Xã An Quy"
					},
					{
					  "value": "Xã Thạnh Hải"
					},
					{
					  "value": "Xã An Nhơn"
					},
					{
					  "value": "Xã Giao Thạnh"
					},
					{
					  "value": "Xã Thạnh Phong"
					},
					{
					  "value": "Xã Mỹ An"
					}
				  ]
				},
				{
				  "value": "Huyện Mỏ Cày Bắc",
				  "code": 838,
				  "wards": [
					{
					  "value": "Xã Phú Mỹ"
					},
					{
					  "value": "Xã Hưng Khánh Trung A"
					},
					{
					  "value": "Xã Thanh Tân"
					},
					{
					  "value": "Xã Thạnh Ngãi"
					},
					{
					  "value": "Xã Tân Phú Tây"
					},
					{
					  "value": "Thị trấn Phước Mỹ Trung"
					},
					{
					  "value": "Xã Tân Thành Bình"
					},
					{
					  "value": "Xã Thành An"
					},
					{
					  "value": "Xã Hòa Lộc"
					},
					{
					  "value": "Xã Tân Thanh Tây"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Nhuận Phú Tân"
					},
					{
					  "value": "Xã Khánh Thạnh Tân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Trà Vinh",
			  "code": 84,
			  "districts": [
				{
				  "value": "Thành phố Trà Vinh",
				  "code": 842,
				  "wards": [
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Xã Long Đức"
					}
				  ]
				},
				{
				  "value": "Huyện Càng Long",
				  "code": 844,
				  "wards": [
					{
					  "value": "Thị trấn Càng Long"
					},
					{
					  "value": "Xã Mỹ Cẩm"
					},
					{
					  "value": "Xã An Trường A"
					},
					{
					  "value": "Xã An Trường"
					},
					{
					  "value": "Xã Huyền Hội"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Phương Thạnh"
					},
					{
					  "value": "Xã Đại Phúc"
					},
					{
					  "value": "Xã Đại Phước"
					},
					{
					  "value": "Xã Nhị Long Phú"
					},
					{
					  "value": "Xã Nhị Long"
					},
					{
					  "value": "Xã Đức Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Cầu Kè",
				  "code": 845,
				  "wards": [
					{
					  "value": "Thị trấn Cầu Kè"
					},
					{
					  "value": "Xã Hòa Ân"
					},
					{
					  "value": "Xã Châu Điền"
					},
					{
					  "value": "Xã An Phú Tân"
					},
					{
					  "value": "Xã Hoà Tân"
					},
					{
					  "value": "Xã Ninh Thới"
					},
					{
					  "value": "Xã Phong Phú"
					},
					{
					  "value": "Xã Phong Thạnh"
					},
					{
					  "value": "Xã Tam Ngãi"
					},
					{
					  "value": "Xã Thông Hòa"
					},
					{
					  "value": "Xã Thạnh Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Tiểu Cần",
				  "code": 846,
				  "wards": [
					{
					  "value": "Thị trấn Tiểu Cần"
					},
					{
					  "value": "Thị trấn Cầu Quan"
					},
					{
					  "value": "Xã Phú Cần"
					},
					{
					  "value": "Xã Hiếu Tử"
					},
					{
					  "value": "Xã Hiếu Trung"
					},
					{
					  "value": "Xã Long Thới"
					},
					{
					  "value": "Xã Hùng Hòa"
					},
					{
					  "value": "Xã Tân Hùng"
					},
					{
					  "value": "Xã Tập Ngãi"
					},
					{
					  "value": "Xã Ngãi Hùng"
					},
					{
					  "value": "Xã Tân Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 847,
				  "wards": [
					{
					  "value": "Thị trấn Châu Thành"
					},
					{
					  "value": "Xã Đa Lộc"
					},
					{
					  "value": "Xã Mỹ Chánh"
					},
					{
					  "value": "Xã Thanh Mỹ"
					},
					{
					  "value": "Xã Lương Hoà A"
					},
					{
					  "value": "Xã Lương Hòa"
					},
					{
					  "value": "Xã Song Lộc"
					},
					{
					  "value": "Xã Nguyệt Hóa"
					},
					{
					  "value": "Xã Hòa Thuận"
					},
					{
					  "value": "Xã Hòa Lợi"
					},
					{
					  "value": "Xã Phước Hảo"
					},
					{
					  "value": "Xã Hưng Mỹ"
					},
					{
					  "value": "Xã Hòa Minh"
					},
					{
					  "value": "Xã Long Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Cầu Ngang",
				  "code": 848,
				  "wards": [
					{
					  "value": "Thị trấn Cầu Ngang"
					},
					{
					  "value": "Thị trấn Mỹ Long"
					},
					{
					  "value": "Xã Mỹ Long Bắc"
					},
					{
					  "value": "Xã Mỹ Long Nam"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Vĩnh Kim"
					},
					{
					  "value": "Xã Kim Hòa"
					},
					{
					  "value": "Xã Hiệp Hòa"
					},
					{
					  "value": "Xã Thuận Hòa"
					},
					{
					  "value": "Xã Long Sơn"
					},
					{
					  "value": "Xã Nhị Trường"
					},
					{
					  "value": "Xã Trường Thọ"
					},
					{
					  "value": "Xã Hiệp Mỹ Đông"
					},
					{
					  "value": "Xã Hiệp Mỹ Tây"
					},
					{
					  "value": "Xã Thạnh Hòa Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Trà Cú",
				  "code": 849,
				  "wards": [
					{
					  "value": "Thị trấn Trà Cú"
					},
					{
					  "value": "Thị trấn Định An"
					},
					{
					  "value": "Xã Phước Hưng"
					},
					{
					  "value": "Xã Tập Sơn"
					},
					{
					  "value": "Xã Tân Sơn"
					},
					{
					  "value": "Xã An Quảng Hữu"
					},
					{
					  "value": "Xã Lưu Nghiệp Anh"
					},
					{
					  "value": "Xã Ngãi Xuyên"
					},
					{
					  "value": "Xã Kim Sơn"
					},
					{
					  "value": "Xã Thanh Sơn"
					},
					{
					  "value": "Xã Hàm Giang"
					},
					{
					  "value": "Xã Hàm Tân"
					},
					{
					  "value": "Xã Đại An"
					},
					{
					  "value": "Xã Định An"
					},
					{
					  "value": "Xã Ngọc Biên"
					},
					{
					  "value": "Xã Long Hiệp"
					},
					{
					  "value": "Xã Tân Hiệp"
					}
				  ]
				},
				{
				  "value": "Huyện Duyên Hải",
				  "code": 850,
				  "wards": [
					{
					  "value": "Xã Đôn Xuân"
					},
					{
					  "value": "Xã Đôn Châu"
					},
					{
					  "value": "Thị trấn Long Thành"
					},
					{
					  "value": "Xã Long Khánh"
					},
					{
					  "value": "Xã Ngũ Lạc"
					},
					{
					  "value": "Xã Long Vĩnh"
					},
					{
					  "value": "Xã Đông Hải"
					}
				  ]
				},
				{
				  "value": "Thị xã Duyên Hải",
				  "code": 851,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Xã Long Toàn"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Xã Long Hữu"
					},
					{
					  "value": "Xã Dân Thành"
					},
					{
					  "value": "Xã Trường Long Hòa"
					},
					{
					  "value": "Xã Hiệp Thạnh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Vĩnh Long",
			  "code": 86,
			  "districts": [
				{
				  "value": "Thành phố Vĩnh Long",
				  "code": 855,
				  "wards": [
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường Tân Ngãi"
					},
					{
					  "value": "Phường Tân Hòa"
					},
					{
					  "value": "Phường Tân Hội"
					},
					{
					  "value": "Phường Trường An"
					}
				  ]
				},
				{
				  "value": "Huyện Long Hồ",
				  "code": 857,
				  "wards": [
					{
					  "value": "Thị trấn Long Hồ"
					},
					{
					  "value": "Xã Đồng Phú"
					},
					{
					  "value": "Xã Bình Hòa Phước"
					},
					{
					  "value": "Xã Hòa Ninh"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Thanh Đức"
					},
					{
					  "value": "Xã Tân Hạnh"
					},
					{
					  "value": "Xã Phước Hậu"
					},
					{
					  "value": "Xã Long Phước"
					},
					{
					  "value": "Xã Phú Đức"
					},
					{
					  "value": "Xã Lộc Hòa"
					},
					{
					  "value": "Xã Long An"
					},
					{
					  "value": "Xã Phú Quới"
					},
					{
					  "value": "Xã Thạnh Quới"
					},
					{
					  "value": "Xã Hòa Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Mang Thít",
				  "code": 858,
				  "wards": [
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Mỹ Phước"
					},
					{
					  "value": "Xã An Phước"
					},
					{
					  "value": "Xã Nhơn Phú"
					},
					{
					  "value": "Xã Long Mỹ"
					},
					{
					  "value": "Xã Hòa Tịnh"
					},
					{
					  "value": "Thị trấn Cái Nhum"
					},
					{
					  "value": "Xã Bình Phước"
					},
					{
					  "value": "Xã Chánh An"
					},
					{
					  "value": "Xã Tân An Hội"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Tân Long Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Vũng Liêm",
				  "code": 859,
				  "wards": [
					{
					  "value": "Thị trấn Vũng Liêm"
					},
					{
					  "value": "Xã Tân Quới Trung"
					},
					{
					  "value": "Xã Quới Thiện"
					},
					{
					  "value": "Xã Quới An"
					},
					{
					  "value": "Xã Trung Chánh"
					},
					{
					  "value": "Xã Tân An Luông"
					},
					{
					  "value": "Xã Thanh Bình"
					},
					{
					  "value": "Xã Trung Thành Tây"
					},
					{
					  "value": "Xã Trung Hiệp"
					},
					{
					  "value": "Xã Hiếu Phụng"
					},
					{
					  "value": "Xã Trung Thành Đông"
					},
					{
					  "value": "Xã Trung Thành"
					},
					{
					  "value": "Xã Trung Hiếu"
					},
					{
					  "value": "Xã Trung Ngãi"
					},
					{
					  "value": "Xã Hiếu Thuận"
					},
					{
					  "value": "Xã Trung Nghĩa"
					},
					{
					  "value": "Xã Trung An"
					},
					{
					  "value": "Xã Hiếu Nhơn"
					},
					{
					  "value": "Xã Hiếu Thành"
					},
					{
					  "value": "Xã Hiếu Nghĩa"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Bình",
				  "code": 860,
				  "wards": [
					{
					  "value": "Thị trấn Tam Bình"
					},
					{
					  "value": "Xã Tân Lộc"
					},
					{
					  "value": "Xã Phú Thịnh"
					},
					{
					  "value": "Xã Hậu Lộc"
					},
					{
					  "value": "Xã Hòa Thạnh"
					},
					{
					  "value": "Xã Hoà Lộc"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Song Phú"
					},
					{
					  "value": "Xã Hòa Hiệp"
					},
					{
					  "value": "Xã Mỹ Lộc"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Long Phú"
					},
					{
					  "value": "Xã Mỹ Thạnh Trung"
					},
					{
					  "value": "Xã Tường Lộc"
					},
					{
					  "value": "Xã Loan Mỹ"
					},
					{
					  "value": "Xã Ngãi Tứ"
					},
					{
					  "value": "Xã Bình Ninh"
					}
				  ]
				},
				{
				  "value": "Thị xã Bình Minh",
				  "code": 861,
				  "wards": [
					{
					  "value": "Phường Cái Vồn"
					},
					{
					  "value": "Phường Thành Phước"
					},
					{
					  "value": "Xã Thuận An"
					},
					{
					  "value": "Xã Đông Thạnh"
					},
					{
					  "value": "Xã Đông Bình"
					},
					{
					  "value": "Phường Đông Thuận"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Đông Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Trà Ôn",
				  "code": 862,
				  "wards": [
					{
					  "value": "Thị trấn Trà Ôn"
					},
					{
					  "value": "Xã Xuân Hiệp"
					},
					{
					  "value": "Xã Nhơn Bình"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Thới Hòa"
					},
					{
					  "value": "Xã Trà Côn"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Hựu Thành"
					},
					{
					  "value": "Xã Vĩnh Xuân"
					},
					{
					  "value": "Xã Thuận Thới"
					},
					{
					  "value": "Xã Phú Thành"
					},
					{
					  "value": "Xã Thiện Mỹ"
					},
					{
					  "value": "Xã Lục Sỹ Thành"
					},
					{
					  "value": "Xã Tích Thiện"
					}
				  ]
				},
				{
				  "value": "Huyện Bình Tân",
				  "code": 863,
				  "wards": [
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Thành Trung"
					},
					{
					  "value": "Xã Tân An Thạnh"
					},
					{
					  "value": "Xã Tân Lược"
					},
					{
					  "value": "Xã Nguyễn Văn Thảnh"
					},
					{
					  "value": "Xã Thành Lợi"
					},
					{
					  "value": "Xã Mỹ Thuận"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Thị trấn Tân Quới"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Đồng Tháp",
			  "code": 87,
			  "districts": [
				{
				  "value": "Thành phố Cao Lãnh",
				  "code": 866,
				  "wards": [
					{
					  "value": "Phường 11"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Xã Mỹ Ngãi"
					},
					{
					  "value": "Xã Mỹ Tân"
					},
					{
					  "value": "Xã Mỹ Trà"
					},
					{
					  "value": "Phường Mỹ Phú"
					},
					{
					  "value": "Xã Tân Thuận Tây"
					},
					{
					  "value": "Phường Hoà Thuận"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Tân Thuận Đông"
					},
					{
					  "value": "Xã Tịnh Thới"
					}
				  ]
				},
				{
				  "value": "Thành phố Sa Đéc",
				  "code": 867,
				  "wards": [
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Xã Tân Khánh Đông"
					},
					{
					  "value": "Phường Tân Quy Đông"
					},
					{
					  "value": "Phường An Hoà"
					},
					{
					  "value": "Xã Tân Quy Tây"
					},
					{
					  "value": "Xã Tân Phú Đông"
					}
				  ]
				},
				{
				  "value": "Thành phố Hồng Ngự",
				  "code": 868,
				  "wards": [
					{
					  "value": "Phường An Lộc"
					},
					{
					  "value": "Phường An Thạnh"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Phường An Lạc"
					},
					{
					  "value": "Phường An Bình B"
					},
					{
					  "value": "Phường An Bình A"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Hồng",
				  "code": 869,
				  "wards": [
					{
					  "value": "Thị trấn Sa Rài"
					},
					{
					  "value": "Xã Tân Hộ Cơ"
					},
					{
					  "value": "Xã Thông Bình"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Tân Thành A"
					},
					{
					  "value": "Xã Tân Thành B"
					},
					{
					  "value": "Xã Tân Phước"
					},
					{
					  "value": "Xã Tân Công Chí"
					},
					{
					  "value": "Xã An Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Hồng Ngự",
				  "code": 870,
				  "wards": [
					{
					  "value": "Xã Thường Phước 1"
					},
					{
					  "value": "Xã Thường Thới Hậu A"
					},
					{
					  "value": "Thị trấn Thường Thới Tiền"
					},
					{
					  "value": "Xã Thường Phước 2"
					},
					{
					  "value": "Xã Thường Lạc"
					},
					{
					  "value": "Xã Long Khánh A"
					},
					{
					  "value": "Xã Long Khánh B"
					},
					{
					  "value": "Xã Long Thuận"
					},
					{
					  "value": "Xã Phú Thuận B"
					},
					{
					  "value": "Xã Phú Thuận A"
					}
				  ]
				},
				{
				  "value": "Huyện Tam Nông",
				  "code": 871,
				  "wards": [
					{
					  "value": "Thị trấn Tràm Chim"
					},
					{
					  "value": "Xã Hoà Bình"
					},
					{
					  "value": "Xã Tân Công Sính"
					},
					{
					  "value": "Xã Phú Hiệp"
					},
					{
					  "value": "Xã Phú Đức"
					},
					{
					  "value": "Xã Phú Thành B"
					},
					{
					  "value": "Xã An Hòa"
					},
					{
					  "value": "Xã An Long"
					},
					{
					  "value": "Xã Phú Cường"
					},
					{
					  "value": "Xã Phú Ninh"
					},
					{
					  "value": "Xã Phú Thọ"
					},
					{
					  "value": "Xã Phú Thành A"
					}
				  ]
				},
				{
				  "value": "Huyện Tháp Mười",
				  "code": 872,
				  "wards": [
					{
					  "value": "Thị trấn Mỹ An"
					},
					{
					  "value": "Xã Thạnh Lợi"
					},
					{
					  "value": "Xã Hưng Thạnh"
					},
					{
					  "value": "Xã Trường Xuân"
					},
					{
					  "value": "Xã Tân Kiều"
					},
					{
					  "value": "Xã Mỹ Hòa"
					},
					{
					  "value": "Xã Mỹ Quý"
					},
					{
					  "value": "Xã Mỹ Đông"
					},
					{
					  "value": "Xã Đốc Binh Kiều"
					},
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Phú Điền"
					},
					{
					  "value": "Xã Láng Biển"
					},
					{
					  "value": "Xã Thanh Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Cao Lãnh",
				  "code": 873,
				  "wards": [
					{
					  "value": "Thị trấn Mỹ Thọ"
					},
					{
					  "value": "Xã Gáo Giồng"
					},
					{
					  "value": "Xã Phương Thịnh"
					},
					{
					  "value": "Xã Ba Sao"
					},
					{
					  "value": "Xã Phong Mỹ"
					},
					{
					  "value": "Xã Tân Nghĩa"
					},
					{
					  "value": "Xã Phương Trà"
					},
					{
					  "value": "Xã Nhị Mỹ"
					},
					{
					  "value": "Xã Mỹ Thọ"
					},
					{
					  "value": "Xã Tân Hội Trung"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Mỹ Hội"
					},
					{
					  "value": "Xã Mỹ Hiệp"
					},
					{
					  "value": "Xã Mỹ Long"
					},
					{
					  "value": "Xã Bình Hàng Trung"
					},
					{
					  "value": "Xã Mỹ Xương"
					},
					{
					  "value": "Xã Bình Hàng Tây"
					},
					{
					  "value": "Xã Bình Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Thanh Bình",
				  "code": 874,
				  "wards": [
					{
					  "value": "Thị trấn Thanh Bình"
					},
					{
					  "value": "Xã Tân Quới"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã An Phong"
					},
					{
					  "value": "Xã Phú Lợi"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Bình Tấn"
					},
					{
					  "value": "Xã Tân Huề"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Tân Long"
					}
				  ]
				},
				{
				  "value": "Huyện Lấp Vò",
				  "code": 875,
				  "wards": [
					{
					  "value": "Thị trấn Lấp Vò"
					},
					{
					  "value": "Xã Mỹ An Hưng A"
					},
					{
					  "value": "Xã Tân Mỹ"
					},
					{
					  "value": "Xã Mỹ An Hưng B"
					},
					{
					  "value": "Xã Tân Khánh Trung"
					},
					{
					  "value": "Xã Long Hưng A"
					},
					{
					  "value": "Xã Vĩnh Thạnh"
					},
					{
					  "value": "Xã Long Hưng B"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Định An"
					},
					{
					  "value": "Xã Định Yên"
					},
					{
					  "value": "Xã Hội An Đông"
					},
					{
					  "value": "Xã Bình Thạnh Trung"
					}
				  ]
				},
				{
				  "value": "Huyện Lai Vung",
				  "code": 876,
				  "wards": [
					{
					  "value": "Thị trấn Lai Vung"
					},
					{
					  "value": "Xã Tân Dương"
					},
					{
					  "value": "Xã Hòa Thành"
					},
					{
					  "value": "Xã Long Hậu"
					},
					{
					  "value": "Xã Tân Phước"
					},
					{
					  "value": "Xã Hòa Long"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Long Thắng"
					},
					{
					  "value": "Xã Vĩnh Thới"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Định Hòa"
					},
					{
					  "value": "Xã Phong Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 877,
				  "wards": [
					{
					  "value": "Thị trấn Cái Tàu Hạ"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã An Nhơn"
					},
					{
					  "value": "Xã Tân Nhuận Đông"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Tân Phú Trung"
					},
					{
					  "value": "Xã Phú Long"
					},
					{
					  "value": "Xã An Phú Thuận"
					},
					{
					  "value": "Xã Phú Hựu"
					},
					{
					  "value": "Xã An Khánh"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Hòa Tân"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh An Giang",
			  "code": 89,
			  "districts": [
				{
				  "value": "Thành phố Long Xuyên",
				  "code": 883,
				  "wards": [
					{
					  "value": "Phường Mỹ Bình"
					},
					{
					  "value": "Phường Mỹ Long"
					},
					{
					  "value": "Phường Đông Xuyên"
					},
					{
					  "value": "Phường Mỹ Xuyên"
					},
					{
					  "value": "Phường Bình Đức"
					},
					{
					  "value": "Phường Bình Khánh"
					},
					{
					  "value": "Phường Mỹ Phước"
					},
					{
					  "value": "Phường Mỹ Quý"
					},
					{
					  "value": "Phường Mỹ Thới"
					},
					{
					  "value": "Phường Mỹ Thạnh"
					},
					{
					  "value": "Phường Mỹ Hòa"
					},
					{
					  "value": "Xã Mỹ Khánh"
					},
					{
					  "value": "Xã Mỹ Hoà Hưng"
					}
				  ]
				},
				{
				  "value": "Thành phố Châu Đốc",
				  "code": 884,
				  "wards": [
					{
					  "value": "Phường Châu Phú B"
					},
					{
					  "value": "Phường Châu Phú A"
					},
					{
					  "value": "Phường Vĩnh Mỹ"
					},
					{
					  "value": "Phường Núi Sam"
					},
					{
					  "value": "Phường Vĩnh Ngươn"
					},
					{
					  "value": "Xã Vĩnh Tế"
					},
					{
					  "value": "Xã Vĩnh Châu"
					}
				  ]
				},
				{
				  "value": "Huyện An Phú",
				  "code": 886,
				  "wards": [
					{
					  "value": "Thị trấn An Phú"
					},
					{
					  "value": "Xã Khánh An"
					},
					{
					  "value": "Thị trấn Long Bình"
					},
					{
					  "value": "Xã Khánh Bình"
					},
					{
					  "value": "Xã Quốc Thái"
					},
					{
					  "value": "Xã Nhơn Hội"
					},
					{
					  "value": "Xã Phú Hữu"
					},
					{
					  "value": "Xã Phú Hội"
					},
					{
					  "value": "Xã Phước Hưng"
					},
					{
					  "value": "Xã Vĩnh Lộc"
					},
					{
					  "value": "Xã Vĩnh Hậu"
					},
					{
					  "value": "Xã Vĩnh Trường"
					},
					{
					  "value": "Xã Vĩnh Hội Đông"
					},
					{
					  "value": "Thị trấn Đa Phước"
					}
				  ]
				},
				{
				  "value": "Thị xã Tân Châu",
				  "code": 887,
				  "wards": [
					{
					  "value": "Phường Long Thạnh"
					},
					{
					  "value": "Phường Long Hưng"
					},
					{
					  "value": "Phường Long Châu"
					},
					{
					  "value": "Xã Phú Lộc"
					},
					{
					  "value": "Xã Vĩnh Xương"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Long An"
					},
					{
					  "value": "Phường Long Phú"
					},
					{
					  "value": "Xã Châu Phong"
					},
					{
					  "value": "Xã Phú Vĩnh"
					},
					{
					  "value": "Xã Lê Chánh"
					},
					{
					  "value": "Phường Long Sơn"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Tân",
				  "code": 888,
				  "wards": [
					{
					  "value": "Thị trấn Phú Mỹ"
					},
					{
					  "value": "Thị trấn Chợ Vàm"
					},
					{
					  "value": "Xã Long Hoà"
					},
					{
					  "value": "Xã Phú Long"
					},
					{
					  "value": "Xã Phú Lâm"
					},
					{
					  "value": "Xã Phú Hiệp"
					},
					{
					  "value": "Xã Phú Thạnh"
					},
					{
					  "value": "Xã Hoà Lạc"
					},
					{
					  "value": "Xã Phú Thành"
					},
					{
					  "value": "Xã Phú An"
					},
					{
					  "value": "Xã Phú Xuân"
					},
					{
					  "value": "Xã Hiệp Xương"
					},
					{
					  "value": "Xã Phú Bình"
					},
					{
					  "value": "Xã Phú Thọ"
					},
					{
					  "value": "Xã Phú Hưng"
					},
					{
					  "value": "Xã Bình Thạnh Đông"
					},
					{
					  "value": "Xã Tân Hòa"
					},
					{
					  "value": "Xã Tân Trung"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Phú",
				  "code": 889,
				  "wards": [
					{
					  "value": "Thị trấn Cái Dầu"
					},
					{
					  "value": "Xã Khánh Hòa"
					},
					{
					  "value": "Xã Mỹ Đức"
					},
					{
					  "value": "Xã Mỹ Phú"
					},
					{
					  "value": "Xã Ô Long Vỹ"
					},
					{
					  "value": "Thị trấn Vĩnh Thạnh Trung"
					},
					{
					  "value": "Xã Thạnh Mỹ Tây"
					},
					{
					  "value": "Xã Bình Long"
					},
					{
					  "value": "Xã Bình Mỹ"
					},
					{
					  "value": "Xã Bình Thủy"
					},
					{
					  "value": "Xã Đào Hữu Cảnh"
					},
					{
					  "value": "Xã Bình Phú"
					},
					{
					  "value": "Xã Bình Chánh"
					}
				  ]
				},
				{
				  "value": "Thị xã Tịnh Biên",
				  "code": 890,
				  "wards": [
					{
					  "value": "Phường Nhà Bàng"
					},
					{
					  "value": "Phường Chi Lăng"
					},
					{
					  "value": "Phường Núi Voi"
					},
					{
					  "value": "Phường Nhơn Hưng"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Phường Thới Sơn"
					},
					{
					  "value": "Phường Tịnh Biên"
					},
					{
					  "value": "Xã Văn Giáo"
					},
					{
					  "value": "Xã An Cư"
					},
					{
					  "value": "Xã An Nông"
					},
					{
					  "value": "Xã Vĩnh Trung"
					},
					{
					  "value": "Xã Tân Lợi"
					},
					{
					  "value": "Xã An Hảo"
					},
					{
					  "value": "Xã Tân Lập"
					}
				  ]
				},
				{
				  "value": "Huyện Tri Tôn",
				  "code": 891,
				  "wards": [
					{
					  "value": "Thị trấn Tri Tôn"
					},
					{
					  "value": "Thị trấn Ba Chúc"
					},
					{
					  "value": "Xã Lạc Quới"
					},
					{
					  "value": "Xã Lê Trì"
					},
					{
					  "value": "Xã Vĩnh Gia"
					},
					{
					  "value": "Xã Vĩnh Phước"
					},
					{
					  "value": "Xã Châu Lăng"
					},
					{
					  "value": "Xã Lương Phi"
					},
					{
					  "value": "Xã Lương An Trà"
					},
					{
					  "value": "Xã Tà Đảnh"
					},
					{
					  "value": "Xã Núi Tô"
					},
					{
					  "value": "Xã An Tức"
					},
					{
					  "value": "Thị trấn Cô Tô"
					},
					{
					  "value": "Xã Tân Tuyến"
					},
					{
					  "value": "Xã Ô Lâm"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 892,
				  "wards": [
					{
					  "value": "Thị trấn An Châu"
					},
					{
					  "value": "Xã An Hòa"
					},
					{
					  "value": "Xã Cần Đăng"
					},
					{
					  "value": "Xã Vĩnh Hanh"
					},
					{
					  "value": "Xã Bình Thạnh"
					},
					{
					  "value": "Thị trấn Vĩnh Bình"
					},
					{
					  "value": "Xã Bình Hòa"
					},
					{
					  "value": "Xã Vĩnh An"
					},
					{
					  "value": "Xã Hòa Bình Thạnh"
					},
					{
					  "value": "Xã Vĩnh Lợi"
					},
					{
					  "value": "Xã Vĩnh Nhuận"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Vĩnh Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Chợ Mới",
				  "code": 893,
				  "wards": [
					{
					  "value": "Thị trấn Chợ Mới"
					},
					{
					  "value": "Thị trấn Mỹ Luông"
					},
					{
					  "value": "Xã Kiến An"
					},
					{
					  "value": "Xã Mỹ Hội Đông"
					},
					{
					  "value": "Xã Long Điền A"
					},
					{
					  "value": "Xã Tấn Mỹ"
					},
					{
					  "value": "Xã Long Điền B"
					},
					{
					  "value": "Xã Kiến Thành"
					},
					{
					  "value": "Xã Mỹ Hiệp"
					},
					{
					  "value": "Xã Mỹ An"
					},
					{
					  "value": "Xã Nhơn Mỹ"
					},
					{
					  "value": "Xã Long Giang"
					},
					{
					  "value": "Xã Long Kiến"
					},
					{
					  "value": "Xã Bình Phước Xuân"
					},
					{
					  "value": "Xã An Thạnh Trung"
					},
					{
					  "value": "Thị trấn Hội An"
					},
					{
					  "value": "Xã Hòa Bình"
					},
					{
					  "value": "Xã Hòa An"
					}
				  ]
				},
				{
				  "value": "Huyện Thoại Sơn",
				  "code": 894,
				  "wards": [
					{
					  "value": "Thị trấn Núi Sập"
					},
					{
					  "value": "Thị trấn Phú Hoà"
					},
					{
					  "value": "Thị trấn Óc Eo"
					},
					{
					  "value": "Xã Tây Phú"
					},
					{
					  "value": "Xã An Bình"
					},
					{
					  "value": "Xã Vĩnh Phú"
					},
					{
					  "value": "Xã Vĩnh Trạch"
					},
					{
					  "value": "Xã Phú Thuận"
					},
					{
					  "value": "Xã Vĩnh Chánh"
					},
					{
					  "value": "Xã Định Mỹ"
					},
					{
					  "value": "Xã Định Thành"
					},
					{
					  "value": "Xã Mỹ Phú Đông"
					},
					{
					  "value": "Xã Vọng Đông"
					},
					{
					  "value": "Xã Vĩnh Khánh"
					},
					{
					  "value": "Xã Thoại Giang"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Vọng Thê"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Kiên Giang",
			  "code": 91,
			  "districts": [
				{
				  "value": "Thành phố Rạch Giá",
				  "code": 899,
				  "wards": [
					{
					  "value": "Phường Vĩnh Thanh Vân"
					},
					{
					  "value": "Phường Vĩnh Thanh"
					},
					{
					  "value": "Phường Vĩnh Quang"
					},
					{
					  "value": "Phường Vĩnh Hiệp"
					},
					{
					  "value": "Phường Vĩnh Bảo"
					},
					{
					  "value": "Phường Vĩnh Lạc"
					},
					{
					  "value": "Phường An Hòa"
					},
					{
					  "value": "Phường An Bình"
					},
					{
					  "value": "Phường Rạch Sỏi"
					},
					{
					  "value": "Phường Vĩnh Lợi"
					},
					{
					  "value": "Phường Vĩnh Thông"
					},
					{
					  "value": "Xã Phi Thông"
					}
				  ]
				},
				{
				  "value": "Thành phố Hà Tiên",
				  "code": 900,
				  "wards": [
					{
					  "value": "Phường Tô Châu"
					},
					{
					  "value": "Phường Đông Hồ"
					},
					{
					  "value": "Phường Bình San"
					},
					{
					  "value": "Phường Pháo Đài"
					},
					{
					  "value": "Phường Mỹ Đức"
					},
					{
					  "value": "Xã Tiên Hải"
					},
					{
					  "value": "Xã Thuận Yên"
					}
				  ]
				},
				{
				  "value": "Huyện Kiên Lương",
				  "code": 902,
				  "wards": [
					{
					  "value": "Thị trấn Kiên Lương"
					},
					{
					  "value": "Xã Kiên Bình"
					},
					{
					  "value": "Xã Hòa Điền"
					},
					{
					  "value": "Xã Dương Hòa"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Bình Trị"
					},
					{
					  "value": "Xã Sơn Hải"
					},
					{
					  "value": "Xã Hòn Nghệ"
					}
				  ]
				},
				{
				  "value": "Huyện Hòn Đất",
				  "code": 903,
				  "wards": [
					{
					  "value": "Thị trấn Hòn Đất"
					},
					{
					  "value": "Thị trấn Sóc Sơn"
					},
					{
					  "value": "Xã Bình Sơn"
					},
					{
					  "value": "Xã Bình Giang"
					},
					{
					  "value": "Xã Mỹ Thái"
					},
					{
					  "value": "Xã Nam Thái Sơn"
					},
					{
					  "value": "Xã Mỹ Hiệp Sơn"
					},
					{
					  "value": "Xã Sơn Kiên"
					},
					{
					  "value": "Xã Sơn Bình"
					},
					{
					  "value": "Xã Mỹ Thuận"
					},
					{
					  "value": "Xã Lình Huỳnh"
					},
					{
					  "value": "Xã Thổ Sơn"
					},
					{
					  "value": "Xã Mỹ Lâm"
					},
					{
					  "value": "Xã Mỹ Phước"
					}
				  ]
				},
				{
				  "value": "Huyện Tân Hiệp",
				  "code": 904,
				  "wards": [
					{
					  "value": "Thị trấn Tân Hiệp"
					},
					{
					  "value": "Xã Tân Hội"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tân Hiệp B"
					},
					{
					  "value": "Xã Tân Hoà"
					},
					{
					  "value": "Xã Thạnh Đông B"
					},
					{
					  "value": "Xã Thạnh Đông"
					},
					{
					  "value": "Xã Tân Hiệp A"
					},
					{
					  "value": "Xã Tân An"
					},
					{
					  "value": "Xã Thạnh Đông A"
					},
					{
					  "value": "Xã Thạnh Trị"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 905,
				  "wards": [
					{
					  "value": "Thị trấn Minh Lương"
					},
					{
					  "value": "Xã Mong Thọ A"
					},
					{
					  "value": "Xã Mong Thọ B"
					},
					{
					  "value": "Xã Mong Thọ"
					},
					{
					  "value": "Xã Giục Tượng"
					},
					{
					  "value": "Xã Vĩnh Hòa Hiệp"
					},
					{
					  "value": "Xã Vĩnh Hoà Phú"
					},
					{
					  "value": "Xã Minh Hòa"
					},
					{
					  "value": "Xã Bình An"
					},
					{
					  "value": "Xã Thạnh Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Giồng Riềng",
				  "code": 906,
				  "wards": [
					{
					  "value": "Thị trấn Giồng Riềng"
					},
					{
					  "value": "Xã Thạnh Hưng"
					},
					{
					  "value": "Xã Thạnh Phước"
					},
					{
					  "value": "Xã Thạnh Lộc"
					},
					{
					  "value": "Xã Thạnh Hòa"
					},
					{
					  "value": "Xã Thạnh Bình"
					},
					{
					  "value": "Xã Bàn Thạch"
					},
					{
					  "value": "Xã Bàn Tân Định"
					},
					{
					  "value": "Xã Ngọc Thành"
					},
					{
					  "value": "Xã Ngọc Chúc"
					},
					{
					  "value": "Xã Ngọc Thuận"
					},
					{
					  "value": "Xã Hòa Hưng"
					},
					{
					  "value": "Xã Hoà Lợi"
					},
					{
					  "value": "Xã Hoà An"
					},
					{
					  "value": "Xã Long Thạnh"
					},
					{
					  "value": "Xã Vĩnh Thạnh"
					},
					{
					  "value": "Xã Vĩnh Phú"
					},
					{
					  "value": "Xã Hòa Thuận"
					},
					{
					  "value": "Xã Ngọc Hoà"
					}
				  ]
				},
				{
				  "value": "Huyện Gò Quao",
				  "code": 907,
				  "wards": [
					{
					  "value": "Thị trấn Gò Quao"
					},
					{
					  "value": "Xã Vĩnh Hòa Hưng Bắc"
					},
					{
					  "value": "Xã Định Hòa"
					},
					{
					  "value": "Xã Thới Quản"
					},
					{
					  "value": "Xã Định An"
					},
					{
					  "value": "Xã Thủy Liễu"
					},
					{
					  "value": "Xã Vĩnh Hòa Hưng Nam"
					},
					{
					  "value": "Xã Vĩnh Phước A"
					},
					{
					  "value": "Xã Vĩnh Phước B"
					},
					{
					  "value": "Xã Vĩnh Tuy"
					},
					{
					  "value": "Xã Vĩnh Thắng"
					}
				  ]
				},
				{
				  "value": "Huyện An Biên",
				  "code": 908,
				  "wards": [
					{
					  "value": "Thị trấn Thứ Ba"
					},
					{
					  "value": "Xã Tây Yên"
					},
					{
					  "value": "Xã Tây Yên A"
					},
					{
					  "value": "Xã Nam Yên"
					},
					{
					  "value": "Xã Hưng Yên"
					},
					{
					  "value": "Xã Nam Thái"
					},
					{
					  "value": "Xã Nam Thái A"
					},
					{
					  "value": "Xã Đông Thái"
					},
					{
					  "value": "Xã Đông Yên"
					}
				  ]
				},
				{
				  "value": "Huyện An Minh",
				  "code": 909,
				  "wards": [
					{
					  "value": "Thị trấn Thứ Mười Một"
					},
					{
					  "value": "Xã Thuận Hoà"
					},
					{
					  "value": "Xã Đông Hòa"
					},
					{
					  "value": "Xã Đông Thạnh"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Đông Hưng"
					},
					{
					  "value": "Xã Đông Hưng A"
					},
					{
					  "value": "Xã Đông Hưng B"
					},
					{
					  "value": "Xã Vân Khánh"
					},
					{
					  "value": "Xã Vân Khánh Đông"
					},
					{
					  "value": "Xã Vân Khánh Tây"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Thuận",
				  "code": 910,
				  "wards": [
					{
					  "value": "Thị trấn Vĩnh Thuận"
					},
					{
					  "value": "Xã Vĩnh Bình Bắc"
					},
					{
					  "value": "Xã Vĩnh Bình Nam"
					},
					{
					  "value": "Xã Bình Minh"
					},
					{
					  "value": "Xã Vĩnh Thuận"
					},
					{
					  "value": "Xã Tân Thuận"
					},
					{
					  "value": "Xã Phong Đông"
					},
					{
					  "value": "Xã Vĩnh Phong"
					}
				  ]
				},
				{
				  "value": "Thành phố Phú Quốc",
				  "code": 911,
				  "wards": [
					{
					  "value": "Phường Dương Đông"
					},
					{
					  "value": "Phường An Thới"
					},
					{
					  "value": "Xã Cửa Cạn"
					},
					{
					  "value": "Xã Gành Dầu"
					},
					{
					  "value": "Xã Cửa Dương"
					},
					{
					  "value": "Xã Hàm Ninh"
					},
					{
					  "value": "Xã Dương Tơ"
					},
					{
					  "value": "Xã Bãi Thơm"
					},
					{
					  "value": "Xã Thổ Châu"
					}
				  ]
				},
				{
				  "value": "Huyện Kiên Hải",
				  "code": 912,
				  "wards": [
					{
					  "value": "Xã Hòn Tre"
					},
					{
					  "value": "Xã Lại Sơn"
					},
					{
					  "value": "Xã An Sơn"
					},
					{
					  "value": "Xã Nam Du"
					}
				  ]
				},
				{
				  "value": "Huyện U Minh Thượng",
				  "code": 913,
				  "wards": [
					{
					  "value": "Xã Thạnh Yên"
					},
					{
					  "value": "Xã Thạnh Yên A"
					},
					{
					  "value": "Xã An Minh Bắc"
					},
					{
					  "value": "Xã Vĩnh Hòa"
					},
					{
					  "value": "Xã Hoà Chánh"
					},
					{
					  "value": "Xã Minh Thuận"
					}
				  ]
				},
				{
				  "value": "Huyện Giang Thành",
				  "code": 914,
				  "wards": [
					{
					  "value": "Xã Vĩnh Phú"
					},
					{
					  "value": "Xã Vĩnh Điều"
					},
					{
					  "value": "Xã Tân Khánh Hòa"
					},
					{
					  "value": "Xã Phú Lợi"
					},
					{
					  "value": "Xã Phú Mỹ"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Thành phố Cần Thơ",
			  "code": 92,
			  "districts": [
				{
				  "value": "Quận Ninh Kiều",
				  "code": 916,
				  "wards": [
					{
					  "value": "Phường Cái Khế"
					},
					{
					  "value": "Phường An Hòa"
					},
					{
					  "value": "Phường Thới Bình"
					},
					{
					  "value": "Phường An Nghiệp"
					},
					{
					  "value": "Phường An Cư"
					},
					{
					  "value": "Phường Tân An"
					},
					{
					  "value": "Phường An Phú"
					},
					{
					  "value": "Phường Xuân Khánh"
					},
					{
					  "value": "Phường Hưng Lợi"
					},
					{
					  "value": "Phường An Khánh"
					},
					{
					  "value": "Phường An Bình"
					}
				  ]
				},
				{
				  "value": "Quận Ô Môn",
				  "code": 917,
				  "wards": [
					{
					  "value": "Phường Châu Văn Liêm"
					},
					{
					  "value": "Phường Thới Hòa"
					},
					{
					  "value": "Phường Thới Long"
					},
					{
					  "value": "Phường Long Hưng"
					},
					{
					  "value": "Phường Thới An"
					},
					{
					  "value": "Phường Phước Thới"
					},
					{
					  "value": "Phường Trường Lạc"
					}
				  ]
				},
				{
				  "value": "Quận Bình Thuỷ",
				  "code": 918,
				  "wards": [
					{
					  "value": "Phường Bình Thủy"
					},
					{
					  "value": "Phường Trà An"
					},
					{
					  "value": "Phường Trà Nóc"
					},
					{
					  "value": "Phường Thới An Đông"
					},
					{
					  "value": "Phường An Thới"
					},
					{
					  "value": "Phường Bùi Hữu Nghĩa"
					},
					{
					  "value": "Phường Long Hòa"
					},
					{
					  "value": "Phường Long Tuyền"
					}
				  ]
				},
				{
				  "value": "Quận Cái Răng",
				  "code": 919,
				  "wards": [
					{
					  "value": "Phường Lê Bình"
					},
					{
					  "value": "Phường Hưng Phú"
					},
					{
					  "value": "Phường Hưng Thạnh"
					},
					{
					  "value": "Phường Ba Láng"
					},
					{
					  "value": "Phường Thường Thạnh"
					},
					{
					  "value": "Phường Phú Thứ"
					},
					{
					  "value": "Phường Tân Phú"
					}
				  ]
				},
				{
				  "value": "Quận Thốt Nốt",
				  "code": 923,
				  "wards": [
					{
					  "value": "Phường Thốt Nốt"
					},
					{
					  "value": "Phường Thới Thuận"
					},
					{
					  "value": "Phường Thuận An"
					},
					{
					  "value": "Phường Tân Lộc"
					},
					{
					  "value": "Phường Trung Nhứt"
					},
					{
					  "value": "Phường Thạnh Hoà"
					},
					{
					  "value": "Phường Trung Kiên"
					},
					{
					  "value": "Phường Tân Hưng"
					},
					{
					  "value": "Phường Thuận Hưng"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Thạnh",
				  "code": 924,
				  "wards": [
					{
					  "value": "Xã Vĩnh Bình"
					},
					{
					  "value": "Thị trấn Thanh An"
					},
					{
					  "value": "Thị trấn Vĩnh Thạnh"
					},
					{
					  "value": "Xã Thạnh Mỹ"
					},
					{
					  "value": "Xã Vĩnh Trinh"
					},
					{
					  "value": "Xã Thạnh An"
					},
					{
					  "value": "Xã Thạnh Tiến"
					},
					{
					  "value": "Xã Thạnh Thắng"
					},
					{
					  "value": "Xã Thạnh Lợi"
					},
					{
					  "value": "Xã Thạnh Qưới"
					},
					{
					  "value": "Xã Thạnh Lộc"
					}
				  ]
				},
				{
				  "value": "Huyện Cờ Đỏ",
				  "code": 925,
				  "wards": [
					{
					  "value": "Xã Trung An"
					},
					{
					  "value": "Xã Trung Thạnh"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Trung Hưng"
					},
					{
					  "value": "Thị trấn Cờ Đỏ"
					},
					{
					  "value": "Xã Thới Hưng"
					},
					{
					  "value": "Xã Đông Hiệp"
					},
					{
					  "value": "Xã Đông Thắng"
					},
					{
					  "value": "Xã Thới Đông"
					},
					{
					  "value": "Xã Thới Xuân"
					}
				  ]
				},
				{
				  "value": "Huyện Phong Điền",
				  "code": 926,
				  "wards": [
					{
					  "value": "Thị trấn Phong Điền"
					},
					{
					  "value": "Xã Nhơn Ái"
					},
					{
					  "value": "Xã Giai Xuân"
					},
					{
					  "value": "Xã Tân Thới"
					},
					{
					  "value": "Xã Trường Long"
					},
					{
					  "value": "Xã Mỹ Khánh"
					},
					{
					  "value": "Xã Nhơn Nghĩa"
					}
				  ]
				},
				{
				  "value": "Huyện Thới Lai",
				  "code": 927,
				  "wards": [
					{
					  "value": "Thị trấn Thới Lai"
					},
					{
					  "value": "Xã Thới Thạnh"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Xuân Thắng"
					},
					{
					  "value": "Xã Đông Bình"
					},
					{
					  "value": "Xã Đông Thuận"
					},
					{
					  "value": "Xã Thới Tân"
					},
					{
					  "value": "Xã Trường Thắng"
					},
					{
					  "value": "Xã Định Môn"
					},
					{
					  "value": "Xã Trường Thành"
					},
					{
					  "value": "Xã Trường Xuân"
					},
					{
					  "value": "Xã Trường Xuân A"
					},
					{
					  "value": "Xã Trường Xuân B"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Hậu Giang",
			  "code": 93,
			  "districts": [
				{
				  "value": "Thành phố Vị Thanh",
				  "code": 930,
				  "wards": [
					{
					  "value": "Phường I"
					},
					{
					  "value": "Phường III"
					},
					{
					  "value": "Phường IV"
					},
					{
					  "value": "Phường V"
					},
					{
					  "value": "Phường VII"
					},
					{
					  "value": "Xã Vị Tân"
					},
					{
					  "value": "Xã Hoả Lựu"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Hoả Tiến"
					}
				  ]
				},
				{
				  "value": "Thành phố Ngã Bảy",
				  "code": 931,
				  "wards": [
					{
					  "value": "Phường Ngã Bảy"
					},
					{
					  "value": "Phường Lái Hiếu"
					},
					{
					  "value": "Phường Hiệp Thành"
					},
					{
					  "value": "Phường Hiệp Lợi"
					},
					{
					  "value": "Xã Đại Thành"
					},
					{
					  "value": "Xã Tân Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành A",
				  "code": 932,
				  "wards": [
					{
					  "value": "Thị trấn Một Ngàn"
					},
					{
					  "value": "Xã Tân Hoà"
					},
					{
					  "value": "Thị trấn Bảy Ngàn"
					},
					{
					  "value": "Xã Trường Long Tây"
					},
					{
					  "value": "Xã Trường Long A"
					},
					{
					  "value": "Xã Nhơn Nghĩa A"
					},
					{
					  "value": "Thị trấn Rạch Gòi"
					},
					{
					  "value": "Xã Thạnh Xuân"
					},
					{
					  "value": "Thị trấn Cái Tắc"
					},
					{
					  "value": "Xã Tân Phú Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 933,
				  "wards": [
					{
					  "value": "Thị trấn Ngã Sáu"
					},
					{
					  "value": "Xã Đông Thạnh"
					},
					{
					  "value": "Xã Đông Phú"
					},
					{
					  "value": "Xã Phú Hữu"
					},
					{
					  "value": "Xã Phú Tân"
					},
					{
					  "value": "Thị trấn Mái Dầm"
					},
					{
					  "value": "Xã Đông Phước"
					},
					{
					  "value": "Xã Đông Phước A"
					}
				  ]
				},
				{
				  "value": "Huyện Phụng Hiệp",
				  "code": 934,
				  "wards": [
					{
					  "value": "Thị trấn Kinh Cùng"
					},
					{
					  "value": "Thị trấn Cây Dương"
					},
					{
					  "value": "Xã Tân Bình"
					},
					{
					  "value": "Xã Bình Thành"
					},
					{
					  "value": "Xã Thạnh Hòa"
					},
					{
					  "value": "Xã Long Thạnh"
					},
					{
					  "value": "Xã Phụng Hiệp"
					},
					{
					  "value": "Xã Hòa Mỹ"
					},
					{
					  "value": "Xã Hòa An"
					},
					{
					  "value": "Xã Phương Bình"
					},
					{
					  "value": "Xã Hiệp Hưng"
					},
					{
					  "value": "Xã Tân Phước Hưng"
					},
					{
					  "value": "Thị trấn Búng Tàu"
					},
					{
					  "value": "Xã Phương Phú"
					},
					{
					  "value": "Xã Tân Long"
					}
				  ]
				},
				{
				  "value": "Huyện Vị Thuỷ",
				  "code": 935,
				  "wards": [
					{
					  "value": "Thị trấn Nàng Mau"
					},
					{
					  "value": "Xã Vị Trung"
					},
					{
					  "value": "Xã Vị Thuỷ"
					},
					{
					  "value": "Xã Vị Thắng"
					},
					{
					  "value": "Xã Vĩnh Thuận Tây"
					},
					{
					  "value": "Xã Vĩnh Trung"
					},
					{
					  "value": "Xã Vĩnh Tường"
					},
					{
					  "value": "Xã Vị Đông"
					},
					{
					  "value": "Xã Vị Thanh"
					},
					{
					  "value": "Xã Vị Bình"
					}
				  ]
				},
				{
				  "value": "Huyện Long Mỹ",
				  "code": 936,
				  "wards": [
					{
					  "value": "Xã Thuận Hưng"
					},
					{
					  "value": "Xã Thuận Hòa"
					},
					{
					  "value": "Xã Vĩnh Thuận Đông"
					},
					{
					  "value": "Thị trấn Vĩnh Viễn"
					},
					{
					  "value": "Xã Vĩnh Viễn A"
					},
					{
					  "value": "Xã Lương Tâm"
					},
					{
					  "value": "Xã Lương Nghĩa"
					},
					{
					  "value": "Xã Xà Phiên"
					}
				  ]
				},
				{
				  "value": "Thị xã Long Mỹ",
				  "code": 937,
				  "wards": [
					{
					  "value": "Phường Thuận An"
					},
					{
					  "value": "Phường Trà Lồng"
					},
					{
					  "value": "Phường Bình Thạnh"
					},
					{
					  "value": "Xã Long Bình"
					},
					{
					  "value": "Phường Vĩnh Tường"
					},
					{
					  "value": "Xã Long Trị"
					},
					{
					  "value": "Xã Long Trị A"
					},
					{
					  "value": "Xã Long Phú"
					},
					{
					  "value": "Xã Tân Phú"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Sóc Trăng",
			  "code": 94,
			  "districts": [
				{
				  "value": "Thành phố Sóc Trăng",
				  "code": 941,
				  "wards": [
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 10"
					}
				  ]
				},
				{
				  "value": "Huyện Châu Thành",
				  "code": 942,
				  "wards": [
					{
					  "value": "Thị trấn Châu Thành"
					},
					{
					  "value": "Xã Hồ Đắc Kiện"
					},
					{
					  "value": "Xã Phú Tâm"
					},
					{
					  "value": "Xã Thuận Hòa"
					},
					{
					  "value": "Xã Phú Tân"
					},
					{
					  "value": "Xã Thiện Mỹ"
					},
					{
					  "value": "Xã An Hiệp"
					},
					{
					  "value": "Xã An Ninh"
					}
				  ]
				},
				{
				  "value": "Huyện Kế Sách",
				  "code": 943,
				  "wards": [
					{
					  "value": "Thị trấn Kế Sách"
					},
					{
					  "value": "Thị trấn An Lạc Thôn"
					},
					{
					  "value": "Xã Xuân Hòa"
					},
					{
					  "value": "Xã Phong Nẫm"
					},
					{
					  "value": "Xã An Lạc Tây"
					},
					{
					  "value": "Xã Trinh Phú"
					},
					{
					  "value": "Xã Ba Trinh"
					},
					{
					  "value": "Xã Thới An Hội"
					},
					{
					  "value": "Xã Nhơn Mỹ"
					},
					{
					  "value": "Xã Kế Thành"
					},
					{
					  "value": "Xã Kế An"
					},
					{
					  "value": "Xã Đại Hải"
					},
					{
					  "value": "Xã An Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Mỹ Tú",
				  "code": 944,
				  "wards": [
					{
					  "value": "Thị trấn Huỳnh Hữu Nghĩa"
					},
					{
					  "value": "Xã Long Hưng"
					},
					{
					  "value": "Xã Hưng Phú"
					},
					{
					  "value": "Xã Mỹ Hương"
					},
					{
					  "value": "Xã Mỹ Tú"
					},
					{
					  "value": "Xã Mỹ Phước"
					},
					{
					  "value": "Xã Thuận Hưng"
					},
					{
					  "value": "Xã Mỹ Thuận"
					},
					{
					  "value": "Xã Phú Mỹ"
					}
				  ]
				},
				{
				  "value": "Huyện Cù Lao Dung",
				  "code": 945,
				  "wards": [
					{
					  "value": "Thị trấn Cù Lao Dung"
					},
					{
					  "value": "Xã An Thạnh 1"
					},
					{
					  "value": "Xã An Thạnh Tây"
					},
					{
					  "value": "Xã An Thạnh Đông"
					},
					{
					  "value": "Xã Đại Ân 1"
					},
					{
					  "value": "Xã An Thạnh 2"
					},
					{
					  "value": "Xã An Thạnh 3"
					},
					{
					  "value": "Xã An Thạnh Nam"
					}
				  ]
				},
				{
				  "value": "Huyện Long Phú",
				  "code": 946,
				  "wards": [
					{
					  "value": "Thị trấn Long Phú"
					},
					{
					  "value": "Xã Song Phụng"
					},
					{
					  "value": "Thị trấn Đại Ngãi"
					},
					{
					  "value": "Xã Hậu Thạnh"
					},
					{
					  "value": "Xã Long Đức"
					},
					{
					  "value": "Xã Trường Khánh"
					},
					{
					  "value": "Xã Phú Hữu"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Châu Khánh"
					},
					{
					  "value": "Xã Tân Thạnh"
					},
					{
					  "value": "Xã Long Phú"
					}
				  ]
				},
				{
				  "value": "Huyện Mỹ Xuyên",
				  "code": 947,
				  "wards": [
					{
					  "value": "Thị trấn Mỹ Xuyên"
					},
					{
					  "value": "Xã Đại Tâm"
					},
					{
					  "value": "Xã Tham Đôn"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Ngọc Đông"
					},
					{
					  "value": "Xã Thạnh Quới"
					},
					{
					  "value": "Xã Hòa Tú 1"
					},
					{
					  "value": "Xã Gia Hòa 1"
					},
					{
					  "value": "Xã Ngọc Tố"
					},
					{
					  "value": "Xã Gia Hòa 2"
					},
					{
					  "value": "Xã Hòa Tú II"
					}
				  ]
				},
				{
				  "value": "Thị xã Ngã Năm",
				  "code": 948,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Xã Vĩnh Quới"
					},
					{
					  "value": "Xã Tân Long"
					},
					{
					  "value": "Xã Long Bình"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Xã Mỹ Bình"
					},
					{
					  "value": "Xã Mỹ Quới"
					}
				  ]
				},
				{
				  "value": "Huyện Thạnh Trị",
				  "code": 949,
				  "wards": [
					{
					  "value": "Thị trấn Phú Lộc"
					},
					{
					  "value": "Thị trấn Hưng Lợi"
					},
					{
					  "value": "Xã Lâm Tân"
					},
					{
					  "value": "Xã Thạnh Tân"
					},
					{
					  "value": "Xã Lâm Kiết"
					},
					{
					  "value": "Xã Tuân Tức"
					},
					{
					  "value": "Xã Vĩnh Thành"
					},
					{
					  "value": "Xã Thạnh Trị"
					},
					{
					  "value": "Xã Vĩnh Lợi"
					},
					{
					  "value": "Xã Châu Hưng"
					}
				  ]
				},
				{
				  "value": "Thị xã Vĩnh Châu",
				  "code": 950,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Xã Hòa Đông"
					},
					{
					  "value": "Phường Khánh Hòa"
					},
					{
					  "value": "Xã Vĩnh Hiệp"
					},
					{
					  "value": "Xã Vĩnh Hải"
					},
					{
					  "value": "Xã Lạc Hòa"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường Vĩnh Phước"
					},
					{
					  "value": "Xã Vĩnh Tân"
					},
					{
					  "value": "Xã Lai Hòa"
					}
				  ]
				},
				{
				  "value": "Huyện Trần Đề",
				  "code": 951,
				  "wards": [
					{
					  "value": "Xã Đại Ân 2"
					},
					{
					  "value": "Thị trấn Trần Đề"
					},
					{
					  "value": "Xã Liêu Tú"
					},
					{
					  "value": "Xã Lịch Hội Thượng"
					},
					{
					  "value": "Thị trấn Lịch Hội Thượng"
					},
					{
					  "value": "Xã Trung Bình"
					},
					{
					  "value": "Xã Tài Văn"
					},
					{
					  "value": "Xã Viên An"
					},
					{
					  "value": "Xã Thạnh Thới An"
					},
					{
					  "value": "Xã Thạnh Thới Thuận"
					},
					{
					  "value": "Xã Viên Bình"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Bạc Liêu",
			  "code": 95,
			  "districts": [
				{
				  "value": "Thành phố Bạc Liêu",
				  "code": 954,
				  "wards": [
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 3"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường Nhà Mát"
					},
					{
					  "value": "Xã Vĩnh Trạch"
					},
					{
					  "value": "Xã Vĩnh Trạch Đông"
					},
					{
					  "value": "Xã Hiệp Thành"
					}
				  ]
				},
				{
				  "value": "Huyện Hồng Dân",
				  "code": 956,
				  "wards": [
					{
					  "value": "Thị trấn Ngan Dừa"
					},
					{
					  "value": "Xã Ninh Quới"
					},
					{
					  "value": "Xã Ninh Quới A"
					},
					{
					  "value": "Xã Ninh Hòa"
					},
					{
					  "value": "Xã Lộc Ninh"
					},
					{
					  "value": "Xã Vĩnh Lộc"
					},
					{
					  "value": "Xã Vĩnh Lộc A"
					},
					{
					  "value": "Xã Ninh Thạnh Lợi A"
					},
					{
					  "value": "Xã Ninh Thạnh Lợi"
					}
				  ]
				},
				{
				  "value": "Huyện Phước Long",
				  "code": 957,
				  "wards": [
					{
					  "value": "Thị trấn Phước Long"
					},
					{
					  "value": "Xã Vĩnh Phú Đông"
					},
					{
					  "value": "Xã Vĩnh Phú Tây"
					},
					{
					  "value": "Xã Phước Long"
					},
					{
					  "value": "Xã Hưng Phú"
					},
					{
					  "value": "Xã Vĩnh Thanh"
					},
					{
					  "value": "Xã Phong Thạnh Tây A"
					},
					{
					  "value": "Xã Phong Thạnh Tây B"
					}
				  ]
				},
				{
				  "value": "Huyện Vĩnh Lợi",
				  "code": 958,
				  "wards": [
					{
					  "value": "Xã Vĩnh Hưng"
					},
					{
					  "value": "Xã Vĩnh Hưng A"
					},
					{
					  "value": "Thị trấn Châu Hưng"
					},
					{
					  "value": "Xã Châu Hưng A"
					},
					{
					  "value": "Xã Hưng Thành"
					},
					{
					  "value": "Xã Hưng Hội"
					},
					{
					  "value": "Xã Châu Thới"
					},
					{
					  "value": "Xã Long Thạnh"
					}
				  ]
				},
				{
				  "value": "Thị xã Giá Rai",
				  "code": 959,
				  "wards": [
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường Hộ Phòng"
					},
					{
					  "value": "Xã Phong Thạnh Đông"
					},
					{
					  "value": "Phường Láng Tròn"
					},
					{
					  "value": "Xã Phong Tân"
					},
					{
					  "value": "Xã Tân Phong"
					},
					{
					  "value": "Xã Phong Thạnh"
					},
					{
					  "value": "Xã Phong Thạnh A"
					},
					{
					  "value": "Xã Phong Thạnh Tây"
					},
					{
					  "value": "Xã Tân Thạnh"
					}
				  ]
				},
				{
				  "value": "Huyện Đông Hải",
				  "code": 960,
				  "wards": [
					{
					  "value": "Thị trấn Gành Hào"
					},
					{
					  "value": "Xã Long Điền Đông"
					},
					{
					  "value": "Xã Long Điền Đông A"
					},
					{
					  "value": "Xã Long Điền"
					},
					{
					  "value": "Xã Long Điền Tây"
					},
					{
					  "value": "Xã Điền Hải"
					},
					{
					  "value": "Xã An Trạch"
					},
					{
					  "value": "Xã An Trạch A"
					},
					{
					  "value": "Xã An Phúc"
					},
					{
					  "value": "Xã Định Thành"
					},
					{
					  "value": "Xã Định Thành A"
					}
				  ]
				},
				{
				  "value": "Huyện Hoà Bình",
				  "code": 961,
				  "wards": [
					{
					  "value": "Thị trấn Hòa Bình"
					},
					{
					  "value": "Xã Minh Diệu"
					},
					{
					  "value": "Xã Vĩnh Bình"
					},
					{
					  "value": "Xã Vĩnh Mỹ B"
					},
					{
					  "value": "Xã Vĩnh Hậu"
					},
					{
					  "value": "Xã Vĩnh Hậu A"
					},
					{
					  "value": "Xã Vĩnh Mỹ A"
					},
					{
					  "value": "Xã Vĩnh Thịnh"
					}
				  ]
				}
			  ]
			},
			{
			  "value": "Tỉnh Cà Mau",
			  "code": 96,
			  "districts": [
				{
				  "value": "Thành phố Cà Mau",
				  "code": 964,
				  "wards": [
					{
					  "value": "Phường 9"
					},
					{
					  "value": "Phường 4"
					},
					{
					  "value": "Phường 1"
					},
					{
					  "value": "Phường 5"
					},
					{
					  "value": "Phường 2"
					},
					{
					  "value": "Phường 8"
					},
					{
					  "value": "Phường 6"
					},
					{
					  "value": "Phường 7"
					},
					{
					  "value": "Phường Tân Xuyên"
					},
					{
					  "value": "Xã An Xuyên"
					},
					{
					  "value": "Phường Tân Thành"
					},
					{
					  "value": "Xã Tân Thành"
					},
					{
					  "value": "Xã Tắc Vân"
					},
					{
					  "value": "Xã Lý Văn Lâm"
					},
					{
					  "value": "Xã Định Bình"
					},
					{
					  "value": "Xã Hòa Thành"
					},
					{
					  "value": "Xã Hòa Tân"
					}
				  ]
				},
				{
				  "value": "Huyện U Minh",
				  "code": 966,
				  "wards": [
					{
					  "value": "Thị trấn U Minh"
					},
					{
					  "value": "Xã Khánh Hòa"
					},
					{
					  "value": "Xã Khánh Thuận"
					},
					{
					  "value": "Xã Khánh Tiến"
					},
					{
					  "value": "Xã Nguyễn Phích"
					},
					{
					  "value": "Xã Khánh Lâm"
					},
					{
					  "value": "Xã Khánh An"
					},
					{
					  "value": "Xã Khánh Hội"
					}
				  ]
				},
				{
				  "value": "Huyện Thới Bình",
				  "code": 967,
				  "wards": [
					{
					  "value": "Thị trấn Thới Bình"
					},
					{
					  "value": "Xã Biển Bạch"
					},
					{
					  "value": "Xã Tân Bằng"
					},
					{
					  "value": "Xã Trí Phải"
					},
					{
					  "value": "Xã Trí Lực"
					},
					{
					  "value": "Xã Biển Bạch Đông"
					},
					{
					  "value": "Xã Thới Bình"
					},
					{
					  "value": "Xã Tân Phú"
					},
					{
					  "value": "Xã Tân Lộc Bắc"
					},
					{
					  "value": "Xã Tân Lộc"
					},
					{
					  "value": "Xã Tân Lộc Đông"
					},
					{
					  "value": "Xã Hồ Thị Kỷ"
					}
				  ]
				},
				{
				  "value": "Huyện Trần Văn Thời",
				  "code": 968,
				  "wards": [
					{
					  "value": "Thị trấn Trần Văn Thời"
					},
					{
					  "value": "Thị trấn Sông Đốc"
					},
					{
					  "value": "Xã Khánh Bình Tây Bắc"
					},
					{
					  "value": "Xã Khánh Bình Tây"
					},
					{
					  "value": "Xã Trần Hợi"
					},
					{
					  "value": "Xã Khánh Lộc"
					},
					{
					  "value": "Xã Khánh Bình"
					},
					{
					  "value": "Xã Khánh Hưng"
					},
					{
					  "value": "Xã Khánh Bình Đông"
					},
					{
					  "value": "Xã Khánh Hải"
					},
					{
					  "value": "Xã Lợi An"
					},
					{
					  "value": "Xã Phong Điền"
					},
					{
					  "value": "Xã Phong Lạc"
					}
				  ]
				},
				{
				  "value": "Huyện Cái Nước",
				  "code": 969,
				  "wards": [
					{
					  "value": "Thị trấn Cái Nước"
					},
					{
					  "value": "Xã Thạnh Phú"
					},
					{
					  "value": "Xã Lương Thế Trân"
					},
					{
					  "value": "Xã Phú Hưng"
					},
					{
					  "value": "Xã Tân Hưng"
					},
					{
					  "value": "Xã Hưng Mỹ"
					},
					{
					  "value": "Xã Hoà Mỹ"
					},
					{
					  "value": "Xã Đông Hưng"
					},
					{
					  "value": "Xã Đông Thới"
					},
					{
					  "value": "Xã Tân Hưng Đông"
					},
					{
					  "value": "Xã Trần Thới"
					}
				  ]
				},
				{
				  "value": "Huyện Đầm Dơi",
				  "code": 970,
				  "wards": [
					{
					  "value": "Thị trấn Đầm Dơi"
					},
					{
					  "value": "Xã Tạ An Khương"
					},
					{
					  "value": "Xã Tạ An Khương Đông"
					},
					{
					  "value": "Xã Trần Phán"
					},
					{
					  "value": "Xã Tân Trung"
					},
					{
					  "value": "Xã Tân Đức"
					},
					{
					  "value": "Xã Tân Thuận"
					},
					{
					  "value": "Xã Tạ An Khương Nam"
					},
					{
					  "value": "Xã Tân Duyệt"
					},
					{
					  "value": "Xã Tân Dân"
					},
					{
					  "value": "Xã Tân Tiến"
					},
					{
					  "value": "Xã Quách Phẩm Bắc"
					},
					{
					  "value": "Xã Quách Phẩm"
					},
					{
					  "value": "Xã Thanh Tùng"
					},
					{
					  "value": "Xã Ngọc Chánh"
					},
					{
					  "value": "Xã Nguyễn Huân"
					}
				  ]
				},
				{
				  "value": "Huyện Năm Căn",
				  "code": 971,
				  "wards": [
					{
					  "value": "Thị trấn Năm Căn"
					},
					{
					  "value": "Xã Hàm Rồng"
					},
					{
					  "value": "Xã Hiệp Tùng"
					},
					{
					  "value": "Xã Đất Mới"
					},
					{
					  "value": "Xã Lâm Hải"
					},
					{
					  "value": "Xã Hàng Vịnh"
					},
					{
					  "value": "Xã Tam Giang"
					},
					{
					  "value": "Xã Tam Giang Đông"
					}
				  ]
				},
				{
				  "value": "Huyện Phú Tân",
				  "code": 972,
				  "wards": [
					{
					  "value": "Thị trấn Cái Đôi Vàm"
					},
					{
					  "value": "Xã Phú Thuận"
					},
					{
					  "value": "Xã Phú Mỹ"
					},
					{
					  "value": "Xã Phú Tân"
					},
					{
					  "value": "Xã Tân Hải"
					},
					{
					  "value": "Xã Việt Thắng"
					},
					{
					  "value": "Xã Tân Hưng Tây"
					},
					{
					  "value": "Xã Rạch Chèo"
					},
					{
					  "value": "Xã Nguyễn Việt Khái"
					}
				  ]
				},
				{
				  "value": "Huyện Ngọc Hiển",
				  "code": 973,
				  "wards": [
					{
					  "value": "Xã Tam Giang Tây"
					},
					{
					  "value": "Xã Tân Ân Tây"
					},
					{
					  "value": "Xã Viên An Đông"
					},
					{
					  "value": "Xã Viên An"
					},
					{
					  "value": "Thị trấn Rạch Gốc"
					},
					{
					  "value": "Xã Tân Ân"
					},
					{
					  "value": "Xã Đất Mũi"
					}
				  ]
				}
			  ]
			}
		  ]
	}
	
	
	  checkVietHoaHoTen(str){
		//var convertToArray = str.split(' ');
	  }
	
} 
