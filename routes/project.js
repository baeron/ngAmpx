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
    .findById(req.params.id, 'electricals._id electricals.revision electricals.equipmentTag electricals.selectedEquipmentType electricals.selectedVoltage '+
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
          electrical.equipmentTag = req.body.equipmentTag;
          electrical.locationArea = req.body.locationArea;
          electrical.selectedLocationArea = req.body.selectedLocationArea;
          electrical.equipmentDescription = req.body.equipmentDescription;
          electrical.selectedEquipmentDescription = req.body.selectedEquipmentDescription;
          electrical.selectedParentTag = req.body.selectedParentTag;
          //parent tag
          //equipment notes
          //clone tag
          //new tag
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

module.exports = router;
