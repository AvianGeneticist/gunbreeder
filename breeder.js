var gunStatsBase = {
    //Raw gun characteristics
    gunType: 0,
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
    multWeight: 0,
}

var gunUnderBarrel = {
    //Underbarrel characteristics
    gunType: 0,
    rawDamage: 0,
    rawROF: 0,
    rawMagCap: 0,
    rawSpread: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
}

function clearUnderBarrel() {
    //Clear underbarrel stats.
    gunUnderBarrel.gunType = 0;
    document.getElementById("Underbarrel1").innerHTML = "Underbarrel Type"
    gunUnderBarrel.rawDamage = 0;
    document.getElementById("Underbarrel1Damage").innerHTML = "X Damage Per Shot"
    gunUnderBarrel.rawROF = 0;
    document.getElementById("Underbarrel1ROF").innerHTML ="X Rounds Per Minute"
    gunUnderBarrel.rawMagCap = 0;
    document.getElementById("Underbarrel1MagCap").innerHTML ="X Rounds Per Magazine"
    gunUnderBarrel.rawReSpeed = 0;
    document.getElementById("Underbarrel1ReSpeed").innerHTML ="X Millisecond Reload Speed"
    gunUnderBarrel.rawSpread = 0;
    document.getElementById("Underbarrel1Spread").innerHTML ="X Degrees Maximum Spread"
    gunUnderBarrel.rawProjcount = 0;
    document.getElementById("Underbarrel1ProjCount").innerHTML ="X Projectiles Per Shot"
    gunUnderBarrel.rawBlastRadius = 0;
    document.getElementById("Underbarrel1BlastRad").innerHTML ="X Meters Blast Radius"
}

function createParentGun() {
    clearUnderBarrel()
    //Generate the gun based on type.
    gunStatsBase.gunType = Math.floor(Math.random() * 17)
    switch(gunStatsBase.gunType) {
        case 0: //Jack of all trades assault rifle stats; middle of the road everywhere.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Assault Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (31 - 20) + 20);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (601 - 500) + 500);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 1000) + 1000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (91 - 85) + 85);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (71 - 45) + 45);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.20
        gunStatsBase.multROF = 1.20
        gunStatsBase.multBlastRadius = 1.20
        gunStatsBase.multProjCount = 1.20
        gunStatsBase.multMagCap = 1.20
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.90
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.00
        break;
        case 1: //Battle rifle; higher punch with lower ROF and greater potential inaccuracy.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Battle Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (41 - 28) + 28);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (501 - 350) + 350);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (31 - 15) + 15);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (3001 - 1800) + 1800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.35
        gunStatsBase.multROF = 1.15
        gunStatsBase.multBlastRadius = 1.25
        gunStatsBase.multProjCount = 1.25
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.00
        gunStatsBase.multReSpeed = 1.10
        gunStatsBase.multWeight = 1.10
        break;
        case 2: //PDW; lesser accuracy and damage than either automatic rifle type, but very fast firing and wider magazine pool.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Personal Defense Weapon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (23 - 14) + 14);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (1201 - 800) + 800);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (41 - 18) + 18);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (1601 - 800) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (101 - 90) + 90);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (61 - 35) + 35);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.10
        gunStatsBase.multROF = 1.30
        gunStatsBase.multBlastRadius = 1.10
        gunStatsBase.multProjCount = 1.00
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.85
        gunStatsBase.multWeight = 0.95
        break;
        case 3: //SAW; similar traits to the assault rifle, but with deeper reserves and worse handling.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Squad Automatic Weapon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (29 - 18) + 18);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (701 - 525) + 525);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (101 - 40) + 40);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (5001 - 3500) + 3500);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 70) + 70);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.20
        gunStatsBase.multROF = 1.25
        gunStatsBase.multBlastRadius = 1.10
        gunStatsBase.multProjCount = 1.10
        gunStatsBase.multMagCap = 1.40
        gunStatsBase.multMobility = 0.90
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.15
        gunStatsBase.multReSpeed = 1.10
        gunStatsBase.multWeight = 1.10
        break;
        case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Light Machine Gun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 450);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (201 - 60) + 60);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (8001 - 6000) + 6000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (71 - 60) + 60);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 75) + 75);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.15
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 1.30
        gunStatsBase.multMagCap = 1.80
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.20
        gunStatsBase.multReSpeed = 1.75
        gunStatsBase.multWeight = 1.40
        break;
        case 5: //Hunting Shotgun; remarkable power and generally better precision than its automatic counterpart.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Hunting Shotgun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (111 - 90) + 90);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Total Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (120 - 45) + 45);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (13 - 6) + 6);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (96 - 90) + 90);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (17 - 10) + 10);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (71 - 55) + 55);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.60
        gunStatsBase.multROF = 0.90
        gunStatsBase.multBlastRadius = 0.60
        gunStatsBase.multProjCount = 1.50
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 1.15
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.00
        break;
        case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Tactical Shotgun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Total Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (211 - 100) + 100);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (11 - 6) + 6);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.00
        gunStatsBase.multBlastRadius = 0.40
        gunStatsBase.multProjCount = 1.25
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.20
        gunStatsBase.multReSpeed = 1.05
        gunStatsBase.multWeight = 1.00
        break;
        case 7: //Sniper rifle; exceptional single shot damage and precision, but poor handling and close-range performance.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Sniper Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (151 - 95) + 95);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (60 - 25) + 25);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (11 - 4) + 4);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2801 - 1900) + 1800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (3 - 1) + 1);
        if (gunStatsBase.rawSpread != 1) {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        } else {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degree Maximum Spread"
        }
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (91 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.80
        gunStatsBase.multROF = 0.50
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 0.60
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 1.0
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.40
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.10
        break;
        case 8: //Marksman rifle; still high single shot damage, but fast fire rate than a sniper rifle with slightly lower accuracy.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Marksman Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (106 - 65) + 65);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (251 - 150) + 150);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (21 - 10) + 10);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2501 - 1600) + 1600);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 1.05
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 0.90
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.70
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.00
        break;
        case 9: //Anti-materiel rifle. Even less wieldly than the sniper rifle, but devastating on hit with a chance to have a blast radius.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Anti-Materiel Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (201 - 135) + 135);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (50 - 15) + 15);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (9 - 1) + 1);
        if (gunStatsBase.rawMagCap == 1) {
            document.getElementById("Parent1MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (3601 - 2200) + 2200);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (3 - 0) + 0);
        if (gunStatsBase.rawBlastRadius == 0) {
            document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        } else {
            document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        }
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (96 - 85) + 85);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 2.20
        gunStatsBase.multROF = 0.70
        gunStatsBase.multBlastRadius = 1.80
        gunStatsBase.multProjCount = 0.50
        gunStatsBase.multMagCap = 0.50
        gunStatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.30
        break;
        case 10: //Grenade Launcher; not precise, but hee hoo big boom.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Grenade Launcher"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (226 - 170) + 170);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (60 - 20) + 20);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (7 - 1) + 1);
        if (gunStatsBase.rawMagCap == 1) {
            document.getElementById("Parent1MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (6001 - 4200) + 4200);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (71 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (6 - 2) + 2);
        document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.80
        gunStatsBase.multROF = 0.70
        gunStatsBase.multBlastRadius = 2.00
        gunStatsBase.multProjCount = 0.40
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.05
        gunStatsBase.multReSpeed = 1.30
        gunStatsBase.multWeight = 1.10
        break;
        case 11: //Grenade Rifle; less powerful than the launcher, but better in most other stats.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Grenade Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (186 - 120) + 120);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (121 - 70) + 70);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (13 - 4) + 4);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (5201 - 3600) + 3600);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 0.90
        gunStatsBase.multBlastRadius = 1.60
        gunStatsBase.multProjCount = 0.40
        gunStatsBase.multMagCap = 0.95
        gunStatsBase.multMobility = 0.95
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.00
        gunStatsBase.multReSpeed = 1.20
        gunStatsBase.multWeight = 1.05
        break;
        case 12: //GPMG; heavier than the LMG.
        document.getElementById("Parent1").innerHTML = "Weapon Class: General Purpose Machine Gun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (43 - 30) + 30);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (901 - 450) + 450);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (301 - 100) + 100);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (10001 - 6000) + 6000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (61 - 50) + 50);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (9 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (101 - 85) + 85);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.20
        gunStatsBase.multBlastRadius = 1.35
        gunStatsBase.multProjCount = 1.35
        gunStatsBase.multMagCap = 2.20
        gunStatsBase.multMobility = 0.70
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.35
        gunStatsBase.multReSpeed = 1.9
        gunStatsBase.multWeight = 1.6
        break;
        case 13: //Hand Cannons; fairly high-power, but frequently dual-wieldable.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Hand Cannon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (53 - 40) + 40);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (200 - 120) + 120);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (10 - 6) + 6);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 800) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (91 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (61 - 40) + 40);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 1.00
        gunStatsBase.multBlastRadius = 1.20
        gunStatsBase.multProjCount = 1.20
        gunStatsBase.multMagCap = 1.00
        gunStatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gunStatsBase.multSpread = 0.95
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.00
        break;
        case 14: //HWS; part carbine, part underbarrel grenade launcher
        document.getElementById("Parent1").innerHTML = "Weapon Class: Hybrid Weapon System"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (31 - 18) + 18);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (676 - 525) + 525);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (1901 - 1000) + 1000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (76 - 65) + 65);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Underbarrel Stats. Unique to certain weapon classes.
        gunUnderBarrel.gunType = 1;
        document.getElementById("Underbarrel1").innerHTML = "Underbarrel Type: Grenade Launcher"
        gunUnderBarrel.rawDamage = Math.floor(Math.random() * (201 - 120) + 120);
        document.getElementById("Underbarrel1Damage").innerHTML = gunUnderBarrel.rawDamage + " Damage Per Shot"
        gunUnderBarrel.rawROF = Math.floor(Math.random() * (45 - 20) + 20);
        document.getElementById("Underbarrel1ROF").innerHTML = gunUnderBarrel.rawROF + " Rounds Per Minute"
        gunUnderBarrel.rawMagCap = Math.floor(Math.random() * (4 - 1) + 1);
        if (gunUnderBarrel.rawMagCap == 1) {
            document.getElementById("Underbarrel1MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Underbarrel1MagCap").innerHTML = gunUnderBarrel.rawMagCap + " Rounds Per Magazine"
        }
        gunUnderBarrel.rawReSpeed = Math.floor(Math.random() * (4001 - 3000) + 3000);
        document.getElementById("Underbarrel1ReSpeed").innerHTML = gunUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
        gunUnderBarrel.rawSpread = Math.floor(Math.random() * (8 - 3) + 3);
        document.getElementById("Underbarrel1Spread").innerHTML = gunUnderBarrel.rawSpread + " Degrees Maximum Spread"
        gunUnderBarrel.rawProjcount = 1;
        document.getElementById("Underbarrel1ProjCount").innerHTML = gunUnderBarrel.rawProjcount + " Projectile Per Shot"
        gunUnderBarrel.rawBlastRadius = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Underbarrel1BlastRad").innerHTML = gunUnderBarrel.rawBlastRadius + " Meters Blast Radius"
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.20
        gunStatsBase.multROF = 1.20
        gunStatsBase.multBlastRadius = 1.40
        gunStatsBase.multProjCount = 1.00
        gunStatsBase.multMagCap = 1.20
        gunStatsBase.multMobility = 0.95
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.0
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.20
        break;
        case 15: //Breaching Rifle; closer to a battle rifle's stats with an underbarrel shotgun for CQC
        document.getElementById("Parent1").innerHTML = "Weapon Class: Breaching Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (37 - 28) + 28);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (550 - 375) + 375);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (31 - 18) + 18);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (3101 - 2000) + 2000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (91 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Underbarrel Stats. Unique to certain weapon classes.
        gunUnderBarrel.gunType = 2;
        document.getElementById("Underbarrel1").innerHTML = "Underbarrel Type: Breaching Shotgun"
        gunUnderBarrel.rawDamage = Math.floor(Math.random() * (101 - 75) + 75);
        document.getElementById("Underbarrel1Damage").innerHTML = gunUnderBarrel.rawDamage + " Damage Per Shot"
        gunUnderBarrel.rawROF = Math.floor(Math.random() * (130 - 60) + 60);
        document.getElementById("Underbarrel1ROF").innerHTML = gunUnderBarrel.rawROF + " Rounds Per Minute"
        gunUnderBarrel.rawMagCap = Math.floor(Math.random() * (8 - 3) + 3);
        document.getElementById("Underbarrel1MagCap").innerHTML = gunUnderBarrel.rawMagCap + " Rounds Per Magazine"
        gunUnderBarrel.rawReSpeed = Math.floor(Math.random() * (3001 - 2300) + 2300);
        document.getElementById("Underbarrel1ReSpeed").innerHTML = gunUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
        gunUnderBarrel.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Underbarrel1Spread").innerHTML = gunUnderBarrel.rawSpread + " Degrees Maximum Spread"
        gunUnderBarrel.rawProjcount = Math.floor(Math.random() * (9 - 6) + 6);
        document.getElementById("Underbarrel1ProjCount").innerHTML = gunUnderBarrel.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Underbarrel1BlastRad").innerHTML = "Direct Impact Only"
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.40
        gunStatsBase.multROF = 1.05
        gunStatsBase.multBlastRadius = 1.10
        gunStatsBase.multProjCount = 1.50
        gunStatsBase.multMagCap = 1.15
        gunStatsBase.multMobility = 0.9
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.20
        break;
        case 16: //Reserve Rifle; sniper rifle primary with an underbarrel SMG.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Reserve Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (161 - 115) + 115);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (50 - 25) + 25);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (9 - 3) + 3);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2401 - 1600) + 1800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (4 - 1) + 1);
        if (gunStatsBase.rawSpread != 1) {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        } else {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degree Maximum Spread"
        }
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (96 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Underbarrel Stats. Unique to certain weapon classes.
        gunUnderBarrel.gunType = 3;
        document.getElementById("Underbarrel1").innerHTML = "Underbarrel Type: Submachine Gun"
        gunUnderBarrel.rawDamage = Math.floor(Math.random() * (17 - 10) + 10);
        document.getElementById("Underbarrel1Damage").innerHTML = gunUnderBarrel.rawDamage + " Damage Per Shot"
        gunUnderBarrel.rawROF = Math.floor(Math.random() * (1250 - 900) + 900);
        document.getElementById("Underbarrel1ROF").innerHTML = gunUnderBarrel.rawROF + " Rounds Per Minute"
        gunUnderBarrel.rawMagCap = Math.floor(Math.random() * (30 - 18) + 18);
        document.getElementById("Underbarrel1MagCap").innerHTML = gunUnderBarrel.rawMagCap + " Rounds Per Magazine"
        gunUnderBarrel.rawReSpeed = Math.floor(Math.random() * (1601 - 900) + 1600);
        document.getElementById("Underbarrel1ReSpeed").innerHTML = gunUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
        gunUnderBarrel.rawSpread = Math.floor(Math.random() * (7 - 5) + 5);
        document.getElementById("Underbarrel1Spread").innerHTML = gunUnderBarrel.rawSpread + " Degrees Maximum Spread"
        gunUnderBarrel.rawProjcount = 1;
        document.getElementById("Underbarrel1ProjCount").innerHTML = gunUnderBarrel.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Underbarrel1BlastRad").innerHTML = "Direct Impact Only"
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.60
        gunStatsBase.multROF = 1.10
        gunStatsBase.multBlastRadius = 1.40
        gunStatsBase.multProjCount = 0.60
        gunStatsBase.multMagCap = 1.2
        gunStatsBase.multMobility = 0.95
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.60
        gunStatsBase.multReSpeed = 0.90
        gunStatsBase.multWeight = 1.30
        break;
    }
    breedGun()
}

var gun2StatsBase = {
    //Raw gun characteristics
    guntype: 0,
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
    multWeight: 0,
}

var gun2UnderBarrel = {
    //Underbarrel characteristics
    gunType: 0,
    rawDamage: 0,
    rawROF: 0,
    rawMagCap: 0,
    rawSpread: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
}

function clearUnderBarrel2() {
    //Clear underbarrel stats.
    gun2UnderBarrel.gunType = 0;
    document.getElementById("Underbarrel2").innerHTML = "Underbarrel Type"
    gun2UnderBarrel.rawDamage = 0;
    document.getElementById("Underbarrel2Damage").innerHTML = "X Damage Per Shot"
    gun2UnderBarrel.rawROF = 0;
    document.getElementById("Underbarrel2ROF").innerHTML ="X Rounds Per Minute"
    gun2UnderBarrel.rawMagCap = 0;
    document.getElementById("Underbarrel2MagCap").innerHTML ="X Rounds Per Magazine"
    gun2UnderBarrel.rawReSpeed = 0;
    document.getElementById("Underbarrel2ReSpeed").innerHTML ="X Millisecond Reload Speed"
    gun2UnderBarrel.rawSpread = 0;
    document.getElementById("Underbarrel2Spread").innerHTML ="X Degrees Maximum Spread"
    gun2UnderBarrel.rawProjcount = 0;
    document.getElementById("Underbarrel2ProjCount").innerHTML ="X Projectiles Per Shot"
    gun2UnderBarrel.rawBlastRadius = 0;
    document.getElementById("Underbarrel2BlastRad").innerHTML ="X Meters Blast Radius"
}

function createParentGun2() {
    clearUnderBarrel2()
        //Generate the gun based on type.
        gun2StatsBase.gunType = Math.floor(Math.random() * 17)
        switch(gun2StatsBase.gunType) {
            case 0: //Jack of all trades assault rifle stats; middle of the road everywhere.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Assault Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (31 - 20) + 20);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (601 - 500) + 500);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 1000) + 1000);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (91 - 85) + 85);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (71 - 45) + 45);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.20
            gun2StatsBase.multROF = 1.20
            gun2StatsBase.multBlastRadius = 1.20
            gun2StatsBase.multProjCount = 1.20
            gun2StatsBase.multMagCap = 1.20
            gun2StatsBase.multMobility = 1.00
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 0.90
            gun2StatsBase.multReSpeed = 1.00
            gun2StatsBase.multWeight = 1.00
            break;
            case 1: //Battle rifle; higher punch with lower ROF and greater potential inaccuracy.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Battle Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (41 - 28) + 28);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (501 - 350) + 350);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (31 - 15) + 15);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (3001 - 1800) + 1800);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.35
            gun2StatsBase.multROF = 1.15
            gun2StatsBase.multBlastRadius = 1.25
            gun2StatsBase.multProjCount = 1.25
            gun2StatsBase.multMagCap = 1.10
            gun2StatsBase.multMobility = 1.00
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.00
            gun2StatsBase.multReSpeed = 1.10
            gun2StatsBase.multWeight = 1.10
            break;
            case 2: //PDW; lesser accuracy and damage than either automatic rifle type, but very fast firing and wider magazine pool.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Personal Defense Weapon"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (18 - 12) + 12);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (1201 - 800) + 800);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (41 - 18) + 18);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (1601 - 800) + 800);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (101 - 90) + 90);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (61 - 35) + 35);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.10
            gun2StatsBase.multROF = 1.30
            gun2StatsBase.multBlastRadius = 1.10
            gun2StatsBase.multProjCount = 1.00
            gun2StatsBase.multMagCap = 1.10
            gun2StatsBase.multMobility = 1.1
            //Subtractive multipliers. Smaller = Better
            gun2StatsBase.multSpread = 1.10
            gun2StatsBase.multReSpeed = 0.85
            gun2StatsBase.multWeight = 0.95
            break;
            case 3: //SAW; similar traits to the assault rifle, but with deeper reserves and worse handling.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Squad Automatic Weapon"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (29 - 18) + 18);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (701 - 525) + 525);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (101 - 40) + 40);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (5001 - 3500) + 3500);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 70) + 70);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.20
            gun2StatsBase.multROF = 1.25
            gun2StatsBase.multBlastRadius = 1.10
            gun2StatsBase.multProjCount = 1.10
            gun2StatsBase.multMagCap = 1.40
            gun2StatsBase.multMobility = 0.90
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.15
            gun2StatsBase.multReSpeed = 1.10
            gun2StatsBase.multWeight = 1.10
            break;
            case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Light Machine Gun"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 450);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (201 - 60) + 60);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (8001 - 6000) + 6000);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (71 - 60) + 60);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 75) + 75);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.30
            gun2StatsBase.multROF = 1.15
            gun2StatsBase.multBlastRadius = 1.30
            gun2StatsBase.multProjCount = 1.30
            gun2StatsBase.multMagCap = 1.80
            gun2StatsBase.multMobility = 1.00
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.20
            gun2StatsBase.multReSpeed = 1.75
            gun2StatsBase.multWeight = 1.40
            break;
            case 5: //Hunting Shotgun; remarkable power and generally better precision than its automatic counterpart.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Hunting Shotgun"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (111 - 90) + 90);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Total Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (120 - 45) + 45);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (13 - 6) + 6);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (96 - 90) + 90);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = Math.floor(Math.random() * (17 - 10) + 10);
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (71 - 55) + 55);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.60
            gun2StatsBase.multROF = 0.90
            gun2StatsBase.multBlastRadius = 0.60
            gun2StatsBase.multProjCount = 1.50
            gun2StatsBase.multMagCap = 0.80
            gun2StatsBase.multMobility = 1.15
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.10
            gun2StatsBase.multReSpeed = 0.95
            gun2StatsBase.multWeight = 1.00
            break;
            case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Tactical Shotgun"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Total Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (211 - 100) + 100);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = Math.floor(Math.random() * (11 - 6) + 6);
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.30
            gun2StatsBase.multROF = 1.00
            gun2StatsBase.multBlastRadius = 0.40
            gun2StatsBase.multProjCount = 1.25
            gun2StatsBase.multMagCap = 1.10
            gun2StatsBase.multMobility = 1.05
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.20
            gun2StatsBase.multReSpeed = 1.05
            gun2StatsBase.multWeight = 1.00
            break;
            case 7: //Sniper rifle; exceptional single shot damage and precision, but poor handling and close-range performance.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Sniper Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (151 - 95) + 95);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (60 - 25) + 25);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (11 - 4) + 4);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2801 - 1900) + 1800);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (3 - 1) + 1);
            if (gun2StatsBase.rawSpread != 1) {
                document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            } else {
                document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degree Maximum Spread"
            }
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (91 - 70) + 70);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.80
            gun2StatsBase.multROF = 0.50
            gun2StatsBase.multBlastRadius = 1.30
            gun2StatsBase.multProjCount = 0.60
            gun2StatsBase.multMagCap = 0.80
            gun2StatsBase.multMobility = 1.0
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 0.40
            gun2StatsBase.multReSpeed = 1.00
            gun2StatsBase.multWeight = 1.10
            break;
            case 8: //Marksman rifle; still high single shot damage, but fast fire rate than a sniper rifle with slightly lower accuracy.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Marksman Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (106 - 65) + 65);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (251 - 150) + 150);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (21 - 10) + 10);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2501 - 1600) + 1600);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.50
            gun2StatsBase.multROF = 1.05
            gun2StatsBase.multBlastRadius = 1.30
            gun2StatsBase.multProjCount = 0.90
            gun2StatsBase.multMagCap = 1.10
            gun2StatsBase.multMobility = 1.05
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 0.70
            gun2StatsBase.multReSpeed = 0.95
            gun2StatsBase.multWeight = 1.00
            break;
            case 9: //Anti-materiel rifle. Even less wieldly than the sniper rifle, but devastating on hit with a chance to have a blast radius.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Anti-Materiel Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (201 - 135) + 135);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (50 - 15) + 15);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (9 - 1) + 1);
            if (gun2StatsBase.rawMagCap == 1) {
                document.getElementById("Parent2MagCap").innerHTML = "Single-Shot"
            } else {
                document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            }
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (3601 - 2200) + 2200);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (3 - 0) + 0);
            if (gun2StatsBase.rawBlastRadius == 0) {
                document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            } else {
                document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
            }
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (96 - 85) + 85);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 2.20
            gun2StatsBase.multROF = 0.70
            gun2StatsBase.multBlastRadius = 1.80
            gun2StatsBase.multProjCount = 0.50
            gun2StatsBase.multMagCap = 0.50
            gun2StatsBase.multMobility = 0.85
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.10
            gun2StatsBase.multReSpeed = 0.95
            gun2StatsBase.multWeight = 1.30
            break;
            case 10: //Grenade Launcher; not precise, but hee hoo big boom.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Grenade Launcher"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (226 - 170) + 170);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (60 - 20) + 20);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (7 - 1) + 1);
            if (gun2StatsBase.rawMagCap == 1) {
                document.getElementById("Parent2MagCap").innerHTML = "Single-Shot"
            } else {
                document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            }
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (6001 - 4200) + 4200);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (71 - 65) + 65);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (6 - 2) + 2);
            document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.80
            gun2StatsBase.multROF = 0.70
            gun2StatsBase.multBlastRadius = 2.00
            gun2StatsBase.multProjCount = 0.40
            gun2StatsBase.multMagCap = 0.80
            gun2StatsBase.multMobility = 0.85
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.05
            gun2StatsBase.multReSpeed = 1.30
            gun2StatsBase.multWeight = 1.10
            break;
            case 11: //Grenade Rifle; less powerful than the launcher, but better in most other stats.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Grenade Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (186 - 120) + 120);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (121 - 70) + 70);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (13 - 4) + 4);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (5201 - 3600) + 3600);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (5 - 2) + 2);
            document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.50
            gun2StatsBase.multROF = 0.90
            gun2StatsBase.multBlastRadius = 1.60
            gun2StatsBase.multProjCount = 0.40
            gun2StatsBase.multMagCap = 0.95
            gun2StatsBase.multMobility = 0.95
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.00
            gun2StatsBase.multReSpeed = 1.20
            gun2StatsBase.multWeight = 1.05
            break;
            case 12: //GPMG; heavier than the LMG.
            document.getElementById("Parent2").innerHTML = "Weapon Class: General Purpose Machine Gun"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (43 - 30) + 30);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (901 - 450) + 450);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (301 - 100) + 100);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (10001 - 6000) + 6000);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (61 - 50) + 50);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (9 - 5) + 5);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (101 - 85) + 85);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.30
            gun2StatsBase.multROF = 1.20
            gun2StatsBase.multBlastRadius = 1.35
            gun2StatsBase.multProjCount = 1.35
            gun2StatsBase.multMagCap = 2.20
            gun2StatsBase.multMobility = 0.70
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.35
            gun2StatsBase.multReSpeed = 1.9
            gun2StatsBase.multWeight = 1.6
            break;
            case 13: //Hand Cannons; fairly high-power, but frequently dual-wieldable.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Hand Cannon"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (53 - 40) + 40);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (200 - 120) + 120);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (10 - 6) + 6);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 800) + 800);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (91 - 80) + 80);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (5 - 2) + 2);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (61 - 40) + 40);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.50
            gun2StatsBase.multROF = 1.00
            gun2StatsBase.multBlastRadius = 1.20
            gun2StatsBase.multProjCount = 1.20
            gun2StatsBase.multMagCap = 1.00
            gun2StatsBase.multMobility = 1.1
            //Subtractive multipliers. Smaller = Better
            gun2StatsBase.multSpread = 0.95
            gun2StatsBase.multReSpeed = 1.00
            gun2StatsBase.multWeight = 1.00
            break;
            case 14: //HWS; part carbine, part underbarrel grenade launcher
            document.getElementById("Parent2").innerHTML = "Weapon Class: Hybrid Weapon System"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (31 - 18) + 18);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (676 - 525) + 525);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (1901 - 1000) + 1000);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (76 - 65) + 65);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Underbarrel Stats. Unique to certain weapon classes.
            gun2UnderBarrel.gunType = 1;
            document.getElementById("Underbarrel2").innerHTML = "Underbarrel Type: Grenade Launcher"
            gun2UnderBarrel.rawDamage = Math.floor(Math.random() * (201 - 120) + 120);
            document.getElementById("Underbarrel2Damage").innerHTML = gun2UnderBarrel.rawDamage + " Damage Per Shot"
            gun2UnderBarrel.rawROF = Math.floor(Math.random() * (45 - 20) + 20);
            document.getElementById("Underbarrel2ROF").innerHTML = gun2UnderBarrel.rawROF + " Rounds Per Minute"
            gun2UnderBarrel.rawMagCap = Math.floor(Math.random() * (4 - 1) + 1);
            if (gun2UnderBarrel.rawMagCap == 1) {
                document.getElementById("Underbarrel2MagCap").innerHTML = "Single-Shot"
            } else {
                document.getElementById("Underbarrel2MagCap").innerHTML = gun2UnderBarrel.rawMagCap + " Rounds Per Magazine"
            }
            gun2UnderBarrel.rawReSpeed = Math.floor(Math.random() * (4001 - 3000) + 3000);
            document.getElementById("Underbarrel2ReSpeed").innerHTML = gun2UnderBarrel.rawReSpeed + " Millisecond Reload Speed"
            gun2UnderBarrel.rawSpread = Math.floor(Math.random() * (8 - 3) + 3);
            document.getElementById("Underbarrel2Spread").innerHTML = gun2UnderBarrel.rawSpread + " Degrees Maximum Spread"
            gun2UnderBarrel.rawProjcount = 1;
            document.getElementById("Underbarrel2ProjCount").innerHTML = gun2UnderBarrel.rawProjcount + " Projectile Per Shot"
            gun2UnderBarrel.rawBlastRadius = Math.floor(Math.random() * (4 - 2) + 2);
            document.getElementById("Underbarrel2BlastRad").innerHTML = gun2UnderBarrel.rawBlastRadius + " Meters Blast Radius"
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.20
            gun2StatsBase.multROF = 1.20
            gun2StatsBase.multBlastRadius = 1.40
            gun2StatsBase.multProjCount = 1.00
            gun2StatsBase.multMagCap = 1.20
            gun2StatsBase.multMobility = 0.95
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.0
            gun2StatsBase.multReSpeed = 1.00
            gun2StatsBase.multWeight = 1.20
            break;
            case 15: //Breaching Rifle; closer to a battle rifle's stats with an underbarrel shotgun for CQC
            document.getElementById("Parent2").innerHTML = "Weapon Class: Breaching Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (37 - 28) + 28);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (550 - 375) + 375);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (31 - 18) + 18);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (3101 - 2000) + 2000);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (91 - 80) + 91);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Underbarrel Stats. Unique to certain weapon classes.
            gun2UnderBarrel.gunType = 2;
            document.getElementById("Underbarrel2").innerHTML = "Underbarrel Type: Breaching Shotgun"
            gun2UnderBarrel.rawDamage = Math.floor(Math.random() * (101 - 75) + 75);
            document.getElementById("Underbarrel2Damage").innerHTML = gun2UnderBarrel.rawDamage + " Damage Per Shot"
            gun2UnderBarrel.rawROF = Math.floor(Math.random() * (130 - 60) + 60);
            document.getElementById("Underbarrel2ROF").innerHTML = gun2UnderBarrel.rawROF + " Rounds Per Minute"
            gun2UnderBarrel.rawMagCap = Math.floor(Math.random() * (8 - 3) + 3);
            document.getElementById("Underbarrel2MagCap").innerHTML = gun2UnderBarrel.rawMagCap + " Rounds Per Magazine"
            gun2UnderBarrel.rawReSpeed = Math.floor(Math.random() * (3001 - 2300) + 2300);
            document.getElementById("Underbarrel2ReSpeed").innerHTML = gun2UnderBarrel.rawReSpeed + " Millisecond Reload Speed"
            gun2UnderBarrel.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
            document.getElementById("Underbarrel2Spread").innerHTML = gun2UnderBarrel.rawSpread + " Degrees Maximum Spread"
            gun2UnderBarrel.rawProjcount = Math.floor(Math.random() * (9 - 6) + 6);
            document.getElementById("Underbarrel2ProjCount").innerHTML = gun2UnderBarrel.rawProjcount + " Projectiles Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Underbarrel2BlastRad").innerHTML = "Direct Impact Only"
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.40
            gun2StatsBase.multROF = 1.05
            gun2StatsBase.multBlastRadius = 1.10
            gun2StatsBase.multProjCount = 1.50
            gun2StatsBase.multMagCap = 1.15
            gun2StatsBase.multMobility = 0.9
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 1.10
            gun2StatsBase.multReSpeed = 1.00
            gun2StatsBase.multWeight = 1.20
            break;
            case 16: //Reserve Rifle; sniper rifle primary with an underbarrel SMG.
            document.getElementById("Parent2").innerHTML = "Weapon Class: Reserve Rifle"
            gun2StatsBase.rawDamage = Math.floor(Math.random() * (161 - 115) + 115);
            document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
            gun2StatsBase.rawROF = Math.floor(Math.random() * (50 - 25) + 25);
            document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
            gun2StatsBase.rawMagCap = Math.floor(Math.random() * (9 - 3) + 3);
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
            gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2401 - 1600) + 1800);
            document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
            gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
            document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
            gun2StatsBase.rawSpread = Math.floor(Math.random() * (4 - 1) + 1);
            if (gun2StatsBase.rawSpread != 1) {
                document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
            } else {
                document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degree Maximum Spread"
            }
            gun2StatsBase.rawProjcount = 1;
            document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
            //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
            gun2StatsBase.rawWeight = Math.floor(Math.random() * (96 - 80) + 80);
            if (gun2StatsBase.rawWeight >= 50) {
                document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
            } else {
                document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
            }
            //Underbarrel Stats. Unique to certain weapon classes.
            gun2UnderBarrel.gunType = 3;
            document.getElementById("Underbarrel2").innerHTML = "Underbarrel Type: Submachine Gun"
            gun2UnderBarrel.rawDamage = Math.floor(Math.random() * (17 - 10) + 10);
            document.getElementById("Underbarrel2Damage").innerHTML = gun2UnderBarrel.rawDamage + " Damage Per Shot"
            gun2UnderBarrel.rawROF = Math.floor(Math.random() * (1250 - 900) + 900);
            document.getElementById("Underbarrel2ROF").innerHTML = gun2UnderBarrel.rawROF + " Rounds Per Minute"
            gun2UnderBarrel.rawMagCap = Math.floor(Math.random() * (30 - 18) + 18);
            document.getElementById("Underbarrel2MagCap").innerHTML = gun2UnderBarrel.rawMagCap + " Rounds Per Magazine"
            gun2UnderBarrel.rawReSpeed = Math.floor(Math.random() * (1601 - 900) + 1600);
            document.getElementById("Underbarrel2ReSpeed").innerHTML = gun2UnderBarrel.rawReSpeed + " Millisecond Reload Speed"
            gun2UnderBarrel.rawSpread = Math.floor(Math.random() * (7 - 5) + 5);
            document.getElementById("Underbarrel2Spread").innerHTML = gun2UnderBarrel.rawSpread + " Degrees Maximum Spread"
            gun2UnderBarrel.rawProjcount = 1;
            document.getElementById("Underbarrel2ProjCount").innerHTML = gun2UnderBarrel.rawProjcount + " Projectile Per Shot"
            gun2StatsBase.rawBlastRadius = 0;
            document.getElementById("Underbarrel2BlastRad").innerHTML = "Direct Impact Only"
            //Additive multipliers. Bigger = Better.
            gun2StatsBase.multDamage = 1.60
            gun2StatsBase.multROF = 1.10
            gun2StatsBase.multBlastRadius = 1.40
            gun2StatsBase.multProjCount = 0.60
            gun2StatsBase.multMagCap = 1.2
            gun2StatsBase.multMobility = 0.95
            //Subtractive multipliers. Smaller = Better.
            gun2StatsBase.multSpread = 0.60
            gun2StatsBase.multReSpeed = 0.90
            gun2StatsBase.multWeight = 1.30
            break;
        }
        breedGun()
    }

var childStatsBase = {
    //Raw gun characteristics
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,
}

var childType = {
    //Determines weapon class for the child
    prefix: "",
    suffix: "",
    underprefix: "",
    undersuffix: "",
}

var childUnderBarrel = {
    //Underbarrel characteristics
    gunType: 0,
    rawDamage: 0,
    rawROF: 0,
    rawMagCap: 0,
    rawSpread: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
}

function clearChildUnderBarrel() {
    //Clear underbarrel stats.
    childType.underprefix = "";
    childType.undersuffix = "";
    document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type"
    childUnderBarrel.rawDamage = 0;
    document.getElementById("UnderbarrelChildDamage").innerHTML = "X Damage Per Shot"
    childUnderBarrel.rawROF = 0;
    document.getElementById("UnderbarrelChildROF").innerHTML ="X Rounds Per Minute"
    childUnderBarrel.rawMagCap = 0;
    document.getElementById("UnderbarrelChildMagCap").innerHTML ="X Rounds Per Magazine"
    childUnderBarrel.rawReSpeed = 0;
    document.getElementById("UnderbarrelChildReSpeed").innerHTML ="X Millisecond Reload Speed"
    childUnderBarrel.rawSpread = 0;
    document.getElementById("UnderbarrelChildSpread").innerHTML ="X Degrees Maximum Spread"
    childUnderBarrel.rawProjcount = 0;
    document.getElementById("UnderbarrelChildProjCount").innerHTML ="X Projectiles Per Shot"
    childUnderBarrel.rawBlastRadius = 0;
    document.getElementById("UnderbarrelChildBlastRad").innerHTML ="X Meters Blast Radius"
}

function breedGun() {
    switch(gunStatsBase.gunType) {
        case 0:
            childType.prefix = "Assault"
        break;
        case 1:
            childType.prefix = "Battle"
        break;
        case 2:
            childType.prefix = "Personal Defense"
        break;
        case 3:
            childType.prefix = "Squad Automatic"
        break;
        case 4:
            childType.prefix = "Suppressive"
        break;
        case 5:
            childType.prefix = "Hunter's"
        break;
        case 6:
            childType.prefix = "Tactical"
        break;
        case 7:
            childType.prefix = "Precision"
        break;
        case 8:
            childType.prefix = "Marksman's"
        break;
        case 9:
            childType.prefix = "Anti-Materiel"
        break;
        case 10:
            childType.prefix = "High-Explosive"
        break;
        case 11:
            childType.prefix = "Ballistic"
        break;
        case 12:
            childType.prefix = "General Purpose"
        break;
        case 13:
            childType.prefix = "Heavy"
        break;
        case 14:
            childType.prefix = "Hybrid"
        break;
        case 15:
            childType.prefix = "Breacher's"
        break;
        case 16:
            childType.prefix = "Reserve"
        break;
    }
    switch(gun2StatsBase.gunType) {
        case 0:
            childType.suffix = "Rifle"
        break;
        case 1:
            childType.suffix = "Rifle"
        break;
        case 2:
            childType.suffix = "Weapon"
        break;
        case 3:
            childType.suffix = "Weapon"
        break;
        case 4:
            childType.suffix = "Machine Gun"
        break;
        case 5:
            childType.suffix = "Shotgun"
        break;
        case 6:
            childType.suffix = "Shotgun"
        break;
        case 7:
            childType.suffix = "Sniper Rifle"
        break;
        case 8:
            childType.suffix = "Rifle"
        break;
        case 9:
            childType.suffix = "Rifle"
        break;
        case 10:
            childType.suffix = "Grenade Launcher"
        break;
        case 11:
            childType.suffix = "Grenade Rifle"
        break;
        case 12:
            childType.suffix = "Machine Gun"
        break;
        case 13:
            childType.suffix = "Hand Cannon"
        break;
        case 14:
            childType.suffix = "Weapon System"
        break;
        case 15:
            childType.suffix = "Rifle"
        break;
        case 16:
            childType.suffix = "Sniper Rifle"
        break;
    }
    document.getElementById("Child").innerHTML = "Weapon Class: " + childType.prefix + " " + childType.suffix
    childStatsBase.rawDamage = (((gunStatsBase.rawDamage + gun2StatsBase.rawDamage) / 2) * ((gunStatsBase.multDamage + gun2StatsBase.multDamage) / 2));
    childStatsBase.rawDamage = Math.ceil(childStatsBase.rawDamage)
    document.getElementById("ChildDamage").innerHTML = childStatsBase.rawDamage + " Damage Per Shot"
    childStatsBase.rawROF = (((gunStatsBase.rawROF + gun2StatsBase.rawROF) / 2) * ((gunStatsBase.multROF + gun2StatsBase.multROF) / 2));
    childStatsBase.rawROF = Math.ceil(childStatsBase.rawROF)
    document.getElementById("ChildROF").innerHTML = childStatsBase.rawROF + " Rounds Per Minute"
    childStatsBase.rawSpread = (((gunStatsBase.rawSpread + gun2StatsBase.rawSpread) / 2) * ((gunStatsBase.multSpread + gun2StatsBase.multSpread) / 2));
    childStatsBase.rawSpread = Math.ceil(childStatsBase.rawSpread)
    document.getElementById("ChildSpread").innerHTML = childStatsBase.rawSpread + " Degrees Maximum Spread"
    childStatsBase.rawMagCap = (((gunStatsBase.rawMagCap + gun2StatsBase.rawMagCap) / 2) * ((gunStatsBase.multMagCap + gun2StatsBase.multMagCap) / 2));
    childStatsBase.rawMagCap = Math.ceil(childStatsBase.rawMagCap)
    document.getElementById("ChildMagCap").innerHTML = childStatsBase.rawMagCap + " Rounds Per Magazine"
    childStatsBase.rawBlastRadius = (((gunStatsBase.rawBlastRadius + gun2StatsBase.rawBlastRadius) / 2) * ((gunStatsBase.multBlastRadius + gun2StatsBase.multBlastRadius) / 2));
    childStatsBase.rawBlastRadius = Math.floor(childStatsBase.rawBlastRadius)
    if (childStatsBase.rawBlastRadius == 0) {
        document.getElementById("ChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("ChildBlastRad").innerHTML = childStatsBase.rawBlastRadius + " Meter Blast Radius"
    }
    childStatsBase.rawProjcount = (((gunStatsBase.rawProjcount + gun2StatsBase.rawProjcount) / 2) * ((gunStatsBase.multProjCount + gun2StatsBase.multProjCount) / 2));
    childStatsBase.rawProjcount = Math.floor(childStatsBase.rawProjcount)
    if (childStatsBase.rawProjcount <= 1) {
        childStatsBase.rawProjcount = 1
    }
    if (childStatsBase.rawProjcount == 1) {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectiles Per Shot"
    }
    childStatsBase.rawReSpeed = (((gunStatsBase.rawReSpeed + gun2StatsBase.rawReSpeed) / 2) * ((gunStatsBase.multReSpeed + gun2StatsBase.multReSpeed) / 2));
    childStatsBase.rawReSpeed = Math.ceil(childStatsBase.rawReSpeed)
    document.getElementById("ChildReSpeed").innerHTML = childStatsBase.rawReSpeed + " Millisecond Reload Speed"
    childStatsBase.rawMobility = (((gunStatsBase.rawMobility + gun2StatsBase.rawMobility) / 2) * ((gunStatsBase.multMobility + gun2StatsBase.multMobility) / 2));
    childStatsBase.rawMobility = Math.ceil(childStatsBase.rawMobility)
    document.getElementById("ChildMobility").innerHTML = childStatsBase.rawMobility + "% Mobility"
    childStatsBase.rawWeight = (((gunStatsBase.rawWeight + gun2StatsBase.rawWeight) / 2) * ((gunStatsBase.multWeight + gun2StatsBase.multWeight) / 2));
    childStatsBase.rawWeight = Math.ceil(childStatsBase.rawWeight)
        if (childStatsBase.rawWeight >= 50) {
            document.getElementById("ChildWeight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("ChildWeight").innerHTML = "Dual-Wield"
        }
    clearChildUnderBarrel()
    if ((gunUnderBarrel.gunType != 0) && (gun2UnderBarrel.gunType != 0)) {
        switch(gunUnderBarrel.gunType) {
            case 1:
                childType.underprefix = "Explosive"
            break;
            case 2:
                childType.underprefix = "Breaching"
            break;
            case 3:
                childType.underprefix = "Defense"
            break;
        }
        switch(gun2UnderBarrel.gunType) {
            case 1:
                childType.undersuffix = "Grenade Launcher"
            break;
            case 2:
                childType.undersuffix = "Shotgun"
            break;
            case 3:
                childType.undersuffix = "Submachine Gun"
            break;
        }
        document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: " + childType.underprefix + " " + childType.undersuffix
        childUnderBarrel.rawDamage = (((gunUnderBarrel.rawDamage + gun2UnderBarrel.rawDamage) / 2) * ((gunStatsBase.multDamage + gun2StatsBase.multDamage) / 2));
        childUnderBarrel.rawDamage = Math.ceil(childUnderBarrel.rawDamage)
        document.getElementById("UnderbarrelChildDamage").innerHTML = childUnderBarrel.rawDamage + " Damage Per Shot"
        childUnderBarrel.rawROF = (((gunUnderBarrel.rawROF + gun2UnderBarrel.rawROF) / 2) * ((gunStatsBase.multROF + gun2StatsBase.multROF) / 2));
        childUnderBarrel.rawROF = Math.ceil(childUnderBarrel.rawROF)
        document.getElementById("UnderbarrelChildROF").innerHTML = childUnderBarrel.rawROF + " Rounds Per Minute"
        childUnderBarrel.rawMagCap = (((gunUnderBarrel.rawMagCap + gun2UnderBarrel.rawMagCap) / 2) * ((gunStatsBase.multMagCap + gun2StatsBase.multMagCap) / 2));
        childUnderBarrel.rawMagCap = Math.ceil(childUnderBarrel.rawMagCap)
        if (childUnderBarrel.rawMagCap == 1) {
            document.getElementById("UnderbarrelChildMagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("UnderbarrelChildMagCap").innerHTML = childUnderBarrel.rawMagCap + " Rounds Per Magazine"
        }
        childUnderBarrel.rawSpread = (((gunUnderBarrel.rawSpread + gun2UnderBarrel.rawSpread) / 2) * ((gunStatsBase.multSpread + gun2StatsBase.multSpread) / 2));
    childUnderBarrel.rawSpread = Math.floor(childUnderBarrel.rawSpread)
    if (childUnderBarrel.rawSpread == 1) {
        document.getElementById("UnderbarrelChildSpread").innerHTML = "1 Degree Maximum Spread"
    } else {
        document.getElementById("UnderbarrelChildSpread").innerHTML = childUnderBarrel.rawSpread + " Degrees Maximum Spread"
    }
    childUnderBarrel.rawBlastRadius = (((gunUnderBarrel.rawBlastRadius + gun2UnderBarrel.rawBlastRadius) / 2) * ((gunStatsBase.multBlastRadius + gun2StatsBase.multBlastRadius)) / 2);
    childUnderBarrel.rawBlastRadius = Math.ceil(childUnderBarrel.rawBlastRadius)
    if (childUnderBarrel.rawBlastRadius == 0) {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = childUnderBarrel.rawBlastRadius + " Meter Blast Radius"
    }
    childUnderBarrel.rawProjcount = (((gunUnderBarrel.rawProjcount + gun2UnderBarrel.rawProjcount) / 2) * ((gunStatsBase.multProjCount + gun2StatsBase.multProjCount) / 2));
    childUnderBarrel.rawProjcount = Math.floor(childUnderBarrel.rawProjcount)
    if (childUnderBarrel.rawProjcount <= 1) {
        childUnderBarrel.rawProjcount = 1
    }
    if (childUnderBarrel.rawProjcount == 1) {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectiles Per Shot"
    }
    childUnderBarrel.rawReSpeed = (((gunUnderBarrel.rawReSpeed + gun2UnderBarrel.rawReSpeed) / 2) * ((gunStatsBase.multReSpeed + gun2StatsBase.multReSpeed) / 2));
    childUnderBarrel.rawReSpeed = Math.ceil(childUnderBarrel.rawReSpeed)
    document.getElementById("UnderbarrelChildReSpeed").innerHTML = childUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
} else if (gunUnderBarrel.gunType != 0) {
    switch(gunUnderBarrel.gunType) {
        case 1:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Grenade Launcher"
        break;
        case 2:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Breaching Shotgun"
        break;
        case 3:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Submachine Gun"
        break;
    }
    childUnderBarrel.rawDamage = (gunUnderBarrel.rawDamage * ((gunStatsBase.multDamage + gun2StatsBase.multDamage) / 2));
    childUnderBarrel.rawDamage = Math.ceil(childUnderBarrel.rawDamage)
    document.getElementById("UnderbarrelChildDamage").innerHTML = childUnderBarrel.rawDamage + " Damage Per Shot"
    childUnderBarrel.rawROF = (gunUnderBarrel.rawROF * ((gunStatsBase.multROF + gun2StatsBase.multROF) / 2));
    childUnderBarrel.rawROF = Math.ceil(childUnderBarrel.rawROF)
    document.getElementById("UnderbarrelChildROF").innerHTML = childUnderBarrel.rawROF + " Rounds Per Minute"
    childUnderBarrel.rawMagCap = (gunUnderBarrel.rawMagCap * ((gunStatsBase.multMagCap + gun2StatsBase.multMagCap) / 2));
    childUnderBarrel.rawMagCap = Math.ceil(childUnderBarrel.rawMagCap)
    if (childUnderBarrel.rawMagCap == 1) {
        document.getElementById("UnderbarrelChildMagCap").innerHTML = "Single-Shot"
    } else {
        document.getElementById("UnderbarrelChildMagCap").innerHTML = childUnderBarrel.rawMagCap + " Rounds Per Magazine"
    }
    childUnderBarrel.rawSpread = (gunUnderBarrel.rawSpread * ((gunStatsBase.multSpread + gun2StatsBase.multSpread) / 2));
    childUnderBarrel.rawSpread = Math.floor(childUnderBarrel.rawSpread)
    if (childUnderBarrel.rawSpread == 1) {
        document.getElementById("UnderbarrelChildSpread").innerHTML = "1 Degree Maximum Spread"
    } else {
        document.getElementById("UnderbarrelChildSpread").innerHTML = childUnderBarrel.rawSpread + " Degrees Maximum Spread"
    }
    childUnderBarrel.rawBlastRadius = (gunUnderBarrel.rawBlastRadius * ((gunStatsBase.multBlastRadius + gun2StatsBase.multBlastRadius)) / 2);
    childUnderBarrel.rawBlastRadius = Math.ceil(childUnderBarrel.rawBlastRadius)
    if (childUnderBarrel.rawBlastRadius == 0) {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = childUnderBarrel.rawBlastRadius + " Meter Blast Radius"
    }
    childUnderBarrel.rawProjcount = (gunUnderBarrel.rawProjcount * ((gunStatsBase.multProjCount + gun2StatsBase.multProjCount) / 2));
    childUnderBarrel.rawProjcount = Math.floor(childUnderBarrel.rawProjcount)
    if (childUnderBarrel.rawProjcount <= 1) {
        childUnderBarrel.rawProjcount = 1
    }
    if (childUnderBarrel.rawProjcount == 1) {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectiles Per Shot"
    }
    childUnderBarrel.rawReSpeed = (gunUnderBarrel.rawReSpeed * ((gunStatsBase.multReSpeed + gun2StatsBase.multReSpeed) / 2));
    childUnderBarrel.rawReSpeed = Math.ceil(childUnderBarrel.rawReSpeed)
    document.getElementById("UnderbarrelChildReSpeed").innerHTML = childUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
} else if (gun2UnderBarrel.gunType != 0) {
    switch(gun2UnderBarrel.gunType) {
        case 1:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Grenade Launcher"
        break;
        case 2:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Breaching Shotgun"
        break;
        case 3:
            document.getElementById("UnderbarrelChild").innerHTML = "Underbarrel Type: Submachine Gun"
        break;
    }
    childUnderBarrel.rawDamage = (gun2UnderBarrel.rawDamage * ((gunStatsBase.multDamage + gun2StatsBase.multDamage) / 2));
    childUnderBarrel.rawDamage = Math.ceil(childUnderBarrel.rawDamage)
    document.getElementById("UnderbarrelChildDamage").innerHTML = childUnderBarrel.rawDamage + " Damage Per Shot"
    childUnderBarrel.rawROF = (gun2UnderBarrel.rawROF * ((gunStatsBase.multROF + gun2StatsBase.multROF) / 2));
    childUnderBarrel.rawROF = Math.ceil(childUnderBarrel.rawROF)
    document.getElementById("UnderbarrelChildROF").innerHTML = childUnderBarrel.rawROF + " Rounds Per Minute"
    childUnderBarrel.rawMagCap = (gun2UnderBarrel.rawMagCap * ((gunStatsBase.multMagCap + gun2StatsBase.multMagCap) / 2));
    childUnderBarrel.rawMagCap = Math.ceil(childUnderBarrel.rawMagCap)
    if (childUnderBarrel.rawMagCap == 1) {
        document.getElementById("UnderbarrelChildMagCap").innerHTML = "Single-Shot"
    } else {
        document.getElementById("UnderbarrelChildMagCap").innerHTML = childUnderBarrel.rawMagCap + " Rounds Per Magazine"
    }
    childUnderBarrel.rawSpread = (gun2UnderBarrel.rawSpread * ((gunStatsBase.multSpread + gun2StatsBase.multSpread) / 2));
    childUnderBarrel.rawSpread = Math.floor(childUnderBarrel.rawSpread)
    if (childUnderBarrel.rawSpread == 1) {
        document.getElementById("UnderbarrelChildSpread").innerHTML = "1 Degree Maximum Spread"
    } else {
        document.getElementById("UnderbarrelChildSpread").innerHTML = childUnderBarrel.rawSpread + " Degrees Maximum Spread"
    }
    childUnderBarrel.rawBlastRadius = (gun2UnderBarrel.rawBlastRadius * ((gunStatsBase.multBlastRadius + gun2StatsBase.multBlastRadius)) / 2);
    childUnderBarrel.rawBlastRadius = Math.ceil(childUnderBarrel.rawBlastRadius)
    if (childUnderBarrel.rawBlastRadius == 0) {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("UnderbarrelChildBlastRad").innerHTML = childUnderBarrel.rawBlastRadius + " Meter Blast Radius"
    }
    childUnderBarrel.rawProjcount = (gun2UnderBarrel.rawProjcount * ((gunStatsBase.multProjCount + gun2StatsBase.multProjCount) / 2));
    childUnderBarrel.rawProjcount = Math.floor(childUnderBarrel.rawProjcount)
    if (childUnderBarrel.rawProjcount <= 1) {
        childUnderBarrel.rawProjcount = 1
    }
    if (childUnderBarrel.rawProjcount == 1) {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("UnderbarrelChildProjCount").innerHTML = childUnderBarrel.rawProjcount + " Projectiles Per Shot"
    }
    childUnderBarrel.rawReSpeed = (gun2UnderBarrel.rawReSpeed * ((gunStatsBase.multReSpeed + gun2StatsBase.multReSpeed) / 2));
    childUnderBarrel.rawReSpeed = Math.ceil(childUnderBarrel.rawReSpeed)
    document.getElementById("UnderbarrelChildReSpeed").innerHTML = childUnderBarrel.rawReSpeed + " Millisecond Reload Speed"
} else {

}
}