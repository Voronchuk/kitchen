//Ext.define('LawerAdminApp.view.west.registr.Panel', {
//    extend:'Ext.panel.Panel',
//    alias:'widget.registrpanel',
//    title:'Registration',
//    items:[
//        {
//            xtype:'textfield',
//            padding:'0 5 0 5',
//            name:'adminNick',
//            id:'adminNick',
//            fieldLabel:'admin Nick',
//            labelAlign:'top',
//            allowBlank:false,
//            listeners:{ focus:function (field, event)
//            {
//                Stamp = new Date();
//            }}
//
//        },
//        {
//            xtype:'textfield',
//            padding:'0 5 0 5',
//            name:'password1',
//            fieldLabel:'Password',
//            labelAlign:'top',
//            inputType:'password',
//            allowBlank:false,
//            minLength:8
//        },
//        {
//            xtype:'textfield',
//            padding:'0 5 0 5',
//            name:'password2',
//            id:'password2',
//            fieldLabel:'repeat Password',
//            labelAlign:'top',
//            inputType:'password',
//            allowBlank:false,
//            validator:function (value)
//            {
//                var password1 = this.previousSibling('[name=password1]');
//                return (value === password1.getValue()) ? true : 'Passwords do not match.'
//            }
//        },
//        {
//            xtype:'textfield',
//            padding:'0 5 0 5',
//            name:'adminEmail',
//            id:'adminEmail',
//            fieldLabel:'e-mail',
//            labelAlign:'top',
//            allowBlank:false,
//        },
//        {
//            xtype:'combo',
//            name:'officialCapacity',
//            id:'cap',
//            fieldLabel:'Your Official Capacity',
//            width:180,
//            labelAlign:'top',
//            store:'LawerAdminApp.store.Cap',
//            queryMode:'local',
//            displayField:'cap',
//            valueField:'cap',
//            padding:'0 5 0 5',
//            forceSelection:true,
//            autoSelect:true,
//            value:'Lawer',
//        },
//        {
//            xtype:'combo',
//            name:'officialDivision',
//            id:'division',
//            fieldLabel:'Your Official Division',
//            width:180,
//            labelAlign:'top',
//            store:'LawerAdminApp.store.Divisions',
//            queryMode:'local',
//            displayField:'division',
//            valueField:'division',
//            padding:'0 5 0 5',
//            forceSelection:true,
//            autoSelect:true,
//            value:'World',
//        },
//        {
//            xtype:'checkboxfield',
//            padding:'0 5 0 5',
//            name:'acceptTerms',
//            fieldLabel:'Terms of Use',
//            hideLabel:true,
//            boxLabel:'I have read and accept <br> my Duty and the Terms of Use<p>',
//        }
//    ],
//    dockedItems:[
//        {
//            xtype:'container',
//            dock:'bottom',
//            layout:{
//                type:'hbox',
//                align:'middle'
//            },
//            padding:'10 10 5',
//            items:[
//                {
//                    xtype:'component',
//                    id:'formErrorState',
//                    baseCls:'form-error-state',
//                    flex:1,
//                    validText:'Form is valid',
//                    invalidText:'Form has errors',
//                    tipTpl:Ext.create('Ext.XTemplate', '<ul><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),
//                    getTip:function ()
//                    {
//                        var tip = this.tip;
//                        if (!tip)
//                        {
//                            tip = this.tip = Ext.widget('tooltip', {
//                                target:this.el,
//                                title:'Error Details:',
//                                autoHide:false,
//                                anchor:'top',
//                                mouseOffset:[-11, -2],
//                                closable:true,
//                                constrainPosition:false,
//                                cls:'errors-tip'
//                            });
//                            tip.show();
//                        }
//                        return tip;
//                    },
//                    setErrors:function (errors)
//                    {
//                        var me = this, baseCls = me.baseCls, tip = me.getTip();
//                        errors = Ext.Array.from(errors);
//                        if (errors.length)
//                        {
//                            me.addCls(baseCls + '-invalid');
//                            me.removeCls(baseCls + '-valid');
//                            me.update(me.invalidText);
//                            tip.setDisabled(false);
//                            tip.update(me.tipTpl.apply(errors));
//                        }
//                        else
//                        {
//                            me.addCls(baseCls + '-valid');
//                            me.removeCls(baseCls + '-invalid');
//                            me.update(me.validText);
//                            tip.setDisabled(true);
//                            tip.hide();
//                        }
//                    }
//                },
//                {
//                    xtype:'button',
//                    formBind:true,
//                    disabled:false,
//                    text:'Submit Registration',
//                    width:140,
//                    handler:function ()
//                    {
//                        loginEndedStamp = new Date();
//                        var logStore = Ext.getStore('LawerAdminApp.store.logAdminsOps');
//                        var emailField = Ext.getCmp('adminEmail').getValue();
//                        var nickField = Ext.getCmp('adminNick').getValue();
//                        var divisionField = Ext.getCmp('division').getValue();
//                        var passField = Ext.getCmp('password2').getValue();
//                        var capField = Ext.getCmp('cap').getValue();
//                        var Lawer = Ext.getStore('LawerAdminApp.store.Lawer');
//                        var stateEndRegisteringText = 'ended';
//                        // if (form.isValid())
//                        {
//                            Lawer.add({email:emailField.value, pass:passField.value, nick:nickField.value, cap:capField.checked, division:divisionField.checked });
//                            logStore.add({ time:Ext.Date.format(Stamp, "d, F   Y H:i:s"), cap:capField, nick:nickField, op:"Registering", state:"beginned"});
//                            logStore.add({ time:Ext.Date.format(loginEndedStamp, "d, F   Y H:i:s"), cap:capField, nick:nickField, op:"Registering", state:stateEndRegisteringText});
//                        }
//                    }
//                }
//            ]
//        }
//    ]
//});
