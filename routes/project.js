const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Project = require('../models/project');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//PROJECTS END POINTS
/*GET ALL Projects*/
router.get('/', function(req, res){
  if(req.params){
    Project
      .find({}, "title", function(err, project){
        if(err)
          res.send(err);
          res.json(project);
      });
  } else {
    sendJSONresponse(res, 404, {
      "message": "No projects in request"
    });
  }
});

/*CREATE Project*/
router.post('/project-create', (req, res, next) => {
  let newProject = new Project({
    title: req.body.title
    //text: req.body.text
  });
  Project.addProject(newProject, (err, project) => {
    if(err){
      res.json({success: false, msg:'Failed to create project'});
    } else {
      res.json({success: true, msg:'Project created'});
    }
  });
});

/*UPDATE Project*/
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if(err){
      res.json({success: false, msg:'Failed to update project'});
    } else {
      res.json({success: true, msg:'Project updated'});
    }
  });
});

/* DELETE Project */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if(err){
      res.json({success: false, msg:'Failed to delete project'});
    } else {
      res.json({success: true, msg:'Project deleted'});
    }
  });
});

/*GET Item Project*/
router.get('/:id', function (req, res) {
  if(req.params && req.params.id){
    Project
    .findById(req.params.id)
    .exec(function(err, project) {
      if(!project){
        res.json({success: true, msg:'Get item project'});
          return;
      } else if (err){
        res.json({success: false, msg:'Failed get project'});
      }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get project'});
  }
});

//ELECTRICALS END POINT
/* GET ALL Electricals */
router.get('/:id/electricals',function (req, res) {
  if(req.params){
    Project
    .findById(req.params.id, 'electricals._id electricals.dateCreate electricals.revision electricals.equipmentTag electricals.selectedEquipmentType electricals.selectedVoltage '+
    'electricals.selectedPowerSystem electricals.nameplateRating electricals.selectedUnits electricals.totalPF electricals.totalEFF electricals.selectedMotorSF '+
    'electricals.selectedMotorCode electricals.selectedLoadDuty electricals.selectedParentTag electricals.totalConectedFla electricals.totalConectedKW '+
    'electricals.totalConnectedKVAR electricals.totalConnectedKVA electricals.totalDemandFLA electricals.totalDemandKW electricals.totalDemandKVAR electricals.totalDemandKVA '+
    'electricals.scenarioFirstFLA electricals.scenarioFirstKW electricals.scenarioFirstKVAR electricals.scenarioFirstKVA electricals.loadFactor electricals.scenarioFirstLoadFactor '+
    'electricals.chiildList')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get electrical item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get electrical item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

router.get('/:id/electrical',function (req, res){
  if(req.params){
    Project
    .findById(req.params.id, 'electricals.equipmentTag electricals.totalConectedFla electricals.coordForX electricals.coordForY electricals.coordForZ')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get electrical item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get electrical item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

router.get('/:id/electrical-for-sld',function (req, res){
  if(req.params){
    Project
    .findById(req.params.id, 'electricals.equipmentTag electricals.selectedEquipmentDescription electricals.selectedVoltage')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get electrical item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get electrical item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

/* GET SINGLE Electrical BY ID */
router.get('/:id/electricals/:electricalid', function(req, res) {
  if (req.params && req.params.id && req.params.electricalid) {
    Project
      .findById(req.params.id)
      .select('electricals')
      .exec(
        function(err, project) {
          var response, electrical;
          if (!project) {
            res.json({success: false, msg:'Failed get electrical item'});
            return;
          } else if (err) {
            res.json({success: false, msg:'Failed get electrical item'});
            return;
          }
          if (project.electricals && project.electricals.length > 0) {
              electrical = project.electricals.id(req.params.electricalid);
            if (!electrical) {
              res.json({success: false, msg:'Failed get electrical item'});
            } else {
              response = {
                electrical
              };
              res.json(response);
            }
          } else {
            res.json({success: false, msg:'Failed get electrical item'});
          }
        }
    );
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

/* CREATE NEW Electrical */
router.post('/:id/electrical-create', function(req, res) {
  if (req.params.id) {
    Project
      .findById(req.params.id)
      .select('electricals')
      .exec(
        function(err, project) {
          if (err) {
            res.json({success: false, msg:'Failed get electrical item'});
          } else {
            if (!project) {
              res.json({success: false, msg:'Failed get electrical item'});
            } else {
              project.electricals.push({});
            project.save(function(err, project) {
              if (err) {
                res.json({success: false, msg:'Failed get electrical item'});
              } else {
                res.json(project.electricals);
            }
          });
        }
      }
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

/* UPDATE Electrical*/
router.patch('/:id/electrical-update/:electricalid', function(req, res) {
  if (req.params && req.params.id && req.params.electricalid) {
    Project
      .findById(req.params.id)
      .exec(
        function(err, project) {
          var response, electrical;
          electrical = project.electricals.id(req.params.electricalid);     
      //Equipment Entry
          //item number
          electrical.dateCreate = req.body.dateCreate;
          //console.log(electrical.dateCreate);
          electrical.quantity = req.body.quantity;
          electrical.revision = req.body.revision;
          electrical.equipmentType = req.body.equipmentType;
          electrical.selectedEquipmentType = req.body.selectedEquipmentType;
          electrical.pidDrawing = req.body.pidDrawing;
          electrical.selectedPidDrawing = req.body.selectedPidDrawing;
          electrical.layoutDrawing = req.body.layoutDrawing;
          electrical.selectedLayoutDrawing = req.body.selectedLayoutDrawing;
          electrical.sldDraving = req.body.sldDraving;
          electrical.selectedSldDraving = req.body.selectedSldDraving;
          electrical.equipmentTag = req.body.equipmentTag || 'New Electrical';
          electrical.locationArea = req.body.locationArea;
          electrical.selectedLocationArea = req.body.selectedLocationArea;
          electrical.equipmentDescription = req.body.equipmentDescription;
          electrical.selectedEquipmentDescription = req.body.selectedEquipmentDescription;
          electrical.selectedParentTag = req.body.selectedParentTag;
          //equipment notes
          electrical.length = req.body.length;
          electrical.depth = req.body.depth;
          electrical.height = req.body.height;
          electrical.weight = req.body.weight;
          electrical.coordForX = req.body.coordForX;
          electrical.coordForY = req.body.coordForY;
          electrical.coordForZ = req.body.coordForZ;
          electrical.heatDissipation = req.body.heatDissipation;
          electrical.scenarioFirstLoadFactor = req.body.scenarioFirstLoadFactor;     
      //General Rating
          electrical.selectedPowerSystem = req.body.selectedPowerSystem;
          electrical.voltage = req.body.voltage;
          electrical.selectedVoltage = req.body.selectedVoltage;
          electrical.totalPF = req.body.totalPF;
          electrical.totalEFF = req.body.totalEFF;
          electrical.nameplateRating = req.body.nameplateRating;          
          electrical.selectedUnits = req.body.selectedUnits;
          electrical.selectedMotorSF = req.body.selectedMotorSF;
          electrical.selectedMotorCode = req.body.selectedMotorCode;          
          electrical.selectedSccRating = req.body.selectedSccRating;
          electrical.selectedEnclosureRating = req.body.selectedEnclosureRating;
          electrical.loadFactor = req.body.loadFactor;
          electrical.selectedLoadDuty = req.body.selectedLoadDuty;
          electrical.ambientTemp = req.body.ambientTemp;
          electrical.selectedTerminationTemp = req.body.selectedTerminationTemp;
          electrical.operationTempMin = req.body.operationTempMin;
          electrical.operationTempMax = req.body.operationTempMax;
          electrical.selectedInsulDescription = req.body.selectedInsulDescription;
          electrical.selectedHazlocClass = req.body.selectedHazlocClass;
          electrical.hazlocZone = req.body.hazlocZone;
          electrical.selectedHazlocZone = req.body.selectedHazlocZone;
          electrical.selectedHazlocGroup = req.body.selectedHazlocGroup;
          electrical.hazlocTemperature = req.body.hazlocTemperature;
          electrical.selectedHazlocTemperature = req.body.selectedHazlocTemperature;
          //
          electrical.totalConectedFla = req.body.totalConectedFla;
          electrical.totalConectedKW  = req.body.totalConectedKW;
          electrical.totalConnectedKVAR = req.body.totalConnectedKVAR;
          electrical.totalConnectedKVA = req.body.totalConnectedKVA;
          electrical.totalDemandFLA = req.body.totalDemandFLA;
          electrical.totalDemandKW = req.body.totalDemandKW;
          electrical.totalDemandKVAR = req.body.totalDemandKVAR;
          electrical.totalDemandKVA = req.body.totalDemandKVA;
          electrical.scenarioFirstFLA = req.body.scenarioFirstFLA;
          electrical.scenarioFirstKW = req.body.scenarioFirstKW;
          electrical.scenarioFirstKVAR = req.body.scenarioFirstKVAR;
          electrical.scenarioFirstKVA = req.body.scenarioFirstKVA;
          //
          electrical.chiildList = req.body.chiildList;
          project.save(function(err, electrical){
            if(err){
              sendJSONresponse(res, 404, err);
            } else {
              sendJSONresponse(res, 200, project);
            }
          });
        }
      );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, project or electrical id"
    });
    return;
  }
});

/* DELETE Electrical by ID*/
router.delete('/:id/electricals/:electricalid', function (req, res) { 
  if (!req.params && !req.params.id && !req.params.electricalid) {
    res.json({success: false, msg:'Failed params'});
    return;
  }
  Project
    .findById(req.params.id)
    .select('electricals')
    .exec(
      function(err, project) {
        if (!project) {
          res.json({success: false, msg:'Failed delete project item'});
          return;
        } else if (err) {
          res.json({success: false, msg:'Error'});
          return;
        }
        if (project.electricals && project.electricals.length > 0) {
          project.electricals.id(req.params.electricalid).remove();
          //console.log(project);
          project.save(function(err) {
            if (err) {
              res.json({success: false, msg:'Failed get electrical item'});
            } else {
              sendJSONresponse(res, 204, null);
            }
          });
        } else {
          res.json({success: false, msg:'Failed get electrical item'});
        }
    }
  );
});

//CABLES
/* GET ALL Cabels */
router.get('/:id/cables',function (req, res) {
  if(req.params){
    Project
    .findById(req.params.id, 'cabels._id cabels.cableTagFirst cabels.cableTagSecond cabels.cableTagThird cabels.cableTagFourth cabels.selectedCableTagIndex '+
    'cabels.selectedService cabels.selectedVoltage cabels.selectedCableType cabels.itemNum cabels.selectedCableFrom cabels.selectedCableTo cabels.cableLenth '+
    'cabels.itemNum cabels.selectedItemType cabels.selectedCableSize cabels.selectedConductorInsulationType cables.selectedInsulationVoltage')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get electrical item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get electrical item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});
/*router.get('/:id/cables-list', function (req, res){

});*/
/* CREATE NEW Cable */
router.post('/:id/cable-create', function(req, res) {
  if (req.params.id) {
    Project
      .findById(req.params.id)
      .select('cabels')
      .exec(
        function(err, project) {
          if (err) {
            res.json({success: false, msg:'Failed get cabel item'});
          } else {
            if (!project) {
              res.json({success: false, msg:'Failed get cabel item'});
            } else {
              project.cabels.push({});
            project.save(function(err, project) {
              if (err) {
                res.json({success: false, msg:'Failed get cabel item'});
              } else {
                res.json(project.cabels);
            }
          });
        }
      }
    });
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

/* GET SINGLE Cable BY ID */
router.get('/:id/cables/:cableId', function(req, res) {
  if (req.params && req.params.id && req.params.cableId) {
    Project
      .findById(req.params.id)
      .select('cabels')
      .exec(
        function(err, project) {
          var response, cabel;
          if (!project) {
            res.json({success: false, msg:'Failed get electrical item'});
            return;
          } else if (err) {
            res.json({success: false, msg:'Failed get electrical item'});
            return;
          }
          if (project.cabels && project.cabels.length > 0) {
            cabel = project.cabels.id(req.params.cableId);
            if (!cabel) {
              res.json({success: false, msg:'Failed get electrical item'});
            } else {
              response = {
                cabel
              };
              res.json(response);
            }
          } else {
            res.json({success: false, msg:'Failed get electrical item'});
          }
        }
    );
  } else {
    res.json({success: false, msg:'Failed get electrical item'});
  }
});

/* UPDATE Item Cabel*/
router.patch('/:id/cable-update/:cabelId', function(req, res) {
  if (req.params && req.params.id && req.params.cabelId) {
    Project
      .findById(req.params.id)
      .exec(
        function(err, project) {
          var response, cabel;
          cabel = project.cabels.id(req.params.cabelId);     
        //Info part
          cabel.cableTagFirst = req.body.cableTagFirst;
          cabel.cableTagSecond = req.body.cableTagSecond;
          cabel.cableTagThird = req.body.cableTagThird;
          cabel.cableTagFourth = req.body.cableTagFourth;
          cabel.cableTagIndex = req.body.cableTagIndex;
          cabel.selectedCableTagIndex = req.body.selectedCableTagIndex;
          cabel.selectedCableFrom = req.body.selectedCableFrom;
          cabel.selectedCableTo = req.body.selectedCableTo;
          cabel.selectedPowerSystem = req.body.selectedPowerSystem;
          cabel.selectedConductorMaterial = req.body.selectedConductorMaterial;
          cabel.selectedVoltage = req.body.selectedVoltage;
          cabel.selectedService = req.body.selectedService;
          cabel.selectedMaxAmbientTemp = req.body.selectedMaxAmbientTemp;
        //Physical part
          cabel.selectedCableType = req.body.selectedCableType;
          cabel.selectedInsulationVoltage = req.body.selectedInsulationVoltage;
          cabel.outJacket = req.body.outJacket;
          cabel.selectedJacketColor = req.body.selectedJacketColor;
          cabel.selectedInsulationRating = req.body.selectedInsulationRating;
          cabel.selectedRaceway = req.body.selectedRaceway;
          cabel.selectedConductorInsulationType = req.body.selectedConductorInsulationType;
          cabel.selectedFtRating = req.body.selectedFtRating;
          cabel.selectedInsulationTemperatureRating = req.body.selectedInsulationTemperatureRating;
          cabel.selectedWireColor = req.body.selectedWireColor;
          cabel.selectedShield = req.body.selectedShield;
          cabel.selectedApproval = req.body.selectedApproval;
          cabel.selectedArmour = req.body.selectedArmour;
          cabel.od = req.body.od;
          cabel.kgPerMetr = req.body.kgPerMetr;
          cabel.itemNum = req.body.itemNum;
          cabel.selectedItemType = req.body.selectedItemType;
          cabel.selectedCableSize = req.body.selectedCableSize;
        //Configuration part
          cabel.selectedInstallMethod = req.body.selectedInstallMethod;
          cabel.selectedSpacing = req.body.selectedSpacing;
          cabel.selectedSpacingCorrection = req.body.selectedSpacingCorrection;
          cabel.tempCorrection = req.body.tempCorrection;
          cabel.selectedCec = req.body.selectedCec;
          cabel.correctedCondAmp = req.body.correctedCondAmp;
          cabel.numberOfRunsPerPhase = req.body.numberOfRunsPerPhase;
          cabel.feederAmpacity = req.body.feederAmpacity;
        //Voltage Drop part
          cabel.cableLenth = req.body.cableLenth;
          cabel.voltageDropPercent = req.body.voltageDropPercent;
        //Load part
          //cabel.connectedFLA = req.body.connectedFLA;                       пересмотреть
          cabel.selectedAmpacityMultiplier = req.body.selectedAmpacityMultiplier;
          cabel.minCondAmp = req.body.minCondAmp;
          cabel.condAmpacity = req.body.condAmpacity;
          cabel.ocAmpRating = req.body.ocAmpRating;
          cabel.internalNotes = req.body.internalNotes;
          project.save(function(err, cabel){
            if(err){
              sendJSONresponse(res, 404, err);
            } else {
              sendJSONresponse(res, 200, project);
            }
          });
        }
      );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, project or electrical id"
    });
    return;
  }
});

/* DELETE Cable by ID*/
router.delete('/:id/cables/:cableId', function (req, res) { 
  if (!req.params && !req.params.id && !req.params.cableId) {
    res.json({success: false, msg:'Failed params'});
    return;
  }
  Project
    .findById(req.params.id)
    .select('cabels')
    .exec(
      function(err, project) {
        if (!project) {
          res.json({success: false, msg:'Failed delete project item'});
          return;
        } else if (err) {
          res.json({success: false, msg:'Error'});
          return;
        }
        if (project.cabels && project.cabels.length > 0) {
          project.cabels.id(req.params.cableId).remove();
          //console.log(project);
          project.save(function(err) {
            if (err) {
              res.json({success: false, msg:'Failed get electrical item'});
            } else {
              sendJSONresponse(res, 204, null);
            }
          });
        } else {
          res.json({success: false, msg:'Failed get electrical item'});
        }
    }
  );
});

//SLD-SCHEDULE
/* get ALL sldshedules for SLDSCEDULES-LIST*/
router.get('/:id/sld-schedules-list', function (req, res){
  if(req.params){
    Project
    .findById(req.params.id, 'sldschedules._id sldschedules.majorEquipmentDeviceTag sldschedules.selectedOCDevice '+ //пропустил Rev. и Equipment Description
    'sldschedules.selectedFrameRating sldschedules.tripRating sldschedules.selectedFuseRating sldschedules.selectedContactorType sldschedules.selectedContactorSize '+
    'sldschedules.selectedOverloadType sldschedules.overloadSize sldschedules.selectedCPTQTY sldschedules.selectedCPTVoltage sldschedules.selectedCPTRating sldschedules.selectedVTQTY '+
    'sldschedules.selectedVTVoltage sldschedules.selectedVTAccuracy sldschedules.selectedCTQTY sldschedules.selectedCTRatio sldschedules.selectedGFCTRatio sldschedules.selectedShuntCoil '+
    'sldschedules.selectedKirkKey sldschedules.selectedGroundStud sldschedules.PQM sldschedules.FeederPR sldschedules.TransformerPR sldschedules.MotorPR sldschedules.NGRRelay '+
    'sldschedules.selectedIndicatingLights sldschedules.SpaceHeater sldschedules.HeaterCircuit sldschedules.selectedFirstValueLocalSwitchPB sldschedules. '+
    'sldschedules.selectedNOAuxContact sldschedules.selectedInterposRelay sldschedules.selectedNCAuxContact '+
    'sldschedules.selectedSecondValueLocalSwitchPB sldschedules.selectedThirdValueLocalSwitchPB sldschedules.selectedFourthValueLocalSwitchPB sldschedules.selectedFirstValueFieldSwitchPB '+
    'sldschedules.selectedSecondValueFieldSwitchPB sldschedules.selectedThirdValueFieldSwitchPB sldschedules.selectedFourthValueLocalFieldSwitchPB')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get sldschedule item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get sldschedule item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get sldschedule item'});
  }
});
/*GET ALL SLD-SCHEDULE*/
router.get('/:id/sld-schedules', function (req, res) {
  if(req.params){
    Project
    .findById(req.params.id)
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get sld-schedules item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get sld-schedules item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get sld-schedules item'});
  }
});
/* CREATE NEW SLD-SCHEDULE */
router.post('/:id/sld-schedule-create', function(req, res) {
  if (req.params.id) {
    Project
      .findById(req.params.id)
      .select('sldschedules')
      .exec(
        function(err, project) {
          if (err) {
            res.json({success: false, msg:'Failed get sld-schedule item'});
          } else {
            if (!project) {
              res.json({success: false, msg:'Failed get sld-schedule item'});
            } else {
              project.sldschedules.push({});
            project.save(function(err, project) {
              if (err) {
                res.json({success: false, msg:'Failed get sld-schedule item'});
              } else {
                res.json(project.sldschedules);
            }
          });
        }
      }
    });
  } else {
    res.json({success: false, msg:'Failed get sld-schedule item'});
  }
});
/* GET SINGLE SLD-SCHEDULE BY ID */
router.get('/:id/sld-schedules/:sldscheduleId', function(req, res) {
  if (req.params && req.params.id && req.params.sldscheduleId) {
    Project
      .findById(req.params.id)
      .select('sldschedules')
      .exec(
        function(err, project) {
          var response, sldschedule;
          if (!project) {
            res.json({success: false, msg:'Failed get sldschedule item'});
            return;
          } else if (err) {
            res.json({success: false, msg:'Failed get sldschedule item'});
            return;
          }
          if (project.sldschedules && project.sldschedules.length > 0) {
            sldschedule = project.sldschedules.id(req.params.sldscheduleId);
            if (!sldschedule) {
              res.json({success: false, msg:'Failed get sldschedule item'});
            } else {
              response = {
                sldschedule
              };
              res.json(response);
            }
          } else {
            res.json({success: false, msg:'Failed get sldschedule item'});
          }
        }
    );
  } else {
    res.json({success: false, msg:'Failed get sldschedule item'});
  }
});
/* UPDATE Item SLD-SCHEDULE*/
router.patch('/:id/sld-schedule-update/:sldScheduleId', function(req, res) {
  if (req.params && req.params.id && req.params.sldScheduleId) {
    Project
      .findById(req.params.id)
      .exec(
        function(err, project) {
          var response, sldschedule;
          sldschedule = project.sldschedules.id(req.params.sldScheduleId);
      //Equipment Info   
        sldschedule.selectedMajorEquipmentDevice = req.body.selectedMajorEquipmentDevice;
        sldschedule.selectedEquipmentDescriptionForMajorEquipmentDevice = req.body.selectedEquipmentDescriptionForMajorEquipmentDevice;
        sldschedule.selectedMajorEquipmentTag = req.body.selectedMajorEquipmentTag;
        sldschedule.selectedEquipmentDescriptionForMajorEquipmentTag = req.body.selectedEquipmentDescriptionForMajorEquipmentTag;
        sldschedule.majorEquipmentDeviceTag = req.body.majorEquipmentDeviceTag;
        sldschedule.selectedSystemVoltage = req.body.selectedSystemVoltage;
      //Incoming Section
        sldschedule.incomer = req.body.incomer;
        sldschedule.lightningArrestor = req.body.lightningArrestor;
        sldschedule.selectedFeederEntry = req.body.selectedFeederEntry;
        sldschedule.surgeProtection = req.body.surgeProtection;
      //Central Part
        sldschedule.selectedOCDevice = req.body.selectedOCDevice;
        sldschedule.selectedContactorType = req.body.selectedContactorType;
        sldschedule.selectedCPTQTY = req.body.selectedCPTQTY;
        sldschedule.selectedCTQTY = req.body.selectedCTQTY;
        sldschedule.tripRating = req.body.tripRating;
        sldschedule.selectedContactorSize = req.body.selectedContactorSize;
        sldschedule.selectedCPTVoltage = req.body.selectedCPTVoltage;
        sldschedule.selectedCTRatio = req.body.selectedCTRatio;
        sldschedule.selectedFrameRating = req.body.selectedFrameRating;
        sldschedule.selectedOverloadType = req.body.selectedOverloadType;
        sldschedule.selectedCPTRating = req.body.selectedCPTRating;
        sldschedule.selectedCTAccuracy = req.body.selectedCTAccuracy;
        sldschedule.selectedFuseRating = req.body.selectedFuseRating;
        sldschedule.overloadSize = req.body.overloadSize;
        sldschedule.selectedVTQTY = req.body.selectedVTQTY;
        sldschedule.selectedGFCTRatio = req.body.selectedGFCTRatio;
        sldschedule.selectedSwitchRating = req.body.selectedSwitchRating;
        sldschedule.selectedVTVoltage = req.body.selectedVTVoltage;
        sldschedule.selectedShuntCoil = req.body.selectedShuntCoil;
        sldschedule.selectedVTAccuracy = req.body.selectedVTAccuracy;
        sldschedule.selectedKirkKey = req.body.selectedKirkKey;
        sldschedule.selectedGroundStud = req.body.selectedGroundStud;
        sldschedule.TransformerPR = req.body.TransformerPR;
        sldschedule.selectedIndicatingLights = req.body.selectedIndicatingLights;
        sldschedule.selectedNOAuxContact = req.body.selectedNOAuxContact;
        sldschedule.PQM = req.body.PQM;
        sldschedule.MotorPR = req.body.MotorPR;
        sldschedule.SpaceHeater = req.body.SpaceHeater;
        sldschedule.selectedNCAuxContact = req.body.selectedNCAuxContact;
        sldschedule.FeederPR = req.body.FeederPR;
        sldschedule.NGRRelay = req.body.NGRRelay;
        sldschedule.HeaterCircuit = req.body.HeaterCircuit;
        sldschedule.selectedInterposRelay = req.body.selectedInterposRelay;
      // PDP Detail
        sldschedule.selectedFirstPanelValue = req.body.selectedFirstPanelValue;
        sldschedule.selectedSecondPanelValue = req.body.selectedSecondPanelValue;
        sldschedule.selectedThirdPanelValue = req.body.selectedThirdPanelValue;
        sldschedule.CircuitNumbers = req.body.CircuitNumbers;
        sldschedule.CFG = req.body.CFG;
      //Field Switch/PB
        sldschedule.selectedFirstValueLocalSwitchPB = req.body.selectedFirstValueLocalSwitchPB;
        sldschedule.selectedSecondValueLocalSwitchPB = req.body.selectedSecondValueLocalSwitchPB;
        sldschedule.selectedThirdValueLocalSwitchPB = req.body.selectedThirdValueLocalSwitchPB;
        sldschedule.selectedFourthValueLocalSwitchPB = req.body.selectedFourthValueLocalSwitchPB;
        sldschedule.selectedFirstValueFieldSwitchPB = req.body.selectedFirstValueFieldSwitchPB;
        sldschedule.selectedSecondValueFieldSwitchPB = req.body.selectedSecondValueFieldSwitchPB;
        sldschedule.selectedThirdValueFieldSwitchPB = req.body.selectedThirdValueFieldSwitchPB;
        sldschedule.selectedFourthValueLocalFieldSwitchPB = req.body.selectedFourthValueLocalFieldSwitchPB;
        project.save(function(err, sldschedule){
          if(err){
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, project);
          }
        });
      }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "Not found, project or sldSchedule id"
    });
    return;
  }
});
/* DELETE SLD-SCHEDULE by ID*/
router.delete('/:id/sld-schedules/:sldScheduleId', function (req, res) { 
  if (!req.params && !req.params.id && !req.params.sldScheduleId) {
    res.json({success: false, msg:'Failed params'});
    return;
  }
  Project
    .findById(req.params.id)
    .select('sldschedules')
    .exec(
      function(err, project) {
        if (!project) {
          res.json({success: false, msg:'Failed delete project item'});
          return;
        } else if (err) {
          res.json({success: false, msg:'Error'});
          return;
        }
        if (project.sldschedules && project.sldschedules.length > 0) {
          project.sldschedules.id(req.params.sldScheduleId).remove();
          project.save(function(err) {
            if (err) {
              res.json({success: false, msg:'Failed get sldSchedule item'});
            } else {
              sendJSONresponse(res, 204, null);
            }
          });
        } else {
          res.json({success: false, msg:'Failed get sldSchedule item'});
        }
    }
  );
});

//CONTROLLER-SHEDULE
/* get ALL controllers for CONTROLLERS-LIST*/
router.get('/:id/controllers-list', function (req, res){
  if(req.params){
    Project
    .findById(req.params.id, 'controllers._id controllers.revision controllers.controlsEquipmentTagFirst controllers.selectedControlsEquipmentParentTag'+
    'controllers.selectedControllerType.name controllers.selectedControllerManufacturer.name controllers.selectedControllerFunction.name '+
    'controllers.selectedControllerSeries.name controllers.selectedEquipmentType controllers.selectedCloneEquipmentType.name controllers.selectedEquipmentModel.name'+
    'controllers.node controllers.chassis controllers.slot controllers.data controllers.selectedIPAdress.name controllers.selectedIOPerCard.name'+
    'controllers.dcPower controllers.relayQuantity controllers.esdPower controllers.selectedIOTag.name controllers.selectedIOType.name controllers.selectedIODescription.name ' +
    'controllers.selectedRelayIODescription.name controllers.selectedRelayIOType.name controllers.selectedRelayIODescription.name')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get controllers item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get controllers item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get controllers item'});
  }
});
/*GET ALL CONTROLLER-SHEDULE*/
router.get('/:id/controllers', function (req, res) {
  if(req.params){
    Project
      .findById(req.params.id)
      .exec(function(err, project) {
        if(!project){
          res.json({ success: false, msg: 'Failed get controllers-shedule item'});
          return;
        } else if (err) {
          res.json({success: false, msg: 'Failed get controllers-shedule item'})
        }
        res.json(project);
      });
  } else {}
});
/*CREATE NEW CONTROLLER-SHEDULE*/
router.post('/:id/controller-create', function(req, res){
  if (req.params.id) {
    Project
      .findById(req.params.id)
      .select('controllers')
      .exec(
        function(err, project) {
          if (err) {
            res.json({success: false, msg:'Failed get controller-sld item'});
          } else {
            if (!project) {
              res.json({success: false, msg:'Failed get controller-sld item'});
            } else {
              project.controllers.push({});
            project.save(function(err, project) {
              if (err) {
                res.json({success: false, msg:'Failed get controllers-sld item'});
              } else {
                res.json(project.controllers);
            }
          });
        }
      }
    });
  } else {
    res.json({success: false, msg:'Failed get controller-sld item'});
  }
});
/*GET SINGLE CONTROLLER-SHEDULE BY ID*/
router.get('/:id/controllers/:controllerId', function(req, res){
  if (req.params && req.params.id && req.params.controllerId) {
    Project
      .findById(req.params.id)
      .select('controllers')
      .exec(
        function(err, project) {
          var response, controller;
          if (!project) {
            res.json({success: false, msg:'Failed get controller item'});
            return;
          } else if (err) {
            res.json({success: false, msg:'Failed get controller item'});
            return;
          }
          if (project.controllers && project.controllers.length > 0) {
            controller = project.controllers.id(req.params.controllerId);
            if (!controller) {
              res.json({success: false, msg:'Failed get controller item'});
            } else {
              response = {
                controller
              };
              res.json(response);
            }
          } else {
            res.json({success: false, msg:'Failed get controller item'});
          }
        }
    );
  } else {
    res.json({success: false, msg:'Failed get controller item'});
  }
});
/*UPDATE Item CONTROLLER-SHEDULE*/
router.patch('/:id/controller-update/:controllerId', function(req, res) {
  if (req.params && req.params.id && req.params.controllerId) {
    Project
      .findById(req.params.id)
      .exec(
        function(err, project) {
          var response, controller;
          controller = project.controllers.id(req.params.controllerId);
          //Controller Info
            //missed Item Number - don`t have logic for thes element
            controller.revision = req.body.revision;
            //missed Date Added - don`t change, get this data when create new element
            controller.controlsEquipmentTagFirst = req.body.controlsEquipmentTagFirst;
            controller.controlsEquipmentTagSecond = req.body.controlsEquipmentTagSecond;
            controller.controlsEquipmentParentTag = req.body.controlsEquipmentParentTag;
            controller.selectedControlsEquipmentParentTag = req.body.selectedControlsEquipmentParentTag;
            //missed New Tag - don`t have logic for thes element
            controller.location = req.body.location;
            controller.selectedLocation = req.body.selectedLocation;
            controller.dataSheetNumber = req.body.dataSheetNumber;
            controller.selectedDataSheetNumber = req.body.selectedDataSheetNumber;
            controller.layoutDrawing = req.body.layoutDrawing;
            controller.selectedLayoutDraving = req.body.selectedLayoutDraving;
            controller.schematicDrawing = req.body.schematicDrawing;
            controller.selectedSchematicDraving = req.body.selectedSchematicDraving;
            controller.equipmentType = req.body.equipmentType;
            controller.selectedEquipmentType = req.body.selectedEquipmentType;
            controller.controllerType = req.body.controllerType;
            controller.selectedControllerType = req.body.selectedControllerType;
            controller.controllerFunction = req.body.controllerFunction;
            controller.selectedControllerFunction = req.body.selectedControllerFunction;
            controller.controllerManufacturer = req.body.controllerManufacturer;
            controller.selectedControllerManufacturer = req.body.selectedControllerManufacturer;
            controller.сontrollerSeries = req.body.сontrollerSeries;
            controller.selectedControllerSeries = req.body.selectedControllerSeries;
            controller.сloneEquipmentType = req.body.сloneEquipmentType;
            controller.selectedCloneEquipmentType = req.body.selectedCloneEquipmentType;
            controller.equipmentModel = req.body.equipmentModel;
            controller.selectedEquipmentModel = req.body.selectedEquipmentModel;
            //Node - Chassis - Slot - Data
            controller.node = req.body.node;
            controller.chassis = req.body.chassis;
            controller.slot = req.body.slot;
            controller.data = req.body.data;
            //IP Address
            controller.ipAdress = req.body.ipAdress;
            controller.selectedIPAdress = req.body.selectedIPAdress;
            //I/O Per Card
            controller.ioPerCard = req.body.ioPerCard;
            controller.selectedIOPerCard = req.body.selectedIOPerCard;
            //Relay Quantity - DC Power - ESD Power
            controller.relayQuantity = req.body.relayQuantity;
            controller.dcPower = req.body.dcPower;
            controller.esdPower = req.body.esdPower;
            //I/O Tag
            controller.ioTag = req.body.ioTag;
            controller.selectedIOTag = req.body.selectedIOTag;
            //I/O Type
            controller.ioType = req.body.ioType;
            controller.selectedIOType = req.body.selectedIOType;
            //I/O Description
            controller.ioDescription = req.body.ioDescription;
            controller.selectedIODescription = req.body.selectedIODescription;
            //Relay I/O Tag    
            controller.relayIODescription = req.body.relayIODescription;
            controller.selectedRelayIODescription = req.body.selectedRelayIODescription;
            //Relay I/O Type
            controller.relayIOType = req.body.relayIOType;
            controller.selectedRelayIOType = req.body.selectedRelayIOType;
            //Relai I/O Description
            controller.IODescriptionRelay = req.body.IODescriptionRelay;
            controller.selectedIODescriptionRelay = req.body.selectedIODescriptionRelay;

          project.save(function(err, controller){
            if(err){
              sendJSONresponse(res, 404, err);
            } else {
              sendJSONresponse(res, 200, project);
            }
          });
        }
      );
    } else {
      sendJSONresponse(res, 404, {
        "message": "Not found, project or controller id"
      });
      return;
    }
});
/*DELETE CONTROLLER-SHEDULE by ID*/
router.delete('/:id/controllers/:controllerId', function (req, res){
  if (!req.params && !req.params.id && !req.params.controllerId) {
    res.json({success: false, msg:'Failed params'});
    return;
  }
  Project
    .findById(req.params.id)
    .select('controllers')
    .exec(
      function(err, project) {
        if (!project) {
          res.json({success: false, msg:'Failed delete project item'});
          return;
        } else if (err) {
          res.json({success: false, msg:'Error'});
          return;
        }
        if (project.controllers && project.controllers.length > 0) {
          project.controllers.id(req.params.controllerId).remove();
          project.save(function(err) {
            if (err) {
              res.json({success: false, msg:'Failed get controller item'});
            } else {
              sendJSONresponse(res, 204, null);
            }
          });
        } else {
          res.json({success: false, msg:'Failed get controller item'});
        }
    }
  );
});

//INSTRUMENTATION ITEM
/*GET ALL INSTRUMENTSTION-ITEM */
router.get('/:id/instrumentations', function (req, res) {
  if(req.params){
    Project
      .findById(req.params.id)
      .exec(function(err, project) {
        if(!project){
          res.json({ success: false, msg: 'Failed get  instrumentation item'});
          return;
        } else if (err) {
          res.json({success: false, msg: 'Failed get instrumentation item'})
        }
        res.json(project);
      });
  } else {}
});

/*get ALL Instrumentations for INSTRIMENTATIONS-LIST*/
router.get('/:id/instrumentations-list', function (req, res){
  if(req.params){
    Project
    .findById(req.params.id, 'instrumentations._id instrumentations.itemNumber instrumentations.instrumentationTag instrumentations.selectedInstrumentDescription '+
    'instrumentations.selectedPidNumber instrumentations.selectedServiceDescription instrumentations.selectedFirstInstrumentType instrumentations.selectedSecondInstrumentType '+
    'instrumentations.selectedManufacturer instrumentations.selectedDataSheetNumber instrumentations.selectedMrPoNumber instrumentations.selectedIOType'+
    'instrumentations.selectedModelNumber instrumentations.selectedStatus instrumentations.selectedLocation instrumentations.selectedSystem instrumentations.selectedSignalLevel '+
    'instrumentations.selectedPowerSupply instrumentations.selectedInstrumentFunction instrumentations.selectedInstrumentDescription')
    .exec(function(err, project) {
        if(!project){
          res.json({success: false, msg:'Failed get instrumentstion item'});
          return;
        } else if (err){
          res.json({success: false, msg:'Failed get instrumentstion item'});
        }
        res.json(project);
    });
  } else {
    res.json({success: false, msg:'Failed get instrumentstion item'});
  }
});
/*CREATE NEW INSTRUMENTSTION-ITEM*/
router.post('/:id/instrumentation-create', function(req, res){
  if (req.params.id) {
    Project
      .findById(req.params.id)
      .select('instrumentations')
      .exec(
        function(err, project) {
          if (err) {
            res.json({success: false, msg:'Failed get instrumentation item'});
          } else {
            if (!project) {
              res.json({success: false, msg:'Failed get instrumentation item'});
            } else {
              project.instrumentations.push({});
              project.save(function(err, project) {
              if (err) {
                res.json({success: false, msg:'Failed get instrumentation item'});
              } else {
                res.json(project.instrumentations);
            }
          });
        }
      }
    });
  } else {
    res.json({success: false, msg:'Failed get instrumentation item'});
  }
});
/*GET SINGLE INSTRUMENTSTION-ITEM BY ID*/
router.get('/:id/instrumentations/:instrumentationId', function(req, res){
  if (req.params && req.params.id && req.params.instrumentationId) {
    Project
      .findById(req.params.id)
      .select('instrumentations')
      .exec(
        function(err, project) {
          var response, instrumentation;
          if (!project) {
            res.json({success: false, msg:'Failed get instrumentations item'});
            return;
          } else if (err) {
            res.json({success: false, msg:'Failed get instrumentations item'});
            return;
          }
          if (project.instrumentations && project.instrumentations.length > 0) {
            instrumentation = project.instrumentations.id(req.params.instrumentationId);
            if (!instrumentation) {
              res.json({success: false, msg:'Failed get instrumentations item'});
            } else {
              response = {
                instrumentation
              };
              res.json(response);
            }
          } else {
            res.json({success: false, msg:'Failed get instrumentations item'});
          }
        }
    );
  } else {
    res.json({success: false, msg:'Failed get instrumentations item'});
  }
});
/*UPDATE Item INSTRUMENTSTION-ITEM */
router.patch('/:id/instrumentation-update/:instrumentationId', function (req, res){
  if (req.params && req.params.id && req.params.instrumentationId) {
    Project
      .findById(req.params.id)
      .exec(
        function(err, project) {
          var response, instrumentation;
          instrumentation = project.instrumentations.id(req.params.instrumentationId);
          //instrumentation.itemNumber = req.body.itemNumber;
          instrumentation.instrumentationTag = req.body.instrumentationTag;
          //instrumentation.hazlocClass = req.body.hazlocClass;
          instrumentation.selectedHazlocClass = req.body.selectedHazlocClass;
          instrumentation.hazlocZone = req.body.hazlocZone;
          instrumentation.selectedHazlocZone = req.body.selectedHazlocZone;
          //instrumentation.hazlocGroup = req.body.hazlocGroup;
          instrumentation.selectedHazlocGroup = req.body.selectedHazlocGroup;
          instrumentation.hazlocTemperature = req.body.hazlocTemperature;
          instrumentation.selectedHazlocTemperature = req.body.selectedHazlocTemperature;
          instrumentation.pidNumber = req.body.pidNumber;
          instrumentation.selectedPidNumber = req.body.selectedPidNumber;
          instrumentation.serviceDescription = req.body.serviceDescription;
          instrumentation.selectedServiceDescription = req.body.selectedServiceDescription;
          instrumentation.lineEquipmentNumber = req.body.lineEquipmentNumber ;
          instrumentation.selectedLineEquipmentNumber = req.body.selectedLineEquipmentNumber;
          instrumentation.firstInstrumentType = req.body.firstInstrumentType;
          instrumentation.selectedFirstInstrumentType = req.body.selectedFirstInstrumentType;
          instrumentation.manufacturer = req.body.manufacturer;
          instrumentation.selectedManufacturer = req.body.selectedManufacturer;
          instrumentation.modelNumber = req.body.modelNumber;
          instrumentation.selectedModelNumber = req.body.selectedModelNumber;
          instrumentation.dataSheetNumber = req.body.dataSheetNumber;
          instrumentation.selectedDataSheetNumber = req.body.selectedDataSheetNumber;
          instrumentation.mrPoNumber = req.body.mrPoNumber;
          instrumentation.selectedMrPoNumber = req.body.selectedMrPoNumber;
          instrumentation.installationDetail = req.body.installationDetail;
          instrumentation.selectedInstallationDetail = req.body.selectedInstallationDetail;
          instrumentation.wiringDrawing = req.body.wiringDrawing;
          instrumentation.selectedWiringDrawing = req.body.selectedWiringDrawing;
          instrumentation.location = req.body.location;
          instrumentation.selectedLocation = req.body.selectedLocation;
          instrumentation.system = req.body.system;
          instrumentation.selectedSystem = req.body.selectedSystem;
          instrumentation.secondInstrumentType = req.body.secondInstrumentType;
          instrumentation.selectedSecondInstrumentType = req.body.selectedSecondInstrumentType;
          instrumentation.status = req.body.status;
          instrumentation.selectedStatus = req.body.selectedStatus;
          instrumentation.vendor = req.body.vendor;
          instrumentation.selectedVendor = req.body.selectedVendor;
          instrumentation.cost = req.body.cost;
          instrumentation.suppliedBy = req.body.suppliedBy;
          instrumentation.selectedSuppliedBy = req.body.selectedSuppliedBy;
          instrumentation.installedBy = req.body.installedBy;
          instrumentation.selectedInstalledBy = req.body.selectedInstalledBy;
          instrumentation.signalLevel = req.body.signalLevel;
          instrumentation.selectedSignalLevel = req.body.selectedSignalLevel;
          instrumentation.ioType = req.body.ioType;
          instrumentation.selectedIOType = req.body.selectedIOType;
          //instrumentation.dateInstrumentAdded = req.body.dateInstrumentAdded;
          //instrumentation.cloneTag = req.body.cloneTag;
          instrumentation.coordForX = req.body.coordForX;
          instrumentation.coordForY = req.body.coordForY;
          instrumentation.coordForZ = req.body.coordForZ;
          instrumentation.powerSupply = req.body.powerSupply;
          instrumentation.selectedPowerSupply = req.body.selectedPowerSupply;
          instrumentation.instrumentFunction = req.body.instrumentFunction;
          instrumentation.selectedInstrumentFunction = req.body.selectedInstrumentFunction;
          instrumentation.instrumentationNotes = req.body.instrumentationNotes;
          instrumentation.internalNotes = req.body.internalNotes;
          instrumentation.instrumentDescription = req.body.instrumentDescription;
          instrumentation.selectedInstrumentDescription = req.body.selectedInstrumentDescription;
          //instrumentation.newTag = req.body.newTag;
          project.save(function(err, instrumentation){
            if(err){
              sendJSONresponse(res, 404, err);
            } else {
              sendJSONresponse(res, 200, project);
            }
          });
        }
      );
    } else {
      sendJSONresponse(res, 404, {
        "message": "Not found, project or controller id"
      });
      return;
    }
})
/*DELETE INSTRUMENTSTION-ITEM by ID*/
router.delete('/:id/instrumentations/:instrumentationId', function (req, res){
  if (!req.params && !req.params.id && !req.params.instrumentationId) {
    res.json({success: false, msg:'Failed params'});
    return;
  }
  Project
    .findById(req.params.id)
    .select('instrumentations')
    .exec(
      function(err, project) {
        if (!project) {
          res.json({success: false, msg:'Failed delete project item'});
          return;
        } else if (err) {
          res.json({success: false, msg:'Error'});
          return;
        }
        if (project.instrumentations && project.instrumentations.length > 0) {
          project.instrumentations.id(req.params.instrumentationId).remove();
          project.save(function(err) {
            if (err) {
              res.json({success: false, msg:'Failed get instrumentation item'});
            } else {
              sendJSONresponse(res, 204, null);
            }
          });
        } else {
          res.json({success: false, msg:'Failed get instrumentation item'});
        }
    }
  );
});
module.exports = router;
