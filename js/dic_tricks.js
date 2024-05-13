/* 

Le dictionnaire est présenté de la façon suivante :

{"squelette" du trick} = [{Nom "réel" du trick}, [{ID de la stance normale}, {ID de la stance fakie}]] 

*/


const dic_main_tricks = {	"" : ["No board movement !", [
						"AP1GczONXTD5eCNN0j0r37uB9YfyoXHTCQUqq8nn-GiTejxsAII9pbtB_62gz7fjG0AgQ1X5c9-ynB0wnupoJpc4qoiHJBrUreBe-MtJes4pXv_tonGWZKf-XvWu2pyNz2cnwouYCtyPNfLyXAlaKD4pS5J0"]], 

					"1BS180/" : ["Backside 180", [
						"ABLVV84aLansXVeVl44zX9ykJS47kyXJD8U0l0lNPd6dTP02j1Qc-uQUemKbujKmrq3SxjR-HEmQLShzmrmWPOW2GgfMVvbZ7YtM5m__IrAZ0ep7rP3rIb-Sx_dw1HZ21NjjMXOMl8N2ZOvFS_nmQTnjtnc", 
						"ABLVV84pGUgHICqSQnQG32_nkOND53HzJ0Is0Pv7rxqk2ZnOxsqwl1tl9RIxIlJsS3Y9PhvgpkS2_6pkajSWAN6eQ5ufOQnabsAilETfkH_4bk9SncpWylylv4kqoTFDhc1qJDb-slIO2WeELmj4jlnv34U"], ["A half rotation of the board and the skater, frontside"]],

					"1BS180/1BSshuv/" : ["BS Bigspin", [
						"ABLVV845IcI3Uqm5S_kcB_eqNqZzc8meu1LNaVzSab4XIRZiGjkpWb26MJPukfLLlTj5e1ig4IaMv6BUDMpw5SINnHr9hy1N0ib1CPZ3W1N_rQO71I9kbr-nD3lLux7tFTtGa4YTcboI-OjXuVa6hd4Gc_k",
						"ABLVV85kaGrrREZ_PRPb6Vz12plOwSm2U2csCpFuAD6zbt05OVjfdwgz2qT3uwfJF-S7CUWNZjBfMQaLaLVBWcbGah0l8Dx2zrrlx5kiwOD2VSyWcSc31mdV4rH5xdoWdvgunhis377qieY7SftwveqeGlE"], ["A Frontside 180 with a Frontside shuv"]],

					"1BS180/1BSshuv/1kickflip/" : ["BS Big Flip", [
						"ABLVV86UISv677yilHUH4xtlMtVJBq7iBwlfjJvDetVMI1Wq5oosTeOyIyOyYEtXtsxF6AI2ssBkpTlUui6WxYJaG-kV6Yl9lCi2hTvqF_AfCUkbgA47Jm8l7RJOem0hRAslux1wwIN1SgkMnTe1H13EjA8c", 
						"ABLVV84TCAh84i4nlOXSzUQjzZbygYSi_oFb0h3aux6VN3EpkkKY_mYgZZ3CFsg8Q1z4j0oPvMTq5XHtyrd1eDd3j6MusXGsXWzMduo1hSuBmYoEC-sphUECySwGwSWoQqJOZIK2oJW1laF51A6_Dldfk4iA"], ["none"]],

					"1BS180/1BSshuv/2kickflip/" : ["BS Big Double Flip", [
						"ABLVV85sYhBoR3hGq6pfSlDUQTKw8wS4xxcnleAeIckrP7a-GAkrYldYGKrq9eiBdyOXYAoaUGX915Ddm293GInUou1LWo-iYx-r4lw6dsDvLBvzlzpTPYqglfHX1IQyVfUzVqfxMIEWvZUM0TvOGXAni2Yw",
						"none"], ["none"]],

					"1BS180/2BSshuv/" : ["BS Biggerspin", [
						"none",
						"AP1GczN_nUc959HLatwYZihx9OaDCYwdnjKmQJDd9BdKMKxpVShZ6JjnEINJHQaon-GG8EaEERt7sY1HPbIX4KfXXl6Uw3lAeg0MVQcn1i-k9Adxc8XTXTNpcut5zXlJ3Q1IKK6S-3nFhE-50b-G_MFTbNEm"], ["none"]],

					"1BS180/1BSshuv/1heelflip/" : ["BS Big Heel", [
						"ABLVV87zZwd_VcsJOMcLlgUHNYfUj3TvzFS-BHlf_N8gV0JTCKrEtNXstUwobRXV4mMP0ynNsIlKSBEmXS7I9lsCCvDHKBAIAfgWCVfG9siwIh5N_v7L_ywlzZwOw464qe91pVffQcvGxplKClb-nNVHDxe4", 
						"ABLVV870OQoogdqNRQRMwBeHwyF7urlfiq_B8sqkKbcTYVz4CqjbCKm5RxRfmEN_uPwxxerArDLhwrwAP2i1JtgMg5QMyYZeiwmTXwwj_tCXPnW_nKIP3jmSsk6_GbFuWOxQpBHzJIuehCk_gI_Zmrh4PqpX"], ["none"]],

					"1BS180/2BSshuv/1kickflip/" : ["Bigger Flip", [
						"ABLVV877d02MZo0Hd15JvGr9q8bX57USB2R-D1rbxwcEn0HdiseV3A6b3HE3ro7eiHlfM-ZUMLbYHzYchhRX4vGSh5xwz4upwGL1_CScUqBFNx20OFuEFZS7LoWDXNkdvMmkfhNtpL8BW4Uj5NzVNJhkq62R",
						"ABLVV86KHVcNNgePi_qwJbT8GqBugedTfKqP0PCRP6u_o8yFrDlKZCABn5jNzZ2jR8H8Xnq6B66v7SdeSRrTzzyXIp8CkRWi0PB3lfCQIxdDMP8HeM0DKrBuoBmLwKLW3nc-Pa2hvUA3bRDa7NfcQZQfpMjO"], ["none"]],


					"1BS180/2BSshuv/1heelflip/" : ["Bigger Heel", [
						"none",
						"AP1GczMpNlpK0I6ZJ42gpxtguRqMOT0ct-DDS7C8rz9D40yrKPG01nz5ObOuEaY3O3cnxc_ZqbUh-pI7fdieNasCoPdwSAAq-dotwT-SndgZSkjS2OA99nrr19SdFYXfZu3GXBnDF8709GXv1Iioccl4Tkz_"], ["none"]],

					"1BS180/1FSshuv/" : ["BS 180 Late FS Shuv", [
						"ABLVV8654x105JWxUVSJt33tqIGLRgGy7XpQpwjAN9tcTeu0TITEE2p088q5OIMUEQY-PBiyjRF8z7L5AZXICG2QbEF7OYG38fKWKUOwHHVtTDaQvbW3udZ-AO3EmBo6YpyLZH2tfTVOAIhZGlVhAgQj_mvv",
						"none"], ["none"]],

					"1BS180/1FSshuv/1kickflip/" : ["BS Ghetto Bird", [
						"ABLVV87s7Ge8NSP0nEmVyDSXLggK6Px_TWRGdIrK_rLgJwsiX9mPbsToUmTzKSPGUpvHKIGJa4ugJacUOL9wVKBcxWigZ5_TeUmLRC5OHcB7otazsPjqQfqIT0_Dyc8TirTXmLPiOZ4NTdMjC4Z6JJLT1FwU",
						"ABLVV84k5mcCSKQ4zTn6hfFwbNoyEA6FSPVaWJ3ySMLac9u4Y72SMmusZh3N4mI6gDlniYelyFsfUXkbksy7uZ3NxSApJteYPP6APja2XMUVSz5Zwl4wkWYiZRpfo66yxaVY41R_GVVK33843VouuBkCZoLq"], ["none"]],
					
					"1BS180/1FSshuv/1heelflip/" : ["Varial Heelflip BS Rewind", [
						"ABLVV850GjzQ-LSmQtw93XgVb6zfLYPMdE-GnTIvFCzrRyKhD77KnPMZW-Evh6DjrSgo-fbAU-B1aWVQCl19XTJYVd8pPPtchQ_NK5_qKs56bcCUE4xkG4khFNWYpwYESlSRo7m-7Ac_Cw5XCLTCg3mnyMMx",
						"ABLVV86g-MpjyUNyIGhgcLmfyHHDIrGfbclMFXUmHArPWdxSt-p7xTgXD6Zf7uFZB8RO_GiZsZkMNJo1__vyXB6Nesf8m8SuAa6AHdkHlWsN8eUbljcnznErCzD5CW71kC_kIs3rJuhriLME0ek1Pws1NV5N"], ["none"]],

					"1BS180/2FSshuv/1kickflip/" : ["BS Ghetto Bird Double shuv", [
						"none",
						"ABLVV85GmrfF2ODg7Nayv2arcz-9I5InM4s4EagFov3w0sZSU5flpVyI4TLkTw8BoB7H-afWdP1Nu2-f5m-C-ycc7kGlSQ_uqUc9IfXTmhdLJUtF5VBQrW4FW0KsBeu_kDzosx6ikiwLJ7fpvE6z3nH2rHdp"], ["none"]],

					"1BS180/1kickflip/" : ["BS 180 Flip", [
						"ABLVV84RCkq6lpqW9KfJF1OijoZwsaak6Ml7YbqnIvrPYavrjWBvgmgWFM5G5Q_Gy_P-W21gA0R-dTDpmFShxUHYZI3V7iOCK9f3GQuuCUCWWTZXTG1yzfO2nrHjbNIXSI2FyFCOeWUce3iGOlM2457W5bU", 
						"ABLVV84IdPGIHLAXK0GhSEdShWYmvAQp1H6fvX9wiziGhMUV-31gcuoF53gfXqrq7cKgNTIDDtexsuddqN4DwfMF04PV51xxv9OxRT7pPgoG8kFyzCftgYBYLyQY1ixJYKow3BfKg0bdVajYBqjtA3AnntE"], ["none"]],

					"1BS180/2kickflip/" : ["BS Double Flip", [
						"AP1GczMFoe990zk173KQH3oe9JU4_kpkZNMxvQYI8oBruzm0BzREpCzTbtWcIG55WHhUO77lRcFuXzIzXz7Lp-3Rn7uPlYKHBrZ5wZfqYkqBp5yT9SiEUS88jALbOLya8WhkxHiLQ4mtuxoxlOL-Tu3U1yQK",
						"AP1GczOak90kHEtug11NGnii0UxSjDYzxeyq2XoOYglwWz5dPu_oTVHhwaaDqOpRZ292wmkJTACTNdvVyTmnel7_RoySlHvoUnYvn4-sWVXqWyVxFYXeNFBmJNwiL8ml1rGq_Fq7LQzkzIr7_OA44X_vsBSQ"], ["none"]],

					"1BS180/1heelflip/" : ["BS 180 Heelflip", [
						"ABLVV86DJgJIzRYWX6ZNjW3Qu-gbdlbIGq3IucuOGlVjTbk66WhBGvqJstiRc6OExKPznF4_CsqtNm1L1tfWnovoFiMsRr9gh9BYEYu0wKLBOeNePkeqKhiVXz1EPAIEjWRi_xURpmcK71pbP4eeKvOoYAs9",
						"ABLVV85wNqqSulXf1KRTSnrlAakm0kkydWoBLt1jm60ExKcsTiVbClnyGcSg8T04UMmMhJ1Fgj_Ml3SC29H-TGRHQB1RZwFcZrMuSUheEEOaF9O6bPaArJb5tMv94UO7hJ6xLSfrCBz9JSy_boBnEZJ8zNIK"], ["none"]],
					
					"1BS180/2heelflip/" : ["BS Double Heelflip", [
						"AP1GczODAr7P0sx7SkbHNPc72pKqDWLG5qjZ0hX1smOYbh-gU9GJ9mmjIE7AX8meAQqzbPfRbF_go59GTkHqPb_l6zVYINIoANBFmBl58L2zeqeuSWXHgo-For03vscSPgqwZOz7CoVH8P_RZR9uwmUqZfrH",
						"none"], ["none"]],


					"2BS180/" : ["Backside 360", [
						"ABLVV87wxkvURTys-mf2z7otARgoXDf-l_QoJA-cl7RGDpfMgNUV4CldHLlq9SCkz92WtfhcRQVlfd9qb4B31JVrKr0npjj0d-zIIl13oY7jL8jBm-NzlDpOEwCKjtIwAEd5ryqMDcE60ww_z9gu-Tov5wg3",
						"ABLVV85ZS8IrD_npAJu8juzzhJos3GtLimbLIXg7jaJ21FSyVH2Usg14kLZ6mXLrZCFWB8YJSAGcyWT7pVIiWYQ7b73UimL3HyDLIBfO9k4mXP3Rlug2JypjhXCAmeLf4Ek1hMgoMSPmMXk5BRfrArwHxulZ"], ["none"]],

					"2BS180/1BSshuv/" : ["BS Gazelle Spin", [
						"ABLVV841PuDaJv4v-uYRj71X2wcPKMTC1879f8b4FM2tmlKcMCG9RuaeSIpBtrR59_zhdhOyrYdGaB6Yw6LWQ1q7FgimcWRhdTW4aZu3fX-v6hqIrcGTBkVao54qO6FArRMTkEK-xzgGDi9-TJBzrBQ1iPCp",
						"ABLVV87qokRsaDEth__I-avDnhjgGgjnxzWgyejawj17-mlwW-zYB3rAPO0bu72MXiP9JcsJECEfTkbQpI__yLes2Kxek6hnS6XixJ7d-kI6T2Ozoc6g5fx6--rszyLofQH0kzzsoL5qp8HKdRpcgG8pQvyI"], ["none"]],

					"2BS180/1BSshuv/1kickflip/" : ["BS Gazelle Flip", [
						"AP1GczOQSWWTDhoquTFsLJqcN5_s25B8NpvWZZ7XfMGPGGuU3cFCrVF4Pfam1hf2IvGcFlh98oDluDL1RUwV9LqEh5ICjQYDCPa7q5KQYE3mUlo6AiKWPTmiq-4fWn0ZOyZGqhwjua7f-Zb5L95Omdp4LTAX",
						"ABLVV84lMf1K6kH3qQ_nQienMjd_LMI1_iFsULViJr8glLxAb_SgnFknCH5X1UWYR8gC___wOgIFg-Te_F3PXFsmPe-Eix0rgpD93g84m8P-yDGw6zIzP4Mr_-35N3Bb73SL1vTqnKjhQvcCK9qXZNet8pHB"], ["none"]],

					"2BS180/1BSshuv/1heelflip/" : ["Gazelle Inward Heel", [
						"AP1GczMG8JHegtvbducI2m1iF7bvnxq-8dh-633CSDbAb_hSbPGHBTzF_e9KAIPOMJK4HXJrr-g5Q0QvCa_8ItdP0-3sWHTtyNl3zK_YWaE_fc9oqEDxD5yQKbrC4JenMpoBSo2nitK-Km4vfj2FS0Izl2zy",
						"none"], ["none"]],

					"2BS180/2BSshuv/1kickflip/" : ["BS Lion Flip", [
						"none",
						"AP1GczOknLyRCN0BGh1sS6rpYD_DVO4ikzd5vQP0pNN5odmUnSkgNcWhDXxAlVziTCkG8IFtX8JJz87UUf--vSMbNX6oQLoRji8FBkMjXo-YAkkiI5ovQJagPdpyu5cTOEPgew3mTwj-73zWZ7HQZvctA-5-"], ["none"]],

					"2BS180/1BSshuv/2kickflip/" : ["BS Gazelle Double Flip", [
						"none",
						"AP1GczNtR1vxWg7gbyU6CivN7-dNYeTsrBNaQjJE_q9LPGBhFCBtlOMZ0lT1Lo093h3sIuDo8D1-Qsy7EVHtDuYrdm3JKzAPyOEbJEFMnahy4NyS7QKH5i3YS4DjTVmP86gGiomZaRYJcN-bAuZsa7wDoiOb"], ["none"]],

					"2BS180/1kickflip/" : ["BS 360 Flip", [
						"ABLVV87cWy7yvclldFdsv2GEsjcb2oiZ-dQh-E8BtnAAJ2VMVfmvLtNdNQ8YIeL4ju_gNt5hSYhPxYL_QWp-sekMHMeHDgP4bapspt9xqbBmX6RPzV9Y3sEFuy0X_JTx3TSSaUCI7thn_vY4-rJryKiLecgh", 
						"ABLVV85SdWGCWmo-VpWIVugvOHFUN3uTRfiszIz-ud7L-Tnhebit14bffD_dBUpod_j22NGyRLYHLAWd_FMTHjyk1vcHKqPaE4eSDxa81lPRkyvEwFTjJpn6NIRuqm0POM5F4ROQmLEIhj6XINqpqKSlKcS0"], ["none"]],

					"2BS180/2kickflip/" : ["BS 360 Double Flip", [
						"none",
						"ABLVV87eLGqZ6A2i2NdEbWuNtJlzG4eAx3Bvwm2FGXT3XQUUAyKK0TXerg7OUGel9S-Cp0t6-Iz8PhEVVlrPN5mTPjOVtYbsyNvYhivMjZ9O3SBucQE5fou5pOeF-XIYB1goCTfLFtKARYZ1bix0g61IOB45"], ["none"]],

					"2BS180/1heelflip/" : ["BS 360 Heel", [
						"ABLVV85oTFzlQ1RY9ek71qgpDmXa5qWhfvauxjnj7CBy49xGfTxpjOUwd24n8H5fSV5DaS8imVSYGO4kk2mcrh39G-eY5viG1CDkb8nCQVHOw16Qf80xjWDebXjZrdK0F79zoMRjfEUgeRjZ-3tO6K7oRL7i",
						"ABLVV85_gOYymGq8uBPf_DzmKrUelpR6_0UnnCPkUGBfxCVycmlx0qWOkyq6tnkTSYxpoEo-plpA6CzhmEo1bMVy5NBI3gifykipn2ZQhdGW_Og860rvBXrTSVWuf-QVOBIkSmwLTsrMG1C3QoGo4i1THSpu"], ["none"]],



					"1FS180/" : ["Frontside 180", [
						"ABLVV85lEfZQOO1qcAxKcffcUmkf2C6Yx-gYlZjveMr2Xybi4hZ3uv-0Qh66seY_YgX51k3wONLxHRGKm9z0IqHx1Y2yETxDz0ozZxulJUok0E-6FEVWzdOSH0hVtvP7AbLJTIFUd_hpQzKNe5KGPAb897o", 
						"ABLVV85C8mJq0PXoARqwXyl4WFE7l6ka9KOxZ1GczvUsklwqUfP8H5qp7mT9_F9Qo_cx7z8PJCWmlo2ZKeL-XByEgC3Glez2eAg1AOfFfmBN1C7nv2KTpoKfgngcmR4V5SpIJEFpXAHxuZaDZjI9w7I4uHc"], ["none"]],

					"1FS180/1BSshuv/1kickflip/" : ["Delta Flip", [
						"AP1GczOTsw5_j8jSmXXRh8VlMi4VkUvA85hS2GqaxuUAyKBiX4Q8J9RFMhe-PdQn_eGQesrK3Q-3WUypyc5jNOALXTFdfoF_NbZDzgjNtY3IDx2ekmhboJktOelO4apE65VBfkBnmfaoAF5jBisZt6Rm8wWt",
						"none"], ["none"]],

					"1FS180/1BSshuv/1heelflip/" : ["Delta Heel", [
						"ABLVV858DhJ6fUmyVOMvsJE6o4LWNqxOLUNdi4QUEWzvhnOFghbePa-uNRy4nFrmS9iAVSCSlTHWWk5SFeGs5Bq3AWl3qFC07DJCmmvn3qofwp-89GdtvMkwmkOK-aVu-jCGgFWnjCAAwvMaGYP9oedXDdLP",
						"ABLVV84qTzpLKaiJSIYgCLMcIZHSU-21b0EBm--lTtVQGhXshPgtLt9ULQXksDkkYFGLF5MVfaILPbJVn0p1NDSOctSL5nci7xcCFqTdPCh1FmIZkrs0PALI98Kh28hTtLnb3I8MDDCmg1FKJJ4a9MA350lm"], ["none"]],

					"1FS180/2BSshuv/1kickflip/" : ["Tre Maker", [
						"ABLVV84MkSnWh0_WPOu44RQX3T099oPSOVqCE5FCOnfgtaZYfTaq2FdzhLmFyAoJGAoNz-w4ahO3dnWbAff32w2qe40RLi49lBGcNOutX1Y0G_ODGUq2Y-y85KGdPAqDscj87aHedTC-mKkNhlI1O6YpXyGX",
						"ABLVV867wVUEjj_1eVxtRWrjSd-cZti7TwniPM8pg_8n30iYkBih7IFlGmZSjgn0ZGESmQVcctvYZwhEBg_HAwhWzsc6cYW3txnjp1jk8bc-rkkCEBuKmLS1GFnNdc1cMXFNUXS1W4HzTvOaymvtr2m2r_f8"], ["none"]],

					"1FS180/2BSshuv/1heelflip/" : ["Heelflip Tre Maker", [
						"ABLVV8705Nss3fg1mhGvJIzwXCZ0a7-L9wlnyCGZJO3md8U0iYPfEmTF-bDULwMWsleyLiSdsnZWbOmcXKY687NJ8KlJPwkqFccdUC0L86rPK0LEPCo7kBwWWc15GPpl3NmJlgXQPGIlX1zwYsJ5ex1mPbAh",
						"none"], ["none"]],

					"1FS180/1FSshuv/" : ["FS Bigspin", [
						"ABLVV85pcCRpdpkCVel_wkEyKt_Fw2_yGNoVxS3DZo-EaWWSOfvLg_gYjte5m1CEHetkFk0eEkcN_57wPAo-O1utsMa1tbBflM5XrtwCOjzflvyFnMJTzTyVBESlKaNKjkzOvh7xhU10VTrHH5WchslXVPg",
						"ABLVV84Wr8YLzyN5HqpaHsHIRodoEVBqmYlU-iwSUUl5CH-dgGibAJihMhuM3DnL9EkmrlB3KeqP64vSGEJv0J2mx7FKLqYhIj_w2_BwlBg-d4jglHPU75nM8qy9ppMY24Br6gcyCqeD3BOhwNcwjqANF_o"], ["none"]],

					"1FS180/1FSshuv/1kickflip/" : ["FS Big Flip", [
						"ABLVV84ua8mSMwaF0dHkJdBNTAN9qr69TWTqR6tef0ZT4HO-NapjSu77c16ybulxGy7p0OSyZb1pRxCPFSQJAC9WTlmzhdW0EM23OkdJEXUD1CYXjGWD9kxDmkJdLqLDMKO2rhQLKquXD1hjpdAGPopuYnKU", 
						"ABLVV87J3ySnYTz0QDOC3xrc1AoL4lLcM6hP6ngPlXNrdoRThew8LqK7dWLbdXDwgNyj1GFvXbKkkuMApfjRdtS9jNls1UHN6QR3H_z1_E2ge2NaR0pzcQNBdCJVU454iXtTPF4F4m7PVQoniIXcGHYRec_d"], ["none"]],

					"1FS180/1FSshuv/1heelflip/" : ["FS Big Heel", [
						"ABLVV86H2Bfs8gjxcxrWNpQ8rbrIYAr9JrZ6kQLyuWCwZy8YID_kIxE0uzUypMA4EuLGAdZzk7aWOtOTFO_oB0u6u0g0pzNry9leuGuhjEiY4xm0iZOVgFTVBL8k0kJop8ea-QBZPIYKM1TpYaHOqQ1r5Ag6",
						"ABLVV86zu6oeLaxME9FrOzcJ5jDCbHvKT0rJDQoqELeQoFVTSZpcnh0V8LpSCmvbPZD-e0YMq94MZcL3EZbTl0vx0_rWY10XC2c2h8cJo2cqID7kRrDSzOouUjuZj3H7uUkBxLXzIdRZ6FcVCW_XpU3t38bI"], ["none"]],

					"1FS180/1kickflip/" : ["FS 180 Flip", [
						"ABLVV84zesR68Dmh2D9EoNyyeDWVZHizn7igjRcA1QaSlHDGQw7N5kkeEmKnTAXlFsBkyn5FiSD44MGuSevTzPPkzBhby2iMif9t0gt7oTaG-oAkS2mlZWfTiUwcvwT2LtyiLo6VtqVLTygO3u4TV-yD_lQ", 
						"ABLVV87wwVLKdr0Vr4pMliENcO0iz2UlWwvOeXQUrSTj4ZroJw_WCll49wMHZ6QoNnpFT-gsOhdjpmMNUY1E46-JXmDOGQqAGEEg1l22ax3ebCi_pXaaCD1rr6o96YA0ANM3YkMZwSU5XwU13aCtDr2KJDk"], ["none"]],

					"1FS180/1heelflip/" : ["FS 180 Heelflip", [
						"ABLVV87pGQO7HnH8tKQXdtkycVSthxjvYnX7nHufUB-Wxk798aCv0I22FUbtrSjeRB0lg3E6zD6YPujPy5LtVzb6pLW00GruZWdNhFPZXpiEVnwAdKsNFztCjUxsaM9OJjlhtkljvJw-Ifzl09R-kErzatU2",
						"ABLVV84diSofhEqpwS1l6qljwIJlnbfAi_WfMhzO7Zcq3HVg96lebg5AQqS45TKuvs26E9zOccKOA6eftl5wqZg92iekxonsXnLA1VUkmOWbTopzWwM1N6lbd1u5Rgdem9XB1CH4edPQV5D0JRqgDRl3ofK2"], ["none"]],

					"1FS180/2heelflip/" : ["FS 180 Double Heel", [
						"AP1GczMAH-lR8PGMHw04c_KBuVCSD1HxrDgIFbPNlVN_V7HlEivW_ydhVicUgy5bVuFM8kaYklUxCh1KtrWcgtr-21UdsoHONJdUIM4JiHB3BhPhJkg0fBRp9y8CEaSwwk5vZ4jiKvXkv0nKJs5eATwrmeVX",
						"AP1GczPrJcfZxUpS2IT1xf0BQhuMEmg2tSxgTw-OHPSzdAS56T5B-tKZTjosdU83oflXMcSttPwY_ppw_37LwX0YGKjD_Z6IkvZm2X0MMDXRRCQerKdgoNW2H7L3H1GBlXmC4ftWLf6ELL-JknLIAWgxAB1y"], ["none"]],


					"2FS180/" : ["Frontside 360", [
						"ABLVV87P8qPJPxGn-tizw8_pxPYmVuhszG7oYYbbqnKlexQbDadji0-5p736CP8YjlUpxMGtFOSXiOv8sBJYqUYArL17IHjH1zcwvx-wx7oaHWdB5GbYKppnCFHkR0Bg02AzqxWhrOX1zo_wS-rFDnkLgZHP",
						"ABLVV86zBhqoEmSKaeOoB--z2UXUqtbQuW9K2-cD3EF32KYS1TjKhYLFNCAI3Nt-KtQtMa_uf28KtLGTzlyy-ALERcONwYao5A4CMySe4YsSe-61EGdVpPkCohk7dDw4Ot1eXcb1NkMgnd_y0Q4REdsZFilT"], ["none"]],

					"2FS180/1FSshuv/" : ["FS Gazelle Spin", [
						"none",
						"AP1GczNoIgWUHfc8-Ys42rws7am7Cu7uepMb4Dt8rAExBeKmhhv00YZMKcBdw46xxBFKdYdLOQtdWfUkGp6Gya8DmcYD0Zt0iPMKUUASEs5aC70obqa0hSJ8yzIi1i9zNv2UzZW-PS28do7DK3L30GgTeJP6"], ["none"]],

					"2FS180/1FSshuv/1heelflip/" : ["FS Gazelle Heel", [
						"none",
						"ABLVV8447o8YAKTqcS-uqpKMg6diwosN7_OjchMQYuHaYQsgyaDRjhscL9VY23qvqPGvkTqzqWWGUHj7EwhbMDi2vgOnwV-4C5fbkHc7Nxw8oh_R9WofG5UgO2MU_qGy7G_oTU8Xd4CXqjMZBofsy30zBsYp"], ["none"]],

					"2FS180/1kickflip/" : ["FS 360 Flip", [
						"ABLVV84wDJTXxwy98Wgq5exFocEZUq9ciPiaE7WctySyUTs64cPUK3SavLkEEESmqH3WGNgHzISRrMadA9NZlYMFR1K5U4FfeZIQMBvkL3JTUN6syhNwiYo-f0QWcx3VnsLuWaE154_HFWoF-DI9zWH1MknT",
						"ABLVV86nfYaNS2mPXoqCZrxEeltIUGB-EH3RDDMs4py5XyRAp8glR_kuhRBoHv9OQ0waqIf_0FfMl9zWbMK1ndQhoHgMKJ5UncwQqNpd08MsHKb09J_PnNoWLHNTlynyh9YUz9H4zIaCCFfEuY9Cg3ZQZ1yI"], ["none"]],

					"2FS180/1heelflip/" : ["FS 360 Heel", [
						"ABLVV85FXkmFngoO1X53bDyJYRh9WXEtlFxh4GrywZLTfJRZjsuw4lqD6HAd1io7aKmM3iJK5nLgJNe8qNJc1Q7ijvF4xylgrEmg08XTnuw0oa-fhfUgtdY0HpYDXOSfJ19HhYGm7yp49LTK5Pb6w9aE3DNo",
						"ABLVV84ISFw_wmVMAeB5qYAkxqi8kAvuCTbl1KJ1Ljd8A_pFMbMq6-R_RYZXcCylCJYc3noRLwnu7YiaPzBKUkmKfzI0HcgihONmyNiBL_6uZfzsVcf0Xdunqp_9v9ftCNC_cWpoR8sXFyat50_LY3KhoF7V"], ["none"]],



					"1BSshuv/" : ["Backside Pop-shuvit", [
						"ABLVV86zhBLqJBA7Xway6Tv5w63QalvTUtf3wIZBKAFotvg2CZ5DC4tjvXwfjrf3UDEpHfULeEkyJ0RiCSkl3KJ_1oNv7RnMb2xQJF8OH0tsdPxybEDe0taUDVbgvDUzekTHHezysUd78UMtM78noN9wLvw", 
						"ABLVV84V1HTGyszTdcmWhwXwVwM9e86XNwAK039GIuS1aZQLF7qckg1u7VhKpMXaMcCya7DXm9wcDWyNvXDqg_2XlvDJTSdR_KNGtMee6ui0c_ZPVHVfCAnVLpM_rrvVwGUFNQ0GVI3hE_VPOs3EdWq6Hx8"]],

					"1BSshuv/1kickflip/" : ["Varial Kickflip", [
						"ABLVV879h2ysxQexUyy7VP3G2cfSeFQTs35RTYYUjZowWMSnxaT4dKRmX4n9MbMAfxzw9TjRyppKTJw1lKXeST7d0-a5lP2e5uCYuiE0W3ZdrclPDh7h0UMkMFfK_ArpeUlexAR4Z4fwOg1yfGOy2Z1Yf_tu",
						"ABLVV84tVPhDDRh8cDGOFWSb5q2Jp_0ZTyFo3SEDmd0V9tDXGGD8ravny-mQRebg932uI3nSD7ldKY_-blfv-jMomrwyBQ0QKt233bwtAvlqFf7v8AZ5WZBTeErUsu-rvPud2v-wugVwZLOOWMoJNN1edS7a"], ["none"]],

					"1BSshuv/2kickflip/" : ["Nightmare Flip", [
						"AP1GczPsmwCdZsBp6yHzU0p2UMd3w6NvxhTTmXMdhisJu47DMHUe2v4FcPFcgqQSrxsAUqE6IzRmrdTeGqfwfU1rd7wIpn0PTbKTXo4Si2Z55NUK4x_sA5IbP6zlL4ZUL9UtxtEJJkJIKSLH-oMYQ3I0HPJE",
						"AP1GczPy35YlklozRRUePFm7ebbJnVNM1a8-N6gRxYqDfFEZmEH6IVpQZL5Eu1Lpqj7xSM1qUETQCDVq5wcL5kgaKznu9ySh4Yhg30CwqUvsxFH_mdHS_Io8-OcVPw3-wi70gM16OkeDHCZ5_5Pdzo2mJTex"], ["none"]],

					"1BSshuv/1heelflip/" : ["Inward Heel", [
						"ABLVV87SdZiWM9GfTDpKLeNJmSy7BN1fhXaAmHtkJ89lmNW6lJVphTclvIR6CTbvN0SUV1RIM7xxJK6ij-ULE7uG85jWORHCpMnjehfEoCjqJtayxQ5jGOJixEAS7rp6IhG5zzntr3mARBxYHklJ9I666VDV",
						"ABLVV87Kym5JaZRs7cQi1LZBC49a4J8cY-fBgp2prpPp2k_Xh3Ck5AALO_5TqQdtoeYKHjqlf4GLDDAMrBHEr0m2ycbDxmYVaYGAuaoFwqDIzPaf4F9kd5Bdvz7DW8-8BGQ0_TGivnb27uUgfQswmTcIkXey"], ["none"]],

					"1BSshuv/2heelflip/" : ["Inward Double Heel", [
						"AP1GczMeQmfRtjyF3bQeACTgF8jznQwOg63RlnV2S8vNl6CuHmhHBE7UNL1W7ZfDPxbB_bLkEeWYiHuFNubxDIw-k4_7K4azACjcU67RRzFYAIJEzWB8NKEjYX1lYYKA62LsBwqifIeQe6jw8naNeuZgIdOD",
						"none"], ["none"]],

					
					"2BSshuv/" : ["360 Backside Pop-shuvit", [
						"ABLVV864LmgI8oafOfAl6ad4iIGSPMeD9UJqLVHkg5Sjmy6MT-kHjM3-qVvf_r6AO8fSg65Bud1QO--rKILTjOJRNhUP5kqdT1Jyj0cYVB512LIny3SOT5CKYsfkniq4eeENVzZbDCNJntzz51C4OXsgJZc",
						"ABLVV86KyZHkjqTa6g6Zltg6O4FNJ-nw14DYdXScbzKhVsZ20gikgxuGtrpZs_c6CNK7Y8uxsF110K-ubN-Wef0vtRAY6QsNF0pV20iwJElF85RnYxe8frO2gjcsHn2GdwrbZderIwDWfavIi58-C8NsH98"], ["none"]],

					"2BSshuv/1kickflip/" : ["Tre Flip", [
						"ABLVV85Y1BEiIXvDW7a2Qr_CEP73NpIp4PkU0qWouTXGp6ubGszz_GOBhg_QzoPbZan4fUp2jyWGJr7fksHy98o523j_WR1dVmbApwD7c0OGdm8LsaM2qoOXvciBPtOJzaw4GajM01e8cmkQKlzYFWsn9q4",
						"ABLVV84wDIWkvLvkvkn2RM7RO8ksJnOd23rBuYGZafckH5HmitnJdduq0iU88R9eshrj1exsMxmLNGg2MPTkfSMu7ygOce7apmERwQv1q-XLE-x14PFltUKd-gkTjBFmEqv-PDBiWPPRYSgMVVTMPqK7C_Y"], ["none"]],
					
					"2BSshuv/2kickflip/" : ["Tre Double Flip", [
						"AP1GczMsqGd6rKSyDL_2WVXXQWdJl0pJ4O2fDI4Dp06d2Oxyo2E4nlaKG89EtIvRPtvOtVujRMJcRXnaRR-R7cRiL6keNfR2XcpK9VuSRMS-n9J9I2LqginSSLpmpH0SP_BVaZw7TKXgfoezNtan_Lkmi4uY",
						"ABLVV87oiVKwOwtns4eDGMQ1hD8rrXU2eLQvgG1QU3jA9no7Ou7Jlx9JroOPWcnNisI059q5kgUglbZxjrkyqGPInLARSJNuWphJwjunzOugtc5CbtVFJOwocRK-Lk7fM4WLhPpOZdq7qwcDhGUHcm6H5fRW"], ["none"]],

					"2BSshuv/1heelflip/" : ["360 Inward Heel", [
						"ABLVV84EVBuEcl_vzTDNorKkcDqUO342XBYgyZ-x_JmodWpgZMOCvN32SIsKBFtXYf1GWxdvUsGSAsv40a0OGWMNWiYtHNtK_gl7ujdwDViFjK1sGTt1hhEkAoHNASSqDEueV2zXtONzKVi6N_vp4N6eWpsZ",
						"ABLVV85pNlv7ebjnPNfoyjCZgyo6-8HjuZGk-VliMOO8zkWJEVAZHyn6M34AoSN5LauuPmKpYFf8yfqLfPA9i-pC_OUlwHPxIh5-ItT68kTgaa9sDdNp7omIuKGIpP4d7IAtzZSXYujlT57c36Tnyk2iGxC_"], ["none"]],

					"2BSshuv/2heelflip/" : ["360 Inward Double Heel", [
						"AP1GczNZFOfBbketG_CFJC5YpBTcufOGwBit9xB9pfZM3rZIL0dMDWiubj31pCJ9nBKwl7sAMTpADeHrMn0uoOjzyMJnPj6gcQ5sy3YMGt9eqJ3PwAL9ReNFA7Zs6s_oi8z65uVNFeXkGmae45GeVVpnQ7L4",
						"none"], ["none"]],


					"1FSshuv/" : ["Frontside Pop-shuvit", [
						"ABLVV84djQTJvYPu6nCljiCxHvKqjQz2rLGhSwiEKbyNIXVj6NfJHH1uxJ21dJorh6oxiDJZ7W4ralFR-jBS-uZ_PpRnreJ8oS0WZIKIfZcvjgYiVtrir25l2n8dOpSI8aqKdYXn2Bilc8bZubyIEQanldM", 
						"ABLVV84pa-5R_kzqoqAYj203Z8IZWLyWSqaL-2PHzC78u4tCROd_86RKN68lcutzLtbBFAJiubrHGYLczhuzwq36El-_Ibse7rJUN0_gm7rQis8_MF6E6U1H0Aen9lISG5LnmVDiv6P3rNIv1bG9KC7HNd8"], ["none"]],

					"1FSshuv/1kickflip/" : ["Hardflip", [
						"ABLVV84whTycWOP3ZJ4X8lzkSguTBppBB0UNiABPxuzf1WTKoBzocAqzTxaB_pGvbFmOqpQa5Lc1D8_bpZ__dk1PKvzkLlkNz7RSeB2mUW4XSdEhwRd-3IVtzqz7TET_RBAWbPyvvPWNz2kc_XQD0IDgpbKi",
						"ABLVV85R3fCY85NgKrIQUdJD7cHp2rQB8FjjWLCXLclR2tmv2RQX-180d41V1TshiJB-g9JkGgPfuOIjJNpofWTKmjv_636IA1icr9Lk-kdLdV1IB4bSH8_h_oPNcUsttKTCq_kdNvwccG5Gcm0fUIEh9x22"], ["none"]],

					"1FSshuv/2kickflip/" : ["Double Hardflip", [
						"AP1GczOxPbIRTb-AWu4CrFp4BRu-1BnYcbRn3tv98y_bk4mvF92GWLK1tGuocXvEXG6dzbOmvGfREzoCzdDRUyUd217CdDHFSZVc1I7skS6WQs30KR-mZrCQNlwmoNHY62F7Z3AAQMgJiJUEUzU_ZXknlog_",
						"none"], ["none"]],

					"1FSshuv/1heelflip/" : ["Varial Heelflip", [
						"ABLVV87tnX29p2ulaE7zs54iFvHot_1XdK1Id60nN2SCJ4paEiVubHKqouWB-cF7yYrirTSL3z1WEkSxB8sHDpCsKIsvhAGiIMgS-14_QVpsT8QN75PUC3YnB2tCiX_EBEldPU0fu0u3wFiKVaNicdRoJlE",
						"ABLVV85vrwa6OZv4GDo1z8luvhxihEPhlXk9GncOxHumpJ9vw94GPjawkSMLDs0_yXOFpEWOPrEeroUj11dZlqxDkJfyDMRwQ3hcYZCX9pS4NlVZsuV_4XFscwruXIeVmv-CKE3_1lNwaJvG5K6AcWglvy8"], ["none"]],

					"1FSshuv/2heelflip/" : ["Daydream Flip", [
						"AP1GczM8M9WrYDP8u6zRrf4D_TtuWGkinJ2SyRvmN3F7B9ob0DAgc86JNvEQny3h5kQCvp0mBNlFeg2CBQAkr1acJ7ox2NkOsJWErSlYAQB1oVF63J3Y4sRkMnbKw4eUyXlzm2KlK9lqDmA6EWeipd3Xt8yz",
						"AP1GczOsUeBaA-SnNGg2W7xNs6efhH5v2HIK_xo3MfwdUhTy_Q1fiJ85gzzaNl8PnQP6yyZTuyJgQwYHVxhOwKD0XxdJuKLQ_I36K9Q_RTTKwpC5sE3Zd6Q3z-ZXUfqgNKNssXRt3XfRm1eRn2u2olIFL-MQ"], ["none"]],


					"2FSshuv/" : ["360 Frontside Pop-shuvit", [
						"ABLVV85NrQX94CE_2pSEEmMR1PdoKVx9y3g7mUtZoRK5A8HLkrky2Kq6i0U0k21sd8rtriuq0IL5rKqsb7xQLKPXB_9MGm6oiqWriqG28CfzE-jNQwaoUnxiTeZT003vPcKiJ2Uy85R7HNcNNFjK6vxn4go",
						"ABLVV86w7QykYQiPhB3tuXDS8uwWifUiyepChq-DgKNnd_OtabqZBgco6Pg4Um1d_EYYonpR0PszdnKrpYFHG525of-PDq4s50g7P9ZVsL-ux7kZJV_xHIeaGDY7Jvih-3MV_CccF4POwdflnUVib-K0J-8"], ["none"]],

					"2FSshuv/1kickflip/" : ["360 Hardflip", [
						"AP1GczOC9iJ3Sv9gKxJzsRW2rM-zrRyiCpXKDQGiYFysrQhFfrTA86VxbD3QYidYsoxTmtdL5gmbHBLqfi7o_926ub6z7Xn_XGW0dRIw-33ff69fLrfsfJ3AbdV5_zp6ONg6WXJ_3mALNiWZx5wx0yqLVcUv",
						"none"], ["none"]],

					"2FSshuv/2kickflip/" : ["360 Hardflip Double Flip", [
						"AP1GczMi5Y2mXyrecrDgWhLbuvi14JVcSxMcCVjrxcyHBSwlIMgzk98BbKgsWz7Kncv2SAcXgX3sPeLGvk8dL25ffo_ufr6At2uXuA-7rxUhqpTb3gNrRqbo0KBUq8P76c7UK1q08dOwAAPce5PyTv9qp372",
						"none"], ["none"]],

					"2FSshuv/1heelflip/" : ["Lazer Flip", [
						"ABLVV87gSN7JKD3agQL6fVmFaC0tC8d8BK45s4WEwumdalC660WExsxSEYLeU4vkwCzJNYmy8O2oQHUkBqsorEIfaPPvl97sqYn7c_u_cYAv_bVPdQ3qJ_w-GK3JNSsKJxDZ7gg0oroeJlgzWh0MPw5mNIUK",
						"ABLVV84OC98SJT_QjqBaYyxVuHPzT2TLoAclVcP1QuiNcGvGuGtDkRnbqMd_XzZW-LbbtqxrQJ9rMOK-UBtpwuomDXQiws_xI6ZydMoIWQVxbc_KngHhjJcg84azvxcRIKN7SosXx3IZqGExzX7Ib5kPAACB"], ["none"]],
					
					"2FSshuv/2heelflip/" : ["Laser Double Heel", [
						"AP1GczN-IgFIULGlEZA-BgJm9p3qeoHEEIhc2smw7wwOyvKkMG9uQfR6Lin0HWwBnE9x045mmGVrCBpcN0BrdSsgS6wUcqI6dpL90ee5JDWC7TBoq8EE0njANh0e_cNQds6nKaN6fqokcH-sCUszOp58poQ6",
						"AP1GczPPg4iX0cGKMmfhixY0soc8W1-dmaQ9HeL7hNCXso_1pw_qcr6wbWRQgfquP_6-KdJzGxiJ5dfPglOMZGTrrGs6vY40VemWS7-pcJnJ7n-IA4heBwwOQC7Xn75BKo6Wt2_OjERH9vtMGoVqoNJjnbo3"], ["none"]], 


					"1kickflip/" : ["Kickflip", [
						"ABLVV84SPWI07ZdyxB-re7N2CJn59QcPyha-5nGgxHxPHnAqNSMg3tX4kA0cm5Sq5XmAFiKBzWKlnHhVUwhLu6i5nKytgUIVV0sxoqplau8SNLCpzzGPo10jPGaW6O9e5M8keKqP-0a2QiCr0k2hHg4whj0", 
						"ABLVV84D3_EuWuRqKuq3eplqLy24A7FuBprjP3DFxe3oK5-ohJZV4nK7X3YKUNNUMiZu42zkeu2iKAfniTROEnQ49iVUSLYjtHemk6Fn5VRFSaQDKd6szIT5Q7yV7n0I0pSTNR8I5-GI-BZ1J6aZvMCiVGU"], ["none"]],

					"2kickflip/" : ["Double Kickflip", [
						"ABLVV85LhEUPUeDeowL45wHVRKjmmWAYDCddvq8OLHYC6uFMLnDGx__xuqrXXR1acNkKUxJKj3t8LbSrwEkXTjszsz3txMGxNdeybx4nOiAJLw9wUOL6FewNYZ1Hume44kobMLem7NMSCLQzr8gOnuWVWGXJ",
						"ABLVV85xsPai0AoAv4LzTjAl4N18ApvCq7K82HcniLYLqOCfLuEOUPxYX_6hmmPgUnDDwW24oUxgtV_-3NPd3iWfUPM05000yR0huhcXsC-PmDZiUhAQ-I1FjGEqFsp_2Th-YlkbglIWuwSgWBad3Ij-DpxN"], ["none"]],

					"1heelflip/" : ["Heelflip", [
						"ABLVV84pUuWLIb5plgd4KMX2dQh08JW4_FCD3NSfNQB-ZJdtXi3nnL3b8f81x7Qzgy-c1kLwvN8B42xvL5GEByBnYTMFnf717I8UXiI7apeyvoK1mBeaE5SW2lA6AgHlxozLH1JmsNQjkf29T50LuIRMOgU", 
						"ABLVV84wfm4YO1-F0Y_Sc54ld3Xu74ndOsssbR0tNxqHqdilFZCkafpucP5aJWW4bEAqVgiItQt0poXpsZn1Yj13pADPn_oAxJJj_g34je1cvUDoU8LbhVS74pNsiwfoIj1JNSC2JIgG1dFToJXlb5d7F2g"], ["none"]],

					"2heelflip/" : ["Double Heelflip", [
						"ABLVV84O3YI2w80httocjuqgTotqwbeSEdbtY5NRS-uxjijmKPm4NtTim8Mm4T0-ubR3GoHetNv8Nq9GPNeevzVdRvEKjf5_cTdetypxunQYXdwbHzFMwNQX-TPm803YheeRxpUu4GtKapcpSQ8rY9F9sxOh",
						"ABLVV867BaOKHy2XCADqTnVAO8T9FwbxJsFRWLrZPO76J2nWo7hvaNiR8cy_pWClzooAZRO3ogzYSj9SdIf4QxQP0XpQxqL6MM7fJEt5CcARZFxopFNqCzkOkGMx006cJB3VcSbiKbTjB24BdJGuAouAGExc"], ["none"]]

   				};

// Pour l'instant, important que key === valeur (à la majuscule près)

const dic_other_tricks = {"Ollie" : ["Ollie", [
						"ABLVV84FeWhTS0tR4uzJA2g2gqae0bKOAbVvHcNiMyHUdXlP9sLeVvi-Z57EAAfsXCHmlLB9hgrGT863qcdIJWTsws4EngLZ44Z2I1Xdcsi_Y80t0AHls1t_QtG7baLGpxfErOMxcNxqGfRISFmjOCkU9Jw", 
						"ABLVV85SPjQVkL5GOCq5yaELQj7Iu_RSFi7oBezIl477kaaBE4xhncGTVsTe1FKMxXOouvpbV0lo2C8sOHvA3_GyY0bFRng1Jm13xXOtlTnGsYaSKmjtnC2KbP-aqxtZXzhY7vTU55CW6NDRzXxUUt1W44M"], ["none"]],
						
						"Ollie Late Flip" : ["Ollie Late Flip", [
							"AP1GczPd0BkPFbvRKLWp1_gNjslxcl7TZBau-n8c3dYEjRkapy6kv96mo0PMkN5_G94PFSF9AHSt9pcc9r-jx8Rcsyis9z3AxBV6x4euipkxSS66O6VJFqLladvwB0GlrUAcBaD0zVFdBEaER0AuyD9G35HD", 
							"AP1GczN2XB4V7ddXL1gxtMdSUMpilmabHJwOmaUSnwSbAT5LgfO-a-1orlv9tXMnePZ9UuMhsWvTQ3WqB8E1fSY7vCL-lp0cw4s5YO5w44Uv1_83FQDPyyScRT3SRXdEYm1wo3VmQHsr3Zl1bt5wwgNFzLfq"], ["none"]],

						"Ollie late BS shuv" : ["Ollie late BS shuv", [
							"AP1GczPwJbw05K5pV8Ncwj5DtHUQAYGWnw0paa-TOX7G2ScYaM_9e2z2-C3zaoeLBPk_-LmTBI-yIsq98aURuFoam43uYyy8Hvlfja8o_ljl6nq12kRPY7hbszlKHWSw6mCasqsKflt7I59fshxuz2lxBGTk", 
							"none"], ["none"]],

						"Ollie late flip BS BV revert" : ["Ollie late flip BS BV revert", [
							"none", 
							"AP1GczOhAaAUT0D4fla8OsnMCxHz6km86f227QGulQx0TJWqnHVJp99gD5GC-J0v2dgWxCYqx8twFGT9nsYro3ktW00r4V_CaFEE0cyIN7b4EJeaR5LGbwwL6iaFzVOZGZuTVgIYsQTVVR6QmljG7oLftHQ5"], ["none"]],

						"Ollie north" : ["Ollie north", [
							"none", 
							"AP1GczP178cWSkKIOcmEr1GhlVPNxVsXo_EsVlv8GwR6bf3igPc20H7VulQI0eThYcU-QXWQ9oY_9oDUeDNgM4PcxbwaZCXrtMi0VMkEk_AHQe_UPyVGVkT3VFPhzBcchLPXmiqE-SSm2QhoXhrYV3kY734Q"], ["none"]],
						
						"Ollie late FS shuv" : ["Ollie late FS shuv", [
							"none", 
							"AP1GczNlhJC03wDmoR1FHSyTJlyMpYJj3kusptKNcogyrcfgm6jkM3iByXowo36q1R7cf0uRVHt_D6GJC7qHhCy5No4YRYqyWRv-GsI0h0d5ZShoQTH08fBTOCeE2cE1sY6KnGRskj9sjZ6sR2ON1rmdxq3G"], ["none"]],

						"Ollie late BS shuv revert" : ["Ollie late BS shuv revert	", [
							"none", 
							"AP1GczPg6keAd6RJY_XaQ6WiOyANWO2JlpvA-zgyK1Ks4erW0KdtfhHkbZ3tvRyi-Q0DYwWOko1rdaVW2euNFbkAXFkze5nURmO7lP341nhIKoLn6stJz67j-YVRGeXBAjmd4lvdTGcU-ycKD-4tv6ILZVv5"], ["none"]],
						
						"BS shuv revert FS 180" : ["BS shuv revert FS 180", [
							"none", 
							"AP1GczNF4Bs3Vao5LHVfyTFqcxoVktBIAOTtt8MpdKBuxdzH5Tc4D9mm9-Zo1pgzUZy_3SJkQe-gzbnPFYsOC6pOcgJqls6o-Jsbiv83l_bjBv_rQGqnFxbvfv5J7_YZLX6ieo0RozdLVHckNPyejWFujUCq"], ["none"]],
						
						"Impossible" : ["Impossible", [
							"none",
							"AP1GczNf4bnGlMDq6RgVxV1BJzE7_5PvoTCp1sBJzWbfg7ad_0YnBGvqrQBgrouwqcSk7V3Efsg3Fy-KC5_pH_ZRddrM9g2tvmf6-MK4BU4xEG1MiXMUyEhzpaNVbmx3UtszPT6kl8DkDUX5lAHmCk1as8n2"], ["none"]],
						
						"Front Foot Impossible" : ["Front Foot Impossible", [
							"AP1GczPkPTi-qK7qzQOfmYXWLtdYkoYZLeD1JC69NjWs6nrGsUw_cKtOakFkqQKTUycxTmfh-FnCECh2CAScIKr9gkR3NrjcW-mLsEvIagdSdR6Q3DxfDnAjkK5oGQ0AohIn6Rrw-U8z6f-zwLPLPEECYSzO", 
							"none"], ["none"]],
						
						
						"Monster Flip" : ["Monster Flip", [
							"AP1GczNpyvYiqrJsloecOoQnggaSJwKKocYohMTsxlDQOeP2lXQskXZOnio1xdhWkzojFsFWDWdzaODAWYdU7m6MASncBkimEiO_H-Nn8yff5l0SytsrlTfSql3DGvh8D3pz_h8GSl-P8QPSj4dMC111V-52", 
							"none"], ["none"]],
						
						"Tre flip BS BV" : ["Tre flip BS BV", [
							"none", 
							"AP1GczNQB5Rw9W7FYnqxaFTB7836kn4Ov5jewMx9aPdrdes0FjqSGfDXIsjzIrrQvW8T8RFBVVRB3LgNjk2-vC8AhcfKLs9HuSjQhgdX1txFkM5J0aMarwdkgEoFFgCZhpAyILrfAdQpEeqlwaW4FwxpYJvO"], ["none"]],

						"Varial Heel BS BV" : ["Varial Heel BS BV", [
							"none", 
							"AP1GczMHdzyk8kjFcLU4SUhAsWH-z1OlJ7PdkyRHChiYBUZMrTf99PqkMVf0X7K8grtHb5NR6wXglYag0AE1AUdQf27IhxOA7yBuamS7qfMbD5vISQllh5u9nsgZd7K9i0R5wq2s7EDxHrhXtIx0WXz56Bnj"], ["none"]],

						"Hospital FLip" : ["Hospital Flip", [
							"none", 
							"AP1GczPIDw-eS0USDFwk0QlgB5utG31Z6rc1GpHENJIEmVy4eWPHTXfFKuscDdfAbgdab94rAKs1uD1tR58V2OsTg81Ypd9mx-TuLXsOBl2_TRMDcDbpZEZEfO_dUUOgDWf9m1VNTG1h50N2ZxmgIQVKN2Au"], ["none"]],
						
						"Heelflip Late Flip" : ["Heelflip Late Flip", [
							"none", 
							"AP1GczMtd95Y7y_oE5EjHVU5B7JhGEFOwJlgPGjnfZCAGGbkM-HBIkrWQHE8xmT0VM0kfxfuGvFr_7-R5fDGe7Qfv9VkXg0sMlJ_uPDrSNI0W5xtExE8gZuIBoHKSeZVHuGzdIqOlvuk-kzHkpe6mOZyH1gH"], ["none"]],
						
						
						"Feather Flip" : ["Feather Flip", [
							"AP1GczOU2uhdBreu1AFvNydolEUs0996UCM1BCPTDYA4-OMtxtj3r-oXNhrMDZM2-9dq2hatbUzefnA5Ma0BxqrtRDgnCrbpcfQH2f9XsDrgtVwFpvSsDMlVbjrgnlie_E-49T_0nS9zAfWHsdmqqhZAEhpw", 
							"none"], ["none"]],
						
						"Forward Flip" : ["Forward Flip", [
							"AP1GczOoX1jvFf5x-KRA8A0f0Afr1SBWni8fdLojHQoItoLsxQdLkoJcL_G3x6KEKVirTP5Q7RaHFaIjL-PxXHtvCwT5_TvxEoCKGgnukkGRljnV8jxVrR2CrHB4igzqCTFWARO2XJjjVHPOaQwXAVzagDjD", 
							"none"], ["none"]],
						
						"FS anti-Bigspin" : ["FS anti-Bigspin", [
							"AP1GczOCGY72BfTGNJ3XCkSc3cF-EFF36-TeOFkFqlsVajVzIuBY_1ZENCwZlS28-BwXc89POBdyZiOS1eYysg-QV-ORUTwR2UuMTEXnojyzXRmc2IMunpclJvqvJ-R3h_d2-1LeknwlEhE5uJzcNKwCnjqR", 
							"none"], ["none"]],
						
						"FS shuv BS BV" : ["FS shuv BS BV", [
							"AP1GczOyaiscY18Za1cJvVz6irJrJ_cYWWySvrtw3AChoZwNDA7BITmvnW46DICpwZgItyz9Cpxr96u_1E78-0fMXxTeYH95DGcUoXf_EEViNV9slQa2PPod4aP2gjggnR6fMGmpPjXFk1edd09b5T-o2nB0", 
							"none"], ["none"]],
						
						"FS shuv late BS shuv" : ["FS shuv late BS shuv", [
							"AP1GczO6Ah6-Vo7KPxbmhZyhQWKhy9M6lM5v5AOetZ0kgD_TR2YoW6t-kw_rCgPGYc3fm2FK-nnDbuBEFT_U2w9bCtYqvKBWARgOSUbMiLFSlILOveuuEecnWVJwxNrR8siV1DUpqVKe4w6qbDqbgH55aYUZ", 
							"none"], ["none"]],

						
						"Grape flip (Hardflip 360 BV)" : ["Grape flip (Hardflip 360 BV)", [
							"AP1GczM-cVzm3zR1pc1RsUduktdkEPFznR4e0iJgsM4uHTl_BwYcXzWi7blCVZ8XqACHJHSsY7J2AkcuhtFk8D_JnAzShqGzXife4Qk2RxbVvRMUAGhb7TfOm_bfAqT_mma1fw3dNaCeYumJp9icYZ0oflWW", 
							"none"], ["none"]],
						
						"Hardflip Late BS Shuv" : ["Hardflip Late BS Shuv", [
							"AP1GczOtSXa59Z3qtaT1NZfyBm2Ao_lWx4q3FJ9xh64Uy53Yr3pZw5E1NVQPZkYsCIB7LN-qIp37F4VIgvljgH7qmGP25d5G5ie4E58iFvVdM0BxVUuLHaT3gD56jCOlTM1347LKu0TfmpArv8YwRJyIfUCQ", 
							"none"], ["none"]],
						
						"Heelflip BS BV" : ["Heelflip BS BV", [
							"AP1GczM1m0ich3qJQCrx02_F2BlsOwiK2xQ4nNFa_GSauhXACtJ7OcI5kaS3hk-0kxbx4fxwjq4nI6_ACyakrZHHk6KcU5y-uXu_tmbbWoPWYwUo6TL8MAGXhtz0S2UZ0LGbG3_wjPl3cFh3JUrEsvwBKxKd", 
							"none"], ["none"]],
						
						"Hospital Flip" : ["Hospital Flip", [
							"AP1GczP726kO-v1vLVFi3Qq32WkZAKzssAsszxvMgtWO-41VyksK-ut2bSXHmZsf32RrCUUybSPG7OuPzAVVal-VCvwT23NyEvhc_6vOQW3qFWKipgm6dFIX3eleDIbLRZQsuborBcRPoNb9fiS428OhgvJO", 
							"none"], ["none"]],
						
						"Ollie BS BV" : ["Ollie BS BV", [
							"AP1GczMPkz9wlSshRIOVHt7dD4w61jtXiJkChGyUCK6etUQeHA06EQIhaK_Xde814rFzQnfqfK4vXQjh_O_Oq07yg-MEZBErtt0w_rAnPM7wh-yKH8a0KhTlgitsl3XMHMygX6KN_i1MwP9Fc-a6Lnj4Kbd3", 
							"none"], ["none"]],
						
						"Ollie 360 FS BV" : ["Ollie 360 FS BV", [
							"AP1GczOXf_mU-nkg5D_TwqAKcmKIY_23O59PNlpxED8jjy4Y0QaO6OfwOY5IRNvwDAFj989xd3jNC12y_8qmFlF1nY95ftV0uV5yOsCGgd85S8xAfnPPAzwUuoxBE7oki6isVg02KHrGiokj48euEl_KiD7d", 
							"none"], ["none"]],
						
						"ollie late flip FS BV" : ["ollie late flip FS BV", [
							"AP1GczO_WRmPlv7DKHFk-Cv4m0wHLUoSTOzZgPhotEcly8VOw7OdMXua-C_c8HKd9b66Rqj4_ma3X4XDBdoJyrQWm-4tj8LcRFcreUsrJhPR7mKl1jWFJJKasIrxfPxKScwpHSrMeebBRDy7vr3Ll-n50OgC", 
							"none"], ["none"]],
						
						"Ollie FS BV" : ["Ollie FS BV", [
							"AP1GczO3nUAwYewePXuGoqd4vg70KG_th4Oo2UrbiiE1uQmPua5Ot2_BDQvvB85P8snRXKQbPjHSqZ7jMjqeFuQazvbpn5Y0O7BCNIWAZTxPQHpnb7UygVDxKcJpkMY-rqkmtCQiA3B5nk5KERLK_-Z4Gkga", 
							"none"], ["none"]],
						
						"Ollie late BS shuv" : ["Ollie late BS shuv", [
							"AP1GczOEnIhVwG5Lx8hbLHoO-Qtjkb07KLf0aUYu36JYlUHynFVNABSGrx-TBgJEg4hV3xfohfYYw33owXQqn6mvpHex7QaVrZLi6_9unb370MEJAoF-G8DAGwdsPls9GRjCyMTObTNOFFt2CeSaBMziHkDi", 
							"none"], ["none"]],
						
						"Ollie north FS body varial BS revert" : ["Ollie north FS body varial BS revert", [
							"AP1GczNNuw6Sl5jwVm0-ZmHPjjn8rDerl5pWN5Buk1c3KqMML4l5Xz8YiDCavqQZJuhSvqTQDv5pUKXnQHXoWsBQHGRfdfrzLxrZ1ycSWpC6TXODaUW_qTeRBL30uZLIhCERLOOGoPG6NL6Vzly7IhDUxIQM", 
							"none"], ["none"]],

						/*
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						
						"" : ["", [
							"", 
							""], ["none"]],
						*/
						
						

}

const liste_never_done = ["FS Gazelle 360 FS shuv", "BS Gazelle 360 BS shuv", "FS Gazelle Flip", "FS 360 Double Flip", 
	"Every FS 180/360 + BS 180/360 shuv variation (almost impossible, if not with late shuv)",
	"Every BS 180/360 + FS 180/360 shuv variation"]










