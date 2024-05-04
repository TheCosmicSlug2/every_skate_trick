/* 

Le dictionnaire est présenté de la façon suivante :

{"squelette" du trick} = [{Nom "réel" du trick}, [{ID de la stance normale}, {ID de la stance fakie}]] 

*/


const dic_main_tricks = {	"" : ["No board movement !", [
						"AP1GczONXTD5eCNN0j0r37uB9YfyoXHTCQUqq8nn-GiTejxsAII9pbtB_62gz7fjG0AgQ1X5c9-ynB0wnupoJpc4qoiHJBrUreBe-MtJes4pXv_tonGWZKf-XvWu2pyNz2cnwouYCtyPNfLyXAlaKD4pS5J0"]], 

					"1BS180/" : ["Backside 180", [
						"ABLVV84aLansXVeVl44zX9ykJS47kyXJD8U0l0lNPd6dTP02j1Qc-uQUemKbujKmrq3SxjR-HEmQLShzmrmWPOW2GgfMVvbZ7YtM5m__IrAZ0ep7rP3rIb-Sx_dw1HZ21NjjMXOMl8N2ZOvFS_nmQTnjtnc", 
						"ABLVV84pGUgHICqSQnQG32_nkOND53HzJ0Is0Pv7rxqk2ZnOxsqwl1tl9RIxIlJsS3Y9PhvgpkS2_6pkajSWAN6eQ5ufOQnabsAilETfkH_4bk9SncpWylylv4kqoTFDhc1qJDb-slIO2WeELmj4jlnv34U"]],

					"1BS180/1BSshuv/" : ["Backside Bigspin", [
						"ABLVV845IcI3Uqm5S_kcB_eqNqZzc8meu1LNaVzSab4XIRZiGjkpWb26MJPukfLLlTj5e1ig4IaMv6BUDMpw5SINnHr9hy1N0ib1CPZ3W1N_rQO71I9kbr-nD3lLux7tFTtGa4YTcboI-OjXuVa6hd4Gc_k",
						"ABLVV85kaGrrREZ_PRPb6Vz12plOwSm2U2csCpFuAD6zbt05OVjfdwgz2qT3uwfJF-S7CUWNZjBfMQaLaLVBWcbGah0l8Dx2zrrlx5kiwOD2VSyWcSc31mdV4rH5xdoWdvgunhis377qieY7SftwveqeGlE"]],

					"1BS180/1BSshuv/1kickflip/" : ["BS Big Flip", [
						"ABLVV86UISv677yilHUH4xtlMtVJBq7iBwlfjJvDetVMI1Wq5oosTeOyIyOyYEtXtsxF6AI2ssBkpTlUui6WxYJaG-kV6Yl9lCi2hTvqF_AfCUkbgA47Jm8l7RJOem0hRAslux1wwIN1SgkMnTe1H13EjA8c", 
						"ABLVV84TCAh84i4nlOXSzUQjzZbygYSi_oFb0h3aux6VN3EpkkKY_mYgZZ3CFsg8Q1z4j0oPvMTq5XHtyrd1eDd3j6MusXGsXWzMduo1hSuBmYoEC-sphUECySwGwSWoQqJOZIK2oJW1laF51A6_Dldfk4iA"]],

					"1BS180/1BSshuv/2kickflip/" : ["BS Big Double Flip", [
						"ABLVV85sYhBoR3hGq6pfSlDUQTKw8wS4xxcnleAeIckrP7a-GAkrYldYGKrq9eiBdyOXYAoaUGX915Ddm293GInUou1LWo-iYx-r4lw6dsDvLBvzlzpTPYqglfHX1IQyVfUzVqfxMIEWvZUM0TvOGXAni2Yw",
						""]],

					"1BS180/2BSshuv/" : ["BS Biggerspin", [
						"",
						"AP1GczN_nUc959HLatwYZihx9OaDCYwdnjKmQJDd9BdKMKxpVShZ6JjnEINJHQaon-GG8EaEERt7sY1HPbIX4KfXXl6Uw3lAeg0MVQcn1i-k9Adxc8XTXTNpcut5zXlJ3Q1IKK6S-3nFhE-50b-G_MFTbNEm"]],

					"1BS180/1BSshuv/1heelflip/" : ["BS Big Heel", [
						"ABLVV87zZwd_VcsJOMcLlgUHNYfUj3TvzFS-BHlf_N8gV0JTCKrEtNXstUwobRXV4mMP0ynNsIlKSBEmXS7I9lsCCvDHKBAIAfgWCVfG9siwIh5N_v7L_ywlzZwOw464qe91pVffQcvGxplKClb-nNVHDxe4", 
						"ABLVV870OQoogdqNRQRMwBeHwyF7urlfiq_B8sqkKbcTYVz4CqjbCKm5RxRfmEN_uPwxxerArDLhwrwAP2i1JtgMg5QMyYZeiwmTXwwj_tCXPnW_nKIP3jmSsk6_GbFuWOxQpBHzJIuehCk_gI_Zmrh4PqpX"]],

					"1BS180/2BSshuv/1kickflip/" : ["Bigger Flip", [
						"ABLVV877d02MZo0Hd15JvGr9q8bX57USB2R-D1rbxwcEn0HdiseV3A6b3HE3ro7eiHlfM-ZUMLbYHzYchhRX4vGSh5xwz4upwGL1_CScUqBFNx20OFuEFZS7LoWDXNkdvMmkfhNtpL8BW4Uj5NzVNJhkq62R",
						"ABLVV86KHVcNNgePi_qwJbT8GqBugedTfKqP0PCRP6u_o8yFrDlKZCABn5jNzZ2jR8H8Xnq6B66v7SdeSRrTzzyXIp8CkRWi0PB3lfCQIxdDMP8HeM0DKrBuoBmLwKLW3nc-Pa2hvUA3bRDa7NfcQZQfpMjO"]],

					"1BS180/1FSshuv/" : ["BS 180 Late FS Shuv", [
						"ABLVV8654x105JWxUVSJt33tqIGLRgGy7XpQpwjAN9tcTeu0TITEE2p088q5OIMUEQY-PBiyjRF8z7L5AZXICG2QbEF7OYG38fKWKUOwHHVtTDaQvbW3udZ-AO3EmBo6YpyLZH2tfTVOAIhZGlVhAgQj_mvv",
						""]],

					"1BS180/1FSshuv/1kickflip/" : ["BS Ghetto Bird", [
						"ABLVV87s7Ge8NSP0nEmVyDSXLggK6Px_TWRGdIrK_rLgJwsiX9mPbsToUmTzKSPGUpvHKIGJa4ugJacUOL9wVKBcxWigZ5_TeUmLRC5OHcB7otazsPjqQfqIT0_Dyc8TirTXmLPiOZ4NTdMjC4Z6JJLT1FwU",
						"ABLVV84k5mcCSKQ4zTn6hfFwbNoyEA6FSPVaWJ3ySMLac9u4Y72SMmusZh3N4mI6gDlniYelyFsfUXkbksy7uZ3NxSApJteYPP6APja2XMUVSz5Zwl4wkWYiZRpfo66yxaVY41R_GVVK33843VouuBkCZoLq"]],
					
					"1BS180/1FSshuv/1heelflip/" : ["Varial Heelflip Rewind", [
						"ABLVV850GjzQ-LSmQtw93XgVb6zfLYPMdE-GnTIvFCzrRyKhD77KnPMZW-Evh6DjrSgo-fbAU-B1aWVQCl19XTJYVd8pPPtchQ_NK5_qKs56bcCUE4xkG4khFNWYpwYESlSRo7m-7Ac_Cw5XCLTCg3mnyMMx",
						"ABLVV86g-MpjyUNyIGhgcLmfyHHDIrGfbclMFXUmHArPWdxSt-p7xTgXD6Zf7uFZB8RO_GiZsZkMNJo1__vyXB6Nesf8m8SuAa6AHdkHlWsN8eUbljcnznErCzD5CW71kC_kIs3rJuhriLME0ek1Pws1NV5N"]],

					"1BS180/2FSshuv/1kickflip/" : ["BS Ghetto Bird Double shuv", [
						"",
						"ABLVV85GmrfF2ODg7Nayv2arcz-9I5InM4s4EagFov3w0sZSU5flpVyI4TLkTw8BoB7H-afWdP1Nu2-f5m-C-ycc7kGlSQ_uqUc9IfXTmhdLJUtF5VBQrW4FW0KsBeu_kDzosx6ikiwLJ7fpvE6z3nH2rHdp"]],

					"1BS180/1kickflip/" : ["Backside 180 Flip", [
						"ABLVV84RCkq6lpqW9KfJF1OijoZwsaak6Ml7YbqnIvrPYavrjWBvgmgWFM5G5Q_Gy_P-W21gA0R-dTDpmFShxUHYZI3V7iOCK9f3GQuuCUCWWTZXTG1yzfO2nrHjbNIXSI2FyFCOeWUce3iGOlM2457W5bU", 
						"ABLVV84IdPGIHLAXK0GhSEdShWYmvAQp1H6fvX9wiziGhMUV-31gcuoF53gfXqrq7cKgNTIDDtexsuddqN4DwfMF04PV51xxv9OxRT7pPgoG8kFyzCftgYBYLyQY1ixJYKow3BfKg0bdVajYBqjtA3AnntE"]],

					"1BS180/2kickflip/" : ["Backside Double Flip", [
						"AP1GczMFoe990zk173KQH3oe9JU4_kpkZNMxvQYI8oBruzm0BzREpCzTbtWcIG55WHhUO77lRcFuXzIzXz7Lp-3Rn7uPlYKHBrZ5wZfqYkqBp5yT9SiEUS88jALbOLya8WhkxHiLQ4mtuxoxlOL-Tu3U1yQK",
						"AP1GczOak90kHEtug11NGnii0UxSjDYzxeyq2XoOYglwWz5dPu_oTVHhwaaDqOpRZ292wmkJTACTNdvVyTmnel7_RoySlHvoUnYvn4-sWVXqWyVxFYXeNFBmJNwiL8ml1rGq_Fq7LQzkzIr7_OA44X_vsBSQ"]],

					"1BS180/1heelflip/" : ["Backside 180 Heelflip", [
						"ABLVV86DJgJIzRYWX6ZNjW3Qu-gbdlbIGq3IucuOGlVjTbk66WhBGvqJstiRc6OExKPznF4_CsqtNm1L1tfWnovoFiMsRr9gh9BYEYu0wKLBOeNePkeqKhiVXz1EPAIEjWRi_xURpmcK71pbP4eeKvOoYAs9",
						"ABLVV85wNqqSulXf1KRTSnrlAakm0kkydWoBLt1jm60ExKcsTiVbClnyGcSg8T04UMmMhJ1Fgj_Ml3SC29H-TGRHQB1RZwFcZrMuSUheEEOaF9O6bPaArJb5tMv94UO7hJ6xLSfrCBz9JSy_boBnEZJ8zNIK"]],
					
					"1BS180/2heelflip/" : ["Backside Double Heelflip", [
						"AP1GczODAr7P0sx7SkbHNPc72pKqDWLG5qjZ0hX1smOYbh-gU9GJ9mmjIE7AX8meAQqzbPfRbF_go59GTkHqPb_l6zVYINIoANBFmBl58L2zeqeuSWXHgo-For03vscSPgqwZOz7CoVH8P_RZR9uwmUqZfrH",
						""]],


					"2BS180/" : ["Backside 360", [
						"ABLVV87wxkvURTys-mf2z7otARgoXDf-l_QoJA-cl7RGDpfMgNUV4CldHLlq9SCkz92WtfhcRQVlfd9qb4B31JVrKr0npjj0d-zIIl13oY7jL8jBm-NzlDpOEwCKjtIwAEd5ryqMDcE60ww_z9gu-Tov5wg3",
						"ABLVV85ZS8IrD_npAJu8juzzhJos3GtLimbLIXg7jaJ21FSyVH2Usg14kLZ6mXLrZCFWB8YJSAGcyWT7pVIiWYQ7b73UimL3HyDLIBfO9k4mXP3Rlug2JypjhXCAmeLf4Ek1hMgoMSPmMXk5BRfrArwHxulZ"]],

					"2BS180/1BSshuv/" : ["Gazelle Spin", [
						"ABLVV841PuDaJv4v-uYRj71X2wcPKMTC1879f8b4FM2tmlKcMCG9RuaeSIpBtrR59_zhdhOyrYdGaB6Yw6LWQ1q7FgimcWRhdTW4aZu3fX-v6hqIrcGTBkVao54qO6FArRMTkEK-xzgGDi9-TJBzrBQ1iPCp",
						"ABLVV87qokRsaDEth__I-avDnhjgGgjnxzWgyejawj17-mlwW-zYB3rAPO0bu72MXiP9JcsJECEfTkbQpI__yLes2Kxek6hnS6XixJ7d-kI6T2Ozoc6g5fx6--rszyLofQH0kzzsoL5qp8HKdRpcgG8pQvyI"]],

					"2BS180/1BSshuv/1kickflip/" : ["Gazelle Flip", [
						"AP1GczOQSWWTDhoquTFsLJqcN5_s25B8NpvWZZ7XfMGPGGuU3cFCrVF4Pfam1hf2IvGcFlh98oDluDL1RUwV9LqEh5ICjQYDCPa7q5KQYE3mUlo6AiKWPTmiq-4fWn0ZOyZGqhwjua7f-Zb5L95Omdp4LTAX",
						"ABLVV84lMf1K6kH3qQ_nQienMjd_LMI1_iFsULViJr8glLxAb_SgnFknCH5X1UWYR8gC___wOgIFg-Te_F3PXFsmPe-Eix0rgpD93g84m8P-yDGw6zIzP4Mr_-35N3Bb73SL1vTqnKjhQvcCK9qXZNet8pHB"]],

					"2BS180/2BSshuv/1kickflip/" : ["Lion Flip", [
						"",
						"AP1GczOknLyRCN0BGh1sS6rpYD_DVO4ikzd5vQP0pNN5odmUnSkgNcWhDXxAlVziTCkG8IFtX8JJz87UUf--vSMbNX6oQLoRji8FBkMjXo-YAkkiI5ovQJagPdpyu5cTOEPgew3mTwj-73zWZ7HQZvctA-5-"]],

					"2BS180/1BSshuv/2kickflip/" : ["Gazelle Double Flip", [
						"",
						"AP1GczNtR1vxWg7gbyU6CivN7-dNYeTsrBNaQjJE_q9LPGBhFCBtlOMZ0lT1Lo093h3sIuDo8D1-Qsy7EVHtDuYrdm3JKzAPyOEbJEFMnahy4NyS7QKH5i3YS4DjTVmP86gGiomZaRYJcN-bAuZsa7wDoiOb"]],

					"2BS180/1kickflip/" : ["BS 360 Flip", [
						"ABLVV87cWy7yvclldFdsv2GEsjcb2oiZ-dQh-E8BtnAAJ2VMVfmvLtNdNQ8YIeL4ju_gNt5hSYhPxYL_QWp-sekMHMeHDgP4bapspt9xqbBmX6RPzV9Y3sEFuy0X_JTx3TSSaUCI7thn_vY4-rJryKiLecgh", 
						"ABLVV85SdWGCWmo-VpWIVugvOHFUN3uTRfiszIz-ud7L-Tnhebit14bffD_dBUpod_j22NGyRLYHLAWd_FMTHjyk1vcHKqPaE4eSDxa81lPRkyvEwFTjJpn6NIRuqm0POM5F4ROQmLEIhj6XINqpqKSlKcS0"]],

					"2BS180/2kickflip/" : ["BS 360 Double Flip", [
						"",
						"ABLVV87eLGqZ6A2i2NdEbWuNtJlzG4eAx3Bvwm2FGXT3XQUUAyKK0TXerg7OUGel9S-Cp0t6-Iz8PhEVVlrPN5mTPjOVtYbsyNvYhivMjZ9O3SBucQE5fou5pOeF-XIYB1goCTfLFtKARYZ1bix0g61IOB45"]],

					"2BS180/1heelflip/" : ["BS 360 Heel", [
						"ABLVV85oTFzlQ1RY9ek71qgpDmXa5qWhfvauxjnj7CBy49xGfTxpjOUwd24n8H5fSV5DaS8imVSYGO4kk2mcrh39G-eY5viG1CDkb8nCQVHOw16Qf80xjWDebXjZrdK0F79zoMRjfEUgeRjZ-3tO6K7oRL7i",
						"ABLVV85_gOYymGq8uBPf_DzmKrUelpR6_0UnnCPkUGBfxCVycmlx0qWOkyq6tnkTSYxpoEo-plpA6CzhmEo1bMVy5NBI3gifykipn2ZQhdGW_Og860rvBXrTSVWuf-QVOBIkSmwLTsrMG1C3QoGo4i1THSpu"]],



					"1FS180/" : ["Frontside 180", [
						"ABLVV85lEfZQOO1qcAxKcffcUmkf2C6Yx-gYlZjveMr2Xybi4hZ3uv-0Qh66seY_YgX51k3wONLxHRGKm9z0IqHx1Y2yETxDz0ozZxulJUok0E-6FEVWzdOSH0hVtvP7AbLJTIFUd_hpQzKNe5KGPAb897o", 
						"ABLVV85C8mJq0PXoARqwXyl4WFE7l6ka9KOxZ1GczvUsklwqUfP8H5qp7mT9_F9Qo_cx7z8PJCWmlo2ZKeL-XByEgC3Glez2eAg1AOfFfmBN1C7nv2KTpoKfgngcmR4V5SpIJEFpXAHxuZaDZjI9w7I4uHc"]],

					"1FS180/1BSshuv/1kickflip/" : ["Delta Flip", [
						"AP1GczOTsw5_j8jSmXXRh8VlMi4VkUvA85hS2GqaxuUAyKBiX4Q8J9RFMhe-PdQn_eGQesrK3Q-3WUypyc5jNOALXTFdfoF_NbZDzgjNtY3IDx2ekmhboJktOelO4apE65VBfkBnmfaoAF5jBisZt6Rm8wWt",
						""]],

					"1FS180/1BSshuv/1heelflip/" : ["Delta Heel", [
						"ABLVV858DhJ6fUmyVOMvsJE6o4LWNqxOLUNdi4QUEWzvhnOFghbePa-uNRy4nFrmS9iAVSCSlTHWWk5SFeGs5Bq3AWl3qFC07DJCmmvn3qofwp-89GdtvMkwmkOK-aVu-jCGgFWnjCAAwvMaGYP9oedXDdLP",
						"ABLVV84qTzpLKaiJSIYgCLMcIZHSU-21b0EBm--lTtVQGhXshPgtLt9ULQXksDkkYFGLF5MVfaILPbJVn0p1NDSOctSL5nci7xcCFqTdPCh1FmIZkrs0PALI98Kh28hTtLnb3I8MDDCmg1FKJJ4a9MA350lm"]],

					"1FS180/2BSshuv/1kickflip/" : ["Tre Maker", [
						"ABLVV84MkSnWh0_WPOu44RQX3T099oPSOVqCE5FCOnfgtaZYfTaq2FdzhLmFyAoJGAoNz-w4ahO3dnWbAff32w2qe40RLi49lBGcNOutX1Y0G_ODGUq2Y-y85KGdPAqDscj87aHedTC-mKkNhlI1O6YpXyGX",
						"ABLVV867wVUEjj_1eVxtRWrjSd-cZti7TwniPM8pg_8n30iYkBih7IFlGmZSjgn0ZGESmQVcctvYZwhEBg_HAwhWzsc6cYW3txnjp1jk8bc-rkkCEBuKmLS1GFnNdc1cMXFNUXS1W4HzTvOaymvtr2m2r_f8"]],

					"1FS180/2BSshuv/1heelflip/" : ["Heelflip Tre Maker", [
						"ABLVV8705Nss3fg1mhGvJIzwXCZ0a7-L9wlnyCGZJO3md8U0iYPfEmTF-bDULwMWsleyLiSdsnZWbOmcXKY687NJ8KlJPwkqFccdUC0L86rPK0LEPCo7kBwWWc15GPpl3NmJlgXQPGIlX1zwYsJ5ex1mPbAh",
						""]],

					"1FS180/1FSshuv/" : ["Frontside Bigspin", [
						"ABLVV85pcCRpdpkCVel_wkEyKt_Fw2_yGNoVxS3DZo-EaWWSOfvLg_gYjte5m1CEHetkFk0eEkcN_57wPAo-O1utsMa1tbBflM5XrtwCOjzflvyFnMJTzTyVBESlKaNKjkzOvh7xhU10VTrHH5WchslXVPg",
						"ABLVV84Wr8YLzyN5HqpaHsHIRodoEVBqmYlU-iwSUUl5CH-dgGibAJihMhuM3DnL9EkmrlB3KeqP64vSGEJv0J2mx7FKLqYhIj_w2_BwlBg-d4jglHPU75nM8qy9ppMY24Br6gcyCqeD3BOhwNcwjqANF_o"]],

					"1FS180/1FSshuv/1kickflip/" : ["FS Big Flip", [
						"ABLVV84ua8mSMwaF0dHkJdBNTAN9qr69TWTqR6tef0ZT4HO-NapjSu77c16ybulxGy7p0OSyZb1pRxCPFSQJAC9WTlmzhdW0EM23OkdJEXUD1CYXjGWD9kxDmkJdLqLDMKO2rhQLKquXD1hjpdAGPopuYnKU", 
						"ABLVV87J3ySnYTz0QDOC3xrc1AoL4lLcM6hP6ngPlXNrdoRThew8LqK7dWLbdXDwgNyj1GFvXbKkkuMApfjRdtS9jNls1UHN6QR3H_z1_E2ge2NaR0pzcQNBdCJVU454iXtTPF4F4m7PVQoniIXcGHYRec_d"]],

					"1FS180/1FSshuv/1heelflip/" : ["FS Big Heel", [
						"ABLVV86H2Bfs8gjxcxrWNpQ8rbrIYAr9JrZ6kQLyuWCwZy8YID_kIxE0uzUypMA4EuLGAdZzk7aWOtOTFO_oB0u6u0g0pzNry9leuGuhjEiY4xm0iZOVgFTVBL8k0kJop8ea-QBZPIYKM1TpYaHOqQ1r5Ag6",
						"ABLVV86zu6oeLaxME9FrOzcJ5jDCbHvKT0rJDQoqELeQoFVTSZpcnh0V8LpSCmvbPZD-e0YMq94MZcL3EZbTl0vx0_rWY10XC2c2h8cJo2cqID7kRrDSzOouUjuZj3H7uUkBxLXzIdRZ6FcVCW_XpU3t38bI"]],

					"1FS180/1kickflip/" : ["Frontside 180 Flip", [
						"ABLVV84zesR68Dmh2D9EoNyyeDWVZHizn7igjRcA1QaSlHDGQw7N5kkeEmKnTAXlFsBkyn5FiSD44MGuSevTzPPkzBhby2iMif9t0gt7oTaG-oAkS2mlZWfTiUwcvwT2LtyiLo6VtqVLTygO3u4TV-yD_lQ", 
						"ABLVV87wwVLKdr0Vr4pMliENcO0iz2UlWwvOeXQUrSTj4ZroJw_WCll49wMHZ6QoNnpFT-gsOhdjpmMNUY1E46-JXmDOGQqAGEEg1l22ax3ebCi_pXaaCD1rr6o96YA0ANM3YkMZwSU5XwU13aCtDr2KJDk"]],

					"1FS180/1heelflip/" : ["Frontside 180 Heelflip", [
						"ABLVV87pGQO7HnH8tKQXdtkycVSthxjvYnX7nHufUB-Wxk798aCv0I22FUbtrSjeRB0lg3E6zD6YPujPy5LtVzb6pLW00GruZWdNhFPZXpiEVnwAdKsNFztCjUxsaM9OJjlhtkljvJw-Ifzl09R-kErzatU2",
						"ABLVV84diSofhEqpwS1l6qljwIJlnbfAi_WfMhzO7Zcq3HVg96lebg5AQqS45TKuvs26E9zOccKOA6eftl5wqZg92iekxonsXnLA1VUkmOWbTopzWwM1N6lbd1u5Rgdem9XB1CH4edPQV5D0JRqgDRl3ofK2"]],

					"1FS180/2heelflip/" : ["Frontside 180 Double Heel", [
						"AP1GczMAH-lR8PGMHw04c_KBuVCSD1HxrDgIFbPNlVN_V7HlEivW_ydhVicUgy5bVuFM8kaYklUxCh1KtrWcgtr-21UdsoHONJdUIM4JiHB3BhPhJkg0fBRp9y8CEaSwwk5vZ4jiKvXkv0nKJs5eATwrmeVX",
						"AP1GczPrJcfZxUpS2IT1xf0BQhuMEmg2tSxgTw-OHPSzdAS56T5B-tKZTjosdU83oflXMcSttPwY_ppw_37LwX0YGKjD_Z6IkvZm2X0MMDXRRCQerKdgoNW2H7L3H1GBlXmC4ftWLf6ELL-JknLIAWgxAB1y"]],


					"2FS180/" : ["Frontside 360", [
						"ABLVV87P8qPJPxGn-tizw8_pxPYmVuhszG7oYYbbqnKlexQbDadji0-5p736CP8YjlUpxMGtFOSXiOv8sBJYqUYArL17IHjH1zcwvx-wx7oaHWdB5GbYKppnCFHkR0Bg02AzqxWhrOX1zo_wS-rFDnkLgZHP",
						"ABLVV86zBhqoEmSKaeOoB--z2UXUqtbQuW9K2-cD3EF32KYS1TjKhYLFNCAI3Nt-KtQtMa_uf28KtLGTzlyy-ALERcONwYao5A4CMySe4YsSe-61EGdVpPkCohk7dDw4Ot1eXcb1NkMgnd_y0Q4REdsZFilT"]],

					"2FS180/1FSshuv/" : ["FS Gazelle Spin", [
						"",
						"AP1GczNoIgWUHfc8-Ys42rws7am7Cu7uepMb4Dt8rAExBeKmhhv00YZMKcBdw46xxBFKdYdLOQtdWfUkGp6Gya8DmcYD0Zt0iPMKUUASEs5aC70obqa0hSJ8yzIi1i9zNv2UzZW-PS28do7DK3L30GgTeJP6"]],

					"2FS180/1FSshuv/1heelflip/" : ["FS Gazelle Heel", [
						"",
						"ABLVV8447o8YAKTqcS-uqpKMg6diwosN7_OjchMQYuHaYQsgyaDRjhscL9VY23qvqPGvkTqzqWWGUHj7EwhbMDi2vgOnwV-4C5fbkHc7Nxw8oh_R9WofG5UgO2MU_qGy7G_oTU8Xd4CXqjMZBofsy30zBsYp"]],

					"2FS180/1kickflip/" : ["FS 360 Flip", [
						"ABLVV84wDJTXxwy98Wgq5exFocEZUq9ciPiaE7WctySyUTs64cPUK3SavLkEEESmqH3WGNgHzISRrMadA9NZlYMFR1K5U4FfeZIQMBvkL3JTUN6syhNwiYo-f0QWcx3VnsLuWaE154_HFWoF-DI9zWH1MknT",
						"ABLVV86nfYaNS2mPXoqCZrxEeltIUGB-EH3RDDMs4py5XyRAp8glR_kuhRBoHv9OQ0waqIf_0FfMl9zWbMK1ndQhoHgMKJ5UncwQqNpd08MsHKb09J_PnNoWLHNTlynyh9YUz9H4zIaCCFfEuY9Cg3ZQZ1yI"]],

					"2FS180/1heelflip/" : ["FS 360 Heel", [
						"ABLVV85FXkmFngoO1X53bDyJYRh9WXEtlFxh4GrywZLTfJRZjsuw4lqD6HAd1io7aKmM3iJK5nLgJNe8qNJc1Q7ijvF4xylgrEmg08XTnuw0oa-fhfUgtdY0HpYDXOSfJ19HhYGm7yp49LTK5Pb6w9aE3DNo",
						"ABLVV84ISFw_wmVMAeB5qYAkxqi8kAvuCTbl1KJ1Ljd8A_pFMbMq6-R_RYZXcCylCJYc3noRLwnu7YiaPzBKUkmKfzI0HcgihONmyNiBL_6uZfzsVcf0Xdunqp_9v9ftCNC_cWpoR8sXFyat50_LY3KhoF7V"]],



					"1BSshuv/" : ["Backside Pop-shuvit", [
						"ABLVV86zhBLqJBA7Xway6Tv5w63QalvTUtf3wIZBKAFotvg2CZ5DC4tjvXwfjrf3UDEpHfULeEkyJ0RiCSkl3KJ_1oNv7RnMb2xQJF8OH0tsdPxybEDe0taUDVbgvDUzekTHHezysUd78UMtM78noN9wLvw", 
						"ABLVV84V1HTGyszTdcmWhwXwVwM9e86XNwAK039GIuS1aZQLF7qckg1u7VhKpMXaMcCya7DXm9wcDWyNvXDqg_2XlvDJTSdR_KNGtMee6ui0c_ZPVHVfCAnVLpM_rrvVwGUFNQ0GVI3hE_VPOs3EdWq6Hx8"]],

					"1BSshuv/1kickflip/" : ["Varial Kickflip", [
						"ABLVV879h2ysxQexUyy7VP3G2cfSeFQTs35RTYYUjZowWMSnxaT4dKRmX4n9MbMAfxzw9TjRyppKTJw1lKXeST7d0-a5lP2e5uCYuiE0W3ZdrclPDh7h0UMkMFfK_ArpeUlexAR4Z4fwOg1yfGOy2Z1Yf_tu",
						"ABLVV84tVPhDDRh8cDGOFWSb5q2Jp_0ZTyFo3SEDmd0V9tDXGGD8ravny-mQRebg932uI3nSD7ldKY_-blfv-jMomrwyBQ0QKt233bwtAvlqFf7v8AZ5WZBTeErUsu-rvPud2v-wugVwZLOOWMoJNN1edS7a"]],

					"1BSshuv/2kickflip/" : ["Nightmare Flip", [
						"AP1GczPsmwCdZsBp6yHzU0p2UMd3w6NvxhTTmXMdhisJu47DMHUe2v4FcPFcgqQSrxsAUqE6IzRmrdTeGqfwfU1rd7wIpn0PTbKTXo4Si2Z55NUK4x_sA5IbP6zlL4ZUL9UtxtEJJkJIKSLH-oMYQ3I0HPJE",
						"AP1GczPy35YlklozRRUePFm7ebbJnVNM1a8-N6gRxYqDfFEZmEH6IVpQZL5Eu1Lpqj7xSM1qUETQCDVq5wcL5kgaKznu9ySh4Yhg30CwqUvsxFH_mdHS_Io8-OcVPw3-wi70gM16OkeDHCZ5_5Pdzo2mJTex"]],

					"1BSshuv/1heelflip/" : ["Inward Heel", [
						"ABLVV87SdZiWM9GfTDpKLeNJmSy7BN1fhXaAmHtkJ89lmNW6lJVphTclvIR6CTbvN0SUV1RIM7xxJK6ij-ULE7uG85jWORHCpMnjehfEoCjqJtayxQ5jGOJixEAS7rp6IhG5zzntr3mARBxYHklJ9I666VDV",
						"ABLVV87Kym5JaZRs7cQi1LZBC49a4J8cY-fBgp2prpPp2k_Xh3Ck5AALO_5TqQdtoeYKHjqlf4GLDDAMrBHEr0m2ycbDxmYVaYGAuaoFwqDIzPaf4F9kd5Bdvz7DW8-8BGQ0_TGivnb27uUgfQswmTcIkXey"]],

					"1BSshuv/2heelflip/" : ["Inward Double Heel", [
						"AP1GczMeQmfRtjyF3bQeACTgF8jznQwOg63RlnV2S8vNl6CuHmhHBE7UNL1W7ZfDPxbB_bLkEeWYiHuFNubxDIw-k4_7K4azACjcU67RRzFYAIJEzWB8NKEjYX1lYYKA62LsBwqifIeQe6jw8naNeuZgIdOD",
						""]],

					
					"2BSshuv/" : ["360 Backside Pop-shuvit", [
						"ABLVV864LmgI8oafOfAl6ad4iIGSPMeD9UJqLVHkg5Sjmy6MT-kHjM3-qVvf_r6AO8fSg65Bud1QO--rKILTjOJRNhUP5kqdT1Jyj0cYVB512LIny3SOT5CKYsfkniq4eeENVzZbDCNJntzz51C4OXsgJZc",
						"ABLVV86KyZHkjqTa6g6Zltg6O4FNJ-nw14DYdXScbzKhVsZ20gikgxuGtrpZs_c6CNK7Y8uxsF110K-ubN-Wef0vtRAY6QsNF0pV20iwJElF85RnYxe8frO2gjcsHn2GdwrbZderIwDWfavIi58-C8NsH98"]],

					"2BSshuv/1kickflip/" : ["Tre Flip", [
						"ABLVV85Y1BEiIXvDW7a2Qr_CEP73NpIp4PkU0qWouTXGp6ubGszz_GOBhg_QzoPbZan4fUp2jyWGJr7fksHy98o523j_WR1dVmbApwD7c0OGdm8LsaM2qoOXvciBPtOJzaw4GajM01e8cmkQKlzYFWsn9q4",
						"ABLVV84wDIWkvLvkvkn2RM7RO8ksJnOd23rBuYGZafckH5HmitnJdduq0iU88R9eshrj1exsMxmLNGg2MPTkfSMu7ygOce7apmERwQv1q-XLE-x14PFltUKd-gkTjBFmEqv-PDBiWPPRYSgMVVTMPqK7C_Y"]],
					
					"2BSshuv/2kickflip/" : ["Tre Double Flip", [
						"AP1GczMsqGd6rKSyDL_2WVXXQWdJl0pJ4O2fDI4Dp06d2Oxyo2E4nlaKG89EtIvRPtvOtVujRMJcRXnaRR-R7cRiL6keNfR2XcpK9VuSRMS-n9J9I2LqginSSLpmpH0SP_BVaZw7TKXgfoezNtan_Lkmi4uY",
						"ABLVV87oiVKwOwtns4eDGMQ1hD8rrXU2eLQvgG1QU3jA9no7Ou7Jlx9JroOPWcnNisI059q5kgUglbZxjrkyqGPInLARSJNuWphJwjunzOugtc5CbtVFJOwocRK-Lk7fM4WLhPpOZdq7qwcDhGUHcm6H5fRW"]],

					"2BSshuv/1heelflip/" : ["360 Inward Heel", [
						"ABLVV84EVBuEcl_vzTDNorKkcDqUO342XBYgyZ-x_JmodWpgZMOCvN32SIsKBFtXYf1GWxdvUsGSAsv40a0OGWMNWiYtHNtK_gl7ujdwDViFjK1sGTt1hhEkAoHNASSqDEueV2zXtONzKVi6N_vp4N6eWpsZ",
						"ABLVV85pNlv7ebjnPNfoyjCZgyo6-8HjuZGk-VliMOO8zkWJEVAZHyn6M34AoSN5LauuPmKpYFf8yfqLfPA9i-pC_OUlwHPxIh5-ItT68kTgaa9sDdNp7omIuKGIpP4d7IAtzZSXYujlT57c36Tnyk2iGxC_"]],

					"2BSshuv/2heelflip/" : ["360 Inward Double Heel", [
						"AP1GczNZFOfBbketG_CFJC5YpBTcufOGwBit9xB9pfZM3rZIL0dMDWiubj31pCJ9nBKwl7sAMTpADeHrMn0uoOjzyMJnPj6gcQ5sy3YMGt9eqJ3PwAL9ReNFA7Zs6s_oi8z65uVNFeXkGmae45GeVVpnQ7L4",
						""]],


					"1FSshuv/" : ["Frontside Pop-shuvit", [
						"ABLVV84djQTJvYPu6nCljiCxHvKqjQz2rLGhSwiEKbyNIXVj6NfJHH1uxJ21dJorh6oxiDJZ7W4ralFR-jBS-uZ_PpRnreJ8oS0WZIKIfZcvjgYiVtrir25l2n8dOpSI8aqKdYXn2Bilc8bZubyIEQanldM", 
						"ABLVV84pa-5R_kzqoqAYj203Z8IZWLyWSqaL-2PHzC78u4tCROd_86RKN68lcutzLtbBFAJiubrHGYLczhuzwq36El-_Ibse7rJUN0_gm7rQis8_MF6E6U1H0Aen9lISG5LnmVDiv6P3rNIv1bG9KC7HNd8"]],

					"1FSshuv/1kickflip/" : ["Hardflip", [
						"ABLVV84whTycWOP3ZJ4X8lzkSguTBppBB0UNiABPxuzf1WTKoBzocAqzTxaB_pGvbFmOqpQa5Lc1D8_bpZ__dk1PKvzkLlkNz7RSeB2mUW4XSdEhwRd-3IVtzqz7TET_RBAWbPyvvPWNz2kc_XQD0IDgpbKi",
						"ABLVV85R3fCY85NgKrIQUdJD7cHp2rQB8FjjWLCXLclR2tmv2RQX-180d41V1TshiJB-g9JkGgPfuOIjJNpofWTKmjv_636IA1icr9Lk-kdLdV1IB4bSH8_h_oPNcUsttKTCq_kdNvwccG5Gcm0fUIEh9x22"]],

					"1FSshuv/2kickflip/" : ["Double Hardflip", [
						"AP1GczOxPbIRTb-AWu4CrFp4BRu-1BnYcbRn3tv98y_bk4mvF92GWLK1tGuocXvEXG6dzbOmvGfREzoCzdDRUyUd217CdDHFSZVc1I7skS6WQs30KR-mZrCQNlwmoNHY62F7Z3AAQMgJiJUEUzU_ZXknlog_",
						""]],

					"1FSshuv/1heelflip/" : ["Varial Heelflip", [
						"ABLVV87tnX29p2ulaE7zs54iFvHot_1XdK1Id60nN2SCJ4paEiVubHKqouWB-cF7yYrirTSL3z1WEkSxB8sHDpCsKIsvhAGiIMgS-14_QVpsT8QN75PUC3YnB2tCiX_EBEldPU0fu0u3wFiKVaNicdRoJlE",
						"ABLVV85vrwa6OZv4GDo1z8luvhxihEPhlXk9GncOxHumpJ9vw94GPjawkSMLDs0_yXOFpEWOPrEeroUj11dZlqxDkJfyDMRwQ3hcYZCX9pS4NlVZsuV_4XFscwruXIeVmv-CKE3_1lNwaJvG5K6AcWglvy8"]],

					"1FSshuv/2heelflip/" : ["Daydream Flip", [
						"AP1GczM8M9WrYDP8u6zRrf4D_TtuWGkinJ2SyRvmN3F7B9ob0DAgc86JNvEQny3h5kQCvp0mBNlFeg2CBQAkr1acJ7ox2NkOsJWErSlYAQB1oVF63J3Y4sRkMnbKw4eUyXlzm2KlK9lqDmA6EWeipd3Xt8yz",
						"AP1GczOsUeBaA-SnNGg2W7xNs6efhH5v2HIK_xo3MfwdUhTy_Q1fiJ85gzzaNl8PnQP6yyZTuyJgQwYHVxhOwKD0XxdJuKLQ_I36K9Q_RTTKwpC5sE3Zd6Q3z-ZXUfqgNKNssXRt3XfRm1eRn2u2olIFL-MQ"]],


					"2FSshuv/" : ["360 Frontside Pop-shuvit", [
						"ABLVV85NrQX94CE_2pSEEmMR1PdoKVx9y3g7mUtZoRK5A8HLkrky2Kq6i0U0k21sd8rtriuq0IL5rKqsb7xQLKPXB_9MGm6oiqWriqG28CfzE-jNQwaoUnxiTeZT003vPcKiJ2Uy85R7HNcNNFjK6vxn4go",
						"ABLVV86w7QykYQiPhB3tuXDS8uwWifUiyepChq-DgKNnd_OtabqZBgco6Pg4Um1d_EYYonpR0PszdnKrpYFHG525of-PDq4s50g7P9ZVsL-ux7kZJV_xHIeaGDY7Jvih-3MV_CccF4POwdflnUVib-K0J-8"]],

					"2FSshuv/1kickflip/" : ["360 Hardflip", [
						"AP1GczOC9iJ3Sv9gKxJzsRW2rM-zrRyiCpXKDQGiYFysrQhFfrTA86VxbD3QYidYsoxTmtdL5gmbHBLqfi7o_926ub6z7Xn_XGW0dRIw-33ff69fLrfsfJ3AbdV5_zp6ONg6WXJ_3mALNiWZx5wx0yqLVcUv",
						""]],

					"2FSshuv/2kickflip/" : ["360 Hardflip Double Flip", [
						"AP1GczMi5Y2mXyrecrDgWhLbuvi14JVcSxMcCVjrxcyHBSwlIMgzk98BbKgsWz7Kncv2SAcXgX3sPeLGvk8dL25ffo_ufr6At2uXuA-7rxUhqpTb3gNrRqbo0KBUq8P76c7UK1q08dOwAAPce5PyTv9qp372",
						""]],

					"2FSshuv/1heelflip/" : ["Lazer Flip", [
						"ABLVV87gSN7JKD3agQL6fVmFaC0tC8d8BK45s4WEwumdalC660WExsxSEYLeU4vkwCzJNYmy8O2oQHUkBqsorEIfaPPvl97sqYn7c_u_cYAv_bVPdQ3qJ_w-GK3JNSsKJxDZ7gg0oroeJlgzWh0MPw5mNIUK",
						"ABLVV84OC98SJT_QjqBaYyxVuHPzT2TLoAclVcP1QuiNcGvGuGtDkRnbqMd_XzZW-LbbtqxrQJ9rMOK-UBtpwuomDXQiws_xI6ZydMoIWQVxbc_KngHhjJcg84azvxcRIKN7SosXx3IZqGExzX7Ib5kPAACB"]],
					
					"2FSshuv/2heelflip/" : ["Laser Double Heel", [
						"AP1GczN-IgFIULGlEZA-BgJm9p3qeoHEEIhc2smw7wwOyvKkMG9uQfR6Lin0HWwBnE9x045mmGVrCBpcN0BrdSsgS6wUcqI6dpL90ee5JDWC7TBoq8EE0njANh0e_cNQds6nKaN6fqokcH-sCUszOp58poQ6",
						"AP1GczPPg4iX0cGKMmfhixY0soc8W1-dmaQ9HeL7hNCXso_1pw_qcr6wbWRQgfquP_6-KdJzGxiJ5dfPglOMZGTrrGs6vY40VemWS7-pcJnJ7n-IA4heBwwOQC7Xn75BKo6Wt2_OjERH9vtMGoVqoNJjnbo3"]], 


					"1kickflip/" : ["Kickflip", [
						"ABLVV84SPWI07ZdyxB-re7N2CJn59QcPyha-5nGgxHxPHnAqNSMg3tX4kA0cm5Sq5XmAFiKBzWKlnHhVUwhLu6i5nKytgUIVV0sxoqplau8SNLCpzzGPo10jPGaW6O9e5M8keKqP-0a2QiCr0k2hHg4whj0", 
						"ABLVV84D3_EuWuRqKuq3eplqLy24A7FuBprjP3DFxe3oK5-ohJZV4nK7X3YKUNNUMiZu42zkeu2iKAfniTROEnQ49iVUSLYjtHemk6Fn5VRFSaQDKd6szIT5Q7yV7n0I0pSTNR8I5-GI-BZ1J6aZvMCiVGU"]],

					"2kickflip/" : ["Double Kickflip", [
						"ABLVV85LhEUPUeDeowL45wHVRKjmmWAYDCddvq8OLHYC6uFMLnDGx__xuqrXXR1acNkKUxJKj3t8LbSrwEkXTjszsz3txMGxNdeybx4nOiAJLw9wUOL6FewNYZ1Hume44kobMLem7NMSCLQzr8gOnuWVWGXJ",
						"ABLVV85xsPai0AoAv4LzTjAl4N18ApvCq7K82HcniLYLqOCfLuEOUPxYX_6hmmPgUnDDwW24oUxgtV_-3NPd3iWfUPM05000yR0huhcXsC-PmDZiUhAQ-I1FjGEqFsp_2Th-YlkbglIWuwSgWBad3Ij-DpxN"]],

					"1heelflip/" : ["Heelflip", [
						"ABLVV84pUuWLIb5plgd4KMX2dQh08JW4_FCD3NSfNQB-ZJdtXi3nnL3b8f81x7Qzgy-c1kLwvN8B42xvL5GEByBnYTMFnf717I8UXiI7apeyvoK1mBeaE5SW2lA6AgHlxozLH1JmsNQjkf29T50LuIRMOgU", 
						"ABLVV84wfm4YO1-F0Y_Sc54ld3Xu74ndOsssbR0tNxqHqdilFZCkafpucP5aJWW4bEAqVgiItQt0poXpsZn1Yj13pADPn_oAxJJj_g34je1cvUDoU8LbhVS74pNsiwfoIj1JNSC2JIgG1dFToJXlb5d7F2g"]],

					"2heelflip/" : ["Double Heelflip", [
						"ABLVV84O3YI2w80httocjuqgTotqwbeSEdbtY5NRS-uxjijmKPm4NtTim8Mm4T0-ubR3GoHetNv8Nq9GPNeevzVdRvEKjf5_cTdetypxunQYXdwbHzFMwNQX-TPm803YheeRxpUu4GtKapcpSQ8rY9F9sxOh",
						"ABLVV867BaOKHy2XCADqTnVAO8T9FwbxJsFRWLrZPO76J2nWo7hvaNiR8cy_pWClzooAZRO3ogzYSj9SdIf4QxQP0XpQxqL6MM7fJEt5CcARZFxopFNqCzkOkGMx006cJB3VcSbiKbTjB24BdJGuAouAGExc"]]

   				};

// Pour l'instant, important que key === valeur (à la majuscule près)

const dic_other_tricks = {"Ollie" : ["Ollie", [
						"ABLVV84FeWhTS0tR4uzJA2g2gqae0bKOAbVvHcNiMyHUdXlP9sLeVvi-Z57EAAfsXCHmlLB9hgrGT863qcdIJWTsws4EngLZ44Z2I1Xdcsi_Y80t0AHls1t_QtG7baLGpxfErOMxcNxqGfRISFmjOCkU9Jw", 
						"ABLVV85SPjQVkL5GOCq5yaELQj7Iu_RSFi7oBezIl477kaaBE4xhncGTVsTe1FKMxXOouvpbV0lo2C8sOHvA3_GyY0bFRng1Jm13xXOtlTnGsYaSKmjtnC2KbP-aqxtZXzhY7vTU55CW6NDRzXxUUt1W44M"]],

}










