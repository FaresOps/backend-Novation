const { Result } = require('../models/result');
const { Company } = require('../models/company');
const { Annualrevenue } = require('../models/annualrevenue');
const { Kpicategorie } = require('../models/kpicategorie');
const { Anualrevcostnormalized } = require('../models/normalize/anualrevcostnormalize');
const { Bicresultatsnormalize } = require('../models/normalize/bicresultatsnormalize');
const { Kpiresultsnormalize } = require('../models/normalize/kpiresultsnormalize');
const { Planningresults } = require('../models/resultats/planningresults');
const express = require('express');
const NodeCache = require('node-cache');
// const verifyToken = require('../verifytoken');
const router = express.Router();



// show result from result data base
router.get('/:id', async (req, res) => {

    const assessmentRecord = await req.params.id;
    const indus = await Company.findOne({ assessmentRecord: assessmentRecord });
    const annualrev = await Annualrevenue.findOne({ assessmentRecord: assessmentRecord });
    const kpis = await Kpicategorie.findOne({ assessmentRecord: assessmentRecord });
    const annualrevenue = await Anualrevcostnormalized.findOne({ assessmentRecord: assessmentRecord })
    const kpiresult = await Kpiresultsnormalize.findOne({ assessmentRecord: assessmentRecord })
    const bicresulst = await Bicresultatsnormalize.findOne({ assessmentRecord: assessmentRecord })
    const planning = await Planningresults.findOne({ assessmentRecord: assessmentRecord })

    const indusgroup = indus.indusGroup;

    const verticalintegration =
        annualrevenue.process[0].verticalintegration * planning.costfactor / 100 +
        kpiresult.process[0].verticalintegration * planning.kpifactor / 100 +
        bicresulst.process[0].verticalintegration * planning.proximityfactor / 100

    const horizontalintegration =
        annualrevenue.process[0].horizontalintegration * planning.costfactor / 100 +
        kpiresult.process[0].horizontalintegration * planning.kpifactor / 100 +
        bicresulst.process[0].horizontalintegration * planning.proximityfactor / 100
    const integratedproductlifecycle =
        annualrevenue.process[0].integratedproductlifecycle * planning.costfactor / 100 +
        kpiresult.process[0].integratedproductlifecycle * planning.kpifactor / 100 +
        bicresulst.process[0].integratedproductlifecycle * planning.proximityfactor / 100

    const shopfloorautomation =
        annualrevenue.technology[0].shopfloorautomation * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorautomation * planning.proximityfactor / 100

    const enterpriseautomation =
        annualrevenue.technology[0].enterpriseautomation * planning.costfactor / 100 +
        kpiresult.technology[0].enterpriseautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].enterpriseautomation * planning.proximityfactor / 100

    const facilityautomation =
        annualrevenue.technology[0].facilityautomation * planning.costfactor / 100 +
        kpiresult.technology[0].facilityautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityautomation * planning.proximityfactor / 100

    const shopfloorconnectivity =
        annualrevenue.technology[0].shopfloorconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorconnectivity * planning.proximityfactor / 100

    const entrepriseconnectivity =
        annualrevenue.technology[0].entrepriseconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].entrepriseconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].entrepriseconnectivity * planning.proximityfactor / 100

    const facilityconnectivity =
        annualrevenue.technology[0].facilityconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].facilityconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityconnectivity * planning.proximityfactor / 100

    const shopfloorintelligence =
        annualrevenue.technology[0].shopfloorintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorintelligence * planning.proximityfactor / 100
    const entrepriseintelligence =
        annualrevenue.technology[0].entrepriseintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].entrepriseintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].entrepriseintelligence * planning.proximityfactor / 100
    const facilityintelligence =
        annualrevenue.technology[0].facilityintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].facilityintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityintelligence * planning.proximityfactor / 100
    console.log(facilityintelligence);
    console.log(shopfloorintelligence);


    const workforcelearninganddevelopment =
        annualrevenue.organization[0].workforcelearninganddevelopment * planning.costfactor / 100 +
        kpiresult.organization[0].workforcelearninganddevelopment * planning.kpifactor / 100 +
        bicresulst.organization[0].workforcelearninganddevelopment * planning.proximityfactor / 100


    const leadershipcompetency =
        annualrevenue.organization[0].leadershipcompetency * planning.costfactor / 100 +
        kpiresult.organization[0].leadershipcompetency * planning.kpifactor / 100 +
        bicresulst.organization[0].leadershipcompetency * planning.proximityfactor / 100


    const interandintracompanycollaboration =
        annualrevenue.organization[0].interandintracompanycollaboration * planning.costfactor / 100 +
        kpiresult.organization[0].interandintracompanycollaboration * planning.kpifactor / 100 +
        bicresulst.organization[0].interandintracompanycollaboration * planning.proximityfactor / 100


    const strategyandgovernance =
        annualrevenue.organization[0].strategyandgovernance * planning.costfactor / 100 +
        kpiresult.organization[0].strategyandgovernance * planning.kpifactor / 100 +
        bicresulst.organization[0].strategyandgovernance * planning.proximityfactor / 100




    const list2 = {
        verticalintegration,
        horizontalintegration,
        integratedproductlifecycle
    };

    const processfinal = Object.keys(list2).reduce((a, b) => list2[a] > list2[b] ? a : b);


    // Create a copy of variables without the maximum value
    const list2WithoutMax1 = { ...list2 };
    delete list2WithoutMax1[processfinal];

    // Find the second maximum value in variablesWithoutMax1
    const secondMaxInList2 = Object.keys(list2WithoutMax1).reduce((a, b) => list2WithoutMax1[a] > list2WithoutMax1[b] ? a : b);


    const list1 = {
        shopfloorautomation,
        enterpriseautomation,
        facilityautomation,
        shopfloorconnectivity,
        entrepriseconnectivity,
        facilityconnectivity,
        shopfloorintelligence,
        entrepriseintelligence,
        facilityintelligence
    };
    const technologyfinal = Object.keys(list1).reduce((a, b) => list1[a] > list1[b] ? a : b);

    // Create a copy of list1 without the maximum value
    const list1WithoutMax1 = { ...list1 };
    delete list1WithoutMax1[technologyfinal];

    // Find the second maximum value in list1WithoutMax1
    const secondMaxInList1 = Object.keys(list1WithoutMax1).reduce((a, b) => list1WithoutMax1[a] > list1WithoutMax1[b] ? a : b);


    const variables = {
        workforcelearninganddevelopment,
        leadershipcompetency,
        interandintracompanycollaboration,
        strategyandgovernance
    };

    const maxVariable = Object.keys(variables).reduce((a, b) => variables[a] > variables[b] ? a : b);
    const variablesWithoutMax1 = { ...variables };
    delete variablesWithoutMax1[maxVariable];

    // Find the second maximum value in variablesWithoutMax1
    const secondMaxInVariables = Object.keys(variablesWithoutMax1).reduce((a, b) => variablesWithoutMax1[a] > variablesWithoutMax1[b] ? a : b);


    let extravariable1 = "";
    let extravariable2 = "";
    let extravariable3 = "";



    if (list2[secondMaxInList2] >= variables[secondMaxInVariables] && list2[secondMaxInList2] >= list1[secondMaxInList1]) {
        extravariable1 = secondMaxInList2;
    }
    if (list1[secondMaxInList1] >= list2[secondMaxInList2] && list1[secondMaxInList1] >= variables[secondMaxInVariables]){
        extravariable2 = secondMaxInList1;
    }
    if (variables[secondMaxInVariables] >= list2[secondMaxInList2] && variables[secondMaxInVariables] >= list1[secondMaxInList1]) {
        extravariable3 = secondMaxInVariables;
    }


    const resultat = new Result({
        assessmentRecord: req.params.id,
        planningName: planning.planningName,
        costFactor: planning.costfactor,
        kpiFactor: planning.kpifactor,
        proximity: planning.proximityfactor,
        process: processfinal + ',' + extravariable1,
        technology: technologyfinal + ',' + extravariable2,
        organization: maxVariable + ',' + extravariable3
    });

    await resultat.save();

    const existresult = await Result.findOne({ assessmentRecord: req.params.id });
    if (existresult) {
        res.json(
            {
                indusgroup,
                resultat,
                annualrev,
                kpis
            }
        );

    }
})

router.delete('/delete-all-results', async (req, res) => {
    try {
        const result = await Result.deleteMany({});
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'All documents in the Results collection have been deleted.' });
        } else {
            res.status(404).json({ message: 'No documents found to delete in the Results collection.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting documents from the Results collection.' });
    }
});



module.exports = router
