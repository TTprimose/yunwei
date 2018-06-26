import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/home/Home' //首页
import Plant from '@/plant/Plant' //就医策划
import HealthManage from '@/healthmanage/HealthManage' //健康管理
import HealthAssessment from '@/healthmanage/HealthAssessment' //健康评估
import CheckReport from '@/healthmanage/CheckReport' //体检报告
import UpReport from '@/healthmanage/UpReport' //体检报告上传
import ReportDetail from '@/healthmanage/ReportDetail' //体检报告详情
import TestData from '@/healthmanage/TestData' //检验数据
import TrendMap from '@/healthmanage/TrendMap' //趋势图
import Survey from '@/healthmanage/Survey' //问卷调查
import AddBaseQuestion from '@/healthmanage/AddBaseQuestion' //填写问卷
import BaseQuestion from '@/healthmanage/BaseQuestion' //基础问卷
import Intervention from '@/healthmanage/Intervention' //健康干预
import InterventionDetail from '@/healthmanage/InterventionDetail' //健康干预
import Follow from '@/healthmanage/Follow' //跟踪随访
import FollowDetail from '@/healthmanage/FollowDetail' //跟踪随访详情
import Monitoring from '@/healthmanage/Monitoring' //体征检测
import MonitoringDetail from '@/healthmanage/MonitoringDetail' //体征检测详情
import DataInput from '@/healthmanage/DataInput' //数据录入
import PressureAssessment from '@/healthmanage/PressureAssessment' // 血压评估
import BloodFatAssessment from '@/healthmanage/BloodFatAssessment' // 血脂风险评估
import BloodSugarAssessment from '@/healthmanage/BloodSugarAssessment' // 血糖评估
import OtherAssessment from '@/healthmanage/OtherAssessment' //其他风险评估
import RiskAssessment from '@/healthmanage/RiskAssessment' //风险评估
import CardiovascularProfile from '@/healthmanage/CardiovascularProfile' //心血管病风险评估
import ReportIntervention from '@/healthmanage/ReportIntervention' //健康报告深度解读
import ReportInterventionDetail from '@/healthmanage/ReportInterventionDetail' //健康报告深度解读详情
import MemberInfo from '@/my/MemberInfo' //会员信息
import MyAssistant from '@/my/MyAssistant' //我的健康助理
import MyDoctor from '@/my/MyDoctor' //我的签约医生
import FamilyMember from '@/my/FamilyMember' //家庭成员
import AddMember from '@/my/AddMember' //添加成员
import MyWallet from '@/my/MyWallet' //我的钱包
import MyOrder from '@/my/MyOrder' //我的订单
import NowPay from '@/my/NowPay' //立即支付
import Disclaimer from '@/my/Disclaimer' //免责声明
import ChargeAsk from '@/my/ChargeAsk' //收费告知
import ServerAsk from '@/my/ServerAsk' //服务费告知
import Pay from '@/my/Pay' //支付
import repay from '@/my/repay' //支付
import OrderDetail from '@/my/OrderDetail' //订单详情
import Evaluate from '@/my/Evaluate' //评价
import MyEvaluate from '@/my/MyEvaluate' //我的评价
import EvaluateDetail from '@/my/EvaluateDetail' //评价详情
import MyFavorite from '@/my/MyFavorite' //我的收藏
import Service from '@/service/Service' //我的服务
import TelConsult from '@/service/TelConsult' //电话咨询
import VideoConsult from '@/service/VideoConsult' //视频咨询
import PicConsult from '@/service/PicConsult' //图文咨询
import Login from '@/login/Login' //登录
import WithdrawalsHaveCard from '@/my/WithdrawalsHaveCard' //提现-有银行卡
import ChooseCard from '@/my/ChooseCard' //选择银行卡
import Recharge from '@/my/Recharge' //充值
import OnlineRecharge from '@/my/OnlineRecharge' //线上充值
import OfflineRecharge from '@/my/OfflineRecharge' //线下充值
import OfflineRemittance from '@/my/OfflineRemittance' //线下汇款
import PaySuccess from '@/my/PaySuccess' //支付成功
import PayFail from '@/my/PayFail' //支付失败
import AddCard from '@/my/AddCard' //添加银行卡
import NotVip from '@/my/NotVip' //非会员
import MyData from '@/my/MyData' //我的资料
import My from '@/my/My' //我的
import AboutUs from '@/my/AboutUs' //关于我们
import FindPassword from '@/login/FindPassword' //忘记密码
import ServerClause from '@/login/ServerClause' //服务条款
import Register from '@/login/Register' //注册
import ChooseDoctor from '@/onlineConsultation/ChooseDoctor' //在线咨询-选择医生
import DoctorDetail from '@/onlineConsultation/DoctorDetail' //在线咨询-医生详情
import EvaluateList from '@/onlineConsultation/EvaluateList' //评价-用户评价
import EvaluateInfo from '@/onlineConsultation/EvaluateInfo' //在线咨询-评价详情
import DoctorData from '@/onlineConsultation/DoctorData' //在线咨询-医生资料
import FillDisease from '@/onlineConsultation/FillDisease' //在线咨询-填写咨询病症
import ConsultPayTel from '@/onlineConsultation/ConsultPayTel' //在线咨询-电话咨询支付
import ConsultPayPic from '@/onlineConsultation/ConsultPayPic' //在线咨询-图文咨询支付
import ConsultPayVideo from '@/onlineConsultation/ConsultPayVideo' //在线咨询-视频咨询支付
import ConsultPay from '@/onlineConsultation/ConsultPay' //在线咨询-咨询类支付
import ConsultPayNearby from '@/onlineConsultation/ConsultPayNearby' //在线咨询-就近类支付
import Message from '@/msg/Message' //消息
import DoctorMsg from '@/msg/DoctorMsg' //就诊消息
import im from '@/msg/im' //就诊消息
import MsgDetail from '@/msg/MsgDetail' //消息详情
import setUp from '@/my/setUp' //我的签约医生
import MySignDoctor from '@/my/MySignDoctor' //设置
import FeedBack from '@/my/FeedBack' //问题与建议
import demo from '@/home/demo' //问题与建议
import huimeiList from '@/huimei/huimeiList' //问题与建议
import records from '@/disease/records' //健康档案
import uploudRecords from '@/disease/uploud-records' //电子病历上传
import department from '@/disease/department' //电子病历选择科室
import report from '@/disease/report' //电子病历选择类型
import outpatient from '@/disease/outpatient' //电子病历子页面
import outpatientRecords from '@/disease/outpatientRecords' //门诊详情
import recordDetails from '@/disease/recordDetails' //病历详情
import recordInformation from '@/disease/recordInformation' //基本信息表
import treatment from '@/disease/treatment' //病历和解决
import doctorAdvice from '@/disease/doctorAdvice' //医嘱
import adviceDetail from '@/disease/adviceDetail' //医嘱table
import adviceInform from '@/disease/adviceInform' //医嘱详情
import prescription from '@/disease/prescription' //处方
import prescriptionDetail from '@/disease/prescriptionDetail' //处方table
import prescriptionInform from '@/disease/prescriptionInform' //处方详情
import Img from '@/disease/Img' //心电图查看
import ImgDetail from '@/disease/ImgDetail' //心电图查看table
import ImgInform1 from '@/disease/ImgInform1' //心电图查看1
import ImgInform2 from '@/disease/ImgInform2' //心电图查看2
import medical from '@/disease/medical' //检验检查
import medicalDetail from '@/disease/medicalDetail' //检验检查table
import medicalInform1 from '@/disease/medicalInform1' //检验检查详情
import medicalInform2 from '@/disease/medicalInform2' //检验检查详情
import surgery from '@/disease/surgery' //手术
import surgeryDetail from '@/disease/surgeryDetail' //手术table
import surgeryInform1 from '@/disease/surgeryInform1' //手术详情1
import surgeryInform2 from '@/disease/surgeryInform2' //手术详情1
import into from '@/disease/into' //入院
import intoDetail from '@/disease/intoDetail' //入院
import intoInform from '@/disease/intoInform' //入院
import out from '@/disease/out' //出院
import outDetail from '@/disease/outDetail' //出院
import outInform from '@/disease/outInform' //出院
import nursing from '@/disease/nursing' //护理
import nursingDetail from '@/disease/nursingDetail' //护理
import nursingInform from '@/disease/nursingInform' //护理
import allDiease from '@/disease/allDiease' //记录总览


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/nursing',
            name: 'nursing',
            component: nursing
        },
        {
            path: '/allDiease',
            name: 'allDiease',
            component: allDiease
        },
        {
            path: '/nursingDetail',
            name: 'nursingDetail',
            component: nursingDetail,
            children:[
                {
                    path: '/',
                    component: nursingInform
                },
                {
                    path: '/nursingInform',
                    component: nursingInform
                }
            ]
        },
        {
            path: '/out',
            name: 'out',
            component: out
        },
        {
            path: '/outDetail',
            name: 'outDetail',
            component: outDetail,
            children:[
                {
                    path: '/',
                    component: outInform
                },
                {
                    path: '/outInform',
                    component: outInform
                }
            ]
        },
        {
            path: '/into',
            name: 'into',
            component: into
        },
        {
            path: '/intoDetail',
            name: 'intoDetail',
            component: intoDetail,
            children:[
                {
                    path: '/',
                    component: intoInform
                },
                {
                    path: '/intoInform',
                    component: intoInform
                }
            ]
        },
        {
            path: '/surgery',
            name: 'surgery',
            component: surgery
        },
        {
            path: '/surgeryDetail',
            name: 'surgeryDetail',
            component: surgeryDetail,
            children:[
                {
                    path: '/',
                    component: surgeryInform1
                },
                {
                    path: '/surgeryInform1',
                    component: surgeryInform1
                },
                {
                    path: '/surgeryInform2',
                    component: surgeryInform2
                }

            ]
        },
        
        
        {
            path: '/medical',
            name: 'medical',
            component: medical
        },
        {
            path: '/medicalDetail',
            name: 'medicalDetail',
            component: medicalDetail,
            children:[
                {
                    path: '/',
                    component: medicalInform1
                },
                {
                    path: '/medicalInform1',
                    component: medicalInform1
                },
                {
                    path: '/medicalInform2',
                    component: medicalInform2
                }

            ]
        },
        {
            path: '/Img',
            name: 'Img',
            component: Img
        },
        {
            path: '/ImgDetail',
            name: 'ImgDetail',
            component: ImgDetail,
            children:[
                {
                    path: '/',
                    component: ImgInform1
                },
                {
                    path: '/ImgInform1',
                    component: ImgInform1
                },
                {
                    path: '/ImgInform2',
                    component: ImgInform2
                }

            ]
        },
        {
            path: '/prescription',
            name: 'prescription',
            component: prescription
        },
        {
            path: '/prescriptionDetail',
            name: 'prescriptionDetail',
            component: prescriptionDetail,
            children:[
                {
                    path: '/',
                    component: prescriptionInform
                },
                {
                    path: '/prescriptionInform',
                    component: prescriptionInform
                }

            ]
        },
        
        {
            path: '/doctorAdvice',
            name: 'doctorAdvice',
            component: doctorAdvice,
        },
        {
            path: '/adviceDetail',
            name: 'adviceDetail',
            component: adviceDetail,
            children:[
                {
                    path: '/',
                    component: adviceInform
                },
                {
                    path: '/adviceInform',
                    component: adviceInform
                }
               
            ]
        },
        {
            path: '/recordDetails',
            name: 'recordDetails',
            component: recordDetails,
            children:[
                {
                    path: '/',
                    component: recordInformation
                },
                {
                    path: '/recordInformation',
                    component: recordInformation
                },
                {
                    path: '/treatment',
                    component: treatment
                }
                ]
        },
        // {
        //     path: '/recordInformation',
        //     name: 'recordInformation',
        //     component: recordInformation
        // },
        // {
        //     path: '/treatment',
        //     name: 'treatment',
        //     component: treatment
        // },
        {
        path: '/uploudRecords',
        name: 'uploudRecords',
        component: uploudRecords
         },
        {
            path: '/outpatientRecords',
            name: 'outpatientRecords',
            component: outpatientRecords
        },
        {
            path: '/outpatient',
            name: 'outpatient',
            component: outpatient
        },
        {
            path: '/records',
            name: 'records',
            component: records
        },
        {
            path: '/report',
            name: 'report',
            component: report
        },
        {
            path: '/department',
            name: 'department',
            component: department
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        // {
        //     path: '/',
        //     name: 'Login',
        //     component: Login
        // },

        {
            path: '/Plant',
            name: 'Plant',
            component: Plant
        },
        {
            path: '/HealthManage',
            name: 'HealthManage',
            component: HealthManage
        },
        {
            path: '/CheckReport',
            name: 'CheckReport',
            component: CheckReport
        },
        {
            path: '/UpReport',
            name: 'UpReport',
            component: UpReport
        },
        {
            path: '/ReportDetail/:id',
            name: 'ReportDetail',
            component: ReportDetail
        },
        {
            path: '/Survey',
            name: 'Survey',
            component: Survey
        },
        {
            path: '/BaseQuestion/:id/:status',
            name: 'BaseQuestion',
            component: BaseQuestion
        },
        {
            path: '/Intervention',
            name: 'Intervention',
            component: Intervention
        },
        {
            path: '/InterventionDetail/:id/:title/:dId',
            name: 'InterventionDetail',
            component: InterventionDetail
        },
        {
            path: '/Follow',
            name: 'Follow',
            component: Follow
        },
        {
            path: '/FollowDetail/:id/:type',
            name: 'FollowDetail',
            component: FollowDetail
        },
        {
            path: '/Monitoring',
            name: 'Monitoring',
            component: Monitoring
        },
        {
            path: '/MonitoringDetail/:id',
            name: 'MonitoringDetail',
            component: MonitoringDetail
        },
        {
            path: '/DataInput/:id',
            name: 'DataInput',
            component: DataInput
        },
        {
            path: '/MemberInfo',
            name: 'MemberInfo',
            component: MemberInfo
        },
        {
            path: '/MyAssistant',
            name: 'MyAssistant',
            component: MyAssistant
        },
        {
            path: '/MyDoctor',
            name: 'MyDoctor',
            component: MyDoctor
        },
        {
            path: '/FamilyMember',
            name: 'FamilyMember',
            component: FamilyMember
        },
        {
            path: '/AddMember/:id',
            name: 'AddMember',
            component: AddMember
        },
        {
            path: '/MyWallet',
            name: 'MyWallet',
            component: MyWallet
        },
        {
            path: '/MyOrder',
            name: 'MyOrder',
            component: MyOrder
        },
        {
            path: '/NowPay/:money/:title/:id/:type/:orderno',
            name: 'NowPay',
            component: NowPay
        },
        {
            path: '/Disclaimer',
            name: 'Disclaimer',
            component: Disclaimer
        },
        {
            path: '/ChargeAsk',
            name: 'ChargeAsk',
            component: ChargeAsk
        },
        {
            path: '/ServerAsk',
            name: 'ServerAsk',
            component: ServerAsk
        },
        {
            path: '/Pay/:id/:money/',
            name: 'Pay',
            component: Pay
        },
        {
            path: '/repay/:id/:orderno/:money',
            name: 'repay',
            component: repay
        },
        {
            path: '/OrderDetail/:type/:id/:comment',
            name: 'OrderDetail',
            component: OrderDetail
        },
        {
            path: '/Evaluate/:id',
            name: 'Evaluate',
            component: Evaluate
        },
        {
            path: '/MyEvaluate',
            name: 'MyEvaluate',
            component: MyEvaluate
        },
        {
            path: '/MyFavorite',
            name: 'MyFavorite',
            component: MyFavorite
        },
        {
            path: '/EvaluateDetail/:id',
            name: 'EvaluateDetail',
            component: EvaluateDetail
        },
        {
            path: '/Service',
            name: 'Service',
            component: Service
        },
        {
            path: '/TelConsult/:status/:id',
            name: 'TelConsult',
            component: TelConsult
        },
        {
            path: '/VideoConsult/:status/:id',
            name: 'VideoConsult',
            component: VideoConsult
        },
        {
            path: '/PicConsult/:status/:id',
            name: 'PicConsult',
            component: PicConsult
        },
        {
            path: '/WithdrawalsHaveCard/:id/:status',
            name: 'WithdrawalsHaveCard',
            component: WithdrawalsHaveCard
        },
        {
            path: '/ChooseCard',
            name: 'ChooseCard',
            component: ChooseCard
        },
        {
            path: '/Recharge',
            name: 'Recharge',
            component: Recharge
        },
        {
            path: '/OnlineRecharge',
            name: 'OnlineRecharge',
            component: OnlineRecharge
        },
        {
            path: '/OfflineRecharge',
            name: 'OfflineRecharge',
            component: OfflineRecharge
        },
        {
            path: '/OfflineRemittance/:money/:id',
            name: 'OfflineRemittance',
            component: OfflineRemittance
        },
        {
            path: '/PaySuccess/:money',
            name: 'PaySuccess',
            component: PaySuccess
        },
        {
            path: '/PayFail',
            name: 'PayFail',
            component: PayFail
        },
        {
            path: '/AddCard',
            name: 'AddCard',
            component: AddCard
        },
        {
            path: '/NotVip',
            name: 'NotVip',
            component: NotVip
        },
        {
            path: '/MyData',
            name: 'MyData',
            component: MyData
        },
        {
            path: '/My',
            name: 'My',
            component: My
        },
        {
            path: '/FindPassword',
            name: 'FindPassword',
            component: FindPassword
        },
        {
            path: '/ServerClause',
            name: 'ServerClause',
            component: ServerClause
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/ChooseDoctor',
            name: 'ChooseDoctor',
            component: ChooseDoctor
        },
        {
            path: '/DoctorDetail/:id',
            name: 'DoctorDetail',
            component: DoctorDetail
        },
        {
            path: '/EvaluateList/:id',
            name: 'EvaluateList',
            component: EvaluateList
        },
        {
            path: '/EvaluateInfo/:id',
            name: 'EvaluateInfo',
            component: EvaluateInfo
        },
        {
            path: '/DoctorData/:id',
            name: 'DoctorData',
            component: DoctorData
        },
        {
            path: '/FillDisease/:type/:id',
            name: 'FillDisease',
            component: FillDisease
        },
        {
            path: '/ConsultPayTel/:id',
            name: 'ConsultPayTel',
            component: ConsultPayTel
        },
        {
            path: '/ConsultPayPic/:id',
            name: 'ConsultPayPic',
            component: ConsultPayPic
        },
        {
            path: '/ConsultPayVideo/:id',
            name: 'ConsultPayVideo',
            component: ConsultPayVideo
        },
        {
            path: '/ConsultPay/:id',
            name: 'ConsultPay',
            component: ConsultPay
        },
        {
            path: '/ConsultPayNearby/:id',
            name: 'ConsultPayNearby',
            component: ConsultPayNearby
        },
        {
            path: '/PressureAssessment',
            name: 'PressureAssessment',
            component: PressureAssessment
        },
        {
            path: '/OtherAssessment/:id/:title',
            name: 'OtherAssessment',
            component: OtherAssessment
        },
        {
            path: '/BloodFatAssessment',
            name: 'BloodFatAssessment',
            component: BloodFatAssessment
        },
        {
            path: '/BloodSugarAssessment',
            name: 'BloodSugarAssessment',
            component: BloodSugarAssessment
        },
        {
            path: '/HealthAssessment',
            name: 'HealthAssessment',
            component: HealthAssessment
        },
        {
            path: '/RiskAssessment/:id/:title',
            name: 'RiskAssessment',
            component: RiskAssessment
        },
        {
            path: '/CardiovascularProfile',
            name: 'CardiovascularProfile',
            component: CardiovascularProfile
        },
        {
            path: '/ReportIntervention',
            name: 'ReportIntervention',
            component: ReportIntervention
        },
        {
            path: '/ReportInterventionDetail/:id',
            name: 'ReportInterventionDetail',
            component: ReportInterventionDetail
        },
        {
            path: '/TrendMap/:title/:reId',
            name: 'TrendMap',
            component: TrendMap
        },
        {
            path: '/TestData/:id/:fieldId/:title',
            name: 'TestData',
            component: TestData
        },
        {
            path: '/AddBaseQuestion/:id/:status/:type',
            name: 'AddBaseQuestion',
            component: AddBaseQuestion
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message
        },
        {
            path: '/im/:id',
            name: 'im',
            component: im
        },
        {
            path: '/MsgDetail/:id',
            name: 'MsgDetail',
            component: MsgDetail
        },
        {
            path: '/setUp',
            name: 'setUp',
            component: setUp
        },
        {
            path: '/MySignDoctor',
            name: 'MySignDoctor',
            component: MySignDoctor
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/FeedBack',
            name: 'FeedBack',
            component: FeedBack
        },
        {
            path: '/demo',
            name: 'demo',
            component: demo
        },
        {
            path: '/huimeiList',
            name: 'huimeiList',
            component: huimeiList
        },
        {
            path: '/DoctorMsg/:id',
            name: 'DoctorMsg',
            component: DoctorMsg
        },
    ]
})