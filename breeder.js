var gunStatsBase = {
    //Raw gun characteristics
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
}

function createParentGun() {
    var p = Math.floor(Math.random() * 11)
    switch(p) {
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
        break;
        case 2: //PDW; lesser accuracy and damage than either automatic rifle type, but very fast firing and wider magazine pool.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Personal Defense Weapon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (18 - 12) + 12);
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
        break;
        case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Light Machine Gun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 525);
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
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (13 - 8) + 8);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        break;
        case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Tactical Shotgun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Total Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (210 - 100) + 100);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (9 - 4) + 4);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
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
        break;
    }
    breedGun()
}

var gun2StatsBase = {
    //Raw gun characteristics
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
}

function createParentGun2() {
    var p = Math.floor(Math.random() * 11)
    switch(p) {
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
        break;
        case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Light Machine Gun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 525);
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
        gun2StatsBase.rawProjcount = Math.floor(Math.random() * (13 - 8) + 8);
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        break;
        case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Tactical Shotgun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Total Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (210 - 100) + 100);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = Math.floor(Math.random() * (9 - 4) + 4);
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
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
}

function breedGun() {
    childStatsBase.rawDamage = (gunStatsBase.rawDamage + gun2StatsBase.rawDamage) / 2
    document.getElementById("ChildDamage").innerHTML = childStatsBase.rawDamage + " Damage Per Shot"
    childStatsBase.rawROF = (gunStatsBase.rawROF + gun2StatsBase.rawROF) / 2
    document.getElementById("ChildROF").innerHTML = childStatsBase.rawROF + " Rounds Per Minute"
    childStatsBase.rawSpread = (gunStatsBase.rawSpread + gun2StatsBase.rawSpread) / 2
    document.getElementById("ChildSpread").innerHTML = childStatsBase.rawSpread + " Degrees Spread"
    childStatsBase.rawMagCap = (gunStatsBase.rawMagCap + gun2StatsBase.rawMagCap) / 2
    document.getElementById("ChildMagCap").innerHTML = childStatsBase.rawMagCap + " Rounds Per Magazine"
    childStatsBase.rawBlastRadius = (gunStatsBase.rawBlastRadius + gun2StatsBase.rawBlastRadius) / 2
    if (childStatsBase.rawBlastRadius == 0) {
        document.getElementById("ChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("ChildBlastRad").innerHTML = childStatsBase.rawBlastRadius + " Meter Blast Radius"
    }
    childStatsBase.rawProjcount = (gunStatsBase.rawProjcount + gun2StatsBase.rawProjcount) / 2
    childStatsBase.rawProjcount = Math.floor(childStatsBase.rawProjcount)
    if (childStatsBase.rawProjcount == 1) {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectiles Per Shot"
    }
    childStatsBase.rawReSpeed = (gunStatsBase.rawReSpeed + gun2StatsBase.rawReSpeed) / 2
    document.getElementById("ChildReSpeed").innerHTML = childStatsBase.rawReSpeed + " Millisecond Reload Speed"
    childStatsBase.rawMobility = (gunStatsBase.rawMobility + gun2StatsBase.rawMobility) / 2
    document.getElementById("ChildMobility").innerHTML = childStatsBase.rawMobility + "% Mobility"
}