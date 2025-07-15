// types
import {LayoutSitemap} from "@/types/list";

export const SitemapListItem: LayoutSitemap[] = [
    { 
        id: 1, 
        box: 'col home',
        hTitle: 'หน้าหลัก',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/home',
                title: 'หน้าหลัก',
            },
        ],
    },
    { 
        id: 2, 
        box: 'col-3',
        hTitle: 'ศาลปกครอง',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/admincourt/list',
                title: 'พระราชดำรัส',
            },
            {
                id: 2, 
                linkUrl: '/admincourt/',
                title: 'ประวัติความเป็นมา',
            },
            {
                id: 3, 
                linkUrl: '/admincourt/',
                title: 'ตราสัญลักษณ์',
            },
            {
                id: 4, 
                linkUrl: '/admincourt/',
                title: 'วิสัยทัศน์และพันธกิจ',
            },
            {
                id: 5, 
                linkUrl: '/admincourt/',
                title: 'แผนแม่บทศาลปกครอง',
            },
            {
                id: 6, 
                linkUrl: '/admincourt/',
                title: 'เขตอำนาจของศาลปกครอง',
            },
            {
                id: 7, 
                linkUrl: '/admincourt/',
                title: 'ผู้บริหารศาลปกครอง',
            },
            {
                id: 8, 
                linkUrl: '/admincourt/',
                title: 'นโยบายประธานศาลปกครองสูงสุด',
            },
            {
                id: 9, 
                linkUrl: '/admincourt/regions/grid',
                title: 'ศาลปกครองในภูมิภาค',
            },
            {
                id: 10, 
                linkUrl: '/admincourt/things-to-know',
                title: 'ข้อควรรู้เกี่ยวกับการฟ้องคดีปกครอง',
            },
            {
                id: 11, 
                linkUrl: '/admincourt/statistics',
                title: 'สถิติคดีปกครอง',
            },
        ],
    },
    { 
        id: 3, 
        box: 'col-4',
        hTitle: 'สำนักงานศาลปกครอง',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/office/',
                title: 'โครงสร้างและภารกิจ',
            },
            {
                id: 2, 
                linkUrl: '/office/',
                title: 'ผู้บริหารสำนักงาน',
            },
            {
                id: 3, 
                linkUrl: '/office/culture',
                title: 'วัฒนธรรมศาลปกครอง(TRUST)',
            },
            {
                id: 4, 
                linkUrl: '/office/',
                title: 'ITA สำนักงานศาลปกครอง',
            },
            {
                id: 5, 
                linkUrl: '/office/confidence',
                title: 'ผลการสำรวจความเชื่อมั่นของประชาชนต่อศาลปกครอง',
            },
            {
                id: 6, 
                linkUrl: '/office/annual-report',
                title: 'รายงานประจำปี',
            },
            {
                id: 7, 
                linkUrl: '/office/auditors',
                title: 'รายงานของผู้สอบบัญชีและรายงานการเงิน',
            },
            {
                id: 8, 
                linkUrl: '/office/performance',
                title: 'รายงานผลการดำเนินงานคณะกรรมการตรวจสอบ',
            },
            {
                id: 9, 
                linkUrl: '/office/library',
                title: 'ห้องสมุด พิพิธภัณฑ์และจดหมายเหตุศาลปกครอง',
            },
            {
                id: 10, 
                linkUrl: '/office/spending',
                title: 'การใช้จ่ายเงินหรือทรัพย์สินของหน่วยงานของรัฐให้สื่อมวลชน',
            },
        ],
    },
    { 
        id: 4, 
        box: 'col-3',
        hTitle: 'วิชาการ',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/academic/articles',
                title: 'บทความวิชาการ',
            },
            {
                id: 2, 
                linkUrl: '/academic/knowledge',
                title: 'นานาความรู้เรื่องกฎหมายมหาชน',
            },
            {
                id: 3, 
                linkUrl: '/academic/example',
                title: 'อุทาหรณ์จากคดีปกครอง',
            },
            {
                id: 4, 
                linkUrl: '/academic/foreign',
                title: 'คำแปลคำพิพากษาต่างประเทศ',
            },
            {
                id: 5, 
                linkUrl: '/academic/verdict',
                title: 'คำแปลคำวินิจฉัยของศาลปกครองไทย',
            },
            {
                id: 6, 
                linkUrl: '/academic/journal',
                title: 'วารสาร/หนังสือวิชาการ',
            },
        ],
    },
    { 
        id: 5, 
        box: 'col-4',
        hTitle: 'สืบค้นข้อมูล',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/search-information/statements',
                title: 'สืบค้นคำพิพากษา/คำสั่ง/คำแถลงการณ์ฯ',
            },
            {
                id: 2, 
                linkUrl: '/search-information/case-type',
                title: 'คำพิพากษาคำสั่งศาลปกครองสูงสุดจำแนกตามประเภทคดี',
            },
            {
                id: 3, 
                linkUrl: '/search-information/appointment',
                title: 'สืบค้นบัญชีนัดศาลปกครอง',
            },
            {
                id: 4, 
                linkUrl: '/search-information/litigation',
                title: 'สืบค้นบัญชีการฟ้องคดี',
            },
            {
                id: 5, 
                linkUrl: '/search-information/academic',
                title: 'สืบค้นข้อมูลวิชาการ',
            },
        ],
    },
    { 
        id: 6, 
        box: 'col-4',
        hTitle: 'กฎหมาย / กฎ',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/law/about',
                title: 'กฎหมาย',
            },
            {
                id: 2, 
                linkUrl: '/law/rules',
                title: 'กฎ',
            },
            {
                id: 3, 
                linkUrl: '/law/translation',
                title: 'คำแปลกฎหมายและกฎภาษาอังกฤษ',
            },
            {
                id: 4, 
                linkUrl: '/law/consideration',
                title: 'คำอธิบายกฎหมายว่าด้วยวิธีพิจารณาคดีปกครอง',
            },
            {
                id: 5, 
                linkUrl: '/law/responsible',
                title: 'ประกาศรายชื่อกฎหมายและหน่วยงานที่รับผิดชอบฯ',
            },
        ],
    },
    { 
        id: 7, 
        box: 'col-4',
        hTitle: 'ประชาสัมพันธ์',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/public-relations/news',
                title: 'ข่าวประชาสัมพันธ์',
            },
            {
                id: 2, 
                linkUrl: '/public-relations/career',
                title: 'ข่าวรับสมัครงาน',
            },
            {
                id: 3, 
                linkUrl: '/public-relations/procurement',
                title: 'ข่าวจัดซื้อจัดจ้าง',
            },
            {
                id: 4, 
                linkUrl: '/public-relations/announcements',
                title: 'ประกาศต่าง ๆ',
            },
            {
                id: 5, 
                linkUrl: '/public-relations/media',
                title: 'สื่อประชาสัมพันธ์',
            },
            {
                id: 6, 
                linkUrl: '/public-relations/case',
                title: 'คดีเด่น',
            },
            {
                id: 7, 
                linkUrl: '/public-relations/flashback',
                title: 'ย้อนข่าว...เล่าคดีปกครอง',
            },
            {
                id: 8, 
                linkUrl: '/public-relations/information',
                title: 'ดรรชนีข้อมูลข่าวสารฯ',
            },
            {
                id: 9, 
                linkUrl: '/public-relations/account',
                title: 'บัญชีรายละเอียดการบรรจุบุคคลเข้ารับราชการสำนักงานศาลปกครอง',
            },
            {
                id: 10, 
                linkUrl: '/public-relations/manual',
                title: 'คู่มือบริการ',
            },
        ],
    },
    { 
        id: 8, 
        box: 'col-7 service',
        hTitle: 'บริการประชาชน',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/service/',
                title: 'ยื่นฟ้องคดีปกครองออนไลน์',
            },
            {
                id: 2, 
                linkUrl: '/service/',
                title: 'กำหนดระยะเวลาดำเนินงานคดีปกครอง/ติดตาม',
            },
            {
                id: 3, 
                linkUrl: '/service/',
                title: 'ร้องเรียนการปฏิบัติงานเจ้าหน้าที่ศาลปกครอง',
            },
            {
                id: 4, 
                linkUrl: '/service/',
                title: 'แจ้งเบาะแสการทุจริต',
            },
            {
                id: 5, 
                linkUrl: '/service/',
                title: 'ปรึกษาคดีปกครองออนไลน์',
            },
            {
                id: 6, 
                linkUrl: '/service/court-forms',
                title: 'ดาวน์โหลดแบบฟอร์มศาลและตัวอย่างการเขียน',
            },
            {
                id: 7, 
                linkUrl: '/service/',
                title: 'ดาวน์โหลดแอปพลิเคชันศาลปกครอง',
            },
            {
                id: 8, 
                linkUrl: '/service/',
                title: 'หอสมุดกฎหมายมหาชนออนไลน์',
            },
            {
                id: 9, 
                linkUrl: '/service/',
                title: 'เยี่ยมชมพิพิธภัณฑ์เสมือน',
            },
            {
                id: 10, 
                linkUrl: '/service/',
                title: 'ติดต่อศึกษาดูงานศาลปกครอง',
            },
            {
                id: 11, 
                linkUrl: '/service/',
                title: 'ศูนย์บริการประชาชน',
            },
            {
                id: 12, 
                linkUrl: '/service/',
                title: 'รวมเว็บไซต์ที่น่าสนใจ',
            },
            {
                id: 13, 
                linkUrl: '/service/',
                title: 'ถาม-ตอบ/คำถามที่พบบ่อย',
            },
            {
                id: 14, 
                linkUrl: '/service/online-learning',
                title: 'การเรียนรู้ผ่านระบบออนไลน์',
            },
            {
                id: 15, 
                linkUrl: '/service/knowledge-corner',
                title: 'มุมความรู้สำหรับประชาชน',
            },
        ],
    },
    { 
        id: 9, 
        box: 'col-5',
        hTitle: 'เมนูอื่นๆ /เฉพาะกิจ',
        itemSitemap: [
            {
                id: 1, 
                linkUrl: '/sitemap',
                title: 'แผนผังเว็บไซต์',
            },
            {
                id: 2, 
                linkUrl: '/contact',
                title: 'ติดต่อหน่วยงาน',
            },
            {
                id: 3, 
                linkUrl: '/feedback',
                title: 'การรับฟังความคิดเห็นและรายงานการวิเคราะห์ผลกระทบที่อาจเกิดขึ้นจากกฎหมาย',
            },
            {
                id: 4, 
                linkUrl: '/bless',
                title: 'ลงนามถวายพระพร',
            },
            {
                id: 5, 
                linkUrl: '/search',
                title: 'สืบค้นในเว็บไซต์',
            },
            {
                id: 6, 
                linkUrl: '/staff-services',
                title: 'บริการสำหรับเจ้าหน้าที่',
            },
        ],
    },
]; 