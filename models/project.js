const mongoose = require('mongoose');
const config = require('../config/database');

//ELECTRICAL SCHEMA
var electrucalSchema = new mongoose.Schema({
  itemNumber: String,
  dateCreate: { type: Date, default: Date.now },
  revision: {type: String, default: 'A'},
  quantity: {type: Number, default: 5},
  equipmentType: {
    type: Array,
    'default': ['UTILITY', 'TRANSFORMER', 'SWITCHGEAR', 'MCC', 'VFD', 'DISTRIBUTION PANEL', 'MOTOR', 'MOV',
      'HEATER', 'LIGHT', 'RECEPTACLE', 'UPS CHARGER', 'CONTROL PANEL', 'JUNCTION BOX'
    ],
  },
  selectedEquipmentType: {type: String, default: 'UTILITY'},
  pidDrawing: [{type: String}],
  selectedPidDrawing: String,
  layoutDrawing: [{type: String}],
  selectedLayoutDrawing: String,
  sldDraving: [{ type: String}],
  selectedSldDraving: String,
  equipmentTag: {type: String, default: "New Electrical"},
  chiildList: {
    type: Array,
    'default': []
  },
  selectedParentTag: String,
  equipmentNotes: String,
  locationArea: [{type: String}],
  selectedLocationArea: String,
  equipmentDescription: [{type: String}],
  selectedEquipmentDescription: String,
  //clone tag
  //new tag
  length: Number,
  depth: Number,
  height: Number,
  weight: Number,
  coordForX: Number,
  coordForY: Number,
  coordForZ: Number,
  heatDissipation: Number,
  scenarioFirstLoadFactor: {type: Number, default: 0},
  powerSystem: {
    type: Array,
    'default': ['AC-3P', 'AC-1P', 'DC']
  },
  selectedPowerSystem: {type: String, default: 'AC-3P'},
  voltage: {
    type: Array,
    'default': [
        {name: '4160 VAC', powerSystemType: 'AC-3P'},
        {name: '600 VAC', powerSystemType: 'AC-3P'},
        {name: '480 VAC', powerSystemType: 'AC-3P'},
        {name: '208 VAC', powerSystemType: 'AC-3P'},
        {name: '2400 VAC', powerSystemType: 'AC-1P'},
        {name: '347 VAC', powerSystemType: 'AC-1P'},
        {name: '277 VAC', powerSystemType: 'AC-1P'},
        {name: '240 VAC', powerSystemType: 'AC-1P'},
        {name: '120 VAC', powerSystemType: 'AC-1P'},
        {name: '125 VDC', powerSystemType: 'DC'},
        {name: '48 VDC', powerSystemType: 'DC'},
        {name: '12 VDC', powerSystemType: 'DC'},
        {name: '4-20 mA', powerSystemType: 'DC'},
        {name: '1-5 mVDC', powerSystemType: 'DC'}
    ]
  },
  selectedVoltage: {
    type: Object,
    'default': {
      name: '4160 VAC',
      powerSystemType: 'AC-3P'
    }
  },
  totalPF: {type: Number, default: 0},
  totalEFF: {type: Number, default: 0},
  nameplateRating: {type: Number, default: 0},
  units: {
    type: Array,
    'default': ['A', 'HP', 'KW', 'KVA']
  },
  selectedUnits: {type: String, default: 'A'},
  motorSF:{
    type: Array,
    'default': [1, 1.15, 1.25, 1.35]
  },
  selectedMotorSF: {type: Number, default: 1},
  motorCode: {
    type: Array,
    'default': [
      "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "U", "V"
    ]
  },
  selectedMotorCode: {type: String, default: "A"},
  sccRating: {
    type: Array,
    'default': [
      "10 KA", "18 KA", "22 KA", "42 KA", "50 KA", "65 KA", "100 KA"
    ]
  },
  selectedSccRating: {type: String, default: "10 KA"},
  enclosureRating: {
    type: Array,
    'default': [
      "NEMA 1", "NEMA 2", "NEMA 3", "NEMA 3R", "NEMA 4", "NEMA 4X", "NEMA 12", "NEMA 13", "WPI", "WPII", "TEFC", "TEFV"
    ]
  },
  selectedEnclosureRating: {type: String, default: "NEMA 1"},
  loadFactor: {type: Number, default: 0},
  loadDuty: {
    type: Array,
    'default': [
      "Continuous", "Intermitent", "Spare"
    ]
  },
  selectedLoadDuty: {type: String, default: "Continuous"},
  ambientTemp: {type: Number},
  terminationTemp: 
  {
    type: Array,
    'default': [
      75, 90
    ]
  },
  selectedTerminationTemp: {type: Number},
  operationTempMin: {type: Number},
  operationTempMax: {type: Number},
  insulDescription: {
    type: Array,
    'default': [
      "Class A(105 \u00B0С)", "Class B(130 \u00B0С)", "Class F(155 \u00B0C)", "Class A(180 \u00B0C)"
    ]
  },
  selectedInsulDescription: {type: String},
  hazlocClass: {
    type: Array,
    'default': ["General", "Class 1", "Class 2", "Class 3"]
  },
  selectedHazlocClass: String,
  hazlocZone:  {
    type: Array,
    'default': ["Zone 0", "Zone 1", "Zone 2", "Division 1", "Division 2"]
  },
  selectedHazlocZone: String,

  hazlocGroup: {
    type: Array,
    'default': ["Group IIA", "Group IIB", "Group IIA"]
  },
  selectedHazlocGroup: String,
  hazlocTemperature: {
    type: Array,
    'default': ["T1 450 \u00B0С", "T2 300 \u00B0С", "T2A 280 \u00B0С", "T2B 260 \u00B0С", "T2C 230 \u00B0С", "T2D 215 \u00B0С",
      "T3 200 \u00B0С", "T3A 180 \u00B0С", "T3B 165 \u00B0С", "T3C 160 \u00B0С", "T4 135 \u00B0С", "T4A 120 \u00B0С", "T5 100 \u00B0С", "T6 85 \u00B0С"
    ]
  },
  selectedHazlocTemperature: String,

  totalConectedFla: {type: Number, default: 0},
  totalConectedKW: {type: Number, default: 0},
  totalConnectedKVAR: {type: Number, default: 0},
  totalConnectedKVA: {type: Number, default: 0},
  totalDemandFLA: {type: Number, default: 0},
  totalDemandKW: {type: Number, default: 0},
  totalDemandKVAR: {type: Number, default: 0},
  totalDemandKVA: {type: Number, default: 0},
  scenarioFirstFLA: {type: Number, default: 0},
  scenarioFirstKW: {type: Number, default: 0},
  scenarioFirstKVAR: {type: Number, default: 0},
  scenarioFirstKVA: {type: Number, default: 0},
});

//CABLE SHEMA
const cableShema = mongoose.Schema({
    //INFO PART
  cableTagFirst: String,
  cableTagSecond: String,
  cableTagThird: String,
  cableTagFourth: String,
  cableTagIndex: {
    type: Array
  },
  selectedCableTagIndex: String,
  //selectedCableFromArray
  selectedCableFrom: String,
  //selectedCableToArray
  selectedCableTo: String,
  powerSystem: {
    type: Array,
    'default': ['AC-3P', 'AC-1P', 'DC']
  },
  selectedPowerSystem: {type: String, default: 'AC-3P'},
  conductorMaterial: {
    type: Array,
    'default': [
      {name: '', powerSystemType: 'AC-3P'},
      {name: 'Aluminium', powerSystemType: 'AC-3P'},
      {name: 'Copper', powerSystemType: 'AC-3P'},
      {name: '', powerSystemType: 'AC-1P'},
      {name: 'Copper', powerSystemType: 'AC-1P'},
      {name: 'Aluminium', powerSystemType: 'AC-1P'},
      {name: '', powerSystemType: 'DC'},
      {name: 'Copper', powerSystemType: 'DC'},
      {name: 'Aluminium', powerSystemType: 'DC'}
    ]
  },
  selectedConductorMaterial: {
    type: Object,
    'default': {
      name: '',
      powerSystemType: ''
    }
  },
  voltage: {
    type: Array,
    'default': [
        {name: '4160 VAC', powerSystemType: 'AC-3P'},
        {name: '600 VAC', powerSystemType: 'AC-3P'},
        {name: '480 VAC', powerSystemType: 'AC-3P'},
        {name: '208 VAC', powerSystemType: 'AC-3P'},
        {name: '2400 VAC', powerSystemType: 'AC-1P'},
        {name: '347 VAC', powerSystemType: 'AC-1P'},
        {name: '277 VAC', powerSystemType: 'AC-1P'},
        {name: '240 VAC', powerSystemType: 'AC-1P'},
        {name: '120 VAC', powerSystemType: 'AC-1P'},
        {name: '125 VDC', powerSystemType: 'DC'},
        {name: '48 VDC', powerSystemType: 'DC'},
        {name: '12 VDC', powerSystemType: 'DC'},
        {name: '4-20 mA', powerSystemType: 'DC'},
        {name: '1-5 mVDC', powerSystemType: 'DC'}
    ]
  },
  selectedVoltage: {
    type: Object,
    'default': {
      name: '4160 VAC',
      powerSystemType: 'AC-3P'
    }
  },
  serviceArray: {
    type: Array,
    'default': ['AC POWER', 'AC CONTROL', 'DC POWER', 'DC CONTROL', 'COMMS']
  },
  selectedService: String,
  maxAmbientTempArray: {
    type: Array,
    'default': ["35 \u00B0С", "40 \u00B0С", "45 \u00B0С", "50 \u00B0С", "55 \u00B0С", "60 \u00B0С", "65 \u00B0С",
      "75 \u00B0С", "80 \u00B0С", "90 \u00B0С", "100 \u00B0С", "110 \u00B0С", "120 \u00B0С", "130 \u00B0С", "140 \u00B0С"
    ]
  },
  selectedMaxAmbientTemp: String,

    //PHYSICAL PART
  cableTypeArrayArray: {
    type: Array,
    'default': ["TECK 90", "ACIC", "AC 90", "TRAY CABLE", "TW", "TWU"]
  },
  selectedCableType: String,
  insulationVoltageArray: {
    type: Array,
    'default': ["5000 V", "1000 V", "600 V"]
  },
  selectedInsulationVoltage: String,
  insulationRatingArray: {
    type: Array,
    'default': ["100 %", "130 %"]
  },
  selectedInsulationRating: String,
  conductorInsulationTypeArray: {
    type: Array,
    'default': ["EPR", "Nylon", "AC 90", "TRAY CABLE", "TW"]
  },
  selectedConductorInsulationType: String,
  insulationTemperatureRatingArray: {
    type: Array,
    'default': [
        {name: '60 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '75 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '90 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '110 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '125 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '200 \u00B0С', conductorMaterialType: 'Copper'},
        {name: '', conductorMaterialType: 'Aluminium'}
    ]
  },
  selectedInsulationTemperatureRating: {
    type: Object,
    'default': {
      name: '60 \u00B0С',
      conductorMaterialType: 'Copper'
    }
  },
  shieldArray: {
    type: Array,
    'default': ["Shielded", "Not Shielded"]
  },
  selectedShield: String,
  armourArray: {
    type: Array,
    'default': ["Interlocking ALUM", "Interlocking STEEL", "Metal CLAD"]
  },
  selectedArmour: String,
  kgPerMetr: Number,
  outJacket: String,
  jacketColorArray: {
    type: Array,
    'default': ["Yellow", "Orange", "Black", "Blue", "Gray", "Red"]
  },
  selectedJacketColor: String,
  racewayArray: {
    type: Array,
    'default': ["Magnetic", "Non-Magnetic"]
  },
  selectedRaceway: String,
  ftRatingArray: {
    type: Array,
    'default': ["FT1", "FT4", "FT6"]
  },
  selectedFtRating: String,
  wireColorArray: {
    type: Array,
    'default': ["Black", "RD/BK/BL", "OR/BR/YL", "WT/BL", "RD/WT/BL"]
  },
  selectedWireColor: String,
  approvalArray: {
    type: Array,
    'default': ["CSA", "CSA, HL"]
  },
  selectedApproval: String,
  od: String,
  itemNum: Number,
  itemTypeArray: {
    type: Array,
    'default': ["C", "PR", "TR", "ST", "CAT5", "CAT6", "DNET", "COAX"]
  },
  selectedItemType: String,
  cableSizeArray: {
    type: Array,
    'default': ["22", "20", "18", "16", "14", "12", "10", "8", "6", "4", "3", "2", "1", "1/0", "2/0", "3/0", "4/0", "250", "300", "350", "400", "500", "600", "750"]
  },
  selectedCableSize: String,

  //CONFIGURATION
  installMethodArray: {
    type: Array,
    'default': ["TRAY", "SURFACE", "U/G", "FREE AIR", "CONDUIT", "SLEEVE"]
  },
  selectedInstallMethod: String,
  spacingArray: {
    type: Array,
    'default': ["100%", "25% < 100%", "0% < 25%", "Free Air"]
  },
  selectedSpacing: String,
  spacingCorrectionArray: {
    type: Array,
    'default': ["1", "T5D 0.93", "T5D 0.90", "T5D 0.89", "T5D 0.87", "T5D 0.84", "T5D 0.83", "T5D 0.82", "T5D 0.80", "T5D 0.79", "T5D 0.76", "T5D 0.75", "T5D 0.74", "T5D 0.70", "T5D 0.60", "T5D 0.50"]
  },
  selectedSpacingCorrection: String,
  tempCorrection: Number, //maybe number
  cecArray: {
    type: Array,
    'default': ["75 \u00B0С", "90 \u00B0С"]
  },
  selectedCec: String,
  correctedCondAmp: String, ////maybe number
  numberOfRunsPerPhase: String, ////maybe number
  feederAmpacity: String, ////maybe number
  //ALARM calculated value
  cableLenth: Number, ////maybe number
  voltageDropPercent: {type: Number, default: 0}, ////maybe number
  //

  //LOAD
  connectedFLA: Number,
  ampacityMultiplierArray: {
    type: Array,
    'default': [1, 1.25, 1.35]
  },
  selectedAmpacityMultiplier: Number,
  minCondAmp: String, ////maybe number
  condAmpacity: String, ////maybe number
  ocAmpRating: String, ////maybe number
  internalNotes: String
});

const sldScheduleShema = mongoose.Schema({
  //Equipment Info
  selectedMajorEquipmentDevice: String, //первый элемент
  selectedEquipmentDescriptionForMajorEquipmentDevice: String, //второй элемент
  selectedMajorEquipmentTag: String, //третий элемент
  selectedEquipmentDescriptionForMajorEquipmentTag: String, //четвертый элемент
  majorEquipmentDeviceTag: String, //название проекта
  selectedSystemVoltage: String,  //вольтаж
  //Incoming Section
  incomer: {
    type: Boolean,
    'default': false
  },
  lightningArrestor: {
    type: Boolean,
    'default': false
  },
  feederEntry: {
    type: Array,
    'default': ["Top", "Button"]
  },
  selectedFeederEntry: String,
  surgeProtection: {
    type: Boolean,
    'default': false
  },
  //Central Part
  ocDevice: {
    type: Array,
    'default': ["TMCB", "HMCP", "FUSE", "MV52", "MCCB"]
  },
  selectedOCDevice: String,
  contactorType: {
    type: Array,
    'default' : ["FVNR", "FVR", "CONTACTOR 2P", "CONTACTOR 3P", "CONTACTOR 4P", "RVAT", "RVSS", "VFD"]
  },
  selectedContactorType: String,
  CPTQTY: {
    type: Array,
    'default': [0, 1]
  },
  selectedCPTQTY: Number,
  CTQTY: {
    type: Array,
    'default': [1, 2, 3]
  },
  selectedCTQTY: Number,
  tripRating: Number,
  contactorSize: {
    type: Array,
    'default': ['00', '0', '1', '2', '3', '4', '5', '6']
  },
  selectedContactorSize: String,
  CPTVoltage: {
    type: Array,
    'default': ["600-120v", "480-120v"]
  },
  selectedCPTVoltage: String,
  CTRatio: {
    type: Array,
    'default': ["15/5A", "20/5A", "30/5A", "50/5A", "75/5A", "100/5A", "150/5A", "200/5A", "250/5A", "300/5A", "400/5A", "500/5A", "600/5A", "750/5A", "1000/5A", "1500/5A", "2000/5A", "2500/5A", "3000/5A"]
  },
  selectedCTRatio: String,
  frameRating: {
    type: Array,
    'default': ["15A", "20A", "30A", "40A", "50A", "60A", "70A", "80A", "90A", "100A", "110A", "125A", "150A", "175A", "200A", "225A", "250A", "300A", "350A", "400A", "500A", "600A", "700A", "800A", "900A", "1000A", "1200A", "1400A", "1600A", "1800A", "2000A"]
  },
  selectedFrameRating: String,
  overloadType: {
    type: Array,
    'default': ["Classic", "Elec", "Elec+"]
  },
  selectedOverloadType: String,
  CPTRating: {
    type: Array,
    'default': ["100VA", "150VA", "200VA"]
  },
  selectedCPTRating: String,
  CTAccuracy: {
    type: Array,
    'default': [1.2, 0.6, 0.3]
  },
  selectedCTAccuracy: Number,
  fuseRating: {
    type: Array,
    'default': ["C", "J", "RK1", "2R", "3R", "4R", "5R", "6R", "9R", "12R", "10E", "15E", "20E", "25E", "30E", "40E", "50E", "65E", "80E", "100E"]
  },
  selectedFuseRating: String,
  overloadSize: Number,
  VTQTY: {
    type: Array,
    'default': [""]
  },
  selectedVTQTY: String,
  GFCTRatio: {
    type: Array,
    'default': ["50/0.025A"] //TODO уточнить у Грега в этом поле только одно значение или значения в этом поле зависят от других полей
  },
  selectedGFCTRatio: String,
  SwitchRating: {
    type: Array,
    'default': [""] //TODO уточнить у Грега в этом поле только одно значение или значения в этом поле зависят от других полей
  },
  selectedSwitchRating: String, //TODO зависит от предыдущего поля
  VTVoltage: {
    type: Array,
    'default': ["600-120v", "480-120v"]
  },
  selectedVTVoltage: String,
  ShuntCoil: {
    type: Array,
    'default': ["1-120VAC", "1-125VDC", "1-24VDC"]
  },
  selectedShuntCoil: String,
  VTAccuracy: {
    type: Array,
    'default': [1.2, 0.6, 0.3]
  },
  selectedVTAccuracy: Number,
  KirkKey: {
    type: Array,
    'default': [0, 1, 2]
  },
  selectedKirkKey: Number,
  GroundStud: {
    type: Array,
    'default': [0, 1]
  },
  selectedGroundStud: Number,
  TransformerPR: {
    type: Boolean,
    'default': false
  },
  IndicatingLights: {
    type: Array,
    'default': ["R/G", "R/G/A"]
  },
  selectedIndicatingLights: String,
  NOAuxContact: {
    type: Array,
    'default': [1, 2, 3, 4, 5]
  },
  selectedNOAuxContact: Number,
  PQM: {
    type: Boolean,
    'default': false
  },
  MotorPR: {
    type: Boolean,
    'default': false
  },
  SpaceHeater: Number,
  NCAuxContact: {
    type: Array,
    'default': [1, 2, 3, 4, 5]
  },
  selectedNCAuxContact: Number,
  FeederPR: {
    type: Boolean,
    'default': false
  },
  NGRRelay: {
    type: Boolean,
    'default': false
  },
  HeaterCircuit: {
    type: Boolean,
    'default': false
  },
  InterposRelay: {
    type: Array,
    'default': [1, 2, 3, 4, 5]
  },
  selectedInterposRelay: Number,
  // PDP Detail
  firstPanelValue: {
    type: Array,
    'default': ['asdad']
  },
  selectedFirstPanelValue: String,
  secondPanelValue: {
    type: Array,
    'default': ['vcxxv']
  },
  selectedSecondPanelValue: String,
  thirdPanelValue: {
    type: Array,
    'default': ['zxc']
  },
  selectedThirdPanelValue: String,
  CircuitNumbers: Number,
  CFG: {
    type: Boolean,
    'default': false
  },
  //Local Switch/PB
  firstValueLocalSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedFirstValueLocalSwitchPB: String,
  secondValueLocalSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedSecondValueLocalSwitchPB: String,
  thirdValueLocalSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedThirdValueLocalSwitchPB: String,
  fourthValueLocalSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedFourthValueLocalSwitchPB: String,
  //Field Switch/PB
  firstValueFieldSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedFirstValueFieldSwitchPB: String,
  secondValueFieldSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedSecondValueFieldSwitchPB: String,
  thirdValueFieldSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedThirdValueFieldSwitchPB: String,
  fourthValueLocalFieldSwitchPB: {
    type: Array,
    'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
  },
  selectedFourthValueLocalFieldSwitchPB: String
});


//PROJECT SHEMA
const ProjectSchema = mongoose.Schema({
  title: String,
  electricals: [electrucalSchema],
  cabels: [cableShema],
  sldschedules: [sldScheduleShema]
  //date_create: { type: Date, default: Date.now },
  //updated_date: { type: Date, default: Date.now },
});
  
const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.addProject = function(newProject, callback){
  newProject.save(callback);
}