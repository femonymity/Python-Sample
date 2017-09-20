/* start module: GameOfLife2 */
$pyjs['loaded_modules']['GameOfLife2'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GameOfLife2']['__was_initialized__']) return $pyjs['loaded_modules']['GameOfLife2'];
	var $m = $pyjs['loaded_modules']['GameOfLife2'];
	$m['__repr__'] = function() { return '<module: GameOfLife2>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GameOfLife2';
	$m['__name__'] = __mod_name__;
	var $eq15,$eq16,$bool13;

	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['random'] = $p['___import___']('random', null);
	$m['WHITE'] = $p['tuple']([255, 255, 255]);
	$m['GREY'] = $p['tuple']([200, 200, 200]);
	$m['BLACK'] = $p['tuple']([0, 0, 0]);
	$m['RED'] = $p['tuple']([255, 0, 0]);
	$m['ORANGE'] = $p['tuple']([244, 149, 66]);
	$m['YELLOW'] = $p['tuple']([246, 249, 42]);
	$m['GREEN'] = $p['tuple']([104, 224, 24]);
	$m['TEAL'] = $p['tuple']([45, 198, 165]);
	$m['BLUE'] = $p['tuple']([102, 178, 255]);
	$m['PURPLE'] = $p['tuple']([144, 50, 252]);
	$m['PINK'] = $p['tuple']([229, 41, 201]);
	$m['COLORWHEEL'] = $p['tuple']([$m['BLACK'], $m['RED'], $m['ORANGE'], $m['YELLOW'], $m['GREEN'], $m['TEAL'], $m['BLUE'], $m['PURPLE'], $m['PINK']]);
	$m['SCREEN'] = $p['tuple']([600, 600]);
	$m['PIXEL_SIZE'] = 20;
	$m['Game'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'GameOfLife2';
		$method = $pyjs__bind_method2('__init__', function(screen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				screen = arguments[1];
			}
			if (typeof screen == 'undefined') screen=arguments['callee']['__args__'][3][1];

			self['start'] = false;
			self['grid'] = function(){
				var $iter1_nextval,$iter1_type,j,$collcomp1,$iter1_iter,$iter1_idx,$1,$2,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](0, (typeof ($1=$m['SCREEN'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=1]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](1)), $m['PIXEL_SIZE']);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				j = $iter1_nextval;
				$collcomp1['append'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$4,$3,$iter2_array;
	$collcomp2 = $p['list']();
				$iter2_iter = $p['range'](0, (typeof ($3=$m['SCREEN'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](0)), $m['PIXEL_SIZE']);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$collcomp2['append'](0);
				}

	return $collcomp2;}());
			}

	return $collcomp1;}();
			self['newgrid'] = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,j,$iter3_iter,$iter3_array,$6,$5;
	$collcomp3 = $p['list']();
			$iter3_iter = $p['range'](0, (typeof ($5=$m['SCREEN'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6=1]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](1)), $m['PIXEL_SIZE']);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				j = $iter3_nextval;
				$collcomp3['append'](function(){
					var $8,i,$iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$iter4_array,$7,$iter4_iter;
	$collcomp4 = $p['list']();
				$iter4_iter = $p['range'](0, (typeof ($7=$m['SCREEN'])['__array'] != 'undefined'?
					((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](0)), $m['PIXEL_SIZE']);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$collcomp4['append'](0);
				}

	return $collcomp4;}());
			}

	return $collcomp3;}();
			self['restart']();
			self['bgcolour'] = 0;
			self['bgcolour_smooth'] = $p['list']([$m['random']['randrange'](256), $m['random']['randrange'](256), $m['random']['randrange'](256)]);
			self['colour_delta'] = $p['list']([1, 1, 1]);
			self['clock'] = $m['pygame']['time']['Clock']();
			self['screen'] = screen;
			return null;
		}
	, 1, [null,null,['self'],['screen', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('restart', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter6_type,$iter5_idx,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$iter5_array,$iter6_idx,$attr1,$attr3,$attr2,$attr5,$attr4,$attr6,$iter6_array,$9,$10,$11,$12,i,j,$len2,$len1;
			$iter5_iter = $p['range']((($len1=self['grid']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))));
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$iter6_iter = $p['range']((($len2=(typeof ($9=self['grid'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](i))) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2))))));
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					j = $iter6_nextval;
					(typeof ($11=self['grid'])['__array'] != 'undefined'?
						((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](i))['__setitem__'](j, $m['random']['randrange'](0, 2));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['restart'] = $method;
		$method = $pyjs__bind_method2('process_events', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var event,$iter7_iter,$iter7_type,$attr9,$attr8,$eq2,$eq3,$eq1,$eq6,$attr7,$eq5,$bool2,$bool3,$bool1,$eq4,$iter7_idx,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$iter7_nextval,$iter7_array,$attr18;
			$iter7_iter = $m['pygame']['event']['get']();
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				event = $iter7_nextval;
				if ((($bool1=(($eq1=event['type'])===($eq2=$m['pygame']['QUIT'])&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
				else if ((($bool2=(($eq3=event['type'])===($eq4=$m['pygame']['KEYDOWN'])&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool3=(($eq5=event['key'])===($eq6=$m['pygame']['K_SPACE'])&&$eq5===null?true:
						($eq5===null?false:($eq6===null?false:
							((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
								((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
									$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
							false :
							(typeof $bool3=='object'?
								(typeof $bool3['__nonzero__']=='function'?
									$bool3['__nonzero__']() :
									(typeof $bool3['__len__']=='function'?
										($bool3['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['restart']();
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['process_events'] = $method;
		$method = $pyjs__bind_method2('run_logic', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool10,$bool11,$bool5,$iter9_iter,$49,$48,$43,$42,$41,$iter11_idx,$47,$46,$45,$44,$augexpr1,$14,$iter14_array,$augexpr2,$iter12_array,$augsub2,$augsub1,$bool6,$bool7,$bool4,$iter11_array,$bool8,$bool9,$iter13_nextval,$58,$50,$51,$52,$53,$54,$55,$56,$iter13_idx,$iter10_nextval,$iter8_iter,$mod4,$mod6,$mod1,$mod3,$mod2,$iter10_iter,$iter12_iter,$iter9_nextval,$attr61,$attr62,$36,$iter9_type,$39,$iter14_type,$iter11_iter,$iter8_type,$attr59,$attr58,$iter13_iter,$attr51,$attr50,$attr53,$iter11_type,$iter8_array,$attr54,$iter10_array,$attr56,$57,$iter12_idx,$iter12_nextval,$attr55,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$eq10,$eq11,$eq12,$eq13,$eq14,$attr48,$attr49,$iter10_idx,$iter9_idx,$iter13_type,$attr57,$iter8_idx,$attr33,$attr32,$attr31,$attr30,$attr37,$iter8_nextval,$attr35,$attr34,$attr39,$attr38,$iter14_idx,$iter14_nextval,count,$15,$16,$17,$38,$13,j,$18,$19,n,$len6,$len7,$len4,$len5,$len3,$iter10_type,$34,$len8,$len9,$attr52,$32,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$mod5,$31,$iter13_array,$29,$28,$21,$20,$22,$25,$24,$27,$26,$or4,$eq8,$eq9,$or1,$or3,$or2,$attr60,$eq7,$attr19,$iter14_iter,$iter11_nextval,$cmp4,$cmp1,$cmp3,$cmp2,i,$37,$iter12_type,$35,m,$33,$30,$iter9_array,$40,$23,$attr36;
			self['bgcolour'] = (($mod1=(self['bgcolour'])+(1))!=null && ($mod2=(($len3=$m['COLORWHEEL']) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))!=null && typeof $mod1=='string'?
				$p['sprintf']($mod1,$mod2):
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1));
			$iter8_iter = $p['range'](3);
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				var $augsub1 = i;
				var $augexpr1 = self['bgcolour_smooth'];
				$augexpr1['__setitem__']($augsub1, ((typeof ($13=$augexpr1)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$augsub1]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($augsub1)))+(((i)+(1))*((typeof ($15=self['colour_delta'])['__array'] != 'undefined'?
					((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](i)))));
				if ((($bool5=((($bool4=$or1=((($cmp1=(typeof ($17=self['bgcolour_smooth'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](i)))===($cmp2=252)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($cmp3=(typeof ($19=self['bgcolour_smooth'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](i)))===($cmp4=3)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					var $augsub2 = i;
					var $augexpr2 = self['colour_delta'];
					$augexpr2['__setitem__']($augsub2, ((typeof ($21=$augexpr2)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$augsub2]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($augsub2)))*(-(1)));
				}
			}
			$iter9_iter = $p['range']((($len4=self['grid']) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4))))));
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				i = $iter9_nextval;
				$iter10_iter = $p['range']((($len5=(typeof ($23=self['grid'])['__array'] != 'undefined'?
					((typeof $23['__array'][$24=i]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](i))) === null?0:
					(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'?$len5['length']:
								$p['len']($len5))))));
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					j = $iter10_nextval;
					count = 0;
					$iter11_iter = $p['range']((i)-(1), (i)+(2));
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						m = $iter11_nextval;
						$iter12_iter = $p['range']((j)-(1), (j)+(2));
						if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
							$iter12_type = 0;
						} else {
							$iter12_iter = $iter12_iter['__iter__']();
							$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter12_idx = 0;
						while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
							n = $iter12_nextval;
							if ((($bool6=(typeof ($29=(typeof ($25=self['grid'])['__array'] != 'undefined'?
								((typeof $25['__array'][$26=(($mod3=m)!=null && ($mod4=(($len6=self['grid']) === null?0:
								(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
									(typeof $len6['__len__'] == 'function'?$len6['__len__']():
										(typeof $len6['length'] != 'undefined'?$len6['length']:
											$p['len']($len6))))))!=null && typeof $mod3=='string'?
								$p['sprintf']($mod3,$mod4):
								(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))]) != 'undefined'?$25['__array'][$26]:
									$25['__getitem__']($26)):
									$25['__getitem__']((($mod3=m)!=null && ($mod4=(($len6=self['grid']) === null?0:
								(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
									(typeof $len6['__len__'] == 'function'?$len6['__len__']():
										(typeof $len6['length'] != 'undefined'?$len6['length']:
											$p['len']($len6))))))!=null && typeof $mod3=='string'?
								$p['sprintf']($mod3,$mod4):
								(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3)))))['__array'] != 'undefined'?
								((typeof $29['__array'][$30=(($mod5=n)!=null && ($mod6=(($len7=(typeof ($27=self['grid'])['__array'] != 'undefined'?
								((typeof $27['__array'][$28=i]) != 'undefined'?$27['__array'][$28]:
									$27['__getitem__']($28)):
									$27['__getitem__'](i))) === null?0:
								(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
									(typeof $len7['__len__'] == 'function'?$len7['__len__']():
										(typeof $len7['length'] != 'undefined'?$len7['length']:
											$p['len']($len7))))))!=null && typeof $mod5=='string'?
								$p['sprintf']($mod5,$mod6):
								(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))]) != 'undefined'?$29['__array'][$30]:
									$29['__getitem__']($30)):
									$29['__getitem__']((($mod5=n)!=null && ($mod6=(($len7=(typeof ($27=self['grid'])['__array'] != 'undefined'?
								((typeof $27['__array'][$28=i]) != 'undefined'?$27['__array'][$28]:
									$27['__getitem__']($28)):
									$27['__getitem__'](i))) === null?0:
								(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
									(typeof $len7['__len__'] == 'function'?$len7['__len__']():
										(typeof $len7['length'] != 'undefined'?$len7['length']:
											$p['len']($len7))))))!=null && typeof $mod5=='string'?
								$p['sprintf']($mod5,$mod6):
								(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
									false :
									(typeof $bool6=='object'?
										(typeof $bool6['__nonzero__']=='function'?
											$bool6['__nonzero__']() :
											(typeof $bool6['__len__']=='function'?
												($bool6['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								count += 1;
							}
						}
					}
					if ((($bool7=(typeof ($33=(typeof ($31=self['grid'])['__array'] != 'undefined'?
						((typeof $31['__array'][$32=i]) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__'](i)))['__array'] != 'undefined'?
						((typeof $33['__array'][$34=j]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](j))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7['__nonzero__']=='function'?
									$bool7['__nonzero__']() :
									(typeof $bool7['__len__']=='function'?
										($bool7['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool9=((($bool8=$or3=(($eq7=count)===($eq8=3)&&$eq7===null?true:
							($eq7===null?false:($eq8===null?false:
								((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
									((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
										$eq7==$eq8)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8['__nonzero__']=='function'?
									$bool8['__nonzero__']() :
									(typeof $bool8['__len__']=='function'?
										($bool8['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or3:(($eq9=count)===($eq10=4)&&$eq9===null?true:
							($eq9===null?false:($eq10===null?false:
								((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
									((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
										$eq9==$eq10))))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9['__nonzero__']=='function'?
										$bool9['__nonzero__']() :
										(typeof $bool9['__len__']=='function'?
											($bool9['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool10=(($eq11=(typeof ($37=(typeof ($35=self['grid'])['__array'] != 'undefined'?
								((typeof $35['__array'][$36=i]) != 'undefined'?$35['__array'][$36]:
									$35['__getitem__']($36)):
									$35['__getitem__'](i)))['__array'] != 'undefined'?
								((typeof $37['__array'][$38=j]) != 'undefined'?$37['__array'][$38]:
									$37['__getitem__']($38)):
									$37['__getitem__'](j)))===($eq12=8)&&$eq11===null?true:
								($eq11===null?false:($eq12===null?false:
									((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
										((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
											$eq11==$eq12)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
									false :
									(typeof $bool10=='object'?
										(typeof $bool10['__nonzero__']=='function'?
											$bool10['__nonzero__']() :
											(typeof $bool10['__len__']=='function'?
												($bool10['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								(typeof ($39=self['newgrid'])['__array'] != 'undefined'?
									((typeof $39['__array'][$40=i]) != 'undefined'?$39['__array'][$40]:
										$39['__getitem__']($40)):
										$39['__getitem__'](i))['__setitem__'](j, 1);
							}
							else {
								(typeof ($45=self['newgrid'])['__array'] != 'undefined'?
									((typeof $45['__array'][$46=i]) != 'undefined'?$45['__array'][$46]:
										$45['__getitem__']($46)):
										$45['__getitem__'](i))['__setitem__'](j, ((typeof ($43=(typeof ($41=self['grid'])['__array'] != 'undefined'?
									((typeof $41['__array'][$42=i]) != 'undefined'?$41['__array'][$42]:
										$41['__getitem__']($42)):
										$41['__getitem__'](i)))['__array'] != 'undefined'?
									((typeof $43['__array'][$44=j]) != 'undefined'?$43['__array'][$44]:
										$43['__getitem__']($44)):
										$43['__getitem__'](j)))+(1));
							}
						}
						else {
							(typeof ($47=self['newgrid'])['__array'] != 'undefined'?
								((typeof $47['__array'][$48=i]) != 'undefined'?$47['__array'][$48]:
									$47['__getitem__']($48)):
									$47['__getitem__'](i))['__setitem__'](j, 0);
						}
					}
					else {
						if ((($bool11=(($eq13=count)===($eq14=3)&&$eq13===null?true:
							($eq13===null?false:($eq14===null?false:
								((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
									((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
										$eq13==$eq14)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
								false :
								(typeof $bool11=='object'?
									(typeof $bool11['__nonzero__']=='function'?
										$bool11['__nonzero__']() :
										(typeof $bool11['__len__']=='function'?
											($bool11['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							(typeof ($49=self['newgrid'])['__array'] != 'undefined'?
								((typeof $49['__array'][$50=i]) != 'undefined'?$49['__array'][$50]:
									$49['__getitem__']($50)):
									$49['__getitem__'](i))['__setitem__'](j, 1);
						}
					}
				}
			}
			$iter13_iter = $p['range']((($len8=self['grid']) === null?0:
				(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
					(typeof $len8['__len__'] == 'function'?$len8['__len__']():
						(typeof $len8['length'] != 'undefined'?$len8['length']:
							$p['len']($len8))))));
			if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter['__iter__']();
				$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				i = $iter13_nextval;
				$iter14_iter = $p['range']((($len9=(typeof ($51=self['grid'])['__array'] != 'undefined'?
					((typeof $51['__array'][$52=i]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](i))) === null?0:
					(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'?$len9['length']:
								$p['len']($len9))))));
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					j = $iter14_nextval;
					(typeof ($57=self['grid'])['__array'] != 'undefined'?
						((typeof $57['__array'][$58=i]) != 'undefined'?$57['__array'][$58]:
							$57['__getitem__']($58)):
							$57['__getitem__'](i))['__setitem__'](j, (typeof ($55=(typeof ($53=self['newgrid'])['__array'] != 'undefined'?
						((typeof $53['__array'][$54=i]) != 'undefined'?$53['__array'][$54]:
							$53['__getitem__']($54)):
							$53['__getitem__'](i)))['__array'] != 'undefined'?
						((typeof $55['__array'][$56=j]) != 'undefined'?$55['__array'][$56]:
							$55['__getitem__']($56)):
							$55['__getitem__'](j)));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run_logic'] = $method;
		$method = $pyjs__bind_method2('display_frame', function(screen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				screen = arguments[1];
			}
			var $bool12,$iter16_idx,$attr70,$iter16_iter,$attr68,$iter15_iter,$iter16_type,$attr64,$attr65,$attr67,$attr63,$69,$68,$65,$iter16_nextval,$67,$66,$61,$60,$63,$62,$iter16_array,$iter15_array,$64,rect,$attr69,$len10,$len11,$70,i,j,$attr72,$attr71,$iter15_idx,$59,$iter15_nextval,$iter15_type,$attr66;
			screen['fill'](self['bgcolour_smooth']);
			$iter15_iter = $p['range']((($len10=self['grid']) === null?0:
				(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
					(typeof $len10['__len__'] == 'function'?$len10['__len__']():
						(typeof $len10['length'] != 'undefined'?$len10['length']:
							$p['len']($len10))))));
			if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter['__iter__']();
				$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				i = $iter15_nextval;
				$iter16_iter = $p['range']((($len11=(typeof ($59=self['grid'])['__array'] != 'undefined'?
					((typeof $59['__array'][$60=i]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](i))) === null?0:
					(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'?$len11['length']:
								$p['len']($len11))))));
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					j = $iter16_nextval;
					if ((($bool12=(typeof ($63=(typeof ($61=self['grid'])['__array'] != 'undefined'?
						((typeof $61['__array'][$62=i]) != 'undefined'?$61['__array'][$62]:
							$61['__getitem__']($62)):
							$61['__getitem__'](i)))['__array'] != 'undefined'?
						((typeof $63['__array'][$64=j]) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__'](j))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						rect = $p['list']([(j)*($m['PIXEL_SIZE']), (i)*($m['PIXEL_SIZE']), $m['PIXEL_SIZE'], $m['PIXEL_SIZE']]);
						$m['pygame']['draw']['ellipse'](screen, (typeof ($69=$m['COLORWHEEL'])['__array'] != 'undefined'?
							((typeof $69['__array'][$70=(typeof ($67=(typeof ($65=self['grid'])['__array'] != 'undefined'?
							((typeof $65['__array'][$66=i]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](i)))['__array'] != 'undefined'?
							((typeof $67['__array'][$68=j]) != 'undefined'?$67['__array'][$68]:
								$67['__getitem__']($68)):
								$67['__getitem__'](j))]) != 'undefined'?$69['__array'][$70]:
								$69['__getitem__']($70)):
								$69['__getitem__']((typeof ($67=(typeof ($65=self['grid'])['__array'] != 'undefined'?
							((typeof $65['__array'][$66=i]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](i)))['__array'] != 'undefined'?
							((typeof $67['__array'][$68=j]) != 'undefined'?$67['__array'][$68]:
								$67['__getitem__']($68)):
								$67['__getitem__'](j)))), rect);
					}
				}
			}
			$m['pygame']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self'],['screen']]);
		$cls_definition['display_frame'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Game', $p['tuple']($bases), $data);
	})();
	$m['run'] = function() {
		var $attr74,$attr73;
		$m['game']['process_events']();
		$m['game']['run_logic']();
		$m['game']['display_frame']($m['game']['screen']);
		$m['game']['clock']['tick'](60);
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	$m['main'] = function() {
		var screen;
		$m['pygame']['display']['init']();
		screen = $m['pygame']['display']['set_mode']($m['SCREEN']);
		$m['pygame']['display']['set_caption']('Game of Life');
		$m['game'] = $m['Game'](screen);
		$m['pygame']['display']['setup']($m['run']);
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	if ((($bool13=(($eq15=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq16='__main__')&&$eq15===null?true:
		($eq15===null?false:($eq16===null?false:
			((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
				((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
					$eq15==$eq16)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
			false :
			(typeof $bool13=='object'?
				(typeof $bool13['__nonzero__']=='function'?
					$bool13['__nonzero__']() :
					(typeof $bool13['__len__']=='function'?
						($bool13['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['main']();
	}
	return this;
}; /* end GameOfLife2 */


/* end module: GameOfLife2 */


/*
PYJS_DEPS: ['pyjsdl', 'random']
*/
