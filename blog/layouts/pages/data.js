export const departmentData = {
  deptName: "TSG工業軟體處智慧園區部",
  // 新增所屬法人
  legalEntity: "深圳富聯富桂精密工業有限公司",
  reason:"新電腦申請",
  location:"星河辦公室",
  principal: {
    name: "王敏",
    level: "師11",
    job: "處級主管",
    empId: "A0248596",
    email: "emily.m.wang@fi-foxconn.com"
  },
  // 修改為與principal統一結構
  deviceManager: {
    name: "黃捷勉",
    level: "師5",
    job: "裝置管理員",
    empId: "F1337604",
    email: ""
  },
  hrManager: {
    name: "人事小王",
    level: "",
    job: "人事專員",
    empId: "",
    email: ""
  },
 memberList: [
    {
      id: 1,
      name: "鄧彬彬",
      empId: "F1340618",
      type: "筆記本-1",
      model: "HP EliteBook 6 G1i 14",
      sn: "5CD6141LPX"
    },
    {
      id: 2,
      name: "劉湘華",
      empId: "F1334150",
      type: "筆記本",
      model: "HP ZBook 8 G1i 14",
      sn: "5CG6272DTC"
    },
    {
      id: 3,
      name: "王鵬",
      empId: "F1339821",
      type: "筆記本",
      model: "HP ZBook 8 G1i 14",
      sn: "5CG6272DS7"
    },
    {
      id: 4,
      name: "李逸",
      empId: "F1334620",
      type: "筆記本",
      model: "HP ZBook 8 G1i 14",
      sn: "5CG6272DS8"
    },
    {
      id: 5,
      name: "朱申",
      empId: "F1337377",
      type: "筆記本",
      model: "HP ZBook 8 G1i 14",
      sn: "5CG6272DT7"
    },
    {
      id: 6,
      name: "李解濤",
      empId: "F4367281",
      type: "筆記本",
      model: "HP ZBook 8 G1i 14",
      sn: "CG6272DSJ5"
    }
  ]
};

// 稽核名單列表（獨立匯出）
// 稽核人員崗位清單（和單據稽核欄一一對應，增加工號、郵箱）
export const approverList = [
  { id: 101, name: "王總", empId: "M001", email: "wang.zong@company.com", job: "總經理核准" },
  { id: 102, name: "徐洪涛", empId: "F1338240", email: "chen.sa@company.com", job: "資安常委核准" },
  { id: 103, name: "陈世明", empId: "F1651159", email: "liu.it@company.com", job: "IT主管核准" },
  { id: 103, name: "赵刚", empId: "F1396100", email: "liu.it@company.com", job: "IT主管核准" },
  { id: 104, name: `${departmentData.principal.name}`, empId: `${departmentData.principal.empId}`, email:`${departmentData.principal.email}`, job: "部門主管核准" },
  { id: 105, name: "吴凯忠", empId: "F1396030", email: "li.asset@company.com", job: "資產管理員" },
  { id: 105, name: "张明杰", empId: "F1339884", email: "li.asset@company.com", job: "資產管理員" }
];

// 新增這一行！相容舊元件 import {memberList}
export const memberList = departmentData.memberList;

export function getMemberById(id) {
  const member = departmentData.memberList.find(item => item.id === id);
  if (!member) return null;
  return {
    ...member,
    deptName: departmentData.deptName,
    principal: departmentData.principal,
    deviceManager: departmentData.deviceManager,
    hrManager: departmentData.hrManager
  };
}

export function getMemberList() {
  return departmentData.memberList;
}